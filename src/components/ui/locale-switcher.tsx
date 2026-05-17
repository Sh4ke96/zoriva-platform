"use client";

import { useState } from "react";

import { useLocale } from "@/components/providers/locale-provider";
import localesHomeEn from "@/locales/home/en.json";
import localesHomePl from "@/locales/home/pl.json";
import { selectLocale } from "@/lib/locale";
import { siteIcons, SiteIcon } from "@/lib/site-icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Locales, type Locale } from "@/types/locale";

type LocaleSwitcherProps = {
  className?: string;
  variant?: "full" | "icon";
};

export function LocaleSwitcher({ className, variant = "full" }: LocaleSwitcherProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { locale, setLocale } = useLocale();
  const translations: typeof localesHomePl.navbar.language = selectLocale(
    {
      [Locales.En]: localesHomeEn.navbar.language,
      [Locales.Pl]: localesHomePl.navbar.language,
    },
    locale,
  );

  const localeOptions: Array<{ code: Locale; label: string }> = [
    { code: Locales.Pl, label: translations.pl },
    { code: Locales.En, label: translations.en },
  ];
  const currentLocaleLabel = locale === Locales.Pl ? translations.pl : translations.en;

  const trigger =
    variant === "icon" ? (
      <Button
        type="button"
        variant="outline"
        size="icon-sm"
        className={className}
        aria-label={`${translations.label}: ${currentLocaleLabel}`}
        title={`${translations.label}: ${currentLocaleLabel}`}
        iconLeading={
          <SiteIcon icon={siteIcons.language} decorative className="size-4.5" />
        }
      >
        <span className="sr-only">{`${translations.label}: ${currentLocaleLabel}`}</span>
      </Button>
    ) : (
      <Button
        type="button"
        variant="outline"
        size="sm"
        className={className}
        aria-label={`${translations.label}: ${currentLocaleLabel}`}
        iconLeading={
          <SiteIcon icon={siteIcons.language} decorative className="size-4.5" />
        }
      >
        {currentLocaleLabel}
      </Button>
    );

  return (
    <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <DropdownMenuTrigger render={trigger} />
      <DropdownMenuContent align="end" className="min-w-36">
        <DropdownMenuRadioGroup
          aria-label={translations.label}
          value={locale}
          onValueChange={(value) => {
            if (value === Locales.Pl || value === Locales.En) {
              setLocale(value);
              setIsMenuOpen(false);
            }
          }}
        >
          {localeOptions.map((option) => (
            <DropdownMenuRadioItem key={option.code} value={option.code}>
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
