"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowLeftRight,
  BrainCircuit,
  Compass,
  FileSearch,
  Gauge,
  Landmark,
  LayoutTemplate,
  LifeBuoy,
  Megaphone,
  Plug,
  Plus,
  Server,
  Share2,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { getHome } from "@/content";
import type { Locale } from "@/lib/i18n";

// Same decelerate-and-settle curve used for every other scroll/loop
// animation on the site (see components/shared/reveal.tsx).
const EASE = [0.22, 0.61, 0.36, 1] as const;
const CAROUSEL_INTERVAL_MS = 2600;
// Matches "Where it runs" single card's rendered height, so the two side
// columns read as the same weight even though one is a static card and the
// other is a slot that cycles through several.
const CAROUSEL_MIN_HEIGHT = "min-h-[164px]";

const icons: Record<string, LucideIcon> = {
  server: Server,
  users: Users,
  gauge: Gauge,
  share: Share2,
  "file-search": FileSearch,
  layout: LayoutTemplate,
  "brain-circuit": BrainCircuit,
  compass: Compass,
  plug: Plug,
  "trending-up": TrendingUp,
  megaphone: Megaphone,
  landmark: Landmark,
  "life-buoy": LifeBuoy,
};

function GhostIcon({ icon }: { icon: string }) {
  const Icon = icons[icon];
  if (!Icon) return null;
  return (
    <Icon
      aria-hidden
      className="pointer-events-none absolute -top-6 -right-6 size-32 text-primary opacity-[0.08]"
      strokeWidth={1.25}
    />
  );
}

function Connector() {
  return (
    <div className="hidden items-center justify-center lg:flex">
      <span className="flex size-9 items-center justify-center rounded-full border border-border/60 bg-card text-muted-foreground shadow-sm">
        <ArrowLeftRight className="size-4" />
      </span>
    </div>
  );
}

// Cycles through the marketplace's prebuilt agents one at a time, in the
// same footprint as "Where it runs" single card — a vertical reel instead of
// a tall stack, with a soft zoom-and-settle on each new agent.
//
// Always renders this same structure regardless of reduceMotion — branching
// to an entirely different tree (a static stacked list) when reduceMotion is
// true caused a server/client hydration mismatch: Framer Motion's hook
// resolves synchronously on the client in a browser that has the OS setting
// on, but the server (no `window`) can't know that, so the two would render
// different markup on the very first paint. Reduced motion instead just
// stops the auto-advance timer and collapses the transition duration to 0 —
// manual clicks still work, instantly, so nothing is unreachable.
function AgentCarousel({ agents }: { agents: { name: string; icon: string }[] }) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduceMotion || paused || agents.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % agents.length);
    }, CAROUSEL_INTERVAL_MS);
    return () => clearInterval(id);
  }, [reduceMotion, paused, agents.length]);

  return (
    <div>
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm",
          CAROUSEL_MIN_HEIGHT,
        )}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.button
            key={index}
            type="button"
            aria-label={`Next: ${agents[(index + 1) % agents.length].name}`}
            onClick={() => setIndex((i) => (i + 1) % agents.length)}
            initial={{ opacity: 0, y: 28, scale: 0.86 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -28, scale: 0.86 }}
            transition={{ duration: reduceMotion ? 0 : 0.55, ease: EASE }}
            className="absolute inset-0 flex cursor-pointer flex-col items-center justify-center gap-3 p-5 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <GhostIcon icon={agents[index].icon} />
            <Image
              src="/mascot/pengui-avatar.png"
              alt=""
              aria-hidden
              width={44}
              height={44}
              className="relative size-11 rounded-full shadow-sm"
            />
            <span className="relative font-medium">{agents[index].name}</span>
          </motion.button>
        </AnimatePresence>
      </div>

      <div className="mt-2.5 flex justify-center gap-1.5" aria-hidden>
        {agents.map((agent, i) => (
          <span
            key={agent.name}
            className={cn(
              "size-1.5 rounded-full transition-colors duration-300",
              i === index ? "bg-primary" : "bg-border",
            )}
          />
        ))}
      </div>
    </div>
  );
}

function Body({ text, strong }: { text: string; strong?: string }) {
  if (!strong || !text.includes(strong)) return <>{text}</>;
  const [before, after] = text.split(strong);
  return (
    <>
      {before}
      <strong className="font-semibold text-foreground">{strong}</strong>
      {after}
    </>
  );
}

