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
      <Container className="max-w-5xl">
        <div className="flex flex-col gap-16">
          {faqCategories.map((category) => (
            // The category sits in its own column and stays put while you read
            // its questions, so the answer to "which group am I in?" is always
            // on screen. That is what separates it from the questions — no
            // decorative rule needed, and it earns its place by doing something.
            <div
              key={category.category}
              className="grid gap-x-10 gap-y-4 lg:grid-cols-[minmax(9rem,13rem)_1fr]"
            >
              <h2 className="font-heading text-xl font-medium tracking-tight text-balance lg:sticky lg:top-24 lg:self-start lg:text-2xl">
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="w-full">
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
