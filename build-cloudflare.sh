#!/bin/bash

# Cloudflare Pages 专用构建脚本
echo "🚀 开始 Cloudflare Pages 构建..."

# 安装依赖
echo "📦 安装依赖..."
npm install

# 构建 Next.js 项目
echo "🔨 构建 Next.js 项目..."
npm run build

# 使用 @cloudflare/next-on-pages 构建
echo "⚡️ 使用 @cloudflare/next-on-pages 构建..."
npx @cloudflare/next-on-pages@latest

echo "✅ 构建完成！"
echo "📁 构建输出目录: .vercel/output/static"
