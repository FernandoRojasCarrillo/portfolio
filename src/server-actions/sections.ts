"use server";

import { getLanguageData } from "@/lib/language-data";
import { TypeLocale } from "i18n-config";

const sections = ["hero", "about", "experience", "recentProjects"];

export const getSectionsData = async (locale: TypeLocale) => {
  return await getLanguageData(locale, "sections", sections);
};
