"use client";

import { Fragment } from "react";
import { Building2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";
import { whiteLabelHeader } from "@/content/pages/white-label";

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

function HighlightedTitle() {
  const { title, titleHighlights } = whiteLabelHeader;
  const pattern = new RegExp(`(${titleHighlights.map((h) => h.word).join("|")})`, "g");
  const parts = title.split(pattern);

  return (
    <>
      {parts.map((part, i) => {
        const highlight = titleHighlights.find((h) => h.word === part);
        if (!highlight) return <Fragment key={i}>{part}</Fragment>;
        // color highlight paused for now — plain text until the palette direction is finalized
        return (
          <span key={i}>
            {part}
          </span>
        );
      })}
    </>
  );
}

export function WhiteLabelHero() {
  return (
    <section
      className="relative overflow-hidden border-b border-border/60 py-16 sm:py-20"
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
            <HighlightedTitle />
          </h1>
          <p className="mt-4 max-w-md text-pretty text-lg text-muted-foreground lg:mx-0">
            {whiteLabelHeader.subtitle}
          </p>
        </div>

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
                  settings.acmecorp.ai
                </span>
              </div>
              <div className="p-6">
                <p className="mb-4 text-xs font-bold">Brand settings</p>

                <div className="mb-3.5">
                  <p className="mb-1.5 text-[10px] font-semibold tracking-wide text-muted-foreground uppercase">
                    Logo
                  </p>
                  <div className="flex items-center gap-2.5 rounded-lg border border-border/60 px-3 py-2">
                    <span className="flex size-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Building2 className="size-4" />
                    </span>
                    <span className="font-mono text-xs">acme-logo.svg</span>
                  </div>
                </div>

                <div className="mb-3.5">
                  <p className="mb-1.5 text-[10px] font-semibold tracking-wide text-muted-foreground uppercase">
                    Primary color
                  </p>
                  <div className="flex items-center gap-2 rounded-lg border border-border/60 px-3 py-2.5">
                    <span
                      className="size-5 rounded-md"
                      style={{
                        backgroundColor: "var(--primary)",
                        boxShadow: "0 0 0 2px var(--card), 0 0 0 3.5px var(--primary)",
                      }}
                    />
                    <span className="size-5 rounded-md" style={{ backgroundColor: "#6C63FF" }} />
                    <span className="size-5 rounded-md" style={{ backgroundColor: "var(--mascot-lime)" }} />
                    <span className="size-5 rounded-md" style={{ backgroundColor: "var(--mascot-orange)" }} />
                  </div>
                </div>

                <div className="mb-4">
                  <p className="mb-1.5 text-[10px] font-semibold tracking-wide text-muted-foreground uppercase">
                    Domain
                  </p>
                  <div className="rounded-lg border border-border/60 px-3 py-2 font-mono text-xs">
                    app.acmecorp.ai
                  </div>
                </div>

                <div className="pointer-events-none w-full rounded-lg bg-primary py-2.5 text-center text-xs font-semibold text-primary-foreground">
                  Save changes
                </div>
              </div>
            </div>

            <FloatingBadge
              dotColor="var(--primary)"
              label="Runs on AWS · GCP · Azure"
              className="-top-4 -left-6"
            />
            <FloatingBadge
              dotColor="#6C63FF"
              label="Model: GPT-4.1"
              className="-right-4 -bottom-4"
              delay={0.6}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
