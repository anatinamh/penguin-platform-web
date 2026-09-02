"use client";

import Image from "next/image";
import { Check, Palette, Server } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { getHome } from "@/content";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function FloatingBadge({
  icon: Icon,
  label,
  className,
  delay = 0,
}: {
  icon: typeof Check;
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
      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="size-3" />
      </span>
      {label}
    </motion.div>
  );
}

export function Origin({ locale }: { locale: Locale }) {
  const { origin } = getHome(locale);
  return (
    <section className="relative overflow-hidden bg-secondary py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(45% 60% at 90% 10%, color-mix(in oklch, var(--primary) 10%, transparent) 0%, transparent 70%), radial-gradient(35% 45% at 0% 100%, color-mix(in oklch, var(--mascot-blue) 8%, transparent) 0%, transparent 70%)",
        }}
      />

      <Container className="relative">
        <div className="flex flex-col items-center gap-14 lg:flex-row lg:items-center lg:gap-16">
          {/* Text + the three points */}
          <div className="w-full text-center lg:flex-1 lg:text-left">
            <span className="text-sm font-medium text-primary">{origin.eyebrow}</span>
            <h2 className="mt-3 text-balance font-heading text-3xl font-medium tracking-tight sm:text-4xl">
              {origin.title}
            </h2>
            <p className="mt-5 font-heading text-lg font-medium">{origin.lede}</p>

            <ul className="mt-6 flex flex-col text-left">
              {origin.points.map((point, i) => (
                <li
                  key={point}
                  className={cn(
                    "flex items-start gap-2.5 border-t border-border/60 py-4 text-sm",
                    i === origin.points.length - 1 && "border-b",
                  )}
                >
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="size-3" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* The real product screenshot, framed like a browser */}
          <div className="w-full lg:flex-1">
            <div className="relative mx-auto max-w-[480px]">
              <div
                aria-hidden
                className="absolute -top-8 -right-6 -z-10 size-48 rounded-full blur-2xl"
                style={{
                  background:
                    "radial-gradient(closest-side, color-mix(in oklch, var(--primary) 22%, transparent), transparent 72%)",
                }}
              />

              <div className="relative -rotate-1 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-2xl">
                <Image
                  src="/screenshots/pengui-dark.png"
                  alt="Pengui console — Hello again, Ana"
                  width={1894}
                  height={984}
                  className="w-full"
                />
              </div>

              <FloatingBadge
                icon={Server}
                label={origin.badges.infra}
                className="-top-4 -left-6"
              />
              <FloatingBadge
                icon={Palette}
                label={origin.badges.brand}
                className="-right-5 -bottom-4"
                delay={0.6}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
