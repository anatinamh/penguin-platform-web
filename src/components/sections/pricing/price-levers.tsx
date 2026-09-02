"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { getPricing } from "@/content";
import type { Locale } from "@/lib/i18n";

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
          {priceLevers.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 0.61, 0.36, 1] }}
              whileHover={reduceMotion ? undefined : { y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 transition-[box-shadow,border-color] duration-300 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/5"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-24 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(to bottom, color-mix(in oklch, var(--primary) 10%, transparent), transparent)",
                }}
              />
              <p className="relative font-medium">{item.title}</p>
              <p className="relative mt-2 text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {priceLevers.extras.map((item) => (
            <div key={item.title} className="rounded-2xl border border-dashed border-border p-6">
              <p className="font-medium">{item.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
