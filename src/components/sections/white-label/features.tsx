import { BrainCircuit, Cloud, Cpu, Layers, Palette, Users, Zap, type LucideIcon } from "lucide-react";
import { Container } from "@/components/layout/container";
import { whiteLabelBanner, whiteLabelFeatures } from "@/content/pages/white-label";

const icons: Record<string, LucideIcon> = {
  palette: Palette,
  cloud: Cloud,
  cpu: Cpu,
  users: Users,
  layers: Layers,
  "brain-circuit": BrainCircuit,
};

function Description({ text, strong }: { text: string; strong?: string }) {
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

export function WhiteLabelFeatures() {
  return (
    <section className="bg-secondary py-24 sm:py-32">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whiteLabelFeatures.map((feature) => {
            const Icon = icons[feature.icon];
            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-border/60 bg-card p-6 transition-colors hover:border-primary/50"
              >
                <div className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  {Icon ? <Icon className="size-4" /> : null}
                </div>
                <h2 className="mt-4 font-heading text-lg font-medium">{feature.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  <Description text={feature.description} strong={feature.strong} />
                </p>
              </div>
            );
          })}
        </div>

        <div className="color-block mt-12 flex items-center justify-center gap-3 rounded-2xl border border-primary/30 px-6 py-8 text-center text-foreground [&>*]:relative [&>*]:z-10">
          <Zap className="size-5 shrink-0 text-primary" />
          <p className="text-balance font-heading text-lg font-medium text-primary italic">
            {whiteLabelBanner}
          </p>
        </div>
      </Container>
    </section>
  );
}
