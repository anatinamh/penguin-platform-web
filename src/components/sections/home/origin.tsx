import { Container } from "@/components/layout/container";
import { origin } from "@/content/pages/home";

export function Origin() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="max-w-3xl text-center">
        <span className="text-sm font-medium text-primary">{origin.eyebrow}</span>
        <h2 className="mt-3 text-balance font-heading text-3xl font-medium tracking-tight sm:text-4xl">
          {origin.title}
        </h2>
        <p className="mt-6 text-pretty text-lg text-muted-foreground">{origin.body}</p>
      </Container>
    </section>
  );
}
