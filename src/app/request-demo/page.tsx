import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { RequestDemoForm } from "@/components/sections/request-demo/form";
import { RequestDemoVisualPanel } from "@/components/sections/request-demo/visual-panel";
import { requestDemoHeader } from "@/content/pages/request-demo";

export const metadata: Metadata = {
  title: "Request a demo — Pengui AI",
  description: requestDemoHeader.subtitle,
};

export default function RequestDemoPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-primary">{requestDemoHeader.eyebrow}</span>
          <h1 className="mt-3 text-balance font-heading text-3xl font-medium tracking-tight sm:text-4xl">
            {requestDemoHeader.title}
          </h1>
          <p className="mt-4 text-pretty text-muted-foreground">{requestDemoHeader.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <RequestDemoForm />
          <RequestDemoVisualPanel />
        </div>
      </Container>
    </section>
  );
}
