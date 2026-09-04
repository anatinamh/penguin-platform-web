import { Container } from "@/components/layout/container";
import { getTrust } from "@/content";
import type { Locale } from "@/lib/i18n";

export function TrustHero({ locale }: { locale: Locale }) {
  const { trustHeader } = getTrust(locale);
  return (
    <section
      className="relative overflow-hidden border-b border-border/60 py-24 sm:py-32"
      style={{
        backgroundImage:
          "radial-gradient(55% 60% at 85% 20%, color-mix(in oklch, var(--primary) 13%, transparent) 0%, transparent 64%), radial-gradient(45% 50% at 5% 90%, color-mix(in oklch, var(--mascot-blue) 7%, transparent) 0%, transparent 64%)",
        backgroundColor: "var(--background)",
      }}
    >
      <Container className="relative flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-10">
        <div className="w-full text-center lg:flex-1 lg:text-left">
          <span className="text-sm font-medium text-primary">{trustHeader.eyebrow}</span>
          <h1 className="mt-3 max-w-xl text-balance font-heading text-4xl font-medium tracking-tight sm:text-5xl">
            {trustHeader.title}
          </h1>
          <p className="mt-4 max-w-md text-pretty text-lg text-muted-foreground lg:mx-0">
            {trustHeader.subtitle}
          </p>
        </div>

        <div className="w-full lg:flex-1">
          <div className="relative mx-auto flex max-w-[420px] items-center justify-center py-6">
            <svg viewBox="0 0 260 300" className="relative w-56 drop-shadow-xl" aria-hidden>
              <defs>
                <linearGradient id="shieldGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--mascot-blue)" />
                  <stop offset="100%" stopColor="var(--primary)" />
                </linearGradient>
                <linearGradient id="shieldFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.02" />
                </linearGradient>
              </defs>
              <path
                d="M130 8 L238 46 C238 46 244 168 130 292 C16 168 22 46 22 46 Z"
                fill="url(#shieldFill)"
              />
              <path
                d="M130 8 L238 46 C238 46 244 168 130 292 C16 168 22 46 22 46 Z"
                stroke="url(#shieldGrad)"
                strokeWidth={7}
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M84 148 L118 182 L182 108"
                stroke="var(--primary)"
                strokeWidth={9}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </Container>
    </section>
  );
}
