import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { RequestDemoForm } from "@/components/sections/request-demo/form";
import { RequestDemoVisualPanel } from "@/components/sections/request-demo/visual-panel";
import { getRequestDemo } from "@/content";
import { alternatesFor, canonicalFor, defaultLocale, isLocale } from "@/lib/i18n";

type LangParams = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const { requestDemoHeader } = getRequestDemo(locale);
  return {
    title: `${requestDemoHeader.eyebrow} — Pengui AI`,
    description: requestDemoHeader.subtitle,
    alternates: {
      canonical: canonicalFor("/request-demo", locale),
      ...alternatesFor("/request-demo"),
    },
  };
}

export default async function RequestDemoPage({ params }: LangParams) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const { requestDemoHeader } = getRequestDemo(locale);

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-primary">{requestDemoHeader.eyebrow}</span>
          <h1 className="mt-3 text-balance font-heading text-3xl font-medium tracking-tight sm:text-4xl">
            {requestDemoHeader.title}
          </h1>
          <p className="mt-4 text-pretty text-muted-foreground">{requestDemoHeader.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <RequestDemoForm locale={locale} />
          <RequestDemoVisualPanel />
        </div>
      </Container>
    </section>
  );
}
