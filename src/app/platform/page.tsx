import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/layout/container";
import { ProductScreenshot } from "@/components/shared/product-screenshot";
import { Capabilities } from "@/components/sections/platform/capabilities";
import { Flex } from "@/components/sections/platform/flex";
import { ServicePaths } from "@/components/sections/platform/service-paths";
import { HowItWorks } from "@/components/sections/platform/how-it-works";
import { Difference } from "@/components/sections/platform/difference";
import { FinalCta } from "@/components/sections/shared/final-cta";
import { platformHeader } from "@/content/pages/platform";
import { finalCta } from "@/content/pages/home";

export const metadata: Metadata = {
  title: "Platform — Pengui AI",
  description: platformHeader.subtitle,
};

export default function PlatformPage() {
  return (
    <>
      <PageHeader
        eyebrow={platformHeader.eyebrow}
        title={platformHeader.title}
        subtitle={platformHeader.subtitle}
      />
      <Capabilities />
      <Flex />
      <ServicePaths />
      <HowItWorks />
      <section className="py-16">
        <Container>
          <ProductScreenshot
            label="The console, step by step"
            caption="Screenshot placeholder: the guided installer and first-agent setup flow."
          />
        </Container>
      </section>
      <Difference />
      <FinalCta {...finalCta} />
    </>
  );
}
