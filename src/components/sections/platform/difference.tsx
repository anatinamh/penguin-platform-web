"use client";

import {
  BrainCircuit,
  Check,
  Cpu,
  Database,
  Gauge,
  Server,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Container } from "@/components/layout/container";
import { getPlatform } from "@/content";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  server: Server,
  cpu: Cpu,
  "brain-circuit": BrainCircuit,
  database: Database,
  gauge: Gauge,
  users: Users,
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: "easeOut" },
  }),
};

type Row = {
  dimension: string;
  icon: string;
  boltOn: string;
  pengui: string;
  featured?: boolean;
  closer?: boolean;
};

// The old red-X/green-check pairing read as unclear about which side was
// which once collapsed into an accordion. Same idea, spelled out instead of
// color-coded: the bolt-on line is struck through and de-emphasized, the
// Pengui line is the one built to actually be read.
function BoltOnLine({ text }: { text: string }) {
  return (
    <span className="flex items-start gap-1.5 text-sm text-muted-foreground/80 line-through decoration-muted-foreground/50">
      <X aria-hidden className="mt-0.5 size-3 shrink-0" />
      {text}
    </span>
  );
}

function PenguiLine({ text, large }: { text: string; large?: boolean }) {
  return (
    <span
      className={cn(
        "flex items-start gap-2 font-semibold text-foreground",
        large ? "text-sm sm:text-base" : "text-sm",
      )}
    >
      <span
        className={cn(
          "mt-0.5 flex shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary",
          large ? "size-5" : "size-[18px]",
        )}
      >
        <Check className={large ? "size-3" : "size-2.5"} />
      </span>
      {text}
    </span>
  );
}

function CardHeader({ icon, dimension, tint }: { icon: string; dimension: string; tint?: boolean }) {
  const Icon = icons[icon];
  return (
    <div className="relative flex items-center gap-2.5">
      <span
        className={cn(
          "flex size-8 shrink-0 items-center justify-center rounded-lg",
          tint ? "bg-primary/15 text-primary" : "bg-accent text-accent-foreground",
        )}
      >
        {Icon ? <Icon className="size-4" /> : null}
      </span>
      <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
        {dimension}
      </p>
    </div>
  );
}

// The bento hero cells: a big, low-opacity version of the dimension's own
// icon bleeding off the corner. Decorative, so it can carry visual weight
// without needing more copy to fill the taller card.
function GhostIcon({ icon, color }: { icon: string; color: string }) {
  const Icon = icons[icon];
  if (!Icon) return null;
  return (
    <Icon
      aria-hidden
      className="pointer-events-none absolute -top-6 -right-6 size-32 opacity-[0.08]"
      style={{ color }}
      strokeWidth={1.25}
    />
  );
}

export function Difference({ locale }: { locale: Locale }) {
  const { difference } = getPlatform(locale);
  const reduceMotion = useReducedMotion();
  const rows = difference.rows as Row[];
  const featured = rows.find((r) => r.featured);
  const closer = rows.find((r) => r.closer);
  const middle = rows.filter((r) => !r.featured && !r.closer);

  return (
    <section className="bg-secondary py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-primary">{difference.eyebrow}</span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-medium tracking-tight sm:text-4xl">
            {difference.title}
          </h2>
        </div>

        <div className="mx-auto mt-12 flex max-w-5xl flex-col gap-4">
          {/* The two claims that carry the section's title get the bento
              treatment's "big cells" — same size, side by side, each with a
              ghost icon for presence. Everything else is detail underneath. */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {featured ? (
              <motion.div
                custom={0}
                variants={cardVariants}
                initial={reduceMotion ? false : "hidden"}
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className="relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-lg transition-[border-color,border-width] duration-300 hover:border-2 hover:border-primary/40 sm:p-7"
              >
                <GhostIcon icon={featured.icon} color="var(--primary)" />
                <CardHeader icon={featured.icon} dimension={featured.dimension} tint />
                <div className="flex flex-col gap-2">
                  <BoltOnLine text={featured.boltOn} />
                  <PenguiLine text={featured.pengui} large />
                </div>
              </motion.div>
            ) : null}

            {closer ? (
              <motion.div
                custom={1}
                variants={cardVariants}
                initial={reduceMotion ? false : "hidden"}
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className="relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-lg transition-[border-color,border-width] duration-300 hover:border-2 hover:border-[color:var(--mascot-lime)] sm:p-7"
              >
                <GhostIcon icon={closer.icon} color="var(--mascot-lime)" />
                <CardHeader icon={closer.icon} dimension={closer.dimension} tint />
                <div className="flex flex-col gap-2">
                  <BoltOnLine text={closer.boltOn} />
                  <PenguiLine text={closer.pengui} large />
                </div>
              </motion.div>
            ) : null}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {middle.map((row, i) => (
              <motion.div
                key={row.dimension}
                custom={i + 2}
                variants={cardVariants}
                initial={reduceMotion ? false : "hidden"}
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-card p-5 shadow-sm transition-[border-color,border-width] duration-300 hover:border-2 hover:border-primary/40"
              >
                <CardHeader icon={row.icon} dimension={row.dimension} />
                <div className="flex flex-col gap-1.5">
                  <BoltOnLine text={row.boltOn} />
                  <PenguiLine text={row.pengui} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
