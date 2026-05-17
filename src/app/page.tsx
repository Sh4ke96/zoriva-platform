import type { Metadata } from "next";
import { cookies } from "next/headers";

import { HomeHero } from "@/components/marketing/hero";
import { HomeSections } from "@/components/marketing/home-features-section";
import { MarketingPageShell } from "@/components/marketing/marketing-footer";
import { LocalizedDocumentMetadata } from "@/components/providers/locale-provider";
import localesHomeEn from "@/locales/home/en.json";
import localesHomePl from "@/locales/home/pl.json";
import {
  LOCALE_COOKIE_KEY,
  selectLocalizedMetadata,
  type LocalizedMetadataMap,
} from "@/lib/locale";
import { Locales } from "@/types/locale";

const homeMetadataByLocale: LocalizedMetadataMap = {
  [Locales.Pl]: localesHomePl.metadata,
  [Locales.En]: localesHomeEn.metadata,
};

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const metadata = selectLocalizedMetadata(
    homeMetadataByLocale,
    cookieStore.get(LOCALE_COOKIE_KEY)?.value,
  );

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default function Home() {
  return (
    <MarketingPageShell>
      <LocalizedDocumentMetadata metadataByLocale={homeMetadataByLocale} />
      <HomeHero />
      <HomeSections />
    </MarketingPageShell>
  );
}
