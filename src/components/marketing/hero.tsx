"use client";

import { useId } from "react";

import localesHomeEn from "@/locales/home/en.json";
import localesHomePl from "@/locales/home/pl.json";
import { selectLocale } from "@/lib/locale";
import { siteIcons, SiteIcon } from "@/lib/site-icons";
import { useLocale } from "@/components/providers/locale-provider";
import { Locales } from "@/types/locale";
import { Button } from "@/components/ui/button";
import { LayoutContainer } from "@/components/ui/layout-container";

const profileToneClasses = {
  accent: "bg-accent text-accent-foreground",
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
} as const;

function getProfileToneClass(tone: string) {
  return (
    profileToneClasses[tone as keyof typeof profileToneClasses] ??
    profileToneClasses.primary
  );
}

export function HomeHero() {
  const heroId = useId().replace(/:/g, "");
  const { locale } = useLocale();
  const translations: typeof localesHomePl.hero = selectLocale(
    {
      [Locales.En]: localesHomeEn.hero,
      [Locales.Pl]: localesHomePl.hero,
    },
    locale,
  );
  const featuresSectionId = locale === Locales.En ? "features" : "funkcje";
  const handleFeaturesScroll = () => {
    document
      .getElementById(featuresSectionId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-128 bg-[radial-gradient(circle_at_top,#127c7e12,transparent_55%)]" />
      <LayoutContainer
        width="wide"
        className="grid gap-6 py-8 sm:gap-10 sm:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(24rem,28rem)] lg:items-center lg:gap-10 xl:grid-cols-[minmax(0,1.08fr)_minmax(34rem,39rem)] xl:gap-18 xl:py-20"
      >
        <div className="max-w-3xl space-y-6 lg:max-w-none lg:space-y-6 xl:space-y-8">
          <div className="space-y-4 sm:space-y-5">
            <span className="border-border/70 bg-background/80 text-muted-foreground inline-flex max-w-full flex-wrap items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-[0.7rem] shadow-sm sm:gap-2 sm:px-3 sm:text-sm">
              <SiteIcon icon={siteIcons.app} decorative className="text-primary size-4" />
              {translations.badge}
            </span>

            <div className="space-y-3 sm:space-y-4">
              <h1 className="max-w-[12ch] text-[1.9rem] font-semibold tracking-tighter text-balance sm:max-w-[14ch] sm:text-[3.2rem] md:max-w-[13ch] md:text-[3rem] lg:max-w-[11.75ch] lg:text-[3.7rem] xl:max-w-[10.75ch] xl:text-[4.75rem] xl:leading-[0.95]">
                {translations.titlePrefix}
                <span className="text-primary"> {translations.titleAccent}</span>
              </h1>

              <p className="text-muted-foreground max-w-[28ch] text-[0.875rem] leading-6 sm:max-w-[40ch] sm:text-lg md:max-w-xl md:text-xl">
                {translations.description}
              </p>
            </div>
          </div>

          <div className="flex w-full max-w-full flex-col gap-2.5 sm:max-w-none sm:flex-row lg:flex-col xl:flex-row">
            <Button
              id={`${heroId}-primary-cta`}
              size="lg"
              className="h-auto min-h-11 w-full max-w-full min-w-0 flex-nowrap items-center justify-between gap-2.5 px-3.5 py-3 text-left text-[0.875rem] whitespace-normal **:data-[slot=button-label]:min-w-0 **:data-[slot=button-label]:flex-1 **:data-[slot=button-label]:wrap-break-word **:data-[slot=button-label]:whitespace-normal sm:h-12 sm:w-auto sm:justify-center sm:gap-3 sm:px-6 sm:py-0 sm:text-base sm:**:data-[slot=button-label]:flex-none sm:**:data-[slot=button-label]:whitespace-nowrap"
              iconPosition="end"
              iconLeading={
                <SiteIcon
                  icon={siteIcons.accountCreate}
                  decorative
                  className="size-5 sm:size-5.5"
                />
              }
            >
              {translations.primaryCta}
            </Button>
            <Button
              id={`${heroId}-secondary-cta`}
              variant="outline"
              size="lg"
              onClick={handleFeaturesScroll}
              className="h-auto min-h-11 w-full max-w-full min-w-0 flex-nowrap items-center justify-between gap-2.5 px-3.5 py-3 text-left text-[0.875rem] whitespace-normal **:data-[slot=button-label]:min-w-0 **:data-[slot=button-label]:flex-1 **:data-[slot=button-label]:wrap-break-word **:data-[slot=button-label]:whitespace-normal sm:h-12 sm:w-auto sm:justify-center sm:gap-3 sm:px-6 sm:py-0 sm:text-base sm:**:data-[slot=button-label]:flex-none sm:**:data-[slot=button-label]:whitespace-nowrap"
              iconPosition="end"
              iconLeading={
                <SiteIcon
                  icon={siteIcons.help}
                  decorative
                  className="size-5 sm:size-5.5"
                />
              }
            >
              {translations.secondaryCta}
            </Button>
          </div>

          <div className="text-muted-foreground grid gap-1.5 text-[0.8125rem] sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-3 sm:text-sm">
            {translations.reassurance.map((item) => (
              <span
                key={item}
                className="inline-flex min-w-0 items-start gap-2 sm:items-center"
              >
                <SiteIcon
                  icon={siteIcons.security}
                  decorative
                  className="text-primary mt-0.5 size-4 shrink-0 sm:mt-0 sm:size-4.25"
                />
                <span className="min-w-0 wrap-break-word">{item}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-[calc(100%+1rem)] max-w-sm sm:w-[calc(100%+1.5rem)] sm:max-w-md md:max-w-lg lg:mx-0 lg:w-full lg:max-w-104 lg:justify-self-end xl:max-w-none">
          <div className="bg-primary/10 absolute inset-0 -z-10 rounded-[2rem] blur-3xl" />
          <div className="border-border/70 bg-card/95 overflow-hidden rounded-[2rem] border shadow-[0_1.5rem_5rem_-2rem_rgba(18,124,126,0.35)]">
            <div className="border-border/70 text-muted-foreground flex flex-wrap items-center gap-2 border-b px-4 py-3 text-xs sm:flex-nowrap sm:justify-between sm:px-5 sm:text-sm">
              <div className="flex shrink-0 items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-[#f4b184]" />
                <span className="size-2.5 rounded-full bg-[#e8d18b]" />
                <span className="size-2.5 rounded-full bg-[#b7d7c0]" />
              </div>
              <span className="inline-flex min-w-0 flex-1 items-center justify-end gap-2 sm:flex-none">
                <SiteIcon icon={siteIcons.app} decorative className="size-[0.95rem]" />
                <span className="truncate">{translations.mockup.domain}</span>
              </span>
              <span className="hidden w-10 sm:block" />
            </div>

            <div className="space-y-3 p-3.5 sm:space-y-4 sm:p-6 md:p-6 lg:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3 sm:gap-4">
                <div className="min-w-0">
                  <p className="text-muted-foreground text-xs tracking-[0.18em] uppercase">
                    {translations.mockup.date}
                  </p>
                  <h2 className="mt-1 text-lg font-semibold tracking-tight sm:text-2xl md:text-[1.7rem] lg:text-2xl">
                    {translations.mockup.greeting}
                  </h2>
                </div>
                <div className="ml-auto flex -space-x-2">
                  {translations.mockup.profiles.map((profile) => (
                    <span
                      key={profile.label}
                      className={`border-background flex size-8 items-center justify-center rounded-full border-2 text-xs font-semibold ${getProfileToneClass(profile.tone)}`}
                    >
                      {profile.label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-border/70 bg-background/75 space-y-3 rounded-[1.25rem] border p-3 sm:rounded-[1.5rem] sm:p-4 md:p-4">
                <div className="text-muted-foreground flex flex-wrap items-center justify-between gap-2 text-sm">
                  <span className="text-foreground inline-flex min-w-0 items-center gap-2 font-medium">
                    <SiteIcon
                      icon={siteIcons.pill}
                      decorative
                      className="text-primary size-4"
                    />
                    <span className="min-w-0 wrap-break-word">
                      {translations.mockup.dosesTitle}
                    </span>
                  </span>
                  <span className="inline-flex shrink-0 items-center gap-2">
                    <SiteIcon
                      icon={siteIcons.package}
                      decorative
                      className="size-[0.95rem]"
                    />
                    {translations.mockup.dosesProgress}
                  </span>
                </div>

                <div className="space-y-2.5">
                  {translations.mockup.items.map((item) => (
                    <div
                      key={`${item.name}-${item.time}`}
                      className="border-border/70 bg-card flex items-center gap-2.5 rounded-[1rem] border px-2.5 py-2.5 sm:gap-3 sm:rounded-[1.125rem] sm:px-3 sm:py-3 md:px-3.5"
                    >
                      <span className="bg-secondary text-primary flex size-9 shrink-0 items-center justify-center rounded-full sm:size-10">
                        <SiteIcon
                          icon={siteIcons.pill}
                          decorative
                          className="size-4 sm:size-4.5"
                        />
                      </span>

                      <div className="min-w-0 flex-1">
                        <p className="text-foreground truncate font-medium">
                          {item.name}
                        </p>
                        <p className="text-muted-foreground text-xs sm:text-sm">
                          {item.person} · {item.time}
                        </p>
                      </div>

                      <span
                        className={
                          item.complete
                            ? "bg-accent text-accent-foreground inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-1 text-[0.6875rem] font-medium sm:px-3 sm:text-xs"
                            : "border-border text-foreground inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-1 text-[0.6875rem] font-medium sm:px-3 sm:text-xs"
                        }
                      >
                        {item.complete ? (
                          <SiteIcon
                            icon={siteIcons.check}
                            decorative
                            className="size-3.5"
                          />
                        ) : (
                          <SiteIcon
                            icon={siteIcons.reminder}
                            decorative
                            className="size-3.5"
                          />
                        )}
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
                <div className="border-border/70 bg-background/75 rounded-[1.125rem] border p-3 sm:rounded-[1.25rem] sm:p-4">
                  <p className="text-muted-foreground inline-flex items-center gap-2 text-xs sm:text-sm">
                    <SiteIcon icon={siteIcons.package} decorative className="size-4" />
                    {translations.mockup.activeMedications.label}
                  </p>
                  <p className="text-foreground mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                    {translations.mockup.activeMedications.value}
                  </p>
                  <p className="text-muted-foreground mt-1 text-xs sm:text-sm">
                    {translations.mockup.activeMedications.caption}
                  </p>
                </div>
                <div className="border-border/70 bg-background/75 rounded-[1.125rem] border p-3 sm:rounded-[1.25rem] sm:p-4">
                  <p className="text-muted-foreground inline-flex items-center gap-2 text-xs sm:text-sm">
                    <SiteIcon icon={siteIcons.reminder} decorative className="size-4" />
                    {translations.mockup.nextReminder.label}
                  </p>
                  <p className="text-foreground mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                    {translations.mockup.nextReminder.value}
                  </p>
                  <p className="text-muted-foreground mt-1 text-xs sm:text-sm">
                    {translations.mockup.nextReminder.caption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
}
