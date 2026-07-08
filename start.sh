#!/bin/sh
set -e

# Ensure data directory exists
mkdir -p /app/data

# Copy initial database if it doesn't exist yet (first run)
if [ ! -f /app/data/db.sqlite ]; then
  echo "Initializing database..."
  cp /app/public/init-db.sqlite /app/data/db.sqlite 2>/dev/null || true
fi

# Start the node server
echo "Starting Next.js server..."
exec node server.js
