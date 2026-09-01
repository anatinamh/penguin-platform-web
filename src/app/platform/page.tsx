import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ProductScreenshot } from "@/components/shared/product-screenshot";
import { PlatformHero } from "@/components/sections/platform/hero";
import { Interconnections } from "@/components/sections/platform/interconnections";
import { ServicePaths } from "@/components/sections/platform/service-paths";
import { ProductOffering } from "@/components/sections/home/product-offering";
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
      <PlatformHero />
      <Interconnections />
      <ServicePaths />
      <ProductOffering />
      <section className="py-24 sm:py-32">
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
