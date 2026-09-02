"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";
import { getWhiteLabel } from "@/content";
import type { Locale } from "@/lib/i18n";

export function PresetDemo({ locale }: { locale: Locale }) {
  const { presetDemo } = getWhiteLabel(locale);
  const [active, setActive] = useState(presetDemo.presets[0]);

  return (
    <section className="bg-secondary py-24 sm:py-32">
      <Container className="flex flex-col items-center text-center">
        <span className="text-sm font-medium text-primary">{presetDemo.eyebrow}</span>
        <h2 className="mt-3 max-w-xl text-balance font-heading text-3xl font-medium tracking-tight sm:text-4xl">
          {presetDemo.title}
        </h2>
        <p className="mt-4 max-w-xl text-pretty text-muted-foreground">{presetDemo.subtitle}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {presetDemo.presets.map((preset) => (
            <button
              key={preset.name}
              type="button"
              onClick={() => setActive(preset)}
              // The filled-vs-outlined styling is what marks the selection
              // visually; aria-pressed is what carries it to a screen reader.
              aria-pressed={active.name === preset.name}
              className={cn(
                "flex cursor-pointer items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-secondary",
                active.name === preset.name
                  ? "border-transparent text-primary-foreground"
                  : "border-border bg-background text-foreground hover:bg-secondary",
              )}
              style={active.name === preset.name ? { backgroundColor: preset.accent } : undefined}
            >
              <span
                className="size-2.5 rounded-full"
                style={{ backgroundColor: preset.accent }}
              />
              {preset.name}
            </button>
          ))}
        </div>

        <div className="mt-10 w-full max-w-md overflow-hidden rounded-2xl border border-border/60 bg-background text-left shadow-sm">
          <div
            className="flex items-center justify-between px-5 py-3 transition-colors"
            style={{ backgroundColor: active.accent }}
          >
            <span className="text-sm font-medium text-white">{active.name} workspace</span>
            <Sparkles className="size-4 text-white/80" />
          </div>
          <div className="flex flex-col gap-3 p-5">
            <div className="flex items-start gap-3">
              <div
                className="flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-medium text-white transition-colors"
                style={{ backgroundColor: active.accent }}
              >
                A
              </div>
              <div className="rounded-lg rounded-tl-none bg-secondary px-3 py-2 text-sm">
                How can I help with your Q3 report?
              </div>
            </div>
            <div className="flex justify-end">
              <div
                className="rounded-lg rounded-tr-none px-3 py-2 text-sm text-white transition-colors"
                style={{ backgroundColor: active.accent, opacity: 0.9 }}
              >
                Summarize last quarter&apos;s churn.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
