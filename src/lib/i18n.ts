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

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
};

/** Short label for the toggle; the full name goes in the accessible name. */
export const localeShortNames: Record<Locale, string> = {
  en: "EN",
  es: "ES",
};
