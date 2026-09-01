import Image from "next/image";
import {
  ArrowLeftRight,
  BrainCircuit,
  Cloud,
  Compass,
  FileSearch,
  Gauge,
  LayoutTemplate,
  Plug,
  Plus,
  Server,
  Share2,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { productOffering } from "@/content/pages/home";

const icons: Record<string, LucideIcon> = {
  cloud: Cloud,
  server: Server,
  users: Users,
  gauge: Gauge,
  share: Share2,
  "file-search": FileSearch,
  layout: LayoutTemplate,
  "brain-circuit": BrainCircuit,
  compass: Compass,
  plug: Plug,
};

function Connector() {
  return (
    <div className="hidden items-center justify-center lg:flex">
      <span className="flex size-9 items-center justify-center rounded-full border border-border/60 bg-card text-muted-foreground shadow-sm">
        <ArrowLeftRight className="size-4" />
      </span>
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

export function ProductOffering() {
  const { whereItRuns, stack, marketplace } = productOffering;

  return (
    <section id="offering" className="bg-secondary py-24 sm:py-32">
      <Container>
        <h2 className="max-w-2xl text-balance font-heading text-3xl font-medium tracking-tight sm:text-4xl">
          {productOffering.titleLead}{" "}
          <em className="italic">{productOffering.titleEmphasis}</em>
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_auto_1.3fr_auto_1fr] lg:items-center">
          {/* Where it runs */}
          <div>
            <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
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
            <p className="text-center text-xs font-semibold tracking-wide text-muted-foreground uppercase">
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
                    <div
                      key={module.label}
                      className="flex items-center gap-2 rounded-xl border border-primary/25 bg-primary/10 px-3 py-2.5 text-sm font-medium"
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
                  );
                })}
              </div>

              <div className="mt-2 flex items-center gap-2 rounded-xl border border-primary/25 bg-primary/10 px-3 py-2.5 text-sm font-medium">
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

              <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-border/60 bg-background/70 p-3.5">
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
            <p className="flex items-baseline justify-between gap-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              {marketplace.label}
              <span className="font-normal text-muted-foreground/70 normal-case">
                {marketplace.note}
              </span>
            </p>
            <div className="mt-4 flex flex-col gap-2.5">
              {marketplace.agents.map((agent) => (
                <div
                  key={agent}
                  className="flex items-center gap-3 rounded-lg border border-border/60 bg-card p-3"
                >
                  <Image
                    src="/mascot/pengui-avatar.png"
                    alt=""
                    aria-hidden
                    width={28}
                    height={28}
                    className="size-7 rounded-full"
                  />
                  <span className="text-sm font-medium">{agent}</span>
                </div>
              ))}
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
