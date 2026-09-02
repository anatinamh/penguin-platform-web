"use client";

import { ImageUp } from "lucide-react";
import { Container } from "@/components/layout/container";
import { getWhiteLabel } from "@/content";
import type { Locale } from "@/lib/i18n";

/**
 * A pared-back rendering of the admin console's branding tab — the screen where
 * a client's terminology, logo and colours are set. Stripped to the four cards
 * that carry the point; the real screen has more.
 */
export function BrandSettingsPanel({ locale }: { locale: Locale }) {
  const { whiteLabelHeader, adminConsole } = getWhiteLabel(locale);

  return (
    <section className="py-24 sm:py-32">
      <Container className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
        <div className="w-full lg:flex-1">
          <h2 className="max-w-md text-balance font-heading text-3xl font-medium tracking-tight sm:text-4xl">
            {whiteLabelHeader.screenshotCaption}
          </h2>
        </div>

        <div className="w-full lg:flex-1">
          <div className="relative mx-auto max-w-[520px]">
            <div
              aria-hidden
              className="absolute -top-8 -right-6 -z-10 size-48 rounded-full blur-2xl"
              style={{
                background:
                  "radial-gradient(closest-side, color-mix(in oklch, var(--primary) 20%, transparent), transparent 72%)",
              }}
            />

            <div className="overflow-hidden rounded-xl border border-border/60 bg-card text-[10px] leading-tight shadow-2xl">
              <div className="border-b border-border/60 px-4 pt-4 pb-0">
                <p className="font-heading text-sm font-medium tracking-tight">
                  {adminConsole.title}{" "}
                  <em className="text-primary italic">{adminConsole.titleAccent}</em>
                </p>
                <p className="mt-0.5 text-[9.5px] text-muted-foreground">
                  {adminConsole.subtitle}
                </p>
                <div className="mt-3 flex gap-3 text-[9.5px]">
                  {adminConsole.tabs.map((tab, i) => (
                    <span
                      key={tab}
                      className={
                        i === adminConsole.tabs.length - 1
                          ? "border-b-2 border-primary pb-1.5 font-medium text-primary"
                          : "pb-1.5 text-muted-foreground"
                      }
                    >
                      {tab}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-2.5 p-4 sm:grid-cols-2">
                <Card title={adminConsole.terminology.label} hint={adminConsole.terminology.hint}>
                  <Field label={adminConsole.terminology.singular} value="Pengui" />
                  <Field label={adminConsole.terminology.plural} value="Penguis" />
                </Card>

                <Card title={adminConsole.logo.label} hint={adminConsole.logo.hint}>
                  <div className="mt-1.5 flex flex-col items-center gap-1 rounded-md border border-dashed border-border/70 px-2 py-4 text-center">
                    <ImageUp className="size-3.5 text-muted-foreground" />
                    <span className="text-[9px] text-muted-foreground">
                      {adminConsole.logo.drop}
                    </span>
                  </div>
                </Card>

                <Card
                  title={adminConsole.primaryColor.label}
                  hint={adminConsole.primaryColor.hint}
                >
                  <Swatches
                    colors={["#3B9C94", "#3A63C0", "#8B5CF6", "#C0442E", "#2F7D45"]}
                    value="#3B9C94"
                  />
                </Card>

                <Card
                  title={adminConsole.secondaryColor.label}
                  hint={adminConsole.secondaryColor.hint}
                >
                  <Swatches
                    colors={["#D97B1A", "#B8791F", "#3B82C4", "#C0436B", "#6FA83C"]}
                    value="#D97B1A"
                  />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Card({
  title,
  hint,
  children,
}: {
  title: string;
  hint: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-border/60 bg-background p-2.5">
      <p className="text-[10px] font-medium">{title}</p>
      <p className="mt-0.5 text-[9px] text-muted-foreground">{hint}</p>
      {children}
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="mt-1.5">
      <p className="text-[8.5px] text-muted-foreground">{label}</p>
      <div className="mt-0.5 rounded-md border border-border/60 px-2 py-1 text-[9.5px]">
        {value}
      </div>
    </div>
  );
}

function Swatches({ colors, value }: { colors: string[]; value: string }) {
  return (
    <>
      <div className="mt-2 flex gap-1.5">
        {colors.map((color, i) => (
          <span
            key={color}
            className="size-4 rounded-[5px]"
            style={{
              backgroundColor: color,
              boxShadow: i === 0 ? `0 0 0 1.5px var(--card), 0 0 0 3px ${color}` : undefined,
            }}
          />
        ))}
      </div>
      <div className="mt-2 rounded-md border border-border/60 px-2 py-1 font-mono text-[9px]">
        {value}
      </div>
    </>
  );
}
