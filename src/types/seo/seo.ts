export type MetadataPropos = {
  es: HeadSeoProps;
  en: HeadSeoProps;
};

export type HeadSeoProps = {
  title: string;
  description: string;
  image: string;
  url: string;
};

export type LanguagesProps = "es" | "en";
