"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";
import { platformHeader } from "@/content/pages/platform";

function FloatingBadge({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
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
      {children}
    </motion.div>
  );
}

export function PlatformHero() {
  return (
    <section
      className="relative overflow-hidden border-b border-border/60 py-16 sm:py-20"
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

            <div className="relative rotate-1 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-2xl">
              <div className="flex items-center gap-2 border-b border-border/60 bg-secondary/40 px-3.5 py-2.5">
                <span className="size-2.5 rounded-full bg-[#ECAAA0]" />
                <span className="size-2.5 rounded-full bg-[#EFD08F]" />
                <span className="size-2.5 rounded-full bg-[#A6D3B4]" />
                <span className="ml-2 flex-1 rounded-md border border-border/60 bg-card px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
                  app.pengui.ai/agents
                </span>
              </div>
              <Image
                src="/screenshots/pengui-platform-dark.png"
                alt="Your Penguis — browse and subscribe to agents"
                width={1879}
                height={991}
                className="w-full"
              />
            </div>

            <FloatingBadge className="-top-4 -left-6 flex-col items-start gap-1">
              <span className="text-[10px] font-semibold tracking-wide text-muted-foreground uppercase">
                Build
              </span>
              <code className="font-mono text-[11px] font-normal text-foreground">
                agent.tool(&quot;search&quot;)
              </code>
            </FloatingBadge>
            <FloatingBadge className="-right-5 -bottom-4" delay={0.6}>
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="size-3" />
              </span>
              Audit trail on
            </FloatingBadge>
          </div>
        </div>
      </Container>
    </section>
  );
}
