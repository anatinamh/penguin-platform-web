import type { MouseEvent } from "react";

export function handleGlowMove(event: MouseEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;
  event.currentTarget.style.setProperty("--glow-x", `${x}%`);
  event.currentTarget.style.setProperty("--glow-y", `${y}%`);
}
