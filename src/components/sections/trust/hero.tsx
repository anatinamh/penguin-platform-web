"use client";

import type { ReactNode } from "react";
import { Check, ClipboardCheck, Lock, User } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

function FloatingBadge({
  icon,
  label,
  className,
  delay = 0,
}: {
  icon: ReactNode;
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
        {icon}
      </span>
      {label}
    </motion.div>
  );
}

export function TrustHero() {
  const reduceMotion = useReducedMotion();
  return (
    <section
      className="relative overflow-hidden border-b border-border/60 py-16 sm:py-20"
      style={{
        backgroundImage:
          "radial-gradient(55% 60% at 85% 20%, color-mix(in oklch, var(--primary) 13%, transparent) 0%, transparent 64%), radial-gradient(45% 50% at 5% 90%, color-mix(in oklch, var(--mascot-blue) 7%, transparent) 0%, transparent 64%)",
        backgroundColor: "var(--background)",
      }}
    >
      <Container className="relative flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-10">
        <div className="w-full text-center lg:flex-1 lg:text-left">
          <span className="text-sm font-medium text-primary">Trust &amp; control</span>
          <h1 className="mt-3 max-w-xl text-balance font-heading text-4xl font-medium tracking-tight sm:text-5xl">
            Enterprise-grade, running inside your own network.
          </h1>
          <p className="mt-4 max-w-md text-pretty text-lg text-muted-foreground lg:mx-0">
            Answers for your security team and your CFO: the perimeter, the access model, and who
            owns what.
          </p>
        </div>

        <div className="w-full lg:flex-1">
          <div className="relative mx-auto flex max-w-[420px] items-center justify-center py-6">
            <motion.div
              aria-hidden
              className="absolute -inset-[6%] rounded-full border border-dashed border-primary/25"
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              aria-hidden
              className="absolute inset-[16%] rounded-full"
              style={{
                background:
                  "radial-gradient(closest-side, color-mix(in oklch, var(--primary) 12%, transparent), transparent 72%)",
              }}
              animate={
                reduceMotion ? undefined : { opacity: [0.4, 0.8, 0.4], scale: [0.94, 1.04, 0.94] }
              }
              transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
            />

            <svg viewBox="0 0 260 300" className="relative w-56 drop-shadow-xl" aria-hidden>
              <defs>
                <linearGradient id="shieldGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--mascot-blue)" />
                  <stop offset="100%" stopColor="var(--primary)" />
                </linearGradient>
                <linearGradient id="shieldFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.02" />
                </linearGradient>
              </defs>
              <path
                d="M130 8 L238 46 C238 46 244 168 130 292 C16 168 22 46 22 46 Z"
                fill="url(#shieldFill)"
              />
              <path
                d="M130 8 L238 46 C238 46 244 168 130 292 C16 168 22 46 22 46 Z"
                stroke="url(#shieldGrad)"
                strokeWidth={3.5}
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M84 148 L118 182 L182 108"
                stroke="var(--primary)"
                strokeWidth={9}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>

            <FloatingBadge
              icon={<Lock className="size-3" />}
              label="Data stays in-region"
              className="top-2 -left-4"
            />
            <FloatingBadge
              icon={<Check className="size-3" />}
              label="SOC 2 ready"
              className="top-0 -right-2"
              delay={0.5}
            />
            <FloatingBadge
              icon={<User className="size-3" />}
              label="Role-based access"
              className="bottom-10 -left-8"
              delay={1}
            />
            <FloatingBadge
              icon={<ClipboardCheck className="size-3" />}
              label="Full audit trail"
              className="bottom-4 -right-4"
              delay={1.5}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
