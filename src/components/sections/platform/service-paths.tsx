import Image from "next/image";
import {
  BarChart3,
  Cable,
  CheckCircle2,
  Code2,
  Handshake,
  LifeBuoy,
  Landmark,
  Megaphone,
  Scale,
  TrendingUp,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";
import { servicePaths } from "@/content/pages/platform";

const pathIcons: Record<string, LucideIcon> = {
  handshake: Handshake,
  code: Code2,
};

const buildIcons: Record<string, LucideIcon> = {
  landmark: Landmark,
  users: Users,
  "trending-up": TrendingUp,
  megaphone: Megaphone,
  scale: Scale,
  workflow: Workflow,
  "bar-chart": BarChart3,
  "life-buoy": LifeBuoy,
  cable: Cable,
};

function EmphasizedTitle() {
  const { title, titleEmphasis } = servicePaths;
  const parts: { text: string; color?: string }[] = [];
  let rest = title;
  titleEmphasis.forEach((emphasis, i) => {
    const idx = rest.indexOf(emphasis.text);
    if (idx === -1) return;
    parts.push({ text: rest.slice(0, idx) });
    parts.push({ text: emphasis.text, color: emphasis.color });
    rest = rest.slice(idx + emphasis.text.length);
    if (i === titleEmphasis.length - 1) parts.push({ text: rest });
  });

  return (
    <>
      {/* color highlight paused for now — plain text until the palette direction is finalized */}
      {parts.map((part, i) =>
        part.color ? (
          <em key={i} className="italic">
            {part.text}
          </em>
        ) : (
          <span key={i}>{part.text}</span>
        ),
      )}
    </>
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

export function ServicePaths() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-primary">
            {servicePaths.eyebrow}
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-medium tracking-tight sm:text-4xl">
            <EmphasizedTitle />
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            <Body text={servicePaths.subtitle} strong={servicePaths.strong} />
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-2 text-sm font-medium shadow-sm">
            <Image
              src="/mascot/pengui-avatar.png"
              alt=""
              aria-hidden
              width={20}
              height={20}
              className="size-5 rounded-full"
            />
            {servicePaths.badge}
          </span>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {servicePaths.paths.map((path) => {
            const Icon = pathIcons[path.icon];
            const isIndigo = path.accent === "indigo";
            return (
              <div
                key={path.key}
                className={cn(
                  "relative flex flex-col rounded-2xl border border-border/60 bg-card p-6 sm:p-8",
                )}
              >
                <span
                  className={cn(
                    "absolute inset-x-6 top-0 h-0.5 rounded-full sm:inset-x-8",
                    isIndigo ? "bg-indigo-500" : "bg-primary",
                  )}
                />

                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "flex size-10 items-center justify-center rounded-xl",
                      isIndigo ? "bg-indigo-500/10 text-indigo-500" : "bg-accent text-accent-foreground",
                    )}
                  >
                    {Icon ? <Icon className="size-5" /> : null}
                  </div>
                  <div>
                    <p
                      className={cn(
                        "text-xs font-semibold tracking-wide uppercase",
                        isIndigo ? "text-indigo-500" : "text-primary",
                      )}
                    >
                      {path.label}
                    </p>
                    <p className="text-xs text-muted-foreground">{path.sub}</p>
                  </div>
                </div>

                <p className="mt-5 font-heading text-xl font-medium">{path.title}</p>

                <div className="mt-3 flex flex-col gap-3 text-sm text-muted-foreground">
                  {path.body.map((paragraph, i) => (
                    <p key={i}>
                      <Body text={paragraph.text} strong={paragraph.strong} />
                    </p>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 border-t border-border/60 pt-5 text-sm font-medium">
                  <CheckCircle2
                    className={cn("size-4 shrink-0", isIndigo ? "text-indigo-500" : "text-primary")}
                  />
                  <span className={isIndigo ? "text-indigo-500" : "text-primary"}>
                    {path.footnote}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            {servicePaths.commonBuilds.label}
          </span>
          {servicePaths.commonBuilds.items.map((item) => {
            const Icon = buildIcons[item.icon];
            return (
              <span
                key={item.label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-sm font-medium"
              >
                {Icon ? <Icon className="size-3.5 text-muted-foreground" /> : null}
                {item.label}
              </span>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
