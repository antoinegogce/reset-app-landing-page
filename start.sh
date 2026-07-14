#!/bin/sh
set -e

# Ensure data directory exists
mkdir -p /app/data

# Copy initial database if it doesn't exist yet (first run)
if [ ! -f /app/data/db.sqlite ]; then
  echo "Initializing database..."
  cp /app/public/init-db.sqlite /app/data/db.sqlite 2>/dev/null || true
fi

# Apply latest Prisma schema to the persisted SQLite database
if [ -f /app/node_modules/prisma/package.json ]; then
  echo "Applying database schema..."
  node /app/node_modules/prisma/build/index.js db push \
    --schema=/app/prisma/schema.prisma \
    --skip-generate \
    --accept-data-loss
fi

# Start the node server
echo "Starting Next.js server..."
exec node server.js
