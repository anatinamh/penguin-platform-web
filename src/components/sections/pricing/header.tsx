"use client";

import { Users } from "lucide-react";
import { Container } from "@/components/layout/container";
import { pricingHeader } from "@/content/pages/pricing";
import { handleGlowMove } from "@/lib/glow";

export function PricingHeader() {
  return (
    <section
      onMouseMove={handleGlowMove}
      className="ice-field relative overflow-hidden border-b border-border/60 py-24 sm:py-32"
    >
      <div aria-hidden className="ice-glow" />
      <Container className="relative">
        <span className="text-sm font-medium text-primary">{pricingHeader.eyebrow}</span>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-balance font-heading text-4xl font-medium tracking-tight sm:text-5xl">
            {pricingHeader.titleLead}{" "}
            <em className="italic">{pricingHeader.titleEmphasis}</em>
          </h1>
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-2 text-sm font-medium shadow-sm">
            <Users className="size-4 text-muted-foreground" />
            {pricingHeader.badge}
          </span>
        </div>
      </Container>
    </section>
  );
}
