// Blog content mapping for Edge Runtime compatibility
// Since Edge Runtime doesn't support fs/path modules, we'll store blog content as objects

export const blogPosts = {
  zh: [
    {
      slug: "/demo",
      title: "演示文章",
      description: "这是一个演示文章，展示 Next Forge 的博客功能。",
      image: "/placeholder.svg",
      tags: "演示,Next.js,博客",
      date: new Date("2025-02-19"),
      visible: "published" as const,
      pin: false,
      content: `# 演示文章

这是一个演示文章，展示 Next Forge 的博客功能。

## 功能特性

- 支持 MDX 格式
- 多语言支持
- 响应式设计
- SEO 优化

## 使用方法

1. 在 \`blogs/[locale]\` 目录下创建 MDX 文件
2. 添加 frontmatter 元数据
3. 编写文章内容

## 总结

Next Forge 提供了一个完整的博客解决方案，让您可以轻松创建和管理多语言博客内容。`,
      metadata: {}
    },
    {
      slug: "/demo2",
      title: "第二篇演示文章",
      description: "这是第二篇演示文章，展示更多功能。",
      image: "/placeholder.svg",
      tags: "演示,功能,展示",
      date: new Date("2025-02-20"),
      visible: "published" as const,
      pin: false,
      content: `# 第二篇演示文章

这是第二篇演示文章，展示更多功能。

## 新功能

- 文章分类
- 标签系统
- 发布时间
- 置顶功能

## 技术栈

- Next.js 15
- TypeScript
- Tailwind CSS
- MDX

## 总结

通过这篇文章，我们展示了博客系统的更多功能特性。`,
      metadata: {}
    }
  ],
  en: [
    {
      slug: "/demo",
      title: "Demo Article",
      description: "This is a demo article showcasing Next Forge's blog functionality.",
      image: "/placeholder.svg",
      tags: "demo,Next.js,blog",
      date: new Date("2025-02-19"),
      visible: "published" as const,
      pin: false,
      content: `# Demo Article

This is a demo article showcasing Next Forge's blog functionality.

## Features

- MDX format support
- Multilingual support
- Responsive design
- SEO optimization

## Usage

1. Create MDX files in the \`blogs/[locale]\` directory
2. Add frontmatter metadata
3. Write article content

## Summary

Next Forge provides a complete blog solution that allows you to easily create and manage multilingual blog content.`,
      metadata: {}
    }
  ],
  ja: [
    {
      slug: "/demo",
      title: "デモ記事",
      description: "これは Next Forge のブログ機能を紹介するデモ記事です。",
      image: "/placeholder.svg",
      tags: "デモ,Next.js,ブログ",
      date: new Date("2025-02-19"),
      visible: "published" as const,
      pin: false,
      content: `# デモ記事

これは Next Forge のブログ機能を紹介するデモ記事です。

## 機能

- MDX フォーマットサポート
- 多言語サポート
- レスポンシブデザイン
- SEO 最適化

## 使用方法

1. \`blogs/[locale]\` ディレクトリに MDX ファイルを作成
2. frontmatter メタデータを追加
3. 記事の内容を記述

## まとめ

Next Forge は、多言語ブログコンテンツを簡単に作成・管理できる完全なブログソリューションを提供します。`,
      metadata: {}
    }
  ]
};

export function getBlogPosts(locale: string) {
  return blogPosts[locale as keyof typeof blogPosts] || blogPosts.en;
}

export function getBlogPost(locale: string, slug: string) {
  const posts = getBlogPosts(locale);
  return posts.find(post => post.slug === slug);
}
