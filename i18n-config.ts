export const i18n = {
  locales: ["es", "en"],
  defaultLocale: "es",
} as const;

export type TypeLocale = (typeof i18n)["locales"][number];
