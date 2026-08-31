import { Megaphone, Target, type LucideIcon } from "lucide-react";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";
import { visionMission } from "@/content/pages/faq";

const icons: Record<string, LucideIcon> = {
  megaphone: Megaphone,
  target: Target,
};

function Body({ text, strong }: { text: string; strong?: string }) {
  if (!strong || !text.includes(strong)) return <>{text}</>;
  const [before, after] = text.split(strong);
  return (
    <>
      {before}
      <span className="text-primary">{strong}</span>
      {after}
    </>
  );
}

function Card({
  card,
  dark,
}: {
  card: (typeof visionMission)["vision"] | (typeof visionMission)["mission"];
  dark?: boolean;
}) {
  const Icon = icons[card.icon];

  return (
    <div
      className={cn(
        "relative flex min-h-[280px] flex-col rounded-2xl border p-6",
        dark
          ? "color-block border-transparent text-foreground [&>*]:relative [&>*]:z-10"
          : "border-border/60 bg-card",
      )}
    >
      <span
        className={cn(
          "absolute top-6 right-6 z-10 size-2.5 rounded-full",
          dark ? "bg-primary" : "bg-indigo-500",
        )}
      />

      <div className="flex items-center gap-3">
        <div
          className={cn(
            "flex size-9 items-center justify-center rounded-lg",
            dark ? "bg-primary/20 text-primary" : "bg-accent text-accent-foreground",
          )}
        >
          {Icon ? <Icon className="size-4" /> : null}
        </div>
        <div>
          <p className="text-xs font-semibold tracking-wide text-primary uppercase">
            {card.label}
          </p>
          <p className="text-xs text-muted-foreground">{card.sub}</p>
        </div>
      </div>

      <p className="mt-5 text-lg leading-relaxed">
        <Body text={card.body} strong={card.strong} />
      </p>

      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {card.tags.map((tag) => (
          <span
            key={tag}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-medium",
              dark ? "bg-primary/15 text-primary" : "bg-secondary text-secondary-foreground",
            )}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function VisionMission() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <span className="text-sm font-medium text-primary">
          {visionMission.eyebrow}
        </span>
        <h2 className="mt-3 text-balance font-heading text-3xl font-medium tracking-tight sm:text-4xl">
          {visionMission.title}
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Card card={visionMission.vision} dark />
          <Card card={visionMission.mission} />
        </div>
      </Container>
    </section>
  );
}
