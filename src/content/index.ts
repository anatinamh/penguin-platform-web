// Single entry point for locale-aware content. Components take a `locale` prop
// and read what they need from here, so adding a language never means touching
// a component.

import type { Locale } from "@/lib/i18n";
import { site as siteEn } from "./site.en";
import { site as siteEs } from "./site.es";

const bundles = {
  en: { site: siteEn },
  es: { site: siteEs },
} as const;

export function getSite(locale: Locale) {
  return bundles[locale].site;
}
