# Cloudflare Pages 部署指南

## 问题解决方案

### 1. 包管理器不匹配问题
**问题**: 项目使用 pnpm，但部署时使用了 npm
**解决方案**: 
- 更新了 `package.json` 中的脚本，使用 `pnpm dlx` 而不是 `npx`
- 创建了 `build.sh` 脚本自动检测并使用正确的包管理器

### 2. Vercel CLI 问题
**问题**: `vc: not found` 错误
**解决方案**: 
- 使用 `pnpm dlx @cloudflare/next-on-pages` 确保使用正确的包管理器
- 创建了专门的构建脚本处理依赖关系

## 部署步骤

### 方法 1: 使用构建脚本（推荐）
```bash
# 给脚本执行权限
chmod +x build.sh

# 运行构建
./build.sh

# 部署到 Cloudflare Pages
wrangler pages deploy .vercel/output/static --project-name=your-project-name
```

### 方法 2: 手动部署
```bash
# 安装依赖
pnpm install

# 构建项目
pnpm dlx @cloudflare/next-on-pages

# 部署
wrangler pages deploy .vercel/output/static --project-name=your-project-name
```

### 方法 3: 使用 package.json 脚本
```bash
# 构建并部署
pnpm run deploy
```

## Cloudflare Pages 配置

### 构建设置
- **构建命令**: `./build.sh` 或 `pnpm dlx @cloudflare/next-on-pages`
- **构建输出目录**: `.vercel/output/static`
- **Node.js 版本**: 20 (通过 `.nvmrc` 指定)

### 环境变量
确保在 Cloudflare Pages 控制台中设置以下环境变量：
- `RESEND_API_KEY` (如果需要邮件功能)
- `RESEND_AUDIENCE_ID` (如果需要邮件功能)
- `UPSTASH_REDIS_REST_URL` (如果需要 Redis 功能)
- `UPSTASH_REDIS_REST_TOKEN` (如果需要 Redis 功能)
- `ADMIN_EMAIL` (如果需要邮件功能)
- `NEXT_PUBLIC_SITE_URL` (网站 URL)

## 文件说明

### 新增文件
- `build.sh` - 自动构建脚本
- `deploy.sh` - 部署脚本
- `public/_headers` - Cloudflare Pages 头部配置
- `public/_redirects` - 路由重定向配置
- `functions/_middleware.js` - Cloudflare Pages 中间件
- `.nvmrc` - Node.js 版本指定

### 修改文件
- `package.json` - 更新脚本使用 pnpm
- `lib/content.ts` - 静态内容映射（Edge Runtime 兼容）
- `lib/blogContent.ts` - 博客内容映射（Edge Runtime 兼容）

## 注意事项

1. **Edge Runtime**: 所有页面都使用 Edge Runtime，确保与 Cloudflare Pages 兼容
2. **静态内容**: 由于 Edge Runtime 不支持文件系统，内容已转换为静态映射
3. **包管理器**: 确保使用 pnpm，避免包管理器不匹配问题
4. **环境变量**: 在 Cloudflare Pages 控制台中正确设置所有必需的环境变量

## 故障排除

### 如果仍然遇到 `vc: not found` 错误
```bash
# 确保使用正确的包管理器
pnpm dlx @cloudflare/next-on-pages@latest
```

### 如果遇到包管理器不匹配
```bash
# 检查当前包管理器
which pnpm

# 如果没有 pnpm，安装它
npm install -g pnpm
```

### 如果构建失败
```bash
# 清理缓存并重新构建
rm -rf .next .vercel node_modules
pnpm install
./build.sh
```
