#!/bin/bash

# Cloudflare Pages deployment script
echo "🚀 Deploying to Cloudflare Pages..."

# Ensure we're using the correct package manager
if command -v pnpm &> /dev/null; then
    echo "✅ Using pnpm"
    pnpm install
    pnpm dlx @cloudflare/next-on-pages
else
    echo "⚠️  Using npm (pnpm not available)"
    npm install
    npx @cloudflare/next-on-pages
fi

# Deploy to Cloudflare Pages
echo "📤 Deploying..."
wrangler pages deploy .vercel/output/static --project-name=nextjs-15-starter

echo "✅ Deployment completed!"
