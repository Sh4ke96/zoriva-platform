"use client";

import { useEffect, type ReactNode } from "react";
import Link from "next/link";

import { MarketingNavbar } from "@/components/marketing/navbar";
import localesHomeEn from "@/locales/home/en.json";
import localesHomePl from "@/locales/home/pl.json";
import { resolveGuestShellContent, selectLocale } from "@/lib/locale";
import { siteIcons, SiteIcon } from "@/lib/site-icons";
import { useLocale } from "@/components/providers/locale-provider";
import { LayoutContainer } from "@/components/ui/layout-container";
import { Locales } from "@/types/locale";

const socialIconMap = {
  facebook: siteIcons.facebook,
  instagram: siteIcons.instagram,
  linkedin: siteIcons.linkedin,
  tiktok: siteIcons.tiktok,
  twitterX: siteIcons.twitterX,
} as const;

const MARKETING_SCROLL_TARGET_KEY = "zoriva-marketing-scroll-target";

type MarketingPageShellProps = {
  children: ReactNode;
};

export function MarketingPageShell({ children }: MarketingPageShellProps) {
  useEffect(() => {
    const sectionId = window.sessionStorage.getItem(MARKETING_SCROLL_TARGET_KEY);

    if (!sectionId) {
      return;
    }

    window.sessionStorage.removeItem(MARKETING_SCROLL_TARGET_KEY);

    window.requestAnimationFrame(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  return (
    <div className="bg-background flex flex-1 flex-col">
      <MarketingNavbar />
      <main id="top" className="flex-1">
        {children}
      </main>
      <MarketingFooter />
    </div>
  );
}

export function MarketingFooter() {
  const { locale } = useLocale();
  const translations: typeof localesHomePl = selectLocale(
    {
      [Locales.En]: localesHomeEn,
      [Locales.Pl]: localesHomePl,
    },
    locale,
  );
  const guestShell = resolveGuestShellContent(translations.guestShell);

  return (
    <footer className="border-border/60 border-t bg-[linear-gradient(180deg,rgba(248,247,242,0)_0%,rgba(232,242,241,0.18)_100%)] pt-10 pb-7 sm:pt-11 sm:pb-8 lg:pt-12 lg:pb-8">
      <LayoutContainer width="wide" className="space-y-7">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_repeat(4,minmax(0,1fr))] lg:gap-x-12 lg:gap-y-8">
          <div className="max-w-sm space-y-3.5 lg:pr-6">
            <div className="flex items-center gap-3 text-[1.75rem] font-semibold tracking-tight">
              <span className="bg-primary text-primary-foreground inline-flex size-11 items-center justify-center rounded-full shadow-sm">
                <SiteIcon icon={siteIcons.app} decorative className="size-5.5" />
              </span>
              <span>{guestShell.brand}</span>
            </div>
            <p className="text-muted-foreground text-[1.02rem] leading-7">
              {guestShell.footer.brandDescription}
            </p>
            <div className="flex items-center gap-2 pt-1">
              {guestShell.footer.socialLinks.map((link) => {
                const socialIcon =
                  socialIconMap[link.icon as keyof typeof socialIconMap] ?? siteIcons.app;

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    title={link.label}
                    className="border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/20 hover:bg-muted inline-flex size-10 items-center justify-center rounded-full border transition-colors"
                  >
                    <SiteIcon icon={socialIcon} decorative className="size-4.5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {guestShell.footer.columns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="text-foreground text-lg font-semibold tracking-tight">
                {column.title}
              </h3>
              <ul className="space-y-3 text-base">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-border/60 text-muted-foreground flex flex-col gap-3 border-t pt-4 text-sm sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <p>{guestShell.footer.copyright}</p>
          <p>{guestShell.footer.disclaimer}</p>
        </div>
      </LayoutContainer>
    </footer>
  );
}
