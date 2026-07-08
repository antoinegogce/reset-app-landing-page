# Base node image
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /workspace

# Install dependencies first for caching
COPY package.json package-lock.json* ./
COPY prisma ./prisma

RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /workspace
COPY --from=deps /workspace/node_modules ./node_modules
COPY --from=deps /workspace/package.json ./package.json
COPY prisma ./prisma
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

# Generate Prisma Client
RUN npx prisma generate --schema=./prisma/schema.prisma

# Initialize SQLite database during build (stash in public/ to survive COPY)
ENV DATABASE_URL="file:/workspace/prisma/init-db.sqlite"
RUN npx prisma db push --schema=./prisma/schema.prisma --accept-data-loss && \
    cp /workspace/prisma/init-db.sqlite ./public/init-db.sqlite

# Build the project
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"
ENV NEXT_TELEMETRY_DISABLED 1

# SQLite database volume storage directory
RUN mkdir -p /app/data

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Set correct permission for database directory and runner files
RUN chown -R nextjs:nodejs /app

# Copy built files
COPY --from=builder /workspace/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /workspace/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /workspace/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /workspace/prisma ./prisma
COPY --from=builder --chown=nextjs:nodejs /workspace/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder --chown=nextjs:nodejs /workspace/node_modules/@prisma/client ./node_modules/@prisma/client

# Copy startup script
COPY --chown=nextjs:nodejs start.sh ./start.sh
RUN chmod +x ./start.sh

USER nextjs

EXPOSE 3000

# Start with startup script
CMD ["./start.sh"]
