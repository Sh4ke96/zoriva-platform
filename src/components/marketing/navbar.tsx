"use client";

import { useId } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

import localesHomeEn from "@/locales/home/en.json";
import localesHomePl from "@/locales/home/pl.json";
import { resolveGuestShellContent, selectLocale } from "@/lib/locale";
import { siteIcons, SiteIcon } from "@/lib/site-icons";
import { useLocale } from "@/components/providers/locale-provider";
import { Locales } from "@/types/locale";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { LayoutContainer } from "@/components/ui/layout-container";
import { LocaleSwitcher } from "@/components/ui/locale-switcher";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const iconMap = {
  "badge-percent": siteIcons.package,
  "circle-help": siteIcons.help,
  "heart-handshake": siteIcons.security,
  "shield-plus": siteIcons.accessibility,
  sparkles: siteIcons.features,
  users: siteIcons.users,
} as const;

function getNavbarIcon(icon: string) {
  return iconMap[icon as keyof typeof iconMap] ?? siteIcons.app;
}

const MARKETING_SCROLL_TARGET_KEY = "zoriva-marketing-scroll-target";

export function MarketingNavbar() {
  const navbarId = useId().replace(/:/g, "");
  const pathname = usePathname();
  const router = useRouter();
  const { locale } = useLocale();
  const translations: typeof localesHomePl = selectLocale(
    {
      [Locales.En]: localesHomeEn,
      [Locales.Pl]: localesHomePl,
    },
    locale,
  );
  const guestShell = resolveGuestShellContent(translations.guestShell);

  const handleBrandClick = () => {
    if (pathname !== "/") {
      router.push("/");
      return;
    }

    document
      .getElementById("top")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSectionClick = (href: string) => {
    const sectionId = href.startsWith("#") ? href.slice(1) : href;

    if (pathname !== "/") {
      window.sessionStorage.setItem(MARKETING_SCROLL_TARGET_KEY, sectionId);
      router.push("/");
      return;
    }

    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="border-border/70 bg-background/80 sticky top-0 z-40 border-b backdrop-blur-xl">
      <LayoutContainer
        width="wide"
        className="flex min-h-18 items-center justify-between gap-3 py-3 2xl:flex-nowrap 2xl:gap-4 2xl:py-0"
      >
        <button
          type="button"
          onClick={handleBrandClick}
          className="group flex shrink-0 cursor-pointer items-center gap-2 text-[1.0625rem] font-semibold tracking-tight"
        >
          <span className="bg-primary text-primary-foreground flex size-9 items-center justify-center rounded-full shadow-sm">
            <SiteIcon
              icon={siteIcons.app}
              decorative
              className="size-5 transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </span>
          <span>{guestShell.brand}</span>
        </button>

        <nav className="text-muted-foreground hidden items-center justify-center gap-7 text-sm 2xl:flex">
          {guestShell.navigation.map((item) => {
            const iconSrc = getNavbarIcon(item.icon);

            return (
              <button
                type="button"
                key={item.href}
                onClick={() => handleSectionClick(item.href)}
                className="hover:text-foreground group inline-flex cursor-pointer items-center gap-2 transition-colors"
              >
                <SiteIcon
                  icon={iconSrc}
                  decorative
                  className="size-4.5 transition-transform duration-300 ease-in-out group-hover:-translate-y-0.5"
                />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <LocaleSwitcher variant="icon" className="2xl:hidden" />
          <LocaleSwitcher className="hidden 2xl:flex" />
          <ThemeToggle variant="icon" />
          <Button
            id={`${navbarId}-login`}
            variant="ghost"
            size="sm"
            className="hidden 2xl:inline-flex"
            iconLeading={
              <SiteIcon icon={siteIcons.account} decorative className="size-4.5" />
            }
          >
            {guestShell.auth.login}
          </Button>
          <Button
            id={`${navbarId}-signup`}
            size="icon-sm"
            className="2xl:hidden"
            aria-label={guestShell.auth.signup}
            title={guestShell.auth.signup}
            iconLeading={
              <SiteIcon icon={siteIcons.accountCreate} decorative className="size-4.5" />
            }
          >
            <span className="sr-only">{guestShell.auth.signup}</span>
          </Button>
          <Button
            id={`${navbarId}-signup-desktop`}
            size="sm"
            className="hidden px-4 2xl:inline-flex"
            iconLeading={
              <SiteIcon icon={siteIcons.accountCreate} decorative className="size-4.5" />
            }
          >
            {guestShell.auth.signup}
          </Button>
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  type="button"
                  variant="outline"
                  size="icon-sm"
                  className="2xl:hidden"
                  aria-label="Open menu"
                  iconLeading={<SiteIcon icon={Menu} decorative className="size-4.5" />}
                >
                  <span className="sr-only">Open menu</span>
                </Button>
              }
            />
            <SheetContent side="right" className="w-88 p-0" showCloseButton={false}>
              <SheetHeader className="border-border/60 border-b px-5 py-4 text-left">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground flex size-9 items-center justify-center rounded-full shadow-sm">
                      <SiteIcon icon={siteIcons.app} decorative className="size-5" />
                    </span>
                    <SheetTitle>{guestShell.brand}</SheetTitle>
                  </div>
                  <SheetClose
                    render={
                      <Button variant="ghost" size="icon-sm" aria-label="Close menu">
                        <X className="size-4.5" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    }
                  />
                </div>
                <SheetDescription className="sr-only">
                  Mobile navigation menu
                </SheetDescription>
              </SheetHeader>

              <div className="flex flex-col gap-2 p-4">
                {guestShell.navigation.map((item) => {
                  const iconSrc = getNavbarIcon(item.icon);

                  return (
                    <SheetClose
                      key={item.href}
                      render={
                        <button
                          type="button"
                          onClick={() => handleSectionClick(item.href)}
                          className="hover:bg-muted hover:text-foreground inline-flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition-colors"
                        >
                          <SiteIcon icon={iconSrc} decorative className="size-4.5" />
                          {item.label}
                        </button>
                      }
                    />
                  );
                })}

                <div className="border-border/60 mt-2 flex flex-col gap-2 border-t pt-3">
                  <SheetClose
                    render={
                      <Button
                        id={`${navbarId}-login-mobile`}
                        variant="ghost"
                        className="justify-start"
                        iconLeading={
                          <SiteIcon
                            icon={siteIcons.account}
                            decorative
                            className="size-4.5"
                          />
                        }
                      >
                        {guestShell.auth.login}
                      </Button>
                    }
                  />
                  <SheetClose
                    render={
                      <Button
                        id={`${navbarId}-signup-mobile`}
                        className="justify-start"
                        iconLeading={
                          <SiteIcon
                            icon={siteIcons.accountCreate}
                            decorative
                            className="size-4.5"
                          />
                        }
                      >
                        {guestShell.auth.signup}
                      </Button>
                    }
                  />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </LayoutContainer>
    </header>
  );
}
