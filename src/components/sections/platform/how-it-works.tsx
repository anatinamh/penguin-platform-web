import { Container } from "@/components/layout/container";
import { howItWorks } from "@/content/pages/platform";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-secondary/30 py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-primary">{howItWorks.eyebrow}</span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-medium tracking-tight sm:text-4xl">
            {howItWorks.title}
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.steps.map((step) => (
            <div key={step.number}>
              <span className="text-sm font-semibold text-muted-foreground">{step.number}</span>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-border/60 bg-background p-8 text-center">
          <p className="font-heading text-xl font-medium">{howItWorks.note.title}</p>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
            {howItWorks.note.body}
          </p>
        </div>
      </Container>
    </section>
  );
}
