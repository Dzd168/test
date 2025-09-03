// Content mapping for Edge Runtime compatibility
// Since Edge Runtime doesn't support fs/path modules, we'll store content as strings

export const aboutContent = {
  zh: `---
title: 关于
description: 关于 Next Forge 多语言启动模板
lastUpdated: 2025-02-19
---

> 更新日期：2025-02-19

# 关于 Next Forge

Next Forge 是一个功能完备的 Next.js 15 多语言启动模板，旨在帮助开发者快速构建面向全球的网站。它内置了多语言支持、现代 UI 设计、深色/浅色主题切换、响应式布局、MDX 博客系统、SEO 优化以及多种统计分析工具。

## ✨ 主要特性

- 🌐 **多语言支持**：内置中文、英文、日语的国际化支持，轻松实现多语言网站。
- 🎨 **现代 UI 设计**：基于 Tailwind CSS 的现代 UI 设计，简洁美观。
- 🌙 **深色/浅色主题切换**：支持用户自由切换深色和浅色主题。
- 📱 **响应式布局**：适配各种设备，确保在移动端和桌面端都有良好的用户体验。
- 📝 **MDX 博客系统**：支持使用 MDX 编写博客文章，灵活且强大。
- 🔍 **SEO 优化**：内置完整的 SEO 优化方案，包括自动生成 sitemap.xml 和 robots.txt。
- 📊 **统计分析**：集成 Google Analytics、Baidu Analytics、Google Adsense 和 Vercel Analytics，方便进行数据追踪。
- 🌿 **环保性能**：在 [Website Carbon](https://www.websitecarbon.com/website/nextforge-dev/) 上获得 A+ 评级，成为最节能的网站之一。

## 🚀 快速开始

1. 克隆项目：
    \`\`\`bash
    git clone https://github.com/weijunext/nextjs-15-starter.git
    \`\`\`

2. 安装依赖：
    \`\`\`bash
    npm install
    \`\`\`

3. 复制环境变量文件：
    \`\`\`bash
    cp .env.example .env
    \`\`\`

4. 启动开发服务器：
    \`\`\`bash
    npm run dev
    \`\`\`

访问 [http://localhost:3000](http://localhost:3000) 查看你的应用。

## ⚙️ 配置

1. **基础配置**：
    - 修改 \`config/site.ts\` 配置网站信息。
    - 更新 \`public/\` 下的图标和 logo。
    - 配置 \`app/sitemap.ts\` 和 \`app/robots.ts\`。

2. **多语言配置**：
    - 在 \`i18n/messages/\` 下添加或修改语言文件。
    - 在 \`i18n/routing.ts\` 中配置支持的语言。
    - 在 \`middleware.ts\` 中配置多语言路由。

## 📝 内容管理

### 博客文章
在 \`blog/[locale]\` 目录下创建 MDX 文件，支持以下格式：
\`\`\`markdown
---
title: 文章标题
description: 文章描述
image: /image.png
slug: /url-path
tags: tag1,tag2
date: 2025-02-20
visible: published
pin: true
---

文章内容...
\`\`\`

### 静态页面
在 \`content/[page]/[locale].mdx\` 下管理静态页面内容。

## 📄 许可证

Next Forge 采用 MIT 许可证，您可以自由使用、修改和分发。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！您的贡献将帮助我们不断改进这个项目。

## 关于作者

专注于 Next.js 全栈开发，欢迎探讨开发、咨询与培训等合作机会，联系微信：bigye_chengpu

- [Github](https://github.com/weijunext)
- [Twitter/X](https://twitter.com/weijunext)
- [博客 - J实验室](https://weijunext.com)
- [Medium](https://medium.com/@weijunext)
- [掘金](https://juejin.cn/user/26044008768029)
- [知乎](https://www.zhihu.com/people/mo-mo-mo-89-12-11)`,

  en: `---
title: About
description: About Next Forge multilingual starter template
lastUpdated: 2025-02-19
---

> Last updated: 2025-02-19

# About Next Forge

Next Forge is a feature-complete Next.js 15 multilingual starter template designed to help developers quickly build globally-oriented websites. It includes built-in multilingual support, modern UI design, dark/light theme switching, responsive layout, MDX blog system, SEO optimization, and various analytics tools.

## ✨ Key Features

- 🌐 **Multilingual Support**: Built-in internationalization support for Chinese, English, and Japanese, making it easy to create multilingual websites.
- 🎨 **Modern UI Design**: Modern UI design based on Tailwind CSS, clean and beautiful.
- 🌙 **Dark/Light Theme Toggle**: Support for users to freely switch between dark and light themes.
- 📱 **Responsive Layout**: Adapted for various devices, ensuring good user experience on both mobile and desktop.
- 📝 **MDX Blog System**: Support for writing blog posts using MDX, flexible and powerful.
- 🔍 **SEO Optimization**: Built-in complete SEO optimization solution, including automatic generation of sitemap.xml and robots.txt.
- 📊 **Analytics**: Integrated Google Analytics, Baidu Analytics, Google Adsense and Vercel Analytics for easy data tracking.
- 🌿 **Eco-friendly Performance**: Achieved A+ rating on [Website Carbon](https://www.websitecarbon.com/website/nextforge-dev/), making it one of the most energy-efficient websites.

## 🚀 Quick Start

1. Clone the project:
    \`\`\`bash
    git clone https://github.com/weijunext/nextjs-15-starter.git
    \`\`\`

2. Install dependencies:
    \`\`\`bash
    npm install
    \`\`\`

3. Copy environment variables file:
    \`\`\`bash
    cp .env.example .env
    \`\`\`

4. Start the development server:
    \`\`\`bash
    npm run dev
    \`\`\`

Visit [http://localhost:3000](http://localhost:3000) to view your application.

## ⚙️ Configuration

1. **Basic Configuration**:
    - Modify \`config/site.ts\` to configure website information.
    - Update icons and logos in \`public/\`.
    - Configure \`app/sitemap.ts\` and \`app/robots.ts\`.

2. **Multilingual Configuration**:
    - Add or modify language files in \`i18n/messages/\`.
    - Configure supported languages in \`i18n/routing.ts\`.
    - Configure multilingual routing in \`middleware.ts\`.

## 📝 Content Management

### Blog Posts
Create MDX files in the \`blog/[locale]\` directory with the following format:
\`\`\`markdown
---
title: Post Title
description: Post Description
image: /image.png
slug: /url-path
tags: tag1,tag2
date: 2025-02-20
visible: published
pin: true
---

Post content...
\`\`\`

### Static Pages
Manage static page content in \`content/[page]/[locale].mdx\`.

## 📄 License

Next Forge is licensed under the MIT License. You are free to use, modify, and distribute it.

## 🤝 Contributing

Issues and Pull Requests are welcome! Your contributions will help us continuously improve this project.

## About the Author

Focused on Next.js full-stack development, welcome to discuss development, consulting and training cooperation opportunities. Contact WeChat: bigye_chengpu

- [Github](https://github.com/weijunext)
- [Twitter/X](https://twitter.com/weijunext)
- [Blog - J Lab](https://weijunext.com)
- [Medium](https://medium.com/@weijunext)
- [掘金](https://juejin.cn/user/26044008768029)
- [知乎](https://www.zhihu.com/people/mo-mo-mo-89-12-11)`,

  ja: `---
title: について
description: Next Forge 多言語スターターテンプレートについて
lastUpdated: 2025-02-19
---

> 最終更新日: 2025-02-19

# Next Forge について

Next Forge は、開発者がグローバル向けのウェブサイトを迅速に構築できるように設計された、機能完備の Next.js 15 多言語スターターテンプレートです。多言語サポート、モダンな UI デザイン、ダーク/ライトテーマ切り替え、レスポンシブレイアウト、MDX ブログシステム、SEO 最適化、および様々な分析ツールが組み込まれています。

## ✨ 主な機能

- 🌐 **多言語サポート**: 中国語、英語、日本語の国際化サポートを内蔵し、多言語ウェブサイトを簡単に実現。
- 🎨 **モダンな UI デザイン**: Tailwind CSS ベースのモダンな UI デザイン、シンプルで美しい。
- 🌙 **ダーク/ライトテーマ切り替え**: ユーザーがダークとライトテーマを自由に切り替え可能。
- 📱 **レスポンシブレイアウト**: 様々なデバイスに対応し、モバイルとデスクトップの両方で良好なユーザー体験を保証。
- 📝 **MDX ブログシステム**: MDX を使用したブログ記事の執筆をサポート、柔軟で強力。
- 🔍 **SEO 最適化**: sitemap.xml と robots.txt の自動生成を含む、完全な SEO 最適化ソリューションを内蔵。
- 📊 **分析**: Google Analytics、Baidu Analytics、Google Adsense、Vercel Analytics を統合し、データ追跡を簡単に。
- 🌿 **エコフレンドリーなパフォーマンス**: [Website Carbon](https://www.websitecarbon.com/website/nextforge-dev/) で A+ 評価を獲得し、最もエネルギー効率の良いウェブサイトの一つ。

## 🚀 クイックスタート

1. プロジェクトをクローン:
    \`\`\`bash
    git clone https://github.com/weijunext/nextjs-15-starter.git
    \`\`\`

2. 依存関係をインストール:
    \`\`\`bash
    npm install
    \`\`\`

3. 環境変数ファイルをコピー:
    \`\`\`bash
    cp .env.example .env
    \`\`\`

4. 開発サーバーを起動:
    \`\`\`bash
    npm run dev
    \`\`\`

[http://localhost:3000](http://localhost:3000) にアクセスしてアプリケーションを確認してください。

## ⚙️ 設定

1. **基本設定**:
    - \`config/site.ts\` を修正してウェブサイト情報を設定。
    - \`public/\` のアイコンとロゴを更新。
    - \`app/sitemap.ts\` と \`app/robots.ts\` を設定。

2. **多言語設定**:
    - \`i18n/messages/\` で言語ファイルを追加または修正。
    - \`i18n/routing.ts\` でサポート言語を設定。
    - \`middleware.ts\` で多言語ルーティングを設定。

## 📝 コンテンツ管理

### ブログ記事
\`blog/[locale]\` ディレクトリに MDX ファイルを作成し、以下の形式をサポート:
\`\`\`markdown
---
title: 記事タイトル
description: 記事の説明
image: /image.png
slug: /url-path
tags: tag1,tag2
date: 2025-02-20
visible: published
pin: true
---

記事の内容...
\`\`\`

### 静的ページ
\`content/[page]/[locale].mdx\` で静的ページのコンテンツを管理。

## 📄 ライセンス

Next Forge は MIT ライセンスの下でライセンスされています。自由に使用、修正、配布できます。

## 🤝 貢献

Issue と Pull Request を歓迎します！あなたの貢献がこのプロジェクトの継続的な改善に役立ちます。

## 作者について

Next.js フルスタック開発に特化し、開発、コンサルティング、トレーニングの協力機会について議論を歓迎します。WeChat: bigye_chengpu

- [Github](https://github.com/weijunext)
- [Twitter/X](https://twitter.com/weijunext)
- [ブログ - J ラボ](https://weijunext.com)
- [Medium](https://medium.com/@weijunext)
- [掘金](https://juejin.cn/user/26044008768029)
- [知乎](https://www.zhihu.com/people/mo-mo-mo-89-12-11)`
};

