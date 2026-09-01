"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Reveal, RevealGroup } from "@/components/shared/reveal";
import { hero } from "@/content/pages/home";
import { handleGlowMove } from "@/lib/glow";

// Scattered around the hero canvas — kept off small screens, where there's
// no room beside the centered content to place them without colliding.
const wordPositions = [
  "top-[13%] left-[5%]",
  "top-[20%] right-[6%]",
  "bottom-[22%] left-[8%]",
  "bottom-[32%] right-[18%]",
];

// Each word drifts on its own slow, gentle loop — different enough per word
// to feel organic rather than mechanically synced.
const floatStyles: CSSProperties[] = [
  { "--float-duration": "11s", "--float-delay": "0s", "--float-x": "5px", "--float-y": "-8px" } as CSSProperties,
  { "--float-duration": "13s", "--float-delay": "-3s", "--float-x": "-6px", "--float-y": "7px" } as CSSProperties,
  { "--float-duration": "9s", "--float-delay": "-5s", "--float-x": "6px", "--float-y": "6px" } as CSSProperties,
  { "--float-duration": "12s", "--float-delay": "-8s", "--float-x": "-5px", "--float-y": "-7px" } as CSSProperties,
];

export function Hero() {
  return (
    <section
      onMouseMove={handleGlowMove}
      style={{ "--ice-glow-opacity": 0.8 } as CSSProperties}
      className="ice-field relative overflow-hidden py-24 sm:py-32"
    >
      <div aria-hidden className="ice-glow" />

      {/* Faint words hidden in the canvas, revealed under the cursor's glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="absolute inset-0">
          {hero.pills.map((word, i) => (
            <span
              key={word}
              className={`hero-word absolute font-heading text-base italic ${wordPositions[i]}`}
              style={{
                ...floatStyles[i],
                backgroundImage:
                  "linear-gradient(120deg, color-mix(in oklch, var(--mascot-blue) 12%, transparent), color-mix(in oklch, var(--primary) 12%, transparent))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {word}
            </span>
          ))}
        </div>
        <div
          className="absolute inset-0"
          style={{
            WebkitMaskImage:
              "radial-gradient(180px circle at var(--glow-x, 50%) var(--glow-y, 50%), black 0%, transparent 75%)",
            maskImage:
              "radial-gradient(180px circle at var(--glow-x, 50%) var(--glow-y, 50%), black 0%, transparent 75%)",
          }}
        >
          {hero.pills.map((word, i) => (
            <span
              key={word}
              className={`hero-word absolute font-heading text-base italic ${wordPositions[i]}`}
              style={{
                ...floatStyles[i],
                backgroundImage:
                  "linear-gradient(120deg, color-mix(in oklch, var(--mascot-blue) 85%, transparent), color-mix(in oklch, var(--primary) 85%, transparent))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      <Container className="relative">
        <RevealGroup className="flex flex-col items-center text-center" amount={0.3}>
          <Reveal>
            <span className="text-sm font-medium text-primary">{hero.eyebrow}</span>
          </Reveal>

          <Reveal>
            <h1 className="mt-3 max-w-3xl text-balance font-heading text-4xl font-medium tracking-tight sm:text-5xl">
              {hero.title}
            </h1>
          </Reveal>

          <Reveal>
            <p className="mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
              {hero.subtitle}
            </p>
          </Reveal>

          <Reveal>
            <div id="hero-primary-cta" className="mt-8">
              <Button size="lg" asChild>
                <Link href={hero.primaryCta.href}>
                  {hero.primaryCta.label}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </RevealGroup>
      </Container>

      <Image
        src="/mascot/pengui-mascot.png"
        alt=""
        aria-hidden
        width={640}
        height={720}
        priority
        className="pointer-events-none absolute right-6 bottom-0 hidden w-24 select-none drop-shadow-xl sm:block sm:w-28 md:right-10 md:w-32 lg:w-36"
      />
    </section>
  );
}
