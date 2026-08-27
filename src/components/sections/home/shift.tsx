import { Check, MessageSquare, Zap, Minus } from "lucide-react";
import { Container } from "@/components/layout/container";
import { shift } from "@/content/pages/home";

export function Shift() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="flex flex-col items-center text-center">
        <span className="text-sm font-medium text-primary">{shift.eyebrow}</span>
        <h2 className="mt-3 max-w-2xl text-balance font-heading text-3xl font-medium tracking-tight sm:text-4xl">
          {shift.title}
        </h2>

        <div className="mt-14 grid w-full gap-4 sm:grid-cols-2">
          <div className="color-block rounded-2xl border border-border/60 p-8 text-left text-foreground [&>*]:relative [&>*]:z-10">
            <div className="mb-4 flex size-9 items-center justify-center rounded-lg bg-secondary">
              <MessageSquare className="size-4 text-muted-foreground" />
            </div>
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              {shift.chatbot.label}
            </p>
            <p className="mt-2 text-xl font-medium">{shift.chatbot.heading}</p>
            <ul className="mt-5 flex flex-col gap-2">
              {shift.chatbot.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Minus className="size-3.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-primary/40 bg-primary/10 p-8 text-left">
            <div className="mb-4 flex size-9 items-center justify-center rounded-lg bg-primary/20">
              <Zap className="size-4 text-primary" />
            </div>
            <p className="text-xs font-medium tracking-wide text-primary uppercase">
              {shift.agentic.label}
            </p>
            <p className="mt-2 text-xl font-medium">{shift.agentic.heading}</p>
            <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {shift.agentic.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <Check className="size-3.5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 max-w-xl text-pretty text-muted-foreground italic">{shift.note}</p>
      </Container>
    </section>
  );
}