export const privacyPolicyContent = {
  zh: `---
title: 隐私政策
description: Next Forge 隐私政策
lastUpdated: 2025-02-19
---

> 更新日期：2025-02-19

# 隐私政策

## 信息收集

我们收集您主动提供的信息，包括但不限于：

- 姓名和联系信息
- 电子邮件地址
- 网站使用数据

## 信息使用

我们使用收集的信息来：

- 提供和改进我们的服务
- 与您沟通
- 分析网站使用情况

## 信息保护

我们采取适当的安全措施来保护您的个人信息。

## 联系我们

如果您有任何问题，请通过以下方式联系我们：

- 邮箱：contact@example.com
- 微信：bigye_chengpu`,

  en: `---
title: Privacy Policy
description: Next Forge Privacy Policy
lastUpdated: 2025-02-19
---

> Last updated: 2025-02-19

# Privacy Policy

## Information Collection

We collect information you voluntarily provide, including but not limited to:

- Name and contact information
- Email address
- Website usage data

## Information Use

We use the collected information to:

- Provide and improve our services
- Communicate with you
- Analyze website usage

## Information Protection

We take appropriate security measures to protect your personal information.

## Contact Us

If you have any questions, please contact us through:

- Email: contact@example.com
- WeChat: bigye_chengpu`,

  ja: `---
title: プライバシーポリシー
description: Next Forge プライバシーポリシー
lastUpdated: 2025-02-19
---

> 最終更新日: 2025-02-19

# プライバシーポリシー

## 情報収集

お客様が自発的に提供する情報を収集します。これには以下が含まれますが、これらに限定されません：

- 氏名と連絡先情報
- メールアドレス
- ウェブサイト使用データ

## 情報の使用

収集した情報を使用して：

- サービスを提供し改善する
- お客様とコミュニケーションを取る
- ウェブサイトの使用状況を分析する

## 情報保護

お客様の個人情報を保護するため、適切なセキュリティ対策を講じています。

## お問い合わせ

ご質問がございましたら、以下までお問い合わせください：

- メール: contact@example.com
- WeChat: bigye_chengpu`
};

