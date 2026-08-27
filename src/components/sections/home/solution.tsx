import Image from "next/image";
import {
  AppWindow,
  ArrowLeftRight,
  BrainCircuit,
  Briefcase,
  Cable,
  Cloud,
  Coins,
  Cpu,
  Database,
  Hash,
  HardDrive,
  Mail,
  MessageCircle,
  MessageSquareText,
  Puzzle,
  Search,
  Users,
  Warehouse,
  Workflow,
  type LucideIcon,
} from "lucide-react";
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
  "hard-drive": HardDrive,
  users: Users,
  cloud: Cloud,
  hash: Hash,
  mail: Mail,
};

function TitleWithHighlight({ title, highlight }: { title: string; highlight?: string }) {
  if (!highlight || !title.includes(highlight)) return <>{title}</>;
  const [before, after] = title.split(highlight);
  return (
    <>
      {before}
      <span className="text-primary">{highlight}</span>
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

function Connector() {
  return (
    <div className="hidden items-center justify-center lg:flex">
      <span className="flex size-9 items-center justify-center rounded-full border border-border/60 bg-background text-muted-foreground shadow-sm">
        <ArrowLeftRight className="size-4" />
      </span>
    </div>
  );
}

export function Solution() {
  const [surfaces, layer, enterprise] = solution.columns;

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

        <div className="mt-16 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1.35fr_auto_1fr]">
          <div className="rounded-2xl border border-border/60 bg-secondary/30 p-6">
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              {surfaces.sub}
            </p>
            <p className="mt-1 text-base font-semibold">{surfaces.label}</p>
            <ul className="mt-5 flex flex-col gap-2.5">
              {surfaces.items?.map((item) => (
                <Row key={item.label} label={item.label} icon={item.icon} />
              ))}
            </ul>
          </div>

          <Connector />

          <div className="color-block relative rounded-2xl border border-transparent p-6 text-foreground [&>*]:relative [&>*]:z-10">
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
          </div>

          <Connector />

          <div className="rounded-2xl border border-border/60 bg-secondary/30 p-6">
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              {enterprise.sub}
            </p>
            <p className="mt-1 text-base font-semibold">{enterprise.label}</p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              {enterprise.logos?.map((logo) => (
                <Row key={logo.label} label={logo.label} icon={logo.icon} compact />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
