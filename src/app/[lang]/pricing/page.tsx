import type { Metadata } from "next";
import { PricingHeader } from "@/components/sections/pricing/header";
import { Tiers } from "@/components/sections/pricing/tiers";
import { PriceLevers } from "@/components/sections/pricing/price-levers";
import { FinalCta } from "@/components/sections/shared/final-cta";
import { getPricing } from "@/content";
import { alternatesFor, canonicalFor, defaultLocale, isLocale } from "@/lib/i18n";

type LangParams = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const { pricingHeader } = getPricing(locale);
  return {
    title: `${pricingHeader.eyebrow} — Pengui AI`,
    description: pricingHeader.subtitle,
    alternates: {
      canonical: canonicalFor("/pricing", locale),
      ...alternatesFor("/pricing"),
    },
  };
}

export default async function PricingPage({ params }: LangParams) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;

  return (
    <>
      <PricingHeader locale={locale} />
      <Tiers locale={locale} />
      <PriceLevers locale={locale} />
      <FinalCta locale={locale} />
    </>
  );
}
