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

// An orthogonal "circuit-board" connector with the corners rounded off:
// straight down from the start, a smooth curve into a shared bus row,
// straight across, another smooth curve, straight down into the end. Reads
// as deliberately routed to a specific point, without the harsh right angles
// of a plain elbow.
function roundedElbow(x1: number, y1: number, busY: number, x2: number, y2: number, r = 3) {
  if (x1 === x2) return `M${x1},${y1} L${x2},${y2}`;
  const dir = x2 > x1 ? 1 : -1;
  return [
    `M${x1},${y1}`,
    `L${x1},${busY - r}`,
    `Q${x1},${busY} ${x1 + dir * r},${busY}`,
    `L${x2 - dir * r},${busY}`,
    `Q${x2},${busY} ${x2},${busY + r}`,
    `L${x2},${y2}`,
  ].join(" ");
}

const TOP_X = [16, 50, 84];
const BOTTOM_X = [16, 50, 84];
const HUB = { x: 50, y: 50 };
// Line waypoints, tuned against the cluster cards' actual rendered height and
// the hub circle's size so every bend clears real content with visible room.
const TOP_LINE_START_Y = 34;
const TOP_BUS_Y = 40;
const HUB_TOP_Y = 45;
// Clears the hub's "Pengui Platform" caption (avatar + gap + label sit a
// good deal below the hub's own center point) so the trunk line starts
// below the text instead of drawing straight through it.
const HUB_BOTTOM_Y = 63;
const BOTTOM_BUS_Y = 75;
const BOTTOM_LINE_END_Y = 90;
// Where the "Connect & run" group label sits on the trunk line, between
// the hub and the bus row.
const CONNECT_LABEL_Y = (HUB_BOTTOM_Y + BOTTOM_BUS_Y) / 2;

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
            Capabilities
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            One platform. Nothing running in isolation.
          </p>
        </div>

        {/* Desktop: the actual connected diagram */}
        <div className="relative mx-auto mt-16 hidden min-h-[600px] max-w-5xl lg:block">
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
                d={roundedElbow(TOP_X[i], TOP_LINE_START_Y, TOP_BUS_Y, HUB.x, HUB_TOP_Y)}
              />
            ))}
            {bottomItems.map((_, i) => (
              <path
                key={`bottom-${i}`}
                className="flow-path"
                d={roundedElbow(HUB.x, HUB_BOTTOM_Y, BOTTOM_BUS_Y, BOTTOM_X[i], BOTTOM_LINE_END_Y)}
              />
            ))}
          </svg>

          {topClusters.map((group, i) => (
            <div
              key={group.layer}
              style={{ left: `${TOP_X[i]}%`, bottom: `${100 - TOP_LINE_START_Y}%` }}
              className="absolute w-56 -translate-x-1/2 rounded-2xl border border-border/60 bg-card p-4 shadow-sm"
            >
              <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                {group.layer}
              </p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">{group.caption}</p>
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
                  aria-label="Pengui Platform"
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

          {/* Sits on the trunk line with a matching backdrop so the dashed
              line reads as passing behind the label, not through it. */}
          <div
            style={{ left: `${HUB.x}%`, top: `${CONNECT_LABEL_Y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 bg-secondary px-2 text-center"
          >
            <p className="text-xs font-semibold tracking-wide text-primary uppercase">
              {connect.layer}
            </p>
            <p className="text-[11px] text-muted-foreground">{connect.caption}</p>
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

        <p className="mt-10 text-center text-sm text-muted-foreground">{capabilities.note}</p>
      </Container>
    </section>
  );
}
