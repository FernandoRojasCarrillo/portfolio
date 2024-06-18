import { TypeLocale } from "i18n-config";

export type HeroProps = {
  data: {
    label: string;
    title: string;
    subtitle: string;
    button: {
      text: string;
      link: string;
    };
    image: {
      src: string;
      alt: string;
    };
  };
  language: TypeLocale;
};
