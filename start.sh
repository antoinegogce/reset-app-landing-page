#!/bin/sh
set -e

# SQLite database directory setup (ensure directory exists if volume didn't mount it or for initial permissions)
mkdir -p /app/data

# Run migrations or db push on startup
echo "Running database migrations..."
if [ -d "/app/prisma/migrations" ]; then
  npx prisma migrate deploy --schema=/app/prisma/schema.prisma
else
  echo "No migrations folder found. Running prisma db push..."
  npx prisma db push --schema=/app/prisma/schema.prisma --accept-data-loss
fi

# Start the node server
echo "Starting Next.js server..."
exec node server.js
