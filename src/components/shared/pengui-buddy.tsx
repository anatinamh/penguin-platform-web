"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

type Anim = "idle" | "blink" | "wave";

const DURATION: Record<Anim, string> = {
  idle: "1600ms",
  blink: "500ms",
  wave: "1400ms",
};

/**
 * A small, persistent pixel-art mascot pinned to the corner of the
 * viewport — idles and blinks on its own, waves back on hover/tap.
 * Kept deliberately quiet: no speech bubbles, no page-to-page motion.
 */
export function PenguiBuddy() {
  const [anim, setAnim] = useState<Anim>("idle");

  useEffect(() => {
    if (anim !== "idle") return;
    const id = setTimeout(() => setAnim("blink"), 5000 + Math.random() * 4000);
    return () => clearTimeout(id);
  }, [anim]);

  useEffect(() => {
    if (anim === "idle") return;
    const id = setTimeout(() => setAnim("idle"), anim === "blink" ? 500 : 1400);
    return () => clearTimeout(id);
  }, [anim]);

  return (
    <button
      type="button"
      aria-label="Pengui"
      onMouseEnter={() => setAnim("wave")}
      onClick={() => setAnim("wave")}
      className="fixed right-4 bottom-4 z-40 hidden rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring sm:block"
    >
      <span
        aria-hidden
        className={cn("pengui is-playing", `pengui--${anim}`)}
        style={
          {
            "--pengui-w": "41px",
            "--pengui-h": "56px",
            "--duration": DURATION[anim],
          } as CSSProperties
        }
      />
    </button>
  );
}
