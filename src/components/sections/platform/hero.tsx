"use client";

import Image from "next/image";
import { Check, Users } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";
import { getPlatform } from "@/content";
import type { Locale } from "@/lib/i18n";

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

export function PlatformHero({ locale }: { locale: Locale }) {
  const { platformHeader } = getPlatform(locale);
  return (
    <section
      className="relative overflow-hidden border-b border-border/60 py-24 sm:py-32"
      style={{
        backgroundImage:
          "radial-gradient(55% 60% at 90% 10%, color-mix(in oklch, var(--primary) 12%, transparent) 0%, transparent 62%), radial-gradient(45% 50% at 5% 90%, color-mix(in oklch, var(--mascot-blue) 7%, transparent) 0%, transparent 62%)",
        backgroundColor: "var(--background)",
      }}
    >
      <Container className="relative flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-12">
        <div className="w-full text-center lg:flex-1 lg:text-left">
          <span className="text-sm font-medium text-primary">{platformHeader.eyebrow}</span>
          <h1 className="mt-3 max-w-xl text-balance font-heading text-4xl font-medium tracking-tight sm:text-5xl">
            {platformHeader.title}
          </h1>
          <p className="mt-4 max-w-md text-pretty text-lg text-muted-foreground lg:mx-0">
            {platformHeader.subtitle}
          </p>
        </div>

        <div className="w-full lg:flex-1">
          <div className="relative mx-auto max-w-[500px]">
            <div
              aria-hidden
              className="absolute -top-8 -right-6 -z-10 size-48 rounded-full blur-2xl"
              style={{
                background:
                  "radial-gradient(closest-side, color-mix(in oklch, var(--primary) 22%, transparent), transparent 72%)",
              }}
            />

            {/* Badges anchor to the image, not the figure — against the figure
                the lower one measured from below the caption and landed in the
                middle of the screenshot. */}
            <div className="relative">
              <div className="relative rotate-1 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-2xl">
                <Image
                  src="/screenshots/pengui-platform-dark.png"
                  alt="Your Penguis — browse and subscribe to agents"
                  width={1879}
                  height={991}
                  className="w-full"
                />
              </div>

              <FloatingBadge
                icon={Users}
                label={platformHeader.badges.permissions}
                className="-top-4 -left-6"
              />
              <FloatingBadge
                icon={Check}
                label={platformHeader.badges.audit}
                className="-right-5 -bottom-4"
                delay={0.6}
              />
            </div>

            <p className="mt-8 text-pretty text-center text-sm text-muted-foreground">
              {platformHeader.screenshotCaption}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
