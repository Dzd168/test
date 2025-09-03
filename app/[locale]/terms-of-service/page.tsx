import MDXComponents from "@/components/mdx/MDXComponents";
import { Locale } from "@/i18n/routing";
import { getContent } from "@/lib/content";
import { constructMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import remarkGfm from "remark-gfm";

export const runtime = 'edge';

const options = {
  parseFrontmatter: true,
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
};

type Params = Promise<{
  locale: string;
}>;

type MetadataProps = {
  params: Params;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "TermsOfService" });

  return constructMetadata({
    page: "TermsOfService",
    title: t("title"),
    description: t("description"),
    locale: locale as Locale,
    path: `/terms-of-service`,
    canonicalUrl: `/terms-of-service`,
  });
}

export default async function AboutPage({ params }: { params: Params }) {
  const { locale } = await params;
  const content = getContent('terms-of-service', locale);

  return (
    <article className="w-full md:w-3/5 px-2 md:px-12">
      <MDXRemote
        source={content}
        components={MDXComponents}
        options={options}
      />
    </article>
  );
}


