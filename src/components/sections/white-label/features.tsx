import {
  BrainCircuit,
  Cloud,
  Cpu,
  Layers,
  Package,
  Palette,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { HoverLift, RevealGroup } from "@/components/shared/reveal";
import { getWhiteLabel } from "@/content";
import type { Locale } from "@/lib/i18n";

const icons: Record<string, LucideIcon> = {
  palette: Palette,
  cloud: Cloud,
  cpu: Cpu,
  users: Users,
  layers: Layers,
  package: Package,
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

export function WhiteLabelFeatures({ locale }: { locale: Locale }) {
  const { whiteLabelBanner, whiteLabelFeatures } = getWhiteLabel(locale);
  return (
    <section className="bg-secondary py-24 sm:py-32">
      <Container>
        <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whiteLabelFeatures.map((feature) => {
            const Icon = icons[feature.icon];
            return (
              <HoverLift key={feature.title}>
                <div className="h-full rounded-2xl border border-border/60 bg-card p-6">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    {Icon ? <Icon className="size-4" /> : null}
                  </div>
                  <h2 className="mt-4 font-heading text-lg font-medium">{feature.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <Description text={feature.description} strong={feature.strong} />
                  </p>
                </div>
              </HoverLift>
            );
          })}
        </RevealGroup>

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
