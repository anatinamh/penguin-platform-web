import {
  BrainCircuit,
  Cable,
  Cpu,
  LayoutGrid,
  MessageSquareText,
  Palette,
  Puzzle,
  Search,
  Star,
  Store,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";
import { capabilities } from "@/content/pages/platform";

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

function CapabilityCard({
  item,
  dark,
}: {
  item: (typeof capabilities.groups)[number]["items"][number];
  dark?: boolean;
}) {
  const Icon = icons[item.icon];

  return (
    <div
      className={cn(
        "relative flex flex-col gap-3 rounded-2xl border p-5",
        dark
          ? "color-block border-transparent text-foreground [&>*]:relative [&>*]:z-10"
          : "border-border/60 bg-card",
        "featured" in item && item.featured
          ? "border-primary/50 ring-1 ring-primary/20"
          : undefined,
      )}
    >
      {"featured" in item && item.featured ? (
        <span className="absolute -top-3 -right-3 z-10 flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
          <Star className="size-3.5 fill-current" />
        </span>
      ) : null}

      <div
        className={cn(
          "flex size-9 items-center justify-center rounded-lg",
          dark ? "bg-primary/20 text-primary" : "bg-accent text-accent-foreground",
        )}
      >
        <Icon className="size-4" />
      </div>

      <div>
        <h4 className="flex flex-wrap items-baseline gap-x-2 font-heading text-lg font-medium">
          {item.piece}
          {"tag" in item && item.tag ? (
            <span className="font-sans text-xs font-medium tracking-wide text-primary uppercase">
              {item.tag}
            </span>
          ) : null}
        </h4>
        <p className="mt-1.5 text-sm text-muted-foreground">{item.description}</p>
      </div>
    </div>
  );
}

const gridCols: Record<number, string> = {
  1: "grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export function Capabilities() {
  return (
    <section id="capabilities" className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-heading text-3xl font-medium tracking-tight sm:text-4xl">
            {capabilities.eyebrow}
          </h2>
        </div>

        <div className="mt-12 rounded-3xl border border-border/60 bg-card/40 p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col gap-8">
            {capabilities.groups.map((group) => (
              <div key={group.layer} className="grid gap-4 md:grid-cols-[9rem_1fr] md:gap-8">
                <div>
                  <h3 className="text-xs font-semibold tracking-wide text-primary uppercase">
                    {group.layer}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">{group.caption}</p>
                </div>

                <div className={cn("grid gap-4", gridCols[group.items.length])}>
                  {group.items.map((item) => (
                    <CapabilityCard key={item.piece} item={item} dark={group.dark} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">{capabilities.note}</p>
      </Container>
    </section>
  );
}
