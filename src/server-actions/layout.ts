"use server";

import { getLanguageData } from "@/lib/language-data";
import { TypeLocale } from "i18n-config";

const layout = ["header", "footer"];

export const getLayoutData = async (locale: TypeLocale) => {
  return await getLanguageData(locale, "layout", layout);
};
