"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { PenguiInterface } from "@/components/shared/pengui-interface";
import { cn } from "@/lib/utils";
import { getWhiteLabel } from "@/content";
import type { Locale } from "@/lib/i18n";

function FloatingBadge({
  dotColor,
  label,
  className,
  delay = 0,
}: {
  dotColor: string;
  label: string;
  className: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={cn(
        "absolute z-10 hidden items-center gap-2 rounded-xl border border-border/60 bg-card px-3.5 py-2.5 text-sm font-semibold text-foreground shadow-lg sm:flex",
        className,
      )}
      animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
      transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <span className="size-2 shrink-0 rounded-full" style={{ backgroundColor: dotColor }} />
      {label}
    </motion.div>
  );
}

export function WhiteLabelHero({ locale }: { locale: Locale }) {
  const { whiteLabelHeader, presetDemo, interfaceMockup } = getWhiteLabel(locale);
  // The hero shows the product itself, in its own colours — the same component
  // the preset picker re-colours below, so the two can never drift apart.
  const pengui = presetDemo.presets[0];

  return (
    <section
      className="relative overflow-hidden border-b border-border/60 py-24 sm:py-32"
      style={{
        backgroundImage:
          "radial-gradient(55% 60% at 10% 10%, color-mix(in oklch, #6C63FF 10%, transparent) 0%, transparent 60%), radial-gradient(50% 55% at 90% 0%, color-mix(in oklch, var(--primary) 10%, transparent) 0%, transparent 60%)",
        backgroundColor: "var(--background)",
      }}
    >
      <Container className="relative flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-12">
        <div className="w-full text-center lg:flex-1 lg:text-left">
          <span className="text-sm font-medium text-primary">{whiteLabelHeader.eyebrow}</span>
          <h1 className="mt-3 max-w-xl text-balance font-heading text-4xl font-medium tracking-tight sm:text-5xl">
            {whiteLabelHeader.title}
          </h1>
          <p className="mt-4 max-w-md text-pretty text-lg text-muted-foreground lg:mx-0">
            {whiteLabelHeader.subtitle}
          </p>
          <p className="mt-4 max-w-md text-pretty text-muted-foreground lg:mx-0">
            {whiteLabelHeader.note}
          </p>
        </div>

        <div className="w-full lg:flex-1">
          <div className="relative mx-auto max-w-[560px]">
            <div
              aria-hidden
              className="absolute -top-8 -right-6 -z-10 size-48 rounded-full blur-2xl"
              style={{
                background:
                  "radial-gradient(closest-side, color-mix(in oklch, var(--primary) 22%, transparent), transparent 72%)",
              }}
            />

            <PenguiInterface
              accent={pengui.accent}
              brand={pengui.name}
              copy={interfaceMockup}
              className="-rotate-1"
            />

            <FloatingBadge
              dotColor="var(--primary)"
              label={whiteLabelHeader.badges.cloud}
              className="-top-7 left-2"
            />
            <FloatingBadge
              dotColor="#6C63FF"
              label={whiteLabelHeader.badges.unseen}
              className="-bottom-7 right-2"
              delay={0.6}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
