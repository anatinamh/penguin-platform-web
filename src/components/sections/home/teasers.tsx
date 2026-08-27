import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { pricingTeaser, whiteLabelTeaser } from "@/content/pages/home";

export function Teasers() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="grid gap-6 md:grid-cols-2">
        <TeaserCard {...whiteLabelTeaser} />
        <TeaserCard {...pricingTeaser} />
      </Container>
    </section>
  );
}

function TeaserCard({
  title,
  body,
  cta,
}: {
  title: string;
  body: string;
  cta: { label: string; href: string };
}) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-border/60 bg-secondary/30 p-8">
      <div>
        <p className="text-balance font-heading text-xl font-medium">{title}</p>
        <p className="mt-3 text-sm text-muted-foreground">{body}</p>
      </div>
      <Link
        href={cta.href}
        className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
      >
        {cta.label}
        <ArrowRight className="size-3.5" />
      </Link>
    </div>
  );
}
