import type { Metadata } from "next";
import { Fragment } from "react";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/layout/container";
import { ProductScreenshot } from "@/components/shared/product-screenshot";
import { WhiteLabelFeatures } from "@/components/sections/white-label/features";
import { PresetDemo } from "@/components/sections/white-label/preset-demo";
import { FinalCta } from "@/components/sections/shared/final-cta";
import { whiteLabelClosing, whiteLabelHeader } from "@/content/pages/white-label";
import { finalCta } from "@/content/pages/home";

export const metadata: Metadata = {
  title: "White-label — Pengui AI",
  description: whiteLabelHeader.subtitle,
};

function HighlightedTitle() {
  const { title, titleHighlights } = whiteLabelHeader;
  const pattern = new RegExp(`(${titleHighlights.map((h) => h.word).join("|")})`, "g");
  const parts = title.split(pattern);

  return (
    <>
      {parts.map((part, i) => {
        const highlight = titleHighlights.find((h) => h.word === part);
        if (!highlight) return <Fragment key={i}>{part}</Fragment>;
        return (
          <span
            key={i}
            className={highlight.color === "indigo" ? "text-indigo-500" : undefined}
            style={
              highlight.color === "primary"
                ? { color: "var(--primary)" }
                : highlight.color === "lime"
                  ? { color: "var(--mascot-lime)" }
                  : undefined
            }
          >
            {part}
          </span>
        );
      })}
    </>
  );
}

export default function WhiteLabelPage() {
  return (
    <>
      <PageHeader
        eyebrow={whiteLabelHeader.eyebrow}
        title={<HighlightedTitle />}
        subtitle={whiteLabelHeader.subtitle}
      />
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
