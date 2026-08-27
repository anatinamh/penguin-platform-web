"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { handleGlowMove } from "@/lib/glow";

export function FinalCta({
  eyebrow,
  title,
  body,
  primaryCta,
}: {
  eyebrow: string;
  title: string;
  body: string;
  primaryCta: { label: string; href: string };
}) {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <Container>
        <div
          onMouseMove={handleGlowMove}
          style={{ "--ice-glow-opacity": 0.85 } as CSSProperties}
          className="ice-field relative flex flex-col items-center overflow-hidden rounded-3xl border border-border/60 px-6 py-16 text-center sm:px-16"
        >
          <div aria-hidden className="ice-glow" />

          <Image
            src="/mascot/pengui-avatar.png"
            alt=""
            aria-hidden
            width={112}
            height={112}
            className="relative size-14 rounded-full ring-4 ring-background"
          />

          <span className="relative mt-4 text-sm font-medium text-primary">{eyebrow}</span>
          <h2 className="relative mt-3 max-w-2xl text-balance font-heading text-3xl font-medium tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="relative mt-4 max-w-xl text-pretty text-muted-foreground">{body}</p>
          <div className="relative mt-8">
            <Button size="lg" asChild>
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
