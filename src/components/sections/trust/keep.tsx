import { Container } from "@/components/layout/container";
import { keep } from "@/content/pages/trust";

export function Keep() {
  return (
    <section className="bg-secondary py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-primary">{keep.eyebrow}</span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-medium tracking-tight sm:text-4xl">
            {keep.title}
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">{keep.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {keep.items.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
            >
              <p className="font-medium italic">{item.question}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
