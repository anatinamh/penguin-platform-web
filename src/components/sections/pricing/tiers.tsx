"use client";

import Link from "next/link";
import { ArrowUp, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { HoverLift, RevealGroup } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import { getPricing } from "@/content";
import { type Locale, localizeHref } from "@/lib/i18n";

export function Tiers({ locale }: { locale: Locale }) {
  const { tiers, tiersNote } = getPricing(locale);
  const plans = tiers.filter((tier) => !tier.dashed);
  const custom = tiers.find((tier) => tier.dashed);
  const contactHref = localizeHref("/request-demo", locale);

  return (
    <section className="bg-secondary py-20 sm:py-28">
      <Container>
        <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((tier) => (
            <HoverLift key={tier.name} className="h-full">
              <div
                className={cn(
                  "flex h-full flex-col rounded-2xl border bg-card p-5",
                  tier.featured ? "border-primary/25 ring-4 ring-primary/10" : "border-border/60",
                )}
              >
                {tier.badge ? (
                  <Badge className="mb-2 w-fit text-[10px]">{tier.badge}</Badge>
                ) : (
                  <div className="mb-2 h-5" />
                )}
                <h2 className="text-sm font-medium">{tier.name}</h2>
                <p className="text-xs text-muted-foreground">{tier.tagline}</p>

                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-heading text-2xl font-medium">{tier.price}</span>
                  <span className="text-xs text-muted-foreground">{tier.period}</span>
                </div>
                <p className="mt-1 text-[11px] text-muted-foreground">{tier.seatsLabel}</p>

                <Button size="sm" className="mt-4" variant="outline" asChild>
                  <Link href={contactHref}>Talk to sales</Link>
                </Button>

                <ul className="mt-4 flex flex-col gap-2">
                  {tier.inherits ? (
                    <li className="flex items-start gap-1.5 text-xs">
                      <ArrowUp className="mt-0.5 size-3 shrink-0 text-muted-foreground" />
                      <span className="text-muted-foreground italic">{tier.inherits}</span>
                    </li>
                  ) : null}
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-1.5 text-xs">
                      <Check className="mt-0.5 size-3 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </HoverLift>
          ))}
        </RevealGroup>

        {custom ? (
          // Its own RevealGroup: HoverLift's entrance variants only animate
          // when nested under a RevealGroup driving the hidden/show state —
          // this card sits outside the grid's RevealGroup above, so without
          // one of its own it would hover-lift but never fade in on scroll.
          <RevealGroup className="mt-4">
            <HoverLift>
              <div className="flex flex-col gap-6 rounded-2xl border border-dashed border-border/80 bg-card/40 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <h2 className="text-sm font-medium">{custom.name}</h2>
                  <p className="text-xs text-muted-foreground">{custom.tagline}</p>

                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                    {custom.inherits ? (
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground italic">
                        <ArrowUp className="size-3.5 shrink-0" />
                        {custom.inherits}
                      </span>
                    ) : null}
                    {custom.includes.map((item) => (
                      <span
                        key={item}
                        className="flex items-center gap-1.5 text-sm text-muted-foreground"
                      >
                        <Check className="size-3.5 shrink-0 text-primary" />
                        {item}
                      </span>
                    ))}
                  </div>

                  <p className="mt-3 text-xs text-muted-foreground">{custom.prebuilt}</p>
                </div>

                {/* The price here is a call to action ("Talk to us"), not a
                    number — styled and linked as the CTA itself instead of
                    pairing it with a separate button that just repeats it. */}
                <div className="lg:text-right">
                  <Link
                    href={contactHref}
                    className="font-heading text-3xl font-medium text-foreground transition-colors duration-200 hover:text-primary"
                  >
                    {custom.price}
                  </Link>
                  <p className="text-xs text-muted-foreground">{custom.seatsLabel}</p>
                </div>
              </div>
            </HoverLift>
          </RevealGroup>
        ) : null}

        <p className="mt-8 text-center text-sm text-muted-foreground">{tiersNote}</p>
      </Container>
    </section>
  );
}
