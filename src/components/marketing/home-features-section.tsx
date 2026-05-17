"use client";

import localesHomeEn from "@/locales/home/en.json";
import localesHomePl from "@/locales/home/pl.json";
import { HomeCtaSection } from "@/components/marketing/home-cta-section";
import { HomeFaqSection } from "@/components/marketing/home-faq-section";
import { HomeModesSection } from "@/components/marketing/home-modes-section";
import { HomePricingSection } from "@/components/marketing/home-pricing-section";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { selectLocale } from "@/lib/locale";
import { SiteIcon } from "@/lib/site-icons";
import { useLocale } from "@/components/providers/locale-provider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LayoutContainer } from "@/components/ui/layout-container";
import { Locales } from "@/types/locale";
import { HomeAudienceSection } from "@/components/marketing/home-audience-section";
import { getMarketingSectionIcon } from "./marketing-section-icons";
import { MarketingSectionHeader } from "./marketing-section-header";

export function HomeSections() {
  return (
    <>
      <HomeAudienceSection />
      <HomeFeaturesSection />
      <HomeModesSection />
      <HomePricingSection />
      <HomeFaqSection />
      <HomeCtaSection />
    </>
  );
}

export function HomePageFooter() {
  return <MarketingFooter />;
}

export function HomeFeaturesSection() {
  const { locale } = useLocale();
  const translations: typeof localesHomePl.features = selectLocale(
    {
      [Locales.En]: localesHomeEn.features,
      [Locales.Pl]: localesHomePl.features,
    },
    locale,
  );

  return (
    <section
      id={translations.id}
      className="scroll-mt-24 py-18 sm:scroll-mt-28 sm:py-22 lg:py-26"
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
                className="border-border/70 bg-card/95 rounded-[1.75rem] shadow-[0_1rem_2.5rem_-1.75rem_rgba(18,124,126,0.18)] transition-transform duration-300 ease-in-out hover:-translate-y-1"
              >
                <CardHeader className="gap-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="bg-secondary text-primary inline-flex size-11 items-center justify-center rounded-2xl">
                      <SiteIcon icon={icon} decorative className="size-5" />
                    </span>
                    {item.badge ? (
                      <span className="border-border bg-background text-muted-foreground inline-flex rounded-full border px-2.5 py-1 text-[0.6875rem] font-medium tracking-[0.12em] uppercase">
                        {item.badge}
                      </span>
                    ) : null}
                  </div>
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
