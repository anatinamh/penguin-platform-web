import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/layout/container";
import { ProductScreenshot } from "@/components/shared/product-screenshot";
import { Control } from "@/components/sections/trust/control";
import { Keep } from "@/components/sections/trust/keep";
import { FinalCta } from "@/components/sections/shared/final-cta";
import { control } from "@/content/pages/trust";
import { finalCta } from "@/content/pages/home";

export const metadata: Metadata = {
  title: "Trust & control — Pengui AI",
  description: control.subtitle,
};

export default function TrustPage() {
  return (
    <>
      <PageHeader
        eyebrow="Trust & control"
        title="Enterprise-grade, running inside your own network."
        subtitle="Answers for your security team and your CFO: the perimeter, the access model, and who owns what."
      />
      <Control />
      <section className="py-16">
        <Container>
          <ProductScreenshot
            label="Permissions & audit log"
            caption="Screenshot placeholder: every role, every action, every agent — recorded and reviewable."
          />
        </Container>
      </section>
      <Keep />
      <FinalCta {...finalCta} />
    </>
  );
}
