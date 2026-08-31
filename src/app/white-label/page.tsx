import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ProductScreenshot } from "@/components/shared/product-screenshot";
import { WhiteLabelHero } from "@/components/sections/white-label/hero";
import { WhiteLabelFeatures } from "@/components/sections/white-label/features";
import { PresetDemo } from "@/components/sections/white-label/preset-demo";
import { FinalCta } from "@/components/sections/shared/final-cta";
import { whiteLabelClosing, whiteLabelHeader } from "@/content/pages/white-label";
import { finalCta } from "@/content/pages/home";

export const metadata: Metadata = {
  title: "White-label — Pengui AI",
  description: whiteLabelHeader.subtitle,
};

export default function WhiteLabelPage() {
  return (
    <>
      <WhiteLabelHero />
      <WhiteLabelFeatures />
      <Container className="pb-16">
        <ProductScreenshot
          label="Your branded workspace"
          caption="Screenshot placeholder: the same console, dressed in a client's logo, colors and domain."
        />
      </Container>
      <PresetDemo />
      <Container className="py-16 text-center">
        <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
          {whiteLabelClosing}
        </p>
      </Container>
      <FinalCta {...finalCta} />
    </>
  );
}
