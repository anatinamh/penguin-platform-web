"use client";

import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { handleGlowMove } from "@/lib/glow";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <section
      onMouseMove={handleGlowMove}
      className="ice-field relative overflow-hidden border-b border-border/60 py-16 sm:py-20"
    >
      <div aria-hidden className="ice-glow" />
      <Container className="relative max-w-3xl">
        <span className="text-sm font-medium text-primary">{eyebrow}</span>
        <h1 className="mt-3 text-balance font-heading text-4xl font-medium tracking-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-5 text-pretty text-lg text-muted-foreground">{subtitle}</p>
        ) : null}
      </Container>
    </section>
  );
}
