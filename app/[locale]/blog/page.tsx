import { BlogCard } from "@/app/[locale]/blog/BlogCard";
import { Locale } from "@/i18n/routing";
import { getBlogPosts } from "@/lib/blogContent";
import { constructMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const runtime = 'edge';

type Params = Promise<{ locale: string }>;

type MetadataProps = {
  params: Params;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Blog" });

  return constructMetadata({
    page: "Blog",
    title: t("title"),
    description: t("description"),
    locale: locale as Locale,
    path: `/blog`,
    canonicalUrl: `/blog`,
  });
}

export default async function Page({ params }: { params: Params }) {
  const { locale } = await params;
  const posts = getBlogPosts(locale);

  const t = await getTranslations("Blog");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">{t("title")}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.slug} locale={locale} post={post} />
        ))}
      </div>
    </div>
  );
}


