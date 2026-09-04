"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { BrainCircuit, Palette, ShieldCheck, Zap, type LucideIcon } from "lucide-react";
import { motion, useAnimationFrame, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { getHome } from "@/content";
import type { Locale } from "@/lib/i18n";

// Clockwise from 12 o'clock — matches the order of shift.agentic.items.
const nodeIcons: LucideIcon[] = [BrainCircuit, ShieldCheck, Palette, Zap];
// The ring's SVG is inset within the container (see ORBIT_INSET below), so the
// ring sits at 29% of the container's half-width rather than the SVG's own 40%.
// Nodes land on that smaller circle, which leaves the outer band free for the
// labels instead of printing them over the line.
const nodePositions = [
  "top-[24%] left-1/2 -translate-x-1/2 -translate-y-1/2", // 12 o'clock
  "top-1/2 left-[76%] -translate-x-1/2 -translate-y-1/2", // 3 o'clock
  "top-[76%] left-1/2 -translate-x-1/2 -translate-y-1/2", // 6 o'clock
  "top-1/2 left-[24%] -translate-x-1/2 -translate-y-1/2", // 9 o'clock
];
// Each label hangs off its icon pointing away from the hub, so it lands in the
// clear band outside the ring instead of printing across the line. Only the
// two-column desktop layout has room beside the ring for the side labels;
// below that they tuck under their icon, which never overflows the column.
const LABEL_BASE = "top-full mt-2 left-1/2 -translate-x-1/2";
const labelPositions = [
  `${LABEL_BASE} lg:top-auto lg:bottom-full lg:mt-0 lg:mb-2`, // above, at 12 o'clock
  `${LABEL_BASE} lg:top-1/2 lg:left-full lg:mt-0 lg:ml-2 lg:translate-x-0 lg:-translate-y-1/2`, // right, at 3 o'clock
  LABEL_BASE, // below, at 6 o'clock
  `${LABEL_BASE} lg:top-1/2 lg:right-full lg:left-auto lg:mt-0 lg:mr-2 lg:translate-x-0 lg:-translate-y-1/2`, // left, at 9 o'clock
];
// Keeps the ring clear of the labels that ride just outside it.
const ORBIT_INSET_PCT = 18;
const ORBIT_INSET = "inset-[18%]";
// A circular orbit through all four node positions (radius 40, centered on
// the hub) — two semicircle arcs, both swept clockwise so a dot animated
// along this path travels top → right → bottom → left.
const orbitPath = "M50 10 A40 40 0 1 1 50 90 A40 40 0 1 1 50 10";
const ORBIT_DURATION_MS = 7000;
// The ring's own radius as a share of the *outer* square container: the SVG
// box is inset ORBIT_INSET_PCT on each side, and within it the ring spans 80%
// of that box's width (r=40 in a 0–100 viewBox). Keeping the dot's orbit in
// this same unit, rather than the SVG's local 0–100 space, is what lets it
// move via a plain CSS transform (below) instead of through the SVG.
const ORBIT_RADIUS_PCT = (100 - 2 * ORBIT_INSET_PCT) * 0.4;

export function Shift({ locale }: { locale: Locale }) {
  const { shift } = getHome(locale);
  const reduceMotion = useReducedMotion();
  const diagramRef = useRef<HTMLDivElement>(null);
  const orbitDotRef = useRef<HTMLSpanElement>(null);

  // The dot used to be an SVG <circle> with cx/cy rewritten every frame —
  // changing SVG geometry attributes forces the browser back onto the
  // layout/paint path on each tick. A plain element moved by CSS `transform`
  // stays on the compositor instead, which is what actually fixed the low
  // frame rate (this is the same fix as the price-lever cards' box-shadow:
  // stop animating a property that repaints, animate one that composites).
  useAnimationFrame((t) => {
    if (reduceMotion || !orbitDotRef.current || !diagramRef.current) return;
    const angle = ((t % ORBIT_DURATION_MS) / ORBIT_DURATION_MS) * Math.PI * 2;
    const radiusPx = diagramRef.current.offsetWidth * (ORBIT_RADIUS_PCT / 100);
    const x = radiusPx * Math.sin(angle);
    const y = -radiusPx * Math.cos(angle);
    orbitDotRef.current.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
  });

  // With motion reduced, the frame loop above never runs — this places the
  // dot at its resting spot (12 o'clock, angle 0) once instead, using the
  // same pixel math rather than a CSS percentage translate() would resolve
  // against the dot's own tiny size rather than the diagram's.
  useEffect(() => {
    if (!reduceMotion || !orbitDotRef.current || !diagramRef.current) return;
    const radiusPx = diagramRef.current.offsetWidth * (ORBIT_RADIUS_PCT / 100);
    orbitDotRef.current.style.transform = `translate(-50%, -50%) translate(0px, -${radiusPx}px)`;
  }, [reduceMotion]);

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-medium text-primary">{shift.eyebrow}</span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-medium tracking-tight lg:whitespace-nowrap sm:text-4xl">
            {shift.title}
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">{shift.note}</p>
        </div>

        {/* Stretch, not start-align: the chat column is shorter than the orbit,
            so left-aligned tops pooled all the difference as dead space under
            the bubbles. Headings still line up; the bodies center in between. */}
        <div className="relative mt-16 flex flex-col justify-center gap-16 lg:flex-row lg:items-stretch">
          {/* A chatbot */}
          <div className="w-full lg:w-1/2">
            <div className="flex h-full flex-col items-center text-center">
              <p className="text-sm font-medium text-muted-foreground uppercase">
                {shift.chatbot.label}
              </p>
              <p className="mt-1 font-heading text-xl font-medium">{shift.chatbot.heading}</p>

              <div className="mt-8 flex w-full max-w-xs flex-1 flex-col justify-center gap-3">
                <div className="self-end rounded-2xl rounded-br-sm border border-primary/20 bg-accent px-4 py-2.5 text-sm text-accent-foreground shadow-sm">
                  {shift.chatbot.prompt}
                </div>

                <div className="flex w-fit items-center gap-1 self-start rounded-2xl rounded-bl-sm border border-border/60 bg-card px-4 py-2.5 shadow-sm">
                  {[0, 0.15, 0.3].map((delay) => (
                    <motion.span
                      key={delay}
                      className="size-1.5 rounded-full bg-muted-foreground"
                      animate={
                        reduceMotion
                          ? undefined
                          : { opacity: [0.25, 1, 0.25, 0.25], y: [0, -2, 0, 0] }
                      }
                      transition={
                        reduceMotion
                          ? undefined
                          : {
                              duration: 1.3,
                              ease: "easeInOut",
                              repeat: Infinity,
                              times: [0, 0.4, 0.8, 1],
                              delay,
                            }
                      }
                    />
                  ))}
                </div>

                {shift.chatbot.items.map((item) => (
                  <div
                    key={item}
                    className="self-start rounded-2xl rounded-bl-sm border border-border/60 bg-card/70 px-4 py-2.5 text-left text-sm text-muted-foreground shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <span
            aria-hidden
            className="hidden w-px shrink-0 self-stretch bg-border/50 lg:block"
          />

          {/* An agentic layer */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center text-center">
              <p className="text-sm font-medium text-primary uppercase">{shift.agentic.label}</p>
              <p className="mt-1 font-heading text-xl font-medium">{shift.agentic.heading}</p>

              <div ref={diagramRef} className="relative mt-8 aspect-square w-full max-w-[420px]">
                <svg viewBox="0 0 100 100" className={`absolute ${ORBIT_INSET}`} aria-hidden>
                  <path
                    d={orbitPath}
                    stroke="var(--line-connector)"
                    strokeOpacity={0.55}
                    strokeWidth={1.5}
                    vectorEffect="non-scaling-stroke"
                    fill="none"
                  />
                </svg>
                <span
                  ref={orbitDotRef}
                  aria-hidden
                  className="absolute top-1/2 left-1/2 size-[8px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
                />

                {/* sonar pulses, expanding outward from the hub */}
                {[0, 1.6].map((delay) => (
                  <motion.span
                    key={delay}
                    aria-hidden
                    className="shift-sonar"
                    style={{ x: "-50%", y: "-50%" }}
                    animate={
                      reduceMotion
                        ? undefined
                        : { scale: [0.5, 1.3, 3.4], opacity: [0, 0.75, 0] }
                    }
                    transition={
                      reduceMotion
                        ? undefined
                        : {
                            duration: 3.2,
                            times: [0, 0.15, 1],
                            ease: [0.2, 0.6, 0.4, 1],
                            repeat: Infinity,
                            delay,
                          }
                    }
                  />
                ))}

                <div className="shift-hub absolute top-1/2 left-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-card shadow-md ring-4 ring-card/60">
                  <Image
                    src="/mascot/pengui-avatar.png"
                    alt=""
                    aria-hidden
                    width={40}
                    height={40}
                    className="size-10 rounded-full"
                  />
                </div>

                {shift.agentic.items.map((item, i) => {
                  const Icon = nodeIcons[i];
                  return (
                    <div
                      key={item}
                      className={`absolute flex size-9 items-center justify-center rounded-full border border-border/60 bg-card text-primary shadow-sm ${nodePositions[i]}`}
                    >
                      <Icon className="size-4" />
                      <span
                        className={`absolute w-32 rounded-md border border-primary/20 bg-accent px-2 py-1 text-center text-xs leading-tight font-medium text-accent-foreground shadow-sm ${labelPositions[i]}`}
                      >
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