export const termsOfServiceContent = {
  zh: `---
title: 服务条款
description: Next Forge 服务条款
lastUpdated: 2025-02-19
---

> 更新日期：2025-02-19

# 服务条款

## 接受条款

通过使用我们的服务，您同意受本服务条款的约束。

## 服务描述

我们提供以下服务：

- 网站开发
- 技术咨询
- 培训服务

## 用户责任

用户有责任：

- 遵守所有适用的法律法规
- 不滥用我们的服务
- 保护自己的账户安全

## 联系我们

如果您有任何问题，请通过以下方式联系我们：

- 邮箱：contact@example.com
- 微信：bigye_chengpu`,

  en: `---
title: Terms of Service
description: Next Forge Terms of Service
lastUpdated: 2025-02-19
---

> Last updated: 2025-02-19

# Terms of Service

## Acceptance of Terms

By using our services, you agree to be bound by these Terms of Service.

## Service Description

We provide the following services:

- Website development
- Technical consulting
- Training services

## User Responsibilities

Users are responsible for:

- Complying with all applicable laws and regulations
- Not misusing our services
- Protecting their account security

## Contact Us

If you have any questions, please contact us through:

- Email: contact@example.com
- WeChat: bigye_chengpu`,

  ja: `---
title: 利用規約
description: Next Forge 利用規約
lastUpdated: 2025-02-19
---

> 最終更新日: 2025-02-19

# 利用規約

## 規約の受諾

当社のサービスをご利用いただくことで、本利用規約に拘束されることに同意したものとみなします。

## サービス内容

当社は以下のサービスを提供します：

- ウェブサイト開発
- 技術コンサルティング
- トレーニングサービス

## ユーザーの責任

ユーザーは以下について責任を負います：

- すべての適用される法律および規制の遵守
- 当社サービスの悪用禁止
- 自分のアカウントのセキュリティ保護

## お問い合わせ

ご質問がございましたら、以下までお問い合わせください：

- メール: contact@example.com
- WeChat: bigye_chengpu`
};

export function getContent(type: 'about' | 'privacy-policy' | 'terms-of-service', locale: string): string {
  const contentMap = {
    'about': aboutContent,
    'privacy-policy': privacyPolicyContent,
    'terms-of-service': termsOfServiceContent
  };

  return contentMap[type][locale as keyof typeof aboutContent] || contentMap[type]['en'];
}
