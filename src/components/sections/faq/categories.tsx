import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/layout/container";
import { faqCategories } from "@/content/pages/faq";

export function FaqCategories() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <div className="flex flex-col gap-14">
          {faqCategories.map((category) => (
            <div key={category.category}>
              <h2 className="text-sm font-medium tracking-wide text-primary uppercase">
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="mt-4 w-full">
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
