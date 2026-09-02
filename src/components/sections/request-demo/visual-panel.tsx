"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { handleGlowMove } from "@/lib/glow";

export function RequestDemoVisualPanel() {
  return (
    <div
      onMouseMove={handleGlowMove}
      aria-hidden
      style={{ "--ice-glow-opacity": 0.85 } as CSSProperties}
      className="ice-field relative hidden min-h-[520px] overflow-hidden rounded-2xl border border-border/60 lg:block"
    >
      <div className="ice-glow" />

      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/mascot/pengui-mascot.png"
          alt=""
          width={480}
          height={540}
          className="w-32 drop-shadow-xl"
        />
      </div>
    </div>
  );
}
