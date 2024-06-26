import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // All locales across all domains//
  locales: ["es", "en"],

  // Used when no domain matches (e.g. on localhost)
  defaultLocale: "es",
  localePrefix: "as-needed",
  localeDetection: false,
  // localePrefix: 'never',

  // domains: [
  //     {
  //         domain: 'www.cadizcompara.com',
  //         defaultLocale: 'es',
  //         locales: ['es']
  //     },
  //     {
  //         domain: 'www.eva.insurance',
  //         defaultLocale: 'en',
  //         locales: ['en']
  //     }
  // ],

  pathnames: {
    // If all locales use the same pathname, a single
    // external path can be used for all locales.
    "/": "/",

    // If locales use different paths, you can
    // specify each external path per locale.
    // '/comparator': {
    //     suajili: '/comparator',
    //     es: '/comparador'
    // },

    // Dynamic params are supported via square brackets
    // '/news/[articleSlug]-[articleId]': {
    //     en: '/news/[articleSlug]-[articleId]',
    //     de: '/neuigkeiten/[articleSlug]-[articleId]'
    // },

    // Static pathnames that overlap with dynamic segments
    // will be prioritized over the dynamic segment
    // '/news/just-in': {
    //     en: '/news/just-in',
    //     de: '/neuigkeiten/aktuell'
    // },

    // Also (optional) catch-all segments are supported
    // '/categories/[...slug]': {
    //     en: '/categories/[...slug]',
    //     de: '/kategorien/[...slug]'
    // }
  },
});

export const config = {
  matcher: [
    // Match only internationalized pathnames
    // matcher: ['/', '/(es|en)/:path*']

    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`

    // - … the ones containing a dot (e.g. `favicon.ico`)
    "/((?!api|_next|_vercel|.*\\..*).*)",

    // However, match all pathnames within `/users`, optionally with a locale prefix
    // '/([\\w-]+)?/comparator/(.+)'
  ],
};
