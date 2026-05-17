"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  LOCALE_COOKIE_KEY,
  LOCALE_STORAGE_KEY,
  selectLocalizedMetadata,
  type LocalizedMetadataMap,
} from "@/lib/locale";
import { DEFAULT_LOCALE, Locales, type Locale } from "@/types/locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

type LocaleProviderProps = {
  children: ReactNode;
};

function isLocale(value: string | null): value is Locale {
  return value === Locales.Pl || value === Locales.En;
}

export function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return DEFAULT_LOCALE;
    }

    const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);

    return isLocale(storedLocale) ? storedLocale : DEFAULT_LOCALE;
  });

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    document.cookie = `${LOCALE_COOKIE_KEY}=${locale}; path=/; max-age=31536000; samesite=lax`;
  }, [locale]);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale: (nextLocale) => {
        setLocaleState(nextLocale);
      },
    }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider.");
  }

  return context;
}

type LocalizedDocumentMetadataProps = {
  metadataByLocale: LocalizedMetadataMap;
};

export function LocalizedDocumentMetadata({
  metadataByLocale,
}: LocalizedDocumentMetadataProps) {
  const { locale } = useLocale();

  useEffect(() => {
    const metadata = selectLocalizedMetadata(metadataByLocale, locale);

    document.title = metadata.title;

    const descriptionElement = document.querySelector('meta[name="description"]');

    if (descriptionElement) {
      descriptionElement.setAttribute("content", metadata.description);
    }
  }, [locale, metadataByLocale]);

  return null;
}
