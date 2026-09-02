import type { Metadata } from "next";
import { PlatformHero } from "@/components/sections/platform/hero";
import { Interconnections } from "@/components/sections/platform/interconnections";
import { ServicePaths } from "@/components/sections/platform/service-paths";
import { ProductOffering } from "@/components/sections/home/product-offering";
import { Difference } from "@/components/sections/platform/difference";
import { FinalCta } from "@/components/sections/shared/final-cta";
import { getPlatform } from "@/content";
import { alternatesFor, canonicalFor, defaultLocale, isLocale } from "@/lib/i18n";

type LangParams = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const { platformHeader } = getPlatform(locale);
  return {
    title: `${platformHeader.eyebrow} — Pengui AI`,
    description: platformHeader.subtitle,
    alternates: {
      canonical: canonicalFor("/platform", locale),
      ...alternatesFor("/platform"),
    },
  };
}

export default async function PlatformPage({ params }: LangParams) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;

  return (
    <>
      <PlatformHero locale={locale} />
      <Interconnections locale={locale} />
      <ServicePaths locale={locale} />
      <ProductOffering locale={locale} />
      <Difference locale={locale} />
      <FinalCta locale={locale} />
    </>
  );
}
