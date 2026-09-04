"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { getPricing } from "@/content";
import type { Locale } from "@/lib/i18n";

const EASE = [0.22, 0.61, 0.36, 1] as const;

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
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-balance font-heading text-2xl font-medium tracking-tight sm:text-3xl">
            {priceLevers.title}
          </p>
          <p className="mt-4 text-pretty text-muted-foreground">{priceLevers.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {priceLevers.items.map((item, i) => {
            const ladder = splitLadder(item.description);
            return (
              <motion.div
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: EASE }}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                className="group relative flex flex-col rounded-2xl"
              >
                {/* The hover shadow used to be an animated box-shadow value,
                    which repaints the whole blurred region every frame — heavy
                    enough to visibly lag three of these at once. A shadow
                    that's always computed but fades in via opacity is
                    compositor-only, so it costs nothing while animating. It
                    has to live outside the card's own overflow-hidden, or that
                    clips the shadow along with everything else. */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl shadow-xl shadow-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <div className="relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card p-6 transition-colors duration-300 group-hover:border-primary/40">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-24 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(to bottom, color-mix(in oklch, var(--primary) 12%, transparent), transparent)",
                    }}
                  />

                  <p className="relative font-medium">{item.title}</p>

                  {ladder ? (
                    <>
                      <ol className="relative mt-3 flex flex-col gap-1.5">
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
                        <p className="relative mt-3 text-sm text-muted-foreground">
                          {ladder.note}
                        </p>
                      ) : null}
                    </>
                  ) : (
                    <p className="relative mt-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {priceLevers.extras.map((item, i) => (
            <motion.div
              key={item.title}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              className="rounded-2xl border border-dashed border-border p-6 transition-colors duration-300 hover:border-primary/40 hover:bg-primary/5"
            >
              <p className="font-medium">{item.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
