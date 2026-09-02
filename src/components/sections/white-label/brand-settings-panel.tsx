"use client";

import { Building2 } from "lucide-react";
import { Container } from "@/components/layout/container";
import { getWhiteLabel } from "@/content";
import type { Locale } from "@/lib/i18n";

/**
 * The brand-settings screen: one panel where a client's logo, colours and
 * domain are set. It used to be the hero visual, which put a settings form in
 * the spot that should show the product itself; it now illustrates its own
 * caption further down the page.
 */
export function BrandSettingsPanel({ locale }: { locale: Locale }) {
  const { whiteLabelHeader } = getWhiteLabel(locale);
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-[480px]">
          <div
            aria-hidden
            className="absolute -z-10 size-48 rounded-full blur-2xl"
            style={{
              background:
                "radial-gradient(closest-side, color-mix(in oklch, var(--primary) 18%, transparent), transparent 72%)",
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
          <p className="mt-8 text-pretty text-center text-sm text-muted-foreground">
            {whiteLabelHeader.screenshotCaption}
          </p>
        </div>
      </Container>
    </section>
  );
}
