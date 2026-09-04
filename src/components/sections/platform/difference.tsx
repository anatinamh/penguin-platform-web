import { Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/layout/container";
import { getPlatform } from "@/content";
import type { Locale } from "@/lib/i18n";

// The bolt-on/Pengui contrast (a red X beside a green check) read as unclear
// about which side was which once the row was collapsed to just the two
// short lines — dropped in favor of stating Pengui's side plainly.
function ComparisonLine({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-start gap-2.5 text-sm font-semibold">
      <span className="mt-0.5 flex size-[18px] shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Check className="size-2.5" />
      </span>
      {children}
    </span>
  );
}

export function Difference({ locale }: { locale: Locale }) {
  const { difference } = getPlatform(locale);
  return (
    <section className="bg-secondary py-24 sm:py-32">
      <Container className="max-w-2xl">
        <div className="text-center">
          <span className="text-sm font-medium text-primary">{difference.eyebrow}</span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-medium tracking-tight sm:text-4xl">
            {difference.title}
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue={difference.rows[0]?.dimension}
          className="mt-12 w-full rounded-2xl border border-border/60 bg-card px-4 shadow-sm sm:px-5"
        >
          {difference.rows.map((row) => (
            <AccordionItem key={row.dimension} value={row.dimension}>
              <AccordionTrigger className="py-4 text-sm font-semibold">
                {row.dimension}
              </AccordionTrigger>
              <AccordionContent>
                <ComparisonLine>{row.pengui}</ComparisonLine>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
