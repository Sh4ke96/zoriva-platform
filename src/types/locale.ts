export const Locales = {
  En: "en",
  Pl: "pl",
} as const;

export type Locale = (typeof Locales)[keyof typeof Locales];

export const DEFAULT_LOCALE: Locale = Locales.Pl;
