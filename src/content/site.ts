// Site-wide config: nav, footer, metadata.
// Sourced from "Pengui Investor ppt final.pdf" (authoritative). Refine once
// the companion Word doc, brand/design-system assets, and reference sites are in.

export const siteConfig = {
  name: "Pengui AI",
  tagline: "The agentic operating layer for companies.",
  description:
    "Pengui — the agentic operating layer for companies. Runs in your cloud, works with any model, built for you to own.",
  domain: "pengui.ai",
  poweredBy: "Clear Tech",
  locale: "en",
};

export const mainNav = [
  { label: "Platform", href: "/platform" },
  { label: "White label", href: "/white-label" },
  { label: "Trust & control", href: "/trust" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/faq" },
];

export const footerNav = {
  platform: [
    { label: "Capabilities", href: "/platform#capabilities" },
    { label: "How it works", href: "/platform#how-it-works" },
    { label: "Agent services", href: "/platform#services" },
    { label: "White label", href: "/white-label" },
  ],
  solutions: [
    { label: "Trust & control", href: "/trust" },
    { label: "Industries we serve", href: "/#industries" },
    { label: "FAQ", href: "/faq#faq" },
    { label: "Pricing", href: "/pricing" },
  ],
  company: [
    { label: "Request a demo", href: "/request-demo" },
    { label: "Start free trial", href: "/pricing" },
    { label: "Contact sales", href: "#contact" },
  ],
};
