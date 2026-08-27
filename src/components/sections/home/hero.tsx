"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { hero } from "@/content/pages/home";
import { handleGlowMove } from "@/lib/glow";

export function Hero() {
  return (
    <section
      onMouseMove={handleGlowMove}
      className="ice-field relative overflow-hidden py-24 sm:py-32"
    >
      <div aria-hidden className="ice-glow" />

      <Container className="relative flex flex-col items-center text-center">
        <span className="glass-panel inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide text-secondary-foreground uppercase">
          {hero.eyebrow}
        </span>

        <h1 className="mt-6 max-w-3xl text-balance font-heading text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">
          {hero.title}
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
          {hero.subtitle}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm text-muted-foreground">
          {hero.pills.map((pill, i) => (
            <span key={pill} className="flex items-center gap-2">
              <span className="font-medium text-foreground">{pill}</span>
              {i < hero.pills.length - 1 ? (
                <span className="text-border">·</span>
              ) : null}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button size="lg" asChild>
            <Link href={hero.primaryCta.href}>
              {hero.primaryCta.label}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="glass-panel" asChild>
            <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
          </Button>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">{hero.microcopy}</p>
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
