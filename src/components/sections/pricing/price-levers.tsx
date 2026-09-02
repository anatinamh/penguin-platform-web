import { Container } from "@/components/layout/container";
import { getPricing } from "@/content";
import type { Locale } from "@/lib/i18n";

export function PriceLevers({ locale }: { locale: Locale }) {
  const { priceLevers } = getPricing(locale);
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-balance font-heading text-2xl font-medium tracking-tight sm:text-3xl">
            {priceLevers.title}
          </p>
          <p className="mt-4 text-pretty text-muted-foreground">{priceLevers.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {priceLevers.items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border/60 bg-card p-6"
            >
              <p className="font-medium">{item.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {priceLevers.extras.map((item) => (
            <div key={item.title} className="rounded-2xl border border-dashed border-border p-6">
              <p className="font-medium">{item.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
