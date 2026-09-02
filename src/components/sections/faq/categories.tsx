import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/layout/container";
import { getFaq } from "@/content";
import type { Locale } from "@/lib/i18n";

export function FaqCategories({ locale }: { locale: Locale }) {
  const { faqCategories } = getFaq(locale);
  return (
    <section className="bg-secondary py-24 sm:py-32">
      <Container className="max-w-3xl">
        <div className="flex flex-col gap-14">
          {faqCategories.map((category) => (
            <div key={category.category}>
              {/* The category label was the same size, weight and colour as the
                  questions under it, so it read as one more row rather than as
                  the thing that groups them. It now differs on three axes at
                  once — colour, a leading rule, and the space beneath it — so
                  the grouping survives even if colour alone doesn't land. */}
              <h2 className="flex items-center gap-3 text-sm font-semibold tracking-[0.08em] text-primary uppercase">
                <span aria-hidden className="h-px w-6 shrink-0 bg-primary/40" />
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="mt-5 w-full">
                {category.items.map((item, index) => (
                  <AccordionItem key={item.question} value={`${category.category}-${index}`}>
                    <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
