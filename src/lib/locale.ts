import { DEFAULT_LOCALE, Locales, type Locale } from "@/types/locale";

export const LOCALE_STORAGE_KEY = "zoriva-locale";
export const LOCALE_COOKIE_KEY = "zoriva-locale";

export type LocalizedMetadata = {
  description: string;
  title: string;
};

export type LocalizedMetadataMap = Record<Locale, LocalizedMetadata>;

export type GuestShellNavigationItem = {
  href: string;
  icon: string;
  label: string;
};

export type GuestShellFooterLink = {
  href: string;
  label: string;
};

export type GuestShellSocialLink = GuestShellFooterLink & {
  icon: string;
};

export type GuestShellFooterColumn = {
  links: GuestShellFooterLink[];
  title: string;
};

export type GuestShellContent = {
  auth: {
    login: string;
    signup: string;
  };
  brand: string;
  footer: {
    brandDescription: string;
    columns: GuestShellFooterColumn[];
    copyright: string;
    disclaimer: string;
    productExtraLinks: GuestShellFooterLink[];
    productTitle: string;
    socialLinks: GuestShellSocialLink[];
  };
  navigation: GuestShellNavigationItem[];
};

export type ResolvedGuestShellContent = {
  auth: GuestShellContent["auth"];
  brand: string;
  footer: {
    brandDescription: string;
    columns: GuestShellFooterColumn[];
    copyright: string;
    disclaimer: string;
    socialLinks: GuestShellSocialLink[];
  };
  navigation: GuestShellNavigationItem[];
};

export function getMetadataLocale(locale: string | undefined): Locale {
  return locale === Locales.En || locale === Locales.Pl ? locale : DEFAULT_LOCALE;
}

export function selectLocalizedMetadata(
  metadataByLocale: LocalizedMetadataMap,
  locale: string | undefined,
): LocalizedMetadata {
  return metadataByLocale[getMetadataLocale(locale)];
}

export function resolveGuestShellContent(
  content: GuestShellContent,
): ResolvedGuestShellContent {
  return {
    auth: content.auth,
    brand: content.brand,
    navigation: content.navigation,
    footer: {
      brandDescription: content.footer.brandDescription,
      columns: [
        {
          title: content.footer.productTitle,
          links: [
            ...content.navigation.map(({ href, label }) => ({ href, label })),
            ...content.footer.productExtraLinks,
          ],
        },
        ...content.footer.columns,
      ],
      copyright: content.footer.copyright,
      disclaimer: content.footer.disclaimer,
      socialLinks: content.footer.socialLinks,
    },
  };
}

export function selectLocale<T>(
  translations: Partial<Record<Locale, T>>,
  locale: Locale = DEFAULT_LOCALE,
): T {
  const selected = translations[locale] ?? translations[DEFAULT_LOCALE];

  if (selected) {
    return selected;
  }

  const firstAvailable = Object.values(translations)[0];

  if (firstAvailable) {
    return firstAvailable;
  }

  throw new Error("No translations provided for the requested locale.");
}
