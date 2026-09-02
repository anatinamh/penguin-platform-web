"use client";

import Link from "next/link";
import { ArrowRight, Check, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { getPricing } from "@/content";
import { type Locale, localizeHref } from "@/lib/i18n";
import { handleGlowMove } from "@/lib/glow";

export function PricingHeader({ locale }: { locale: Locale }) {
  const { pricingHeader, trial } = getPricing(locale);

  return (
    <section
      onMouseMove={handleGlowMove}
      className="ice-field relative overflow-hidden border-b border-border/60 py-24 sm:py-32"
    >
      <div aria-hidden className="ice-glow" />
      {/* Two columns like every other hero on the site: the pitch on the left,
          the thing you can act on immediately on the right. The free trial used
          to live in a banner below the fold — the one offer that should never
          need scrolling to find. */}
      <Container className="relative flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-12">
        <div className="w-full text-center lg:flex-1 lg:text-left">
          <span className="text-sm font-medium text-primary">{pricingHeader.eyebrow}</span>
          <h1 className="mt-3 max-w-xl text-balance font-heading text-4xl font-medium tracking-tight sm:text-5xl">
            {pricingHeader.titleLead} <em className="italic">{pricingHeader.titleEmphasis}</em>
          </h1>
          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-2 text-sm font-medium shadow-sm">
            <Users className="size-4 text-muted-foreground" />
            {pricingHeader.badge}
          </span>
        </div>

        <div className="w-full lg:flex-1">
          <div className="relative mx-auto max-w-md">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2rem] blur-2xl"
              style={{
                background:
                  "radial-gradient(closest-side, color-mix(in oklch, var(--primary) 26%, transparent), transparent 72%)",
              }}
            />

            <div className="color-block rounded-2xl border border-primary/30 p-6 shadow-2xl ring-4 ring-primary/10 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Badge variant="secondary" className="mb-2 w-fit">
                    {trial.startHere}
                  </Badge>
                  <p className="text-xs font-medium tracking-wide text-primary uppercase">
                    {trial.title}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <span className="font-heading text-4xl font-medium">{trial.price}</span>
                  <p className="text-[11px] text-muted-foreground">{trial.priceNote}</p>
                </div>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">{trial.description}</p>
              <ul className="mt-3 flex flex-col gap-1.5">
                {trial.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-muted-foreground">{trial.closing}</p>

              <Button size="lg" className="cta-glow mt-6 w-full" asChild>
                <Link href={localizeHref(trial.primaryCta.href, locale)}>
                  {trial.primaryCta.label}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>

              <p className="mt-4 text-xs text-muted-foreground">{trial.altNote}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
