"use client";

import { useRef } from "react";
import Image from "next/image";
import { BrainCircuit, Palette, ShieldCheck, Zap, type LucideIcon } from "lucide-react";
import { motion, useAnimationFrame, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { shift } from "@/content/pages/home";

// Clockwise from 12 o'clock — matches the order of shift.agentic.items.
const nodeIcons: LucideIcon[] = [BrainCircuit, ShieldCheck, Palette, Zap];
const nodePositions = [
  "top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2", // 12 o'clock
  "top-1/2 left-[82%] -translate-x-1/2 -translate-y-1/2", // 3 o'clock
  "top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2", // 6 o'clock
  "top-1/2 left-[18%] -translate-x-1/2 -translate-y-1/2", // 9 o'clock
];
// A circular orbit through all four node positions (radius 40, centered on
// the hub) — two semicircle arcs, both swept clockwise so a dot animated
// along this path travels top → right → bottom → left.
const orbitPath = "M50 10 A40 40 0 1 1 50 90 A40 40 0 1 1 50 10";
const ORBIT_DURATION_MS = 7000;

export function Shift() {
  const reduceMotion = useReducedMotion();
  const orbitDotRef = useRef<SVGCircleElement>(null);

  // Drives the orbiting dot via rAF instead of a native SMIL <animateMotion>,
  // since prefers-reduced-motion can't reach SMIL — same technique already
  // used for Interconnections' flow lines.
  useAnimationFrame((t) => {
    if (reduceMotion || !orbitDotRef.current) return;
    const angle = ((t % ORBIT_DURATION_MS) / ORBIT_DURATION_MS) * Math.PI * 2;
    orbitDotRef.current.setAttribute("cx", `${50 + 40 * Math.sin(angle)}`);
    orbitDotRef.current.setAttribute("cy", `${50 - 40 * Math.cos(angle)}`);
  });

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

        <div className="relative mt-16 flex flex-col items-start justify-center gap-16 lg:flex-row">
          {/* A chatbot */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center text-center">
              <p className="text-sm font-medium text-muted-foreground uppercase">
                {shift.chatbot.label}
              </p>
              <p className="mt-1 font-heading text-xl font-medium">{shift.chatbot.heading}</p>

              <div className="mt-8 flex w-full max-w-xs flex-col gap-3">
                <div className="self-end rounded-2xl rounded-br-sm border border-border/60 bg-card px-4 py-2.5 text-sm shadow-sm">
                  Can you take care of this?
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

              <div className="relative mt-8 aspect-square w-full max-w-[280px]">
                <svg viewBox="0 0 100 100" className="absolute inset-0" aria-hidden>
                  <path
                    d={orbitPath}
                    stroke="var(--line-connector)"
                    strokeWidth={1.5}
                    vectorEffect="non-scaling-stroke"
                    fill="none"
                  />
                  <circle ref={orbitDotRef} cx={50} cy={10} r={1.6} fill="var(--primary)" />
                </svg>

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
                      className={`absolute flex flex-col items-center gap-1.5 ${nodePositions[i]}`}
                    >
                      <span className="flex size-9 items-center justify-center rounded-full border border-border/60 bg-card text-primary shadow-sm">
                        <Icon className="size-4" />
                      </span>
                      <span className="w-20 rounded-md border border-border/60 bg-card/85 px-1.5 py-0.5 text-center text-xs font-medium">
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
