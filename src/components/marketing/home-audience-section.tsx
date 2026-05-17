"use client";

import localesHomeEn from "@/locales/home/en.json";
import localesHomePl from "@/locales/home/pl.json";
import { selectLocale } from "@/lib/locale";
import { SiteIcon } from "@/lib/site-icons";
import { useLocale } from "@/components/providers/locale-provider";
import { LayoutContainer } from "@/components/ui/layout-container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Locales } from "@/types/locale";
import { getMarketingSectionIcon } from "./marketing-section-icons";
import { MarketingSectionHeader } from "./marketing-section-header";

export function HomeAudienceSection() {
  const { locale } = useLocale();
  const translations: typeof localesHomePl.audience = selectLocale(
    {
      [Locales.En]: localesHomeEn.audience,
      [Locales.Pl]: localesHomePl.audience,
    },
    locale,
  );

  return (
    <section
      id={translations.id}
      className="border-border/40 scroll-mt-24 border-y bg-[linear-gradient(180deg,rgba(248,247,242,0)_0%,rgba(232,242,241,0.38)_100%)] py-18 sm:scroll-mt-28 sm:py-22 lg:py-26"
    >
      <LayoutContainer width="content" className="space-y-10 sm:space-y-12 lg:space-y-14">
        <MarketingSectionHeader
          eyebrow={translations.eyebrow}
          title={translations.title}
          description={translations.description}
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {translations.items.map((item) => {
            const icon = getMarketingSectionIcon(item.icon);

            return (
              <Card
                key={item.title}
                className="border-border/70 bg-card/95 rounded-[1.75rem] shadow-[0_1rem_2.5rem_-1.75rem_rgba(18,124,126,0.22)] transition-transform duration-300 ease-in-out hover:-translate-y-1"
              >
                <CardHeader>
                  <span className="bg-secondary text-primary inline-flex size-11 items-center justify-center rounded-2xl">
                    <SiteIcon icon={icon} decorative className="size-5" />
                  </span>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </LayoutContainer>
    </section>
  );
}
