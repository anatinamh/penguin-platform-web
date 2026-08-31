import type { MouseEvent } from "react";

export function handleGlowMove(event: MouseEvent<HTMLElement>) {
  // Reduced motion: leave the glow at its default, centered position instead
  // of continuously repositioning it as the cursor moves.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const rect = event.currentTarget.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;
  event.currentTarget.style.setProperty("--glow-x", `${x}%`);
  event.currentTarget.style.setProperty("--glow-y", `${y}%`);
}
