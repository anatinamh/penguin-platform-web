"use client";

import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { RevealGroup } from "@/components/shared/reveal";
import { GlowCard } from "@/components/sections/pricing/glow-card";
import { getPricing } from "@/content";
import type { Locale } from "@/lib/i18n";

/**
 * Two of the three levers are written as escalations — "Individual → Team →
 * Self-improving loop". Rendering them as an actual ladder, rather than as a
 * sentence with arrows in it, is what makes "three things move the price"
 * readable at a glance. The rungs light up in sequence on hover, so the motion
 * is showing the escalation rather than decorating the card.
 */
function splitLadder(description: string) {
  if (!description.includes("→")) return null;
  const parts = description.split("→").map((s) => s.trim());
  const last = parts[parts.length - 1];
  // The final rung sometimes carries a trailing sentence. Only split on a full
  // stop that actually starts a new one — otherwise "(coming soon)." gets torn
  // in half at its internal space.
  const match = last.match(/^(.*?\.)\s+([A-ZÁÉÍÓÚÑ¡¿].*)$/);
  if (match) {
    parts[parts.length - 1] = match[1].replace(/\.$/, "");
    return { steps: parts, note: match[2] };
  }
  return { steps: parts.map((p) => p.replace(/\.$/, "")), note: null };
}

export function PriceLevers({ locale }: { locale: Locale }) {
  const { priceLevers } = getPricing(locale);

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-balance font-heading text-2xl font-medium tracking-tight sm:text-3xl">
            {priceLevers.title}
          </p>
          <p className="mt-4 text-pretty text-muted-foreground">{priceLevers.subtitle}</p>
        </div>

        {/* Both rows share one GlowCard treatment — the "extras" used to be
            dashed-border and duller, reading as a lower tier of information.
            They're just as relevant as the first three, so now they carry
            the same weight, not a lesser one. */}
        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-3">
          {priceLevers.items.map((item) => {
            const ladder = splitLadder(item.description);
            return (
              <GlowCard key={item.title} className="h-full" cardClassName="p-6">
                <p className="font-medium">{item.title}</p>

                {ladder ? (
                  <>
                    <ol className="mt-3 flex flex-col gap-1.5">
                      {ladder.steps.map((step, s) => (
                        <li key={step} className="flex items-center gap-1.5">
                          {s > 0 ? (
                            <ArrowRight
                              aria-hidden
                              className="size-3 shrink-0 text-muted-foreground/50 transition-colors duration-300 group-hover:text-primary/60"
                              style={{ transitionDelay: `${s * 90}ms` }}
                            />
                          ) : (
                            <span aria-hidden className="size-3 shrink-0" />
                          )}
                          <span
                            className="rounded-md border border-border/60 px-2 py-1 text-xs font-medium transition-colors duration-300 group-hover:border-primary/30 group-hover:bg-primary/8 group-hover:text-primary"
                            style={{ transitionDelay: `${s * 90}ms` }}
                          >
                            {step}
                          </span>
                        </li>
                      ))}
                    </ol>
                    {ladder.note ? (
                      <p className="mt-3 text-sm text-muted-foreground">{ladder.note}</p>
                    ) : null}
                  </>
                ) : (
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                )}
              </GlowCard>
            );
          })}
        </RevealGroup>

        <RevealGroup className="mt-6 grid gap-6 sm:grid-cols-3">
          {priceLevers.extras.map((item) => (
            <GlowCard key={item.title} className="h-full" cardClassName="p-6">
              <p className="font-medium">{item.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </GlowCard>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
