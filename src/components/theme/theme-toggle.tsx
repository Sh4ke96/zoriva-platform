"use client";

import { useTheme } from "next-themes";
import { useId, useState, useSyncExternalStore } from "react";

import localesCommonEn from "@/locales/common/en.json";
import localesCommonPl from "@/locales/common/pl.json";
import { selectLocale } from "@/lib/locale";
import { siteIcons, SiteIcon } from "@/lib/site-icons";
import { useLocale } from "@/components/providers/locale-provider";
import { Locales } from "@/types/locale";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type ThemeToggleProps = {
  variant?: "segmented" | "icon";
};

function subscribe() {
  return () => {};
}

export function ThemeToggle({ variant = "segmented" }: ThemeToggleProps) {
  const toggleId = useId().replace(/:/g, "");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { locale } = useLocale();
  const translations: typeof localesCommonPl = selectLocale(
    {
      [Locales.En]: localesCommonEn,
      [Locales.Pl]: localesCommonPl,
    },
    locale,
  );
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  const iconSize = variant === "icon" ? "icon-sm" : "sm";
  const lightIcon = <SiteIcon icon={siteIcons.sun} decorative className="size-4.5" />;
  const darkIcon = <SiteIcon icon={siteIcons.moon} decorative className="size-4.5" />;

  if (variant === "icon") {
    const isDark = mounted && resolvedTheme === "dark";
    const toggleIcon = isDark ? lightIcon : darkIcon;
    const currentLabel = isDark ? translations.theme.dark : translations.theme.light;

    return (
      <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <DropdownMenuTrigger
          render={
            <Button
              id={`${toggleId}-toggle`}
              aria-label={currentLabel}
              title={currentLabel}
              data-testid="theme-toggle"
              size={iconSize}
              variant="outline"
              iconLeading={mounted ? toggleIcon : darkIcon}
            >
              <span className="sr-only">{currentLabel}</span>
            </Button>
          }
        />
        <DropdownMenuContent align="end" className="min-w-40">
          <DropdownMenuRadioGroup
            aria-label="Theme"
            value={mounted && resolvedTheme === "dark" ? "dark" : "light"}
            onValueChange={(value) => {
              if (value === "light" || value === "dark") {
                setTheme(value);
                setIsMenuOpen(false);
              }
            }}
          >
            <DropdownMenuRadioItem value="light">
              {translations.theme.light}
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dark">
              {translations.theme.dark}
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  if (!mounted) {
    return (
      <div className="flex items-center gap-2">
        <Button
          id={`${toggleId}-light`}
          aria-label={translations.theme.light}
          data-testid="theme-light"
          size={iconSize}
          variant="outline"
          iconLeading={lightIcon}
        >
          {translations.theme.light}
        </Button>
        <Button
          id={`${toggleId}-dark`}
          aria-label={translations.theme.dark}
          data-testid="theme-dark"
          size={iconSize}
          variant="outline"
          iconLeading={darkIcon}
        >
          {translations.theme.dark}
        </Button>
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex items-center gap-2">
      <Button
        id={`${toggleId}-light`}
        aria-label={translations.theme.light}
        data-testid="theme-light"
        size={iconSize}
        variant={isDark ? "outline" : "default"}
        iconLeading={lightIcon}
        onClick={() => setTheme("light")}
      >
        {translations.theme.light}
      </Button>
      <Button
        id={`${toggleId}-dark`}
        aria-label={translations.theme.dark}
        data-testid="theme-dark"
        size={iconSize}
        variant={isDark ? "default" : "outline"}
        iconLeading={darkIcon}
        onClick={() => setTheme("dark")}
      >
        {translations.theme.dark}
      </Button>
    </div>
  );
}
