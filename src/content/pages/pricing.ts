// Pricing page copy — sourced from the Way 02 deck (Santi), which is authoritative and
// fully replaces the earlier approved-doc version: prices, seat counts, tier features,
// the Custom tier, and the trial banner copy all come from the deck.

export const pricingHeader = {
  eyebrow: "Pricing models",
  titleLead: "Start free in your cloud.",
  titleEmphasis: "Scale by tier.",
  badge: "Unlimited users on every plan",
  subtitle: "Unlimited users on every plan.",
};

export const trial = {
  title: "Free 30-day trial · full platform, in your cloud",
  description:
    "Deploy the full platform in your own cloud and evaluate it free — Console (full observability & control), Front End interface, and RAG System. Build and run agents, unlimited users; you pay only your own model tokens. Converts to a paid plan after 30 days.",
  altNote: "Don't want to deploy in your own cloud yet? Use hosted Pengui to start now.",
  price: "$0",
  priceNote: "for 30 days · BYO tokens",
  primaryCta: { label: "Start free", href: "#contact" },
};

export const tiers = [
  {
    name: "Studio",
    tagline: "Answers over your docs",
    price: "$2,000",
    period: "/mo",
    seatsLabel: "Up to 3 agent seats included",
    featured: false,
    includes: ["Console · observability", "Front End interface", "RAG System", "Standard support"],
    prebuilt: "~1 prebuilt agent out of the box (HR)",
  },
  {
    name: "Growth",
    tagline: "Memory, switched on",
    price: "$4,000",
    period: "/mo",
    seatsLabel: "Up to 12 agent seats included",
    featured: false,
    inherits: "Everything in Studio",
    includes: [
      "Memory M1 · personalization",
      "Explorer E1 · NLQ over files",
      "Multi-IdP SSO",
      "Standard Support (Email or Chat)",
    ],
    prebuilt: "~2 agents out of the box (HR, Marketing)",
  },
  {
    name: "Scale",
    tagline: "Shared knowledge, at scale",
    price: "$6,000",
    period: "/mo",
    seatsLabel: "Up to 40 agent seats included",
    featured: true,
    badge: "Most popular",
    inherits: "Everything in Growth",
    includes: [
      "Memory M2 · shared knowledge",
      "Explorer E2 · + databases",
      "Security & SOC · premium support",
      "Premium Support (Email, Chat & Virtual Call)",
    ],
    prebuilt: "~3 agents out of the box (HR, Marketing, Finance)",
  },
  {
    name: "Enterprise+",
    tagline: "Regulated & on-prem",
    price: "Talk to us",
    period: "",
    seatsLabel: "Up to 100 agent seats included",
    featured: false,
    inherits: "Everything in Scale",
    includes: [
      "Explorer E3 · cross-source joins",
      "On-prem · dedicated env · SLAs",
      "First access to M3 on launch",
      "Premium Support (Email, Chat & Virtual Call)",
    ],
    prebuilt: "~4 agents out of the box (HR, Marketing, Finance, Support IT)",
  },
  {
    name: "Custom",
    tagline: "Pick your modules",
    price: "Talk to us",
    period: "",
    seatsLabel: "Agent seats sized to your needs",
    featured: false,
    dashed: true,
    inherits: "Built from any tier",
    includes: [
      "Choose only the modules you need",
      "Memory & Explorer levels à la carte",
      "Support tier of your choice",
    ],
    prebuilt: "Priced by the modules you pick",
  },
];

export const tiersNote =
  "Every plan runs in your own cloud. Bare-metal and fully isolated deployments are handled as a custom agreement.";

export const priceLevers = {
  title: "You pay for features, not for people.",
  subtitle:
    "Three things affect the price. Everything else — Console, interface, retrieval, onboarding and support — is included.",
  items: [
    {
      title: "Memory, how much it remembers",
      description: "Individual → Team & company → Self-improving loop (coming soon).",
    },
    {
      title: "Ask your data, how many sources",
      description:
        "Files → + Databases → + Cross-source joins. The valuable step is joining data across sources.",
    },
    {
      title: "Agents, more agents lower price each",
      description: "Dev & test agents are free · unlimited end users, always.",
    },
  ],
  extras: [
    {
      title: "À la carte",
      description: "Add just Memory, or just Ask your data, on top of Studio — without moving up a whole plan.",
    },
    {
      title: "Usage-based pricing",
      description: "Nothing here fits? We can also charge by usage.",
    },
    {
      title: "Pengui White Label",
      description: "One-time setup fee + monthly license. Your brand, your domain, unlimited end users.",
    },
  ],
};
