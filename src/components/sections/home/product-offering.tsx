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
import { cn } from "@/lib/utils";
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
    <section id="offering" className="bg-secondary/30 py-24 sm:py-32">
      <Container>
        <div className="flex items-baseline gap-4 border-b border-border/60 pb-4">
          <span className="shrink-0 text-xs font-semibold tracking-widest text-primary uppercase">
            {productOffering.eyebrow}
          </span>
          <span className="h-px w-full bg-border/60" />
        </div>
        <h2 className="mt-6 max-w-2xl text-balance font-heading text-3xl font-medium tracking-tight sm:text-4xl">
          {productOffering.titleLead}{" "}
          <em className="text-primary italic">{productOffering.titleEmphasis}</em>
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_auto_1.3fr_auto_1fr] lg:items-start">
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

          {/* The Pengui stack */}
          <div>
            <p className="text-center text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              {stack.label}
            </p>

            <div className="relative mt-4">
              <div className="mr-6 rounded-2xl bg-primary p-5 pb-14 text-primary-foreground shadow-sm">
                <p className="text-xs font-medium tracking-wide text-primary-foreground/70 uppercase">
                  {stack.addOn.eyebrow}
                </p>
                <p className="mt-1 flex items-center gap-2 text-lg font-medium">
                  {(() => {
                    const AddOnIcon = icons[stack.addOn.icon];
                    return AddOnIcon ? (
                      <span className="flex size-7 items-center justify-center rounded-lg bg-primary-foreground/15">
                        <AddOnIcon className="size-4" />
                      </span>
                    ) : null;
                  })()}
                  {stack.addOn.name}
                </p>
                <p className="mt-1.5 text-sm text-primary-foreground/80">
                  {stack.addOn.description}
                </p>
              </div>

              <div className="color-block relative -mt-10 ml-6 rounded-2xl border border-black/10 p-5 text-foreground shadow-md [&>*]:relative [&>*]:z-10 sm:p-6">
                <div className="flex items-center gap-3">
                  <Image
                    src="/mascot/pengui-avatar.png"
                    alt=""
                    aria-hidden
                    width={36}
                    height={36}
                    className="size-9 shrink-0 rounded-full"
                  />
                  <div>
                    <p className="text-xs font-medium tracking-wide text-primary uppercase">
                      {stack.base.eyebrow}
                    </p>
                    <p className="text-lg font-medium">{stack.base.name}</p>
                  </div>
                </div>

                <span
                  className={cn(
                    "mt-3 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase",
                    "text-foreground",
                  )}
                  style={{ backgroundColor: "var(--mascot-lime)" }}
                >
                  {stack.base.badge}
                </span>

                <p className="mt-3 text-sm text-muted-foreground">
                  <Body text={stack.base.description} strong={stack.base.strong} />
                </p>

                <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {stack.base.modules.map((module) => {
                    const Icon = icons[module.icon];
                    return (
                      <div
                        key={module.label}
                        className="flex items-center gap-2 rounded-lg border border-border/60 bg-card/80 px-3 py-2 text-sm font-medium"
                      >
                        {Icon ? <Icon className="size-4 shrink-0 text-primary" /> : null}
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

                <div className="mt-4 flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-3 py-2.5 text-sm font-medium">
                  {(() => {
                    const ConnIcon = icons[stack.base.connectivity.icon];
                    return ConnIcon ? (
                      <ConnIcon className="size-4 shrink-0 text-primary" />
                    ) : null;
                  })()}
                  {stack.base.connectivity.label}
                  <span className="font-normal text-muted-foreground">
                    · {stack.base.connectivity.tag}
                  </span>
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
                  className="flex items-center gap-3 rounded-xl border border-border/60 bg-card p-3"
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
              <div
                className={cn(
                  "flex items-center gap-3 rounded-xl border border-dashed border-border p-3 text-sm text-muted-foreground",
                )}
              >
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-secondary">
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
