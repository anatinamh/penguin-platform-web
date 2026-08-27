import { Container } from "@/components/layout/container";
import { flex } from "@/content/pages/platform";

export function Flex() {
  return (
    <section className="bg-secondary/30 py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-primary">{flex.eyebrow}</span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-medium tracking-tight sm:text-4xl">
            {flex.title}
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">{flex.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {flex.items.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-border/60 bg-background p-6 transition-colors hover:border-primary/50"
            >
              <p className="font-medium">{item.question}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
