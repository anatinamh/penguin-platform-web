"use client";

import { ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { getTrust } from "@/content";
import type { Locale } from "@/lib/i18n";

export function Control({ locale }: { locale: Locale }) {
  const { control } = getTrust(locale);
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-secondary py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-heading text-3xl font-medium tracking-tight sm:text-4xl">
            {control.eyebrow}
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">{control.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {control.items.map((item, i) => (
            <motion.div
              key={item.question}
              // Cards arrive one after another rather than all at once, then
              // lift under the pointer — enough to feel alive without turning
              // a security page into a carnival.
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 0.61, 0.36, 1] }}
              whileHover={reduceMotion ? undefined : { y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-[box-shadow,border-color] duration-300 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* A wash of brand colour that fades in from the top on hover. */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-24 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(to bottom, color-mix(in oklch, var(--primary) 10%, transparent), transparent)",
                }}
              />
              <h3 className="relative font-medium italic">{item.question}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground">{item.answer}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex items-start gap-3 rounded-2xl border border-primary/25 bg-primary/8 p-6">
          <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" />
          <p className="text-sm text-muted-foreground">{control.note}</p>
        </div>
      </Container>
    </section>
  );
}
