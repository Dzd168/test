#!/bin/bash

# Cloudflare Pages build script
# This script ensures we use the correct package manager and handle the build process

echo "🚀 Starting Cloudflare Pages build..."

# Check if pnpm is available
if command -v pnpm &> /dev/null; then
    echo "✅ Using pnpm as package manager"
    PACKAGE_MANAGER="pnpm"
else
    echo "⚠️  pnpm not found, falling back to npm"
    PACKAGE_MANAGER="npm"
fi

# Install dependencies
echo "📦 Installing dependencies..."
$PACKAGE_MANAGER install

# Build the project
echo "🔨 Building project..."
if [ "$PACKAGE_MANAGER" = "pnpm" ]; then
    pnpm dlx @cloudflare/next-on-pages
else
    npx @cloudflare/next-on-pages
fi

echo "✅ Build completed successfully!"
