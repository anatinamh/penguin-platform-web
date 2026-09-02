import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ProductScreenshot } from "@/components/shared/product-screenshot";
import { TrustHero } from "@/components/sections/trust/hero";
import { Control } from "@/components/sections/trust/control";
import { FinalCta } from "@/components/sections/shared/final-cta";
import { getTrust } from "@/content";
import { defaultLocale, isLocale } from "@/lib/i18n";

type LangParams = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const { trustHeader, control } = getTrust(locale);
  return {
    title: `${trustHeader.eyebrow} — Pengui AI`,
    description: control.subtitle,
  };
}

export default async function TrustPage({ params }: LangParams) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const { trustHeader } = getTrust(locale);

  return (
    <>
      <TrustHero locale={locale} />
      <Control locale={locale} />
      <section className="py-24 sm:py-32">
        <Container>
          <ProductScreenshot
            src={`/screenshots/permissions-${locale}.webp`}
            aspect="67/50"
            label={trustHeader.screenshotLabel}
            caption={trustHeader.figureCaption}
          />
        </Container>
      </section>
      <FinalCta locale={locale} />
    </>
  );
}
