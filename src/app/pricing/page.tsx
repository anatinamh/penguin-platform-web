import type { Metadata } from "next";
import { PricingHeader } from "@/components/sections/pricing/header";
import { TrialBanner } from "@/components/sections/pricing/trial-banner";
import { Tiers } from "@/components/sections/pricing/tiers";
import { PriceLevers } from "@/components/sections/pricing/price-levers";
import { FinalCta } from "@/components/sections/shared/final-cta";
import { pricingHeader } from "@/content/pages/pricing";
import { finalCta } from "@/content/pages/home";

export const metadata: Metadata = {
  title: "Pricing — Pengui AI",
  description: pricingHeader.subtitle,
};

export default function PricingPage() {
  return (
    <>
      <PricingHeader />
      <TrialBanner />
      <Tiers />
      <PriceLevers />
      <FinalCta {...finalCta} />
    </>
  );
}
