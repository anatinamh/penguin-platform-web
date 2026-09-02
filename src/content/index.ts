// Single entry point for locale-aware content. Components take a `locale` prop
// and read what they need from here, so adding a language never means touching
// a component.
//
// The English modules are the source of truth; each Spanish sibling pins its
// types to them (`typeof En.foo`), so a missing or misshapen translation is a
// compile error rather than an English string leaking into a Spanish page.

import type { Locale } from "@/lib/i18n";

import { site as siteEn } from "./site.en";
import { site as siteEs } from "./site.es";

import * as homeEn from "./pages/home";
import * as homeEs from "./pages/home.es";
import * as platformEn from "./pages/platform";
import * as platformEs from "./pages/platform.es";
import * as whiteLabelEn from "./pages/white-label";
import * as whiteLabelEs from "./pages/white-label.es";
import * as trustEn from "./pages/trust";
import * as trustEs from "./pages/trust.es";
import * as pricingEn from "./pages/pricing";
import * as pricingEs from "./pages/pricing.es";
import * as faqEn from "./pages/faq";
import * as faqEs from "./pages/faq.es";
import * as requestDemoEn from "./pages/request-demo";
import * as requestDemoEs from "./pages/request-demo.es";

const bundles = {
  en: {
    site: siteEn,
    home: homeEn,
    platform: platformEn,
    whiteLabel: whiteLabelEn,
    trust: trustEn,
    pricing: pricingEn,
    faq: faqEn,
    requestDemo: requestDemoEn,
  },
  es: {
    site: siteEs,
    home: homeEs,
    platform: platformEs,
    whiteLabel: whiteLabelEs,
    trust: trustEs,
    pricing: pricingEs,
    faq: faqEs,
    requestDemo: requestDemoEs,
  },
} satisfies Record<Locale, unknown>;

export function getSite(locale: Locale) {
  return bundles[locale].site;
}

export function getHome(locale: Locale) {
  return bundles[locale].home;
}

export function getPlatform(locale: Locale) {
  return bundles[locale].platform;
}

export function getWhiteLabel(locale: Locale) {
  return bundles[locale].whiteLabel;
}

export function getTrust(locale: Locale) {
  return bundles[locale].trust;
}

export function getPricing(locale: Locale) {
  return bundles[locale].pricing;
}

export function getFaq(locale: Locale) {
  return bundles[locale].faq;
}

export function getRequestDemo(locale: Locale) {
  return bundles[locale].requestDemo;
}
