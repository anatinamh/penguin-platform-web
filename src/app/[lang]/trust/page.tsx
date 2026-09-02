import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ScreenshotFigure } from "@/components/shared/screenshot-figure";
import { TrustHero } from "@/components/sections/trust/hero";
import { Control } from "@/components/sections/trust/control";
import { FinalCta } from "@/components/sections/shared/final-cta";
import { getTrust } from "@/content";
import { alternatesFor, canonicalFor, defaultLocale, isLocale } from "@/lib/i18n";

type LangParams = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const { trustHeader, control } = getTrust(locale);
  return {
    title: `${trustHeader.eyebrow} — Pengui AI`,
    description: control.subtitle,
    alternates: {
      canonical: canonicalFor("/trust", locale),
      ...alternatesFor("/trust"),
    },
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
          <ScreenshotFigure
            src={`/screenshots/permissions-${locale}.webp`}
            alt={trustHeader.screenshotLabel}
            width={1536}
            height={1147}
            caption={trustHeader.figureCaption}
            badges={[
              { icon: "key-round", label: trustHeader.figureBadges.access },
              { icon: "scroll-text", label: trustHeader.figureBadges.audit },
            ]}
          />
        </Container>
      </section>
      <FinalCta locale={locale} />
    </>
  );
}
