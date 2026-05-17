"use client";

import localesHomeEn from "@/locales/home/en.json";
import localesHomePl from "@/locales/home/pl.json";
import { selectLocale } from "@/lib/locale";
import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { LayoutContainer } from "@/components/ui/layout-container";
import { Locales } from "@/types/locale";

export function HomeCtaSection() {
  const { locale } = useLocale();
  const translations: typeof localesHomePl.cta = selectLocale(
    {
      [Locales.En]: localesHomeEn.cta,
      [Locales.Pl]: localesHomePl.cta,
    },
    locale,
  );

  return (
    <section className="border-border/40 border-t py-18 sm:py-22 lg:py-26">
      <LayoutContainer width="content">
        <div className="bg-primary text-primary-foreground mx-auto flex max-w-5xl flex-col gap-8 rounded-[2rem] px-8 py-10 shadow-[0_1.75rem_4.5rem_-2.5rem_rgba(18,124,126,0.48)] lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="max-w-[36rem] space-y-3">
            <h2 className="max-w-[18ch] text-[2.15rem] font-semibold tracking-tighter text-balance sm:text-[2.45rem] lg:text-[2.65rem]">
              {translations.title}
            </h2>
            <p className="text-primary-foreground/78 max-w-[31rem] text-[0.97rem] leading-6.5 sm:text-[1rem]">
              {translations.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              className="h-12 justify-center px-6 text-base"
            >
              {translations.primary}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:border-primary-foreground/45 hover:bg-primary-foreground/10 hover:text-primary-foreground h-12 justify-center bg-transparent px-6 text-base"
            >
              {translations.secondary}
            </Button>
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
}
