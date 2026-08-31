"use client";

import Image from "next/image";
import {
  AppWindow,
  ArrowLeftRight,
  BrainCircuit,
  Briefcase,
  Cable,
  Coins,
  Cpu,
  Database,
  MessageCircle,
  MessageSquareText,
  Puzzle,
  Search,
  Warehouse,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Container } from "@/components/layout/container";
import { solution } from "@/content/pages/home";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  "message-circle": MessageCircle,
  briefcase: Briefcase,
  workflow: Workflow,
  "app-window": AppWindow,
  "brain-circuit": BrainCircuit,
  search: Search,
  puzzle: Puzzle,
  "message-square-text": MessageSquareText,
  cpu: Cpu,
  coins: Coins,
  cable: Cable,
  database: Database,
  warehouse: Warehouse,
};

function TitleWithHighlight({ title, highlight }: { title: string; highlight?: string }) {
  if (!highlight || !title.includes(highlight)) return <>{title}</>;
  const [before, after] = title.split(highlight);
  return (
    <>
      {before}
      {/* color highlight paused for now — plain text until the palette direction is finalized */}
      <span>{highlight}</span>
      {after}
    </>
  );
}

function Row({
  label,
  icon,
  dark,
  compact,
}: {
  label: string;
  icon: string;
  dark?: boolean;
  compact?: boolean;
}) {
  const Icon = icons[icon];
  return (
    <li
      className={cn(
        "flex items-center rounded-xl border font-medium",
        compact ? "gap-2 px-2.5 py-2 text-xs" : "gap-3 px-3 py-2.5 text-sm",
        dark
          ? "border-primary/25 bg-primary/10 text-foreground"
          : "border-border/60 bg-background text-foreground",
      )}
    >
      <span
        className={cn(
          "flex shrink-0 items-center justify-center rounded-lg",
          compact ? "size-6" : "size-7",
          dark ? "bg-primary/20 text-primary" : "bg-accent text-accent-foreground",
        )}
      >
        {Icon ? <Icon className={compact ? "size-3" : "size-3.5"} /> : null}
      </span>
      <span className="leading-snug">{label}</span>
    </li>
  );
}

function LogoPill({ label, logoSrc }: { label: string; logoSrc: string }) {
  return (
    <div
      title={label}
      className="flex h-11 items-center justify-center rounded-xl border border-border/60 bg-card px-3"
    >
      <Image src={logoSrc} alt={label} width={120} height={28} className="h-5 w-auto object-contain" />
    </div>
  );
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: "easeOut" },
  }),
};

function Connector() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="z-20 hidden shrink-0 items-center justify-center lg:-mx-2 lg:flex">
      <motion.span
        initial={reduceMotion ? false : { opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.4 }}
        className="flex size-9 items-center justify-center rounded-full border border-border/60 bg-card text-muted-foreground shadow-sm"
      >
        <ArrowLeftRight className="size-4" />
      </motion.span>
    </div>
  );
}

export function Solution() {
  const [surfaces, layer, enterprise] = solution.columns;
  const reduceMotion = useReducedMotion();

  return (
    <section id="solution" className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-primary">{solution.eyebrow}</span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-medium tracking-tight sm:text-4xl">
            <TitleWithHighlight title={solution.title} highlight={solution.titleHighlight} />
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">{solution.subtitle}</p>
        </div>

        <div className="mt-16 flex flex-col items-stretch gap-6 lg:flex-row lg:items-center lg:justify-center lg:gap-0">
          <motion.div
            custom={0}
            variants={cardVariants}
            initial={reduceMotion ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-2xl border border-border/60 bg-card/80 p-6 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md lg:w-[280px]"
          >
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              {surfaces.sub}
            </p>
            <p className="mt-1 text-base font-semibold">{surfaces.label}</p>
            <ul className="mt-5 flex flex-col gap-2.5">
              {surfaces.items?.map((item) => (
                <Row key={item.label} label={item.label} icon={item.icon} />
              ))}
            </ul>
          </motion.div>

          <Connector />

          <motion.div
            custom={1}
            variants={cardVariants}
            initial={reduceMotion ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="color-block relative z-10 rounded-2xl border border-primary/25 p-6 text-foreground shadow-2xl ring-4 ring-primary/10 [&>*]:relative [&>*]:z-10 lg:w-[380px] lg:scale-[1.03]"
          >
            <span className="absolute top-6 right-6 z-10 size-2.5 rounded-full bg-primary shadow-[0_0_0_4px] shadow-primary/20" />
            <div className="flex items-center gap-2.5">
              <Image
                src="/mascot/pengui-avatar.png"
                alt=""
                aria-hidden
                width={28}
                height={28}
                className="size-7 rounded-full"
              />
              <p className="text-xs font-medium tracking-wide text-primary uppercase">
                {solution.layer.eyebrow}
              </p>
            </div>
            <p className="mt-2 text-lg font-medium">{solution.layer.title}</p>
            <p className="mt-2 text-sm text-muted-foreground">{solution.layer.description}</p>

            <div className="mt-6 grid grid-cols-2 gap-2">
              {layer.items?.map((item) => (
                <Row key={item.label} label={item.label} icon={item.icon} dark compact />
              ))}
            </div>
          </motion.div>

          <Connector />

          <motion.div
            custom={2}
            variants={cardVariants}
            initial={reduceMotion ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-2xl border border-border/60 bg-card/80 p-6 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md lg:w-[280px]"
          >
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              {enterprise.sub}
            </p>
            <p className="mt-1 text-base font-semibold">{enterprise.label}</p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              {enterprise.logos?.map((logo) =>
                "logoSrc" in logo && logo.logoSrc ? (
                  <LogoPill key={logo.label} label={logo.label} logoSrc={logo.logoSrc} />
                ) : (
                  <Row key={logo.label} label={logo.label} icon={(logo as { icon: string }).icon} compact />
                ),
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
