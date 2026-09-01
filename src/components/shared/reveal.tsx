"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

// One shared easing for every entrance on the site: a gentle decelerate that
// settles rather than snapping. Matches the curve already used by the Shift
// sonar rings so scroll-driven and looping motion feel like one system.
const EASE = [0.22, 0.61, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

// Nielsen #1 (visibility of system status) cuts both ways: motion should tell
// the reader where to look, not perform. Children land 70ms apart — enough to
// read as a sequence, short enough that a fast scroller never waits on it.
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

/** Fades + lifts its children into view once, as a staggered group. */
export function RevealGroup({
  children,
  className,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={stagger}
      initial={reduceMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

/** A single item inside a RevealGroup, or a standalone reveal on its own. */
export function Reveal({
  children,
  className,
  standalone,
  delay = 0,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  /** Use when this isn't wrapped in a RevealGroup and should trigger itself. */
  standalone?: boolean;
  delay?: number;
  amount?: number;
}) {
  const reduceMotion = useReducedMotion();
  const variants: Variants = delay
    ? {
        hidden: fadeUp.hidden,
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE, delay } },
      }
    : fadeUp;

  return (
    <motion.div
      className={className}
      variants={variants}
      {...(standalone
        ? {
            initial: reduceMotion ? false : "hidden",
            whileInView: "show",
            viewport: { once: true, amount },
          }
        : {})}
    >
      {children}
    </motion.div>
  );
}

/** Lifts a card slightly on hover — pointer-only, never on touch or reduced motion. */
export function HoverLift({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={cn("h-full", className)}
      variants={fadeUp}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.2, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
