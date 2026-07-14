#!/bin/sh
set -e

# Force the correct database location for the container (volume mounted)
# Using absolute path avoids Prisma SQLite relative path resolution issues
export DATABASE_URL="file:/app/data/db.sqlite"

echo "Using DATABASE_URL=${DATABASE_URL}"

# Ensure data directory exists
mkdir -p /app/data

# Copy initial database if it doesn't exist yet (first run)
if [ ! -f /app/data/db.sqlite ]; then
  echo "Initializing database from template..."
  cp /app/public/init-db.sqlite /app/data/db.sqlite 2>/dev/null || true
fi

# Apply latest Prisma schema to the persisted SQLite database
if [ -f /app/node_modules/prisma/package.json ]; then
  echo "Applying database schema to ${DATABASE_URL}..."
  node /app/node_modules/prisma/build/index.js db push \
    --schema=/app/prisma/schema.prisma \
    --skip-generate \
    --accept-data-loss
fi

# Start the node server (drop to non-root nextjs user for the actual process)
echo "Starting Next.js server as nextjs user..."
exec su-exec nextjs node server.js
