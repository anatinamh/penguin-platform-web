import type { Metadata } from "next";
import { WhiteLabelHero } from "@/components/sections/white-label/hero";
import { WhiteLabelFeatures } from "@/components/sections/white-label/features";
import { PresetDemo } from "@/components/sections/white-label/preset-demo";
import { FinalCta } from "@/components/sections/shared/final-cta";
import { getWhiteLabel } from "@/content";
import { alternatesFor, canonicalFor, defaultLocale, isLocale } from "@/lib/i18n";

type LangParams = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const { whiteLabelHeader } = getWhiteLabel(locale);
  return {
    title: "White-label — Pengui AI",
    description: whiteLabelHeader.subtitle,
    alternates: {
      canonical: canonicalFor("/white-label", locale),
      ...alternatesFor("/white-label"),
    },
  };
}

export default async function WhiteLabelPage({ params }: LangParams) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  return (
    <>
      <WhiteLabelHero locale={locale} />
      <PresetDemo locale={locale} />
      <WhiteLabelFeatures locale={locale} />
      <FinalCta locale={locale} />
    </>
  );
}
