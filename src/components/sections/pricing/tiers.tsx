import { ArrowUp, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";
import { tiers, tiersNote } from "@/content/pages/pricing";

export function Tiers() {
  const plans = tiers.filter((tier) => !tier.dashed);
  const custom = tiers.find((tier) => tier.dashed);

  return (
    <section className="bg-secondary py-16">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "flex flex-col rounded-2xl border p-5 transition-colors",
                tier.featured
                  ? "border-primary shadow-sm"
                  : "border-border/60 hover:border-primary/50",
              )}
            >
              {tier.badge ? (
                <Badge className="mb-2 w-fit text-[10px]">{tier.badge}</Badge>
              ) : (
                <div className="mb-2 h-5" />
              )}
              <p className="text-sm font-medium">{tier.name}</p>
              <p className="text-xs text-muted-foreground">{tier.tagline}</p>

              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-heading text-2xl font-medium">{tier.price}</span>
                <span className="text-xs text-muted-foreground">{tier.period}</span>
              </div>
              <p className="mt-1 text-[11px] text-muted-foreground">{tier.seatsLabel}</p>

              <Button
                size="sm"
                className="mt-4"
                variant={tier.featured ? "default" : "outline"}
                asChild
              >
                <a href="#contact">Talk to sales</a>
              </Button>

              <ul className="mt-4 flex flex-col gap-2">
                {tier.inherits ? (
                  <li className="flex items-start gap-1.5 text-xs">
                    <ArrowUp className="mt-0.5 size-3 shrink-0 text-muted-foreground" />
                    <span className="text-muted-foreground italic">{tier.inherits}</span>
                  </li>
                ) : null}
                {tier.includes.map((item) => (
                  <li key={item} className="flex items-start gap-1.5 text-xs">
                    <Check className="mt-0.5 size-3 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-[11px] text-muted-foreground">{tier.prebuilt}</p>
            </div>
          ))}
        </div>

        {custom ? (
          <div className="mt-4 flex flex-col gap-6 rounded-2xl border border-dashed border-border/80 bg-card/40 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium">{custom.name}</p>
              <p className="text-xs text-muted-foreground">{custom.tagline}</p>

              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {custom.inherits ? (
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground italic">
                    <ArrowUp className="size-3.5 shrink-0" />
                    {custom.inherits}
                  </span>
                ) : null}
                {custom.includes.map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-1.5 text-sm text-muted-foreground"
                  >
                    <Check className="size-3.5 shrink-0 text-primary" />
                    {item}
                  </span>
                ))}
              </div>

              <p className="mt-3 text-xs text-muted-foreground">{custom.prebuilt}</p>
            </div>

            <div className="flex flex-col items-start gap-3 lg:items-end">
              <div className="lg:text-right">
                <span className="font-heading text-3xl font-medium">{custom.price}</span>
                <p className="text-xs text-muted-foreground">{custom.seatsLabel}</p>
              </div>
              <Button variant="outline" asChild>
                <a href="#contact">Talk to sales</a>
              </Button>
            </div>
          </div>
        ) : null}

        <p className="mt-8 text-center text-sm text-muted-foreground">{tiersNote}</p>
      </Container>
    </section>
  );
}
