import { Check, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/layout/container";
import { difference } from "@/content/pages/platform";

function ComparisonLine({
  positive,
  children,
}: {
  positive?: boolean;
  children: React.ReactNode;
}) {
  return (
    <span className={positive ? "flex items-start gap-2.5 text-sm font-semibold" : "flex items-start gap-2.5 text-sm text-muted-foreground"}>
      <span
        className={
          positive
            ? "mt-0.5 flex size-[18px] shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
            : "mt-0.5 flex size-[18px] shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive"
        }
      >
        {positive ? <Check className="size-2.5" /> : <X className="size-2.5" />}
      </span>
      {children}
    </span>
  );
}

export function Difference() {
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
                <div className="flex flex-col gap-2.5">
                  <ComparisonLine>{row.boltOn}</ComparisonLine>
                  <ComparisonLine positive>{row.pengui}</ComparisonLine>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
