import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/container";
import { getTrust } from "@/content";
import type { Locale } from "@/lib/i18n";

export function Control({ locale }: { locale: Locale }) {
  const { control } = getTrust(locale);
  return (
    <section className="bg-secondary py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-primary">{control.eyebrow}</span>
          <p className="mt-4 text-pretty text-muted-foreground">{control.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {control.items.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
            >
              <h2 className="font-medium italic">{item.question}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-start gap-3 rounded-2xl border border-primary/25 bg-primary/8 p-6">
          <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" />
          <p className="text-sm text-muted-foreground">{control.note}</p>
        </div>
      </Container>
    </section>
  );
}
