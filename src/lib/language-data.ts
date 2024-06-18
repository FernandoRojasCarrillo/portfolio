import "server-only";
import type { TypeLocale } from "../../i18n-config";

export const getLanguageData = async (
  locale: string,
  path: string,
  files: string[]
) => {
  const promises = files.map(async (file) => {
    try {
      const response = await import(
        `@/data/locales/${locale}/${path}/${file}.json`
      );
      return { [file]: response.default[file] };
    } catch (err) {
      return { [file]: null };
    }
  });

  const results = await Promise.all(promises);
  return Object.assign({}, ...results);
};
