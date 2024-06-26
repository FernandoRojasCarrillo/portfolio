import es from "../src/data/locales/es.json";

type Messages = typeof es;

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}
