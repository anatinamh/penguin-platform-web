import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { VisionMission } from "@/components/sections/faq/vision-mission";
import { FaqCategories } from "@/components/sections/faq/categories";
import { FinalCta } from "@/components/sections/shared/final-cta";
import { faqHeader } from "@/content/pages/faq";
import { finalCta } from "@/content/pages/home";

export const metadata: Metadata = {
  title: "About — Pengui AI",
  description: faqHeader.title,
};

export default function FaqPage() {
  return (
    <>
      <PageHeader eyebrow="About" title={faqHeader.title} />
      <VisionMission />
      <div id="faq">
        <FaqCategories />
      </div>
      <FinalCta {...finalCta} />
    </>
  );
}
