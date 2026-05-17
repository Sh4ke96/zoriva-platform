"use client";

import { useState } from "react";

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Locales } from "@/types/locale";
import { MarketingSectionHeader } from "./marketing-section-header";

export function HomeModesSection() {
  const [activeMode, setActiveMode] = useState<"personal" | "family">("personal");
  const { locale } = useLocale();
  const translations: typeof localesHomePl.modes = selectLocale(
    {
      [Locales.En]: localesHomeEn.modes,
      [Locales.Pl]: localesHomePl.modes,
    },
    locale,
  );
  const accessibilityIcons = [
    siteIcons.accessibility,
    siteIcons.language,
    siteIcons.check,
    siteIcons.users,
  ] as const;

  return (
    <section
      id={translations.id}
      className="border-border/40 scroll-mt-24 border-y bg-[linear-gradient(180deg,rgba(248,247,242,0)_0%,rgba(232,242,241,0.28)_100%)] py-18 sm:scroll-mt-28 sm:py-22 lg:py-26"
    >
      <LayoutContainer width="content" className="space-y-18 sm:space-y-22 lg:space-y-26">
        <div
          id={translations.accessibility.id}
          className="grid scroll-mt-24 gap-12 rounded-[2.75rem] border border-[#eadfce] bg-[linear-gradient(180deg,rgba(248,239,227,0.96)_0%,rgba(246,236,221,0.82)_100%)] px-6 py-9 shadow-[0_1.5rem_3.5rem_-2.6rem_rgba(110,90,60,0.38)] sm:scroll-mt-28 sm:px-9 sm:py-11 lg:grid-cols-[minmax(0,1.02fr)_minmax(24rem,29rem)] lg:items-center lg:gap-18 lg:px-14 lg:py-14 dark:border-[#4f646d] dark:bg-[linear-gradient(180deg,rgba(46,62,69,0.96)_0%,rgba(35,50,57,0.92)_100%)] dark:shadow-[0_1.8rem_4rem_-2.4rem_rgba(0,0,0,0.6)]"
        >
          <div className="space-y-8 lg:space-y-9">
            <div className="space-y-6">
              <p className="text-primary text-sm font-medium tracking-tight">
                {translations.accessibility.eyebrow}
              </p>
              <div className="space-y-5">
                <h2 className="text-foreground max-w-[11ch] text-[2.4rem] font-semibold tracking-tighter text-balance sm:text-[3rem] lg:text-[3.45rem] lg:leading-[0.96]">
                  {translations.accessibility.title}
                </h2>
                <p className="text-muted-foreground max-w-140 text-[1.08rem] leading-[1.75] sm:text-[1.2rem] lg:max-w-lg">
                  {translations.accessibility.description}
                </p>
              </div>
            </div>

            <ul className="space-y-4.5 pt-1">
              {translations.accessibility.items.map((item, index) => {
                const accessibilityIcon =
                  accessibilityIcons[index] ?? siteIcons.accessibility;

                return (
                  <li
                    key={item}
                    className="text-foreground inline-flex items-start gap-3.5 text-[1.05rem] sm:text-[1.14rem]"
                  >
                    <span className="text-primary mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-[#c6ddda] bg-[linear-gradient(180deg,#eef8f5_0%,#dcefeb_100%)] shadow-[0_0.85rem_1.35rem_-0.95rem_rgba(18,124,126,0.62)] ring-1 ring-white/85 dark:border-[#4f7470] dark:bg-[linear-gradient(180deg,rgba(69,101,101,0.95)_0%,rgba(47,74,79,0.95)_100%)] dark:text-[#8de0db] dark:shadow-[0_0.95rem_1.5rem_-1rem_rgba(0,0,0,0.55)] dark:ring-white/10">
                      <SiteIcon
                        icon={accessibilityIcon}
                        decorative
                        className="size-4.5"
                      />
                    </span>
                    <span className="leading-[1.6]">{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <Card className="border-border/80 bg-card rounded-[1.75rem] p-3 shadow-[0_1.6rem_3rem_-1.9rem_rgba(18,124,126,0.32)] lg:p-4 dark:border-[#4c616a] dark:bg-[#22343b] dark:shadow-[0_1.8rem_3.4rem_-2rem_rgba(0,0,0,0.6)]">
            <CardHeader className="space-y-1.5 px-4 pt-4 sm:px-5 sm:pt-5 lg:px-6 lg:pt-6">
              <CardTitle className="text-foreground text-[1.95rem] tracking-tighter sm:text-[2.2rem]">
                {translations.accessibility.card.title}
              </CardTitle>
              <CardDescription className="text-[1rem] leading-7 sm:text-[1.08rem]">
                {translations.accessibility.card.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 px-4 pb-4 sm:px-5 sm:pb-5 lg:space-y-6 lg:px-6 lg:pb-6">
              <div className="rounded-[1.35rem] border border-[#f0ebe1] bg-[#f6f2eb] p-5 lg:px-5.5 lg:py-5 dark:border-[#425861] dark:bg-[#2a3d44]">
                <p className="text-muted-foreground text-[1rem] leading-6.5">
                  {translations.accessibility.card.label}
                </p>
                <p className="text-foreground -mt-1 text-[1.95rem] font-semibold tracking-tighter sm:text-[2.2rem]">
                  {translations.accessibility.card.medicine}
                </p>
                <p className="text-muted-foreground mt-2 text-[1rem] leading-6.5">
                  {translations.accessibility.card.doseLabel}
                </p>
                <p className="text-foreground -mt-1 text-[1.55rem] font-medium tracking-tight sm:text-[1.75rem]">
                  {translations.accessibility.card.dose}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <Button
                  size="lg"
                  className="h-12 justify-center rounded-[1rem] bg-[#2f6f6c] text-[1rem] text-white shadow-[0_0.8rem_1.6rem_-1.2rem_rgba(47,111,108,0.62)] hover:bg-[#2a6764] dark:bg-[#69cacc] dark:text-[#183037] dark:shadow-[0_0.9rem_1.7rem_-1.15rem_rgba(105,202,204,0.5)] dark:hover:bg-[#7ad4d5]"
                  iconLeading={
                    <SiteIcon icon={siteIcons.check} decorative className="size-4.5" />
                  }
                  iconPosition="start"
                >
                  {translations.accessibility.card.primary}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 justify-center rounded-[1rem] border-[#e5ddd0] bg-[#fffdf9] text-[1rem] text-slate-900 hover:border-[#dacfbf] hover:bg-[#fbf7f0] dark:border-[#4d6870] dark:bg-[#2b3f47] dark:text-[#eef3ee] dark:hover:border-[#62818a] dark:hover:bg-[#324851]"
                >
                  {translations.accessibility.card.secondary}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <MarketingSectionHeader
            eyebrow={translations.eyebrow}
            title={translations.title}
            description={translations.description}
          />

          <Tabs
            value={activeMode}
            onValueChange={(value: "personal" | "family" | null) => {
              if (value === "personal" || value === "family") {
                setActiveMode(value);
              }
            }}
            className="mx-auto max-w-4xl space-y-7"
          >
            <TabsList>
              <TabsTrigger value="personal">{translations.tabs.personal}</TabsTrigger>
              <TabsTrigger value="family">{translations.tabs.family}</TabsTrigger>
            </TabsList>

            <TabsContent value="personal">
              <Card className="border-border/70 bg-card/95 rounded-[2rem] shadow-[0_1.5rem_4rem_-2.25rem_rgba(18,124,126,0.26)]">
                <CardHeader className="space-y-1.5">
                  <CardTitle>{translations.personal.title}</CardTitle>
                  <CardDescription className="text-[0.96rem] leading-6.5 sm:text-[1rem]">
                    {translations.personal.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="grid gap-3 md:grid-cols-2">
                    {translations.personal.items.map((item) => (
                      <div
                        key={item}
                        className="bg-muted/55 inline-flex items-center gap-3 rounded-[1.125rem] px-4 py-3 text-base"
                      >
                        <SiteIcon
                          icon={siteIcons.check}
                          decorative
                          className="text-primary size-4.5"
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="family">
              <Card className="border-border/70 bg-card/95 rounded-[2rem] shadow-[0_1.5rem_4rem_-2.25rem_rgba(18,124,126,0.26)]">
                <CardHeader className="space-y-1.5">
                  <CardTitle>{translations.family.title}</CardTitle>
                  <CardDescription className="text-[0.96rem] leading-6.5 sm:text-[1rem]">
                    {translations.family.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="grid gap-3 md:grid-cols-2">
                    {translations.family.items.map((item) => (
                      <div
                        key={item}
                        className="bg-muted/55 inline-flex items-center gap-3 rounded-[1.125rem] px-4 py-3 text-base"
                      >
                        <SiteIcon
                          icon={siteIcons.check}
                          decorative
                          className="text-primary size-4.5"
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </LayoutContainer>
    </section>
  );
}
