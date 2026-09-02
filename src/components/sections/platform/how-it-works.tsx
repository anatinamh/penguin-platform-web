import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { getPlatform } from "@/content";
import type { Locale } from "@/lib/i18n";

const stepIcons = [
  <svg key="deploy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <rect x={3} y={4} width={18} height={6} rx={1.5} />
    <rect x={3} y={14} width={18} height={6} rx={1.5} />
    <path d="M7 7h.01M7 17h.01" />
  </svg>,
  <svg key="connect" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M9 3v4a2 2 0 0 1-2 2H3M15 3v4a2 2 0 0 0 2 2h4M9 21v-4a2 2 0 0 0-2-2H3M15 21v-4a2 2 0 0 1 2-2h4" />
  </svg>,
  <svg key="build" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M12 2 3 6v6c0 5 4 8 9 10 5-2 9-5 9-10V6z" />
  </svg>,
  <svg key="brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M13 2 3 14h7l-1 8 10-12h-7z" />
  </svg>,
];

function StepDescription({ text, strong }: { text: string; strong?: string }) {
  if (!strong || !text.includes(strong)) return <>{text}</>;
  const [before, after] = text.split(strong);
  return (
    <>
      {before}
      <strong className="font-semibold text-foreground">{strong}</strong>
      {after}
    </>
  );
}

export function HowItWorks({ locale }: { locale: Locale }) {
  const { howItWorks } = getPlatform(locale);
  return (
    <section id="how-it-works" className="hiw-scene bg-secondary px-8 py-24 sm:py-32">
      <Container className="max-w-[1120px]">
        <div className="head mb-14 text-center">
          <div className="text-sm font-medium text-primary">
            {howItWorks.eyebrow}
          </div>
          <h2 className="mx-auto mt-3 max-w-2xl text-balance font-heading text-3xl font-medium tracking-tight sm:text-4xl">
            {howItWorks.title}
          </h2>
        </div>

        <div className="rail-row" aria-hidden>
          {howItWorks.steps.map((step, i) => (
            <div className="rail-col" key={step.number}>
              <div className={`step-icon n${i + 1}`}>{stepIcons[i]}</div>
              {i < howItWorks.steps.length - 1 ? (
                <div className={`rail-seg seg${i + 1}`}>
                  <div className="rail-fill" />
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="steps">
          {howItWorks.steps.map((step, i) => (
            <div className={`step s${i + 1}`} key={step.number}>
              <div className="step-num">{step.number}</div>
              <div className="step-title">{step.title}</div>
              <p className="step-desc">
                <StepDescription
                  text={step.description}
                  strong={"strong" in step ? step.strong : undefined}
                />
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="cta-glow" asChild>
            <Link href="/platform">
              Explore platform
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
