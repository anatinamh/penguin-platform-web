"use client";

import Image from "next/image";
import { ArrowRight, Check, Lock, Sparkles, Users, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { origin } from "@/content/pages/home";
import { cn } from "@/lib/utils";

const oldIcons: LucideIcon[] = [Lock, Users, Sparkles];

function FloatingBadge({ label, className, delay = 0 }: { label: string; className: string; delay?: number }) {
  return (
    <motion.div
      className={cn(
        "absolute z-10 hidden items-center gap-2 rounded-xl border border-border/60 bg-card px-3.5 py-2.5 text-sm font-semibold text-foreground shadow-lg sm:flex",
        className,
      )}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Check className="size-3" />
      </span>
      {label}
    </motion.div>
  );
}

export function Origin() {
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
          {/* Text + the three swaps */}
          <div className="w-full text-center lg:flex-1 lg:text-left">
            <span className="text-sm font-medium text-primary">{origin.eyebrow}</span>
            <h2 className="mt-3 text-balance font-heading text-3xl font-medium tracking-tight sm:text-4xl">
              {origin.title}
            </h2>
            <p className="mt-5 font-heading text-base text-pretty text-muted-foreground italic">
              {origin.statement}
            </p>
            <p className="mt-2 font-heading text-lg font-medium">{origin.lede}</p>

            <div className="mt-6 flex flex-col text-left">
              {origin.swaps.map((swap, i) => {
                const OldIcon = oldIcons[i];
                return (
                  <div
                    key={swap.from}
                    className={cn(
                      "flex flex-wrap items-center gap-3 border-t border-border/60 py-4",
                      i === origin.swaps.length - 1 && "border-b",
                    )}
                  >
                    <span className="flex items-center gap-2 text-sm text-muted-foreground/70 line-through decoration-border decoration-2">
                      <OldIcon className="size-3.5 shrink-0 text-muted-foreground/50" />
                      {swap.from}
                    </span>
                    <ArrowRight className="size-3.5 shrink-0 text-muted-foreground/40" />
                    <span className="flex items-center gap-2 text-sm font-semibold">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="size-3" />
                      </span>
                      {swap.to}
                    </span>
                  </div>
                );
              })}
            </div>
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
                <div className="flex items-center gap-2 border-b border-border/60 bg-secondary/40 px-3.5 py-2.5">
                  <span className="size-2.5 rounded-full bg-[#ECAAA0]" />
                  <span className="size-2.5 rounded-full bg-[#EFD08F]" />
                  <span className="size-2.5 rounded-full bg-[#A6D3B4]" />
                  <span className="ml-2 flex-1 rounded-md border border-border/60 bg-card px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
                    app.pengui.ai/console
                  </span>
                </div>
                <Image
                  src="/screenshots/pengui-chat-start.png"
                  alt="Pengui console — Good to see you, Ana"
                  width={1521}
                  height={855}
                  className="w-full"
                />
              </div>

              <FloatingBadge label="On your infra" className="-bottom-4 -left-6" />
              <FloatingBadge label="Your brand" className="top-10 -right-5" delay={0.6} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
