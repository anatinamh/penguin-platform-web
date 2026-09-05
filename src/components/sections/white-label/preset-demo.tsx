"use client";

import { useState } from "react";
import { Container } from "@/components/layout/container";
import { PenguiInterface } from "@/components/shared/pengui-interface";
import { cn } from "@/lib/utils";
import { getWhiteLabel } from "@/content";
import type { Locale } from "@/lib/i18n";

export function PresetDemo({ locale }: { locale: Locale }) {
  const { presetDemo, interfaceMockup } = getWhiteLabel(locale);
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
                className={cn(
                  "size-2.5 rounded-full",
                  active.name === preset.name && "bg-primary-foreground",
                )}
                style={active.name === preset.name ? undefined : { backgroundColor: preset.accent }}
              />
              {preset.name}
            </button>
          ))}
        </div>

        {/* The real interface, not a stand-in: only the accent colour and the
            brand name change between presets — everything else is identical,
            which is exactly the claim the section is making. */}
        <PenguiInterface
          accent={active.accent}
          brand={active.name}
          copy={interfaceMockup}
          className="mt-10 w-full max-w-3xl text-left"
        />
      </Container>
    </section>
  );
}
