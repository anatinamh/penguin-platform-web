"use client";

import Image from "next/image";
import { handleGlowMove } from "@/lib/glow";

export function RequestDemoVisualPanel() {
  return (
    <div
      onMouseMove={handleGlowMove}
      aria-hidden
      className="ice-field relative hidden min-h-[520px] overflow-hidden rounded-2xl border border-border/60 lg:block"
    >
      <div className="ice-glow" />

      <div className="glass-panel absolute top-[14%] left-[10%] h-[62%] w-[30%] rounded-2xl" />
      <div className="glass-panel absolute top-[10%] right-[12%] h-[38%] w-[24%] rounded-2xl" />
      <div className="glass-panel absolute right-[14%] bottom-[16%] h-[22%] w-[20%] rounded-2xl" />

      <Image
        src="/mascot/pengui-mascot.png"
        alt=""
        width={480}
        height={540}
        className="absolute bottom-0 left-[8%] w-32 drop-shadow-xl"
      />
    </div>
  );
}
