// Site-wide config: nav, footer, metadata. English is the source of truth —
// every other locale is typed against `SiteContent`, so a missing translation
// is a compile error rather than an English string leaking into the page.
//
// hrefs are never translated. They stay root-relative here and get prefixed at
// render time by localizeHref(), so adding a locale never touches this data.

export const site = {
  config: {
    name: "Pengui AI",
    tagline: "The agentic operating layer for companies.",
    description:
      "Pengui — the agentic operating layer for companies. Runs in your cloud, works with any model, built for you to own.",
    domain: "pengui.ai",
    poweredBy: "Clear Tech",
  },
  mainNav: [
    { label: "Platform", href: "/platform" },
    { label: "White label", href: "/white-label" },
    { label: "Trust & control", href: "/trust" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQs", href: "/faq" },
  ],
  footerNav: {
    platform: {
      title: "Platform",
      links: [
        { label: "Capabilities", href: "/platform#capabilities" },
        { label: "How it works", href: "/#how-it-works" },
        { label: "Agent services", href: "/platform#services" },
        { label: "White label", href: "/white-label" },
      ],
    },
    solutions: {
      title: "About",
      links: [
        { label: "Trust & control", href: "/trust" },
        { label: "FAQs", href: "/faq#faq" },
        { label: "Pricing", href: "/pricing" },
      ],
    },
    company: {
      title: "Get started",
      links: [
        { label: "Request a demo", href: "/request-demo" },
        { label: "Start free trial", href: "/pricing" },
        { label: "Contact sales", href: "#contact" },
      ],
    },
  },
  header: {
    requestDemo: "Request a demo",
    openMenu: "Open menu",
    languageLabel: "Language",
  },
};

export type SiteContent = typeof site;
