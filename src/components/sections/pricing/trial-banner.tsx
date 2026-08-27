import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { trial } from "@/content/pages/pricing";

export function TrialBanner() {
  return (
    <section className="pt-16">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border/60 bg-secondary/30 p-8 sm:flex-row sm:items-center">
          <div className="max-w-xl">
            <Badge variant="secondary" className="mb-3 w-fit">
              Start here
            </Badge>
            <p className="text-xs font-medium tracking-wide text-primary uppercase">
              {trial.title}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{trial.description}</p>
            <p className="mt-4 text-sm text-primary">{trial.altNote}</p>
          </div>
          <div className="flex flex-col items-start gap-3 sm:items-end">
            <div className="text-right">
              <span className="font-heading text-4xl font-medium">{trial.price}</span>
              <p className="text-xs text-muted-foreground">{trial.priceNote}</p>
            </div>
            <Button asChild>
              <Link href={trial.primaryCta.href}>
                {trial.primaryCta.label}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
