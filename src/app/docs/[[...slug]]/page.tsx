import { notFound } from "next/navigation";
import type { ComponentType } from "react";
import type { TOCItemType } from "fumadocs-core/toc";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page";
import { source } from "@/source";

type PageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

export default async function Page(props: PageProps) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  const docPage = page as typeof page & {
    data: typeof page.data & {
      body: ComponentType;
      description?: string;
      title: string;
      toc: TOCItemType[];
    };
  };

  const MDX = docPage.data.body;

  return (
    <DocsPage toc={docPage.data.toc}>
      <DocsTitle>{docPage.data.title}</DocsTitle>
      {docPage.data.description ? (
        <DocsDescription>{docPage.data.description}</DocsDescription>
      ) : null}
      <DocsBody>
        <MDX />
      </DocsBody>
    </DocsPage>
  );
}

export function generateStaticParams() {
  return source.generateParams();
}
