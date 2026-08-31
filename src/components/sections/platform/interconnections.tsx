"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  BrainCircuit,
  Cable,
  Cpu,
  LayoutGrid,
  MessageSquareText,
  Palette,
  Puzzle,
  Search,
  Store,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { useAnimationFrame, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/container";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { capabilities } from "@/content/pages/platform";

const HUB_DESCRIPTION =
  "Everything above and below runs through one engine — your infrastructure, your models, your data, always included.";

const icons: Record<string, LucideIcon> = {
  "layout-grid": LayoutGrid,
  workflow: Workflow,
  "brain-circuit": BrainCircuit,
  "message-square-text": MessageSquareText,
  search: Search,
  puzzle: Puzzle,
  cpu: Cpu,
  cable: Cable,
  store: Store,
  palette: Palette,
};

// A smooth flowchart-style S-curve between two points in a shared 0..100 space.
function curve(x1: number, y1: number, x2: number, y2: number) {
  const midY = (y1 + y2) / 2;
  return `M${x1},${y1} C${x1},${midY} ${x2},${midY} ${x2},${y2}`;
}

const TOP_X = [16, 50, 84];
const BOTTOM_X = [16, 50, 84];
const HUB = { x: 50, y: 50 };
const TOP_Y = 33;
const BOTTOM_Y = 70;

function Pill({
  icon,
  label,
  description,
  side = "top",
}: {
  icon: string;
  label: string;
  description: string;
  side?: "top" | "bottom";
}) {
  const Icon = icons[icon];
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span
          tabIndex={0}
          className="flex cursor-help items-center gap-1.5 rounded-full border border-border/60 bg-background px-2.5 py-1 text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {Icon ? <Icon className="size-3 text-primary" /> : null}
          {label}
        </span>
      </TooltipTrigger>
      <TooltipContent side={side} className="max-w-[210px] text-left whitespace-normal">
        {description}
      </TooltipContent>
    </Tooltip>
  );
}

export function Interconnections() {
  const [controlPlane, core, caps, connect] = capabilities.groups;
  const topClusters = [controlPlane, core, caps];
  const bottomItems = connect.items;
  const reduceMotion = useReducedMotion();
  const svgRef = useRef<SVGSVGElement>(null);

  // Drives the dashed connector lines' "flow" via a CSS variable each frame
  // instead of a CSS @keyframes animation — stroke-dashoffset isn't one of
  // Framer Motion's animatable style values, so this reads its rAF clock
  // directly rather than going through `animate`.
  useAnimationFrame((t) => {
    if (reduceMotion || !svgRef.current) return;
    const offset = -24 * ((t % 1400) / 1400);
    svgRef.current.style.setProperty("--flow-offset", `${offset}`);
  });

  return (
    <section className="bg-secondary py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-primary">How the pieces connect</span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-medium tracking-tight sm:text-4xl">
            One platform. Nothing running in isolation.
          </h2>
        </div>

        {/* Desktop: the actual connected diagram */}
        <div className="relative mx-auto mt-16 hidden min-h-[520px] max-w-5xl lg:block">
          <svg
            ref={svgRef}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            aria-hidden
          >
            {topClusters.map((_, i) => (
              <path
                key={`top-${i}`}
                className="flow-path"
                d={curve(TOP_X[i], TOP_Y + 5, HUB.x, HUB.y - 10)}
              />
            ))}
            {bottomItems.map((_, i) => (
              <path
                key={`bottom-${i}`}
                className="flow-path"
                d={curve(HUB.x, HUB.y + 13, BOTTOM_X[i], BOTTOM_Y - 5)}
              />
            ))}
          </svg>

          {topClusters.map((group, i) => (
            <div
              key={group.layer}
              style={{ left: `${TOP_X[i]}%`, top: 0 }}
              className="absolute w-56 -translate-x-1/2 rounded-2xl border border-border/60 bg-card p-4 shadow-sm"
            >
              <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                {group.layer}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <Pill
                    key={item.piece}
                    icon={item.icon}
                    label={item.piece}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          ))}

          <div
            style={{ left: `${HUB.x}%`, top: `${HUB.y}%` }}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <span
                  tabIndex={0}
                  className="flex size-20 cursor-help items-center justify-center rounded-full border border-primary/30 bg-card p-2 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Image
                    src="/mascot/pengui-avatar.png"
                    alt=""
                    aria-hidden
                    width={64}
                    height={64}
                    className="size-full rounded-full"
                  />
                </span>
              </TooltipTrigger>
              <TooltipContent className="max-w-[210px] text-left whitespace-normal">
                {HUB_DESCRIPTION}
              </TooltipContent>
            </Tooltip>
            <span className="font-heading text-sm font-medium whitespace-nowrap">
              Pengui Platform
            </span>
          </div>

          {bottomItems.map((item, i) => (
            <div
              key={item.piece}
              style={{ left: `${BOTTOM_X[i]}%`, bottom: 0 }}
              className="absolute -translate-x-1/2"
            >
              <Pill
                icon={item.icon}
                label={item.piece}
                description={item.description}
                side="bottom"
              />
            </div>
          ))}
        </div>

        {/* Mobile: a plain grid, no lines */}
        <div className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:hidden">
          {[...topClusters.flatMap((g) => g.items), ...bottomItems].map((item) => (
            <Pill
              key={item.piece}
              icon={item.icon}
              label={item.piece}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