export function ProductOffering({ locale }: { locale: Locale }) {
  const { productOffering } = getHome(locale);
  const { whereItRuns, stack, marketplace } = productOffering;

  return (
    <section id="capabilities" className="bg-secondary py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-primary">{productOffering.eyebrow}</span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-medium tracking-tight sm:text-4xl">
            {productOffering.titleLead}{" "}
            <em className="italic">{productOffering.titleEmphasis}</em>
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">{productOffering.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_auto_1.3fr_auto_1fr] lg:items-center">
          {/* Where it runs */}
          <div>
            <p className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              {whereItRuns.label}
            </p>
            <div className="mt-4 flex flex-col">
              {whereItRuns.options.map((option, i) => {
                const Icon = icons[option.icon];
                return (
                  <div key={option.name}>
                    {i > 0 ? (
                      <div className="my-4 flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="h-px flex-1 bg-border/60" />
                        or
                        <span className="h-px flex-1 bg-border/60" />
                      </div>
                    ) : null}
                    <div className="rounded-2xl border border-border/60 bg-card p-5">
                      <div className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                        {Icon ? <Icon className="size-4" /> : null}
                      </div>
                      <p className="mt-4 font-medium">{option.name}</p>
                      <p className="mt-1.5 text-sm text-muted-foreground">
                        {option.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <Connector />

          {/* The Pengui stack — same treatment as Solution's featured middle
              card: one color-block surface, not two competing ones. */}
          <div>
            <p className="text-center text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              {stack.label}
            </p>

            <div className="color-block relative mt-4 rounded-2xl border border-primary/25 p-6 shadow-2xl ring-4 ring-primary/10 lg:scale-[1.03]">
              <span className="absolute top-6 right-6 size-2.5 rounded-full bg-primary shadow-[0_0_0_4px] shadow-primary/20" />

              <div className="flex items-center gap-2.5">
                <Image
                  src="/mascot/pengui-avatar.png"
                  alt=""
                  aria-hidden
                  width={28}
                  height={28}
                  className="size-7 shrink-0 rounded-full"
                />
                <p className="text-xs font-medium tracking-wide text-primary uppercase">
                  {stack.base.eyebrow}
                </p>
              </div>
              <p className="mt-2 text-lg font-medium">{stack.base.name}</p>

              <span
                className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide text-foreground uppercase"
                style={{ backgroundColor: "var(--mascot-lime)" }}
              >
                {stack.base.badge}
              </span>

              <p className="mt-3 text-sm text-muted-foreground">
                <Body text={stack.base.description} strong={stack.base.strong} />
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2">
                {stack.base.modules.map((module) => {
                  const Icon = icons[module.icon];
                  return (
                    <Tooltip key={module.label}>
                      <TooltipTrigger asChild>
                        <div
                          tabIndex={0}
                          className="flex cursor-help items-center gap-2 rounded-xl border border-primary/25 bg-primary/10 px-3 py-2.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          {Icon ? <Icon className="size-3.5 shrink-0 text-primary" /> : null}
                          <span>
                            {module.label}
                            {"tag" in module && module.tag ? (
                              <span className="ml-1 font-normal text-muted-foreground">
                                · {module.tag}
                              </span>
                            ) : null}
                          </span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-[210px] text-left whitespace-normal">
                        {module.description}
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    tabIndex={0}
                    className="mt-2 flex cursor-help items-center gap-2 rounded-xl border border-primary/25 bg-primary/10 px-3 py-2.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {(() => {
                      const ConnIcon = icons[stack.base.connectivity.icon];
                      return ConnIcon ? (
                        <ConnIcon className="size-3.5 shrink-0 text-primary" />
                      ) : null;
                    })()}
                    <span>
                      {stack.base.connectivity.label}
                      <span className="ml-1 font-normal text-muted-foreground">
                        · {stack.base.connectivity.tag}
                      </span>
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="max-w-[210px] text-left whitespace-normal">
                  {stack.base.connectivity.description}
                </TooltipContent>
              </Tooltip>

              {/* Stroked in the same lime as the "Full brand customization"
                  badge above, so the two visibly read as connected — this
                  add-on rides on top of the branded base, not a separate
                  offer. */}
              <div
                className="mt-5 flex items-start gap-2.5 rounded-xl border-2 bg-background/70 p-3.5"
                style={{ borderColor: "var(--mascot-lime)" }}
              >
                {(() => {
                  const AddOnIcon = icons[stack.addOn.icon];
                  return AddOnIcon ? (
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <AddOnIcon className="size-3.5" />
                    </span>
                  ) : null;
                })()}
                <div>
                  <p className="text-[10px] font-semibold tracking-wide text-muted-foreground uppercase">
                    {stack.addOn.eyebrow} · optional
                  </p>
                  <p className="text-sm font-medium">{stack.addOn.name}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{stack.addOn.description}</p>
                </div>
              </div>
            </div>
          </div>

          <Connector />

          {/* Agent Marketplace */}
          <div>
            <p className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              {marketplace.label}
            </p>
            <div className="mt-4 flex flex-col gap-2.5">
              <AgentCarousel agents={marketplace.agents} />
              <div className="flex items-center gap-3 rounded-lg border border-dashed border-primary/45 bg-primary/8 p-3 text-sm font-semibold text-primary">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Plus className="size-3.5" />
                </span>
                {marketplace.more}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
