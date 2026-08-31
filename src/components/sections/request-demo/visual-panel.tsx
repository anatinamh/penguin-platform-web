"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { Cloud } from "lucide-react";
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
        <div className="relative flex flex-col items-center">
          <Image
            src="/mascot/pengui-mascot.png"
            alt=""
            width={480}
            height={540}
            className="relative z-10 w-32 drop-shadow-xl"
          />
          <Cloud className="-mt-9 size-48 fill-white text-white drop-shadow-lg" strokeWidth={1} />
        </div>
      </div>
    </div>
  );
}
