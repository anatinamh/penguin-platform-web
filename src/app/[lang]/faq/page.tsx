import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { VisionMission } from "@/components/sections/faq/vision-mission";
import { FaqCategories } from "@/components/sections/faq/categories";
import { FinalCta } from "@/components/sections/shared/final-cta";
import { getFaq } from "@/content";
import { alternatesFor, canonicalFor, defaultLocale, isLocale } from "@/lib/i18n";

type LangParams = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const { faqHeader } = getFaq(locale);
  return {
    title: `${faqHeader.eyebrow} — Pengui AI`,
    description: faqHeader.title,
    alternates: {
      canonical: canonicalFor("/faq", locale),
      ...alternatesFor("/faq"),
    },
  };
}

export default async function FaqPage({ params }: LangParams) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const { faqHeader } = getFaq(locale);

  return (
    <>
      <PageHeader eyebrow={faqHeader.eyebrow} title={faqHeader.title} />
      <VisionMission locale={locale} />
      <div id="faq">
        <FaqCategories locale={locale} />
      </div>
      <FinalCta locale={locale} />
    </>
  );
}
