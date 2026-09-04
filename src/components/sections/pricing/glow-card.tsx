"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE = [0.22, 0.61, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

/**
 * Pricing keeps its own richer card treatment as a deliberate exception —
 * everywhere else on the site uses the plain HoverLift (components/shared/
 * reveal.tsx), but pricing asked for more presence: a bigger lift, a soft
 * shadow that fades in via opacity, and a top gradient sheen.
 *
 * It's still built on the same safe techniques as the rest of the site,
 * just with the dial turned up: the shadow never animates its own value
 * (that repaints on every frame — the site's earlier scrollbar-flicker bug
 * on The Difference came from exactly that), and the border brightens in
 * color only, never width (a width change reflows the card under
 * border-box sizing and reintroduces the same bug).
 *
 * Use inside a RevealGroup, same as HoverLift — `variants={fadeUp}` only
 * animates when an ancestor RevealGroup is driving the hidden/show state.
 */
export function GlowCard({
  children,
  className,
  cardClassName,
}: {
  children: ReactNode;
  className?: string;
  /** Overrides the card's border/ring at rest — e.g. a featured tier's ring. */
  cardClassName?: string;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      variants={fadeUp}
      whileHover={reduceMotion ? undefined : { y: -8 }}
      transition={{ duration: 0.25, ease: EASE }}
      className={cn("group relative h-full", className)}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 shadow-xl shadow-primary/10 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div
        className={cn(
          "relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-border/60 bg-card transition-colors duration-300 group-hover:border-primary/40",
          cardClassName,
        )}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-24 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(to bottom, color-mix(in oklch, var(--primary) 12%, transparent), transparent)",
          }}
        />
        {children}
      </div>
    </motion.div>
  );
}
