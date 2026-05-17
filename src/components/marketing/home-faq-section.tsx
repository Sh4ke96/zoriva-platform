"use client";

import localesHomeEn from "@/locales/home/en.json";
import localesHomePl from "@/locales/home/pl.json";
import { selectLocale } from "@/lib/locale";
import { useLocale } from "@/components/providers/locale-provider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LayoutContainer } from "@/components/ui/layout-container";
import { Locales } from "@/types/locale";
import { MarketingSectionHeader } from "./marketing-section-header";

export function HomeFaqSection() {
  const { locale } = useLocale();
  const translations: typeof localesHomePl.faq = selectLocale(
    {
      [Locales.En]: localesHomeEn.faq,
      [Locales.Pl]: localesHomePl.faq,
    },
    locale,
  );

  return (
    <section
      id={translations.id}
      className="border-border/40 scroll-mt-24 border-y py-18 sm:scroll-mt-28 sm:py-22 lg:py-26"
    >
      <LayoutContainer width="content" className="space-y-10 sm:space-y-12 lg:space-y-14">
        <MarketingSectionHeader
          eyebrow={translations.eyebrow}
          title={translations.title}
        />

        <Accordion className="mx-auto max-w-4xl">
          {translations.items.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </LayoutContainer>
    </section>
  );
}
