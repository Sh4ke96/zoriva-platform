"use client";

import localesHomeEn from "@/locales/home/en.json";
import localesHomePl from "@/locales/home/pl.json";
import { selectLocale } from "@/lib/locale";
import { siteIcons, SiteIcon } from "@/lib/site-icons";
import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LayoutContainer } from "@/components/ui/layout-container";
import { Locales } from "@/types/locale";
import { MarketingSectionHeader } from "./marketing-section-header";

export function HomePricingSection() {
  const { locale } = useLocale();
  const translations: typeof localesHomePl.pricing = selectLocale(
    {
      [Locales.En]: localesHomeEn.pricing,
      [Locales.Pl]: localesHomePl.pricing,
    },
    locale,
  );

  return (
    <section
      id={translations.id}
      className="border-border/40 scroll-mt-24 border-y bg-[linear-gradient(180deg,rgba(232,242,241,0.14)_0%,rgba(248,247,242,0)_100%)] py-18 sm:scroll-mt-28 sm:py-22 lg:py-26"
    >
      <LayoutContainer width="content" className="space-y-10 sm:space-y-12 lg:space-y-14">
        <MarketingSectionHeader
          eyebrow={translations.eyebrow}
          title={translations.title}
          description={translations.description}
        />

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
          {translations.plans.map((plan) => (
            <Card
              key={plan.name}
              className={
                plan.highlighted
                  ? "border-primary/25 relative rounded-[2rem] shadow-[0_1.8rem_4.5rem_-2.5rem_rgba(18,124,126,0.42)]"
                  : "border-border/70 rounded-[2rem] shadow-[0_1.25rem_3rem_-2.25rem_rgba(18,124,126,0.2)]"
              }
            >
              {plan.badge ? (
                <div className="px-6 pt-0">
                  <span className="bg-primary text-primary-foreground inline-flex -translate-y-1/2 rounded-full px-3 py-1 text-sm font-medium">
                    {plan.badge}
                  </span>
                </div>
              ) : null}

              <CardHeader className={plan.badge ? "pt-0" : undefined}>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-end gap-2">
                  <span className="text-foreground text-5xl font-semibold tracking-tight">
                    {plan.price}
                  </span>
                  {plan.period ? (
                    <span className="text-muted-foreground pb-1 text-lg">
                      {plan.period}
                    </span>
                  ) : null}
                </div>

                <ul className="space-y-3.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="border-border/60 bg-muted/35 flex items-center gap-3 rounded-[1.125rem] border px-4 py-3 text-base shadow-[0_1rem_2rem_-1.8rem_rgba(18,124,126,0.34)]"
                    >
                      <span className="bg-secondary text-primary inline-flex size-8 shrink-0 items-center justify-center rounded-full">
                        <SiteIcon
                          icon={siteIcons.check}
                          decorative
                          className="size-4.5"
                        />
                      </span>
                      <span className="leading-6.5">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  variant={plan.highlighted ? "default" : "outline"}
                  className="h-12 w-full justify-center text-base"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </LayoutContainer>
    </section>
  );
}
