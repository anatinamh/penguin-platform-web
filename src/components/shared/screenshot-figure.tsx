"use client";

import Image from "next/image";
import { KeyRound, ScrollText, type LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

// Icons are looked up by name, not passed in: these figures are rendered from
// server components, and a component function is not serializable across that
// boundary. Same pattern the section components already use.
const icons: Record<string, LucideIcon> = {
  "key-round": KeyRound,
  "scroll-text": ScrollText,
};

/**
 * A product screenshot framed the way the home and platform heroes frame
 * theirs: a tilted card over a soft glow, with two badges floating off the
 * corners. Those heroes each grew their own copy of this; this is the shared
 * one, for figures that stand on their own rather than sitting beside copy.
 */
export function ScreenshotFigure({
  src,
  alt,
  width,
  height,
  caption,
  badges,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  /** Rendered at the top-left and bottom-right, matching the hero layout. */
  badges?: [Badge, Badge];
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-[560px]", className)}>
      {/* Badges anchor to the image, not to the figure — anchoring them to the
          figure put the lower one on top of the caption. */}
      <div className="relative">
        <div
          aria-hidden
          className="absolute -top-8 -right-6 -z-10 size-48 rounded-full blur-2xl"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklch, var(--primary) 22%, transparent), transparent 72%)",
          }}
        />

        <div className="relative -rotate-1 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-2xl">
          <Image src={src} alt={alt} width={width} height={height} className="w-full" />
        </div>

        {badges ? (
          <>
            <FloatingBadge {...badges[0]} className="-top-4 -left-6" />
            <FloatingBadge {...badges[1]} className="-right-5 bottom-8" delay={0.6} />
          </>
        ) : null}
      </div>

      {caption ? (
        <p className="mt-8 text-pretty text-center text-sm text-muted-foreground">{caption}</p>
      ) : null}
    </div>
  );
}

type Badge = { icon: keyof typeof icons; label: string };

function FloatingBadge({
  icon,
  label,
  className,
  delay = 0,
}: Badge & { className: string; delay?: number }) {
  const Icon = icons[icon];
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
      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="size-3" />
      </span>
      {label}
    </motion.div>
  );
}
