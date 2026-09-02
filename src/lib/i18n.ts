// Locale plumbing. English lives at the site root (/platform, /pricing…) so
// every URL that was already indexed keeps working; Spanish is prefixed
// (/es/platform). Nothing auto-redirects — a shared link always opens in the
// language it was written in, and the header toggle is the only way to switch.

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Prefixes a root-relative href for the given locale. `/platform` → `/es/platform`. */
export function localizeHref(href: string, locale: Locale): string {
  if (locale === defaultLocale) return href;
  // Leave anchors, external links and mailto alone.
  if (!href.startsWith("/")) return href;
  return href === "/" ? `/${locale}` : `/${locale}${href}`;
}

/** The same page in the other language, for the header toggle. */
export function switchLocalePath(pathname: string, to: Locale): string {
  const stripped = stripLocale(pathname);
  return localizeHref(stripped, to);
}

/** `/es/platform` → `/platform`; `/platform` → `/platform`. */
export function stripLocale(pathname: string): string {
  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    if (pathname === `/${locale}`) return "/";
    if (pathname.startsWith(`/${locale}/`)) return pathname.slice(locale.length + 1);
  }
  return pathname;
}

/**
 * Canonical + hreflang for one page, as Next's Metadata `alternates`.
 *
 * Without this, /platform and /es/platform look to a crawler like two separate
 * pages carrying the same content: it picks one and usually drops the other.
 * hreflang says "these are the same page in two languages", and canonical says
 * which URL is the official one for each.
 *
 * This has to be declared per page. Setting it on the shared layout would
 * apply one canonical to every page beneath it — which is what happened first
 * here, telling crawlers /es/platform's canonical was /es.
 *
 * `path` is the route without any locale prefix: "/" , "/platform", …
 */
export function alternatesFor(path: string) {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, localizeHref(path, locale)]),
  ) as Record<Locale, string>;

  return {
    // Each locale's own URL is its canonical; they are alternates of each
    // other, not duplicates of one original.
    languages: {
      ...languages,
      // Anything we don't publish a translation for should land on English.
      "x-default": localizeHref(path, defaultLocale),
    },
  };
}

/** The canonical URL for this page in this locale. */
export function canonicalFor(path: string, locale: Locale) {
  return localizeHref(path, locale);
}

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
};

/** Short label for the toggle; the full name goes in the accessible name. */
export const localeShortNames: Record<Locale, string> = {
  en: "EN",
  es: "ES",
};
