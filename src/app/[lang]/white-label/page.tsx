import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ProductScreenshot } from "@/components/shared/product-screenshot";
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
  const { whiteLabelClosing, whiteLabelHeader } = getWhiteLabel(locale);

  return (
    <>
      <WhiteLabelHero locale={locale} />
      <PresetDemo locale={locale} />
      <WhiteLabelFeatures locale={locale} />
      <section className="py-24 sm:py-32">
        <Container>
          <ProductScreenshot
            src={`/screenshots/branding-${locale}.webp`}
            aspect="67/50"
            label={whiteLabelHeader.screenshotLabel}
            caption={whiteLabelHeader.figureCaption}
          />
        </Container>
      </section>
      <Container className="py-16 text-center">
        <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
          {whiteLabelClosing}
        </p>
      </Container>
      <FinalCta locale={locale} />
    </>
  );
}
