// Platform page copy — sourced verbatim from the approved landing doc, sections 09, 08, 10, 11, 12.

export const platformHeader = {
  eyebrow: "Pengui Platform",
  title: "One platform to build, govern and run trusted agents.",
  subtitle:
    "For the team that builds: everything an agent needs — interface, retrieval, data access, memory, permissions, observability — already assembled, running on your infrastructure.",
  badges: { permissions: "Pick who can use each agent", audit: "Every action is logged" },
  screenshotCaption:
    "Every agent in one place — see what each one does, who uses it, and what it's allowed to touch.",
};

export const servicePaths = {
  eyebrow: "Professional agent services",
  title: "Built for you, or built by you.",
  titleEmphasis: [
    { text: "for", color: "primary" },
    { text: "by", color: "indigo" },
  ],
  subtitle:
    "Every Pengui agent is purpose-built for your data, your brand and your workflows — never generic. What changes is who builds it.",
  strong: "never generic",
  badge: "One agent, purpose-built — two ways to get it",
  paths: [
    {
      key: "a",
      label: "Path A · Done for you",
      sub: "Professional Services",
      icon: "handshake",
      accent: "primary",
      title: "We build it for you",
      body: [
        {
          text: "We handle discovery, design, integration, testing and deployment — you launch a working agent without hiring AI specialists.",
          strong: "without hiring AI specialists",
        },
        {
          text: "We build, deploy and maintain it inside your environment.",
        },
      ],
      footnote: "Pengui & partners design, build, host & maintain it",
    },
    {
      key: "b",
      label: "Path B · Built by you",
      sub: "Pengui Platform",
      icon: "code",
      accent: "indigo",
      title: "Build it yourself",
      body: [
        {
          text: "Your team builds, ships and owns the agents, with full control over deployment, governance and roadmap.",
          strong: "owns the agents",
        },
        {
          text: "Pengui becomes your internal agent infrastructure — every new use case is a build, not another procurement.",
        },
      ],
      footnote: "Powered by Pengui Platform",
    },
  ],
  commonBuilds: {
    label: "Common builds",
    items: [
      { label: "Finance", icon: "landmark" },
      { label: "HR", icon: "users" },
      { label: "Sales", icon: "trending-up" },
      { label: "Marketing", icon: "megaphone" },
      { label: "Legal & compliance", icon: "scale" },
      { label: "Operations", icon: "workflow" },
      { label: "Reporting", icon: "bar-chart" },
      { label: "IT support", icon: "life-buoy" },
      { label: "Custom integrations · CRMs, ERPs, APIs", icon: "cable" },
    ],
  },
};

export const howItWorks = {
  eyebrow: "How it works",
  title: "From zero to a branded agent, in four steps.",
  steps: [
    {
      number: "01",
      title: "Deploy",
      description:
        "Install Pengui into your own cloud or your own data center, air-gapped if you need it, with the guided installer.",
    },
    {
      number: "02",
      title: "Connect",
      description:
        "Connect your models, your data and your enterprise apps through MCP. Your keys, your endpoints, and you decide where the data lives.",
    },
    {
      number: "03",
      title: "Build & govern",
      description:
        "Build your agents, or start from a marketplace template. Give them memory and tools, and watch everything they do from the console.",
    },
    {
      number: "04",
      title: "Brand & roll out",
      description:
        "Put your name on it and roll it out to your teams, every question answered, every action logged. That's our White label offer.",
      strong: "White label",
    },
  ],
};

export const difference = {
  eyebrow: "The difference",
  title: "Bolt-on AI rents you a chat window. Pengui hands you the engine.",
  columns: ["Dimension", "Bolt-on AI — delivery shell", "Pengui — value engine"],
  rows: [
    {
      dimension: "Where it runs",
      boltOn: "Vendor's cloud; your data leaves",
      pengui: "Your cloud or on-prem; data stays",
    },
    {
      dimension: "The model",
      boltOn: "Locked to one provider",
      pengui: "Bring your own",
    },
    {
      dimension: "The intelligence",
      boltOn: "An extra bolted onto someone else's UI",
      pengui: "Agents, memory & data access are the platform",
    },
    {
      dimension: "Memory",
      boltOn: "Stateless or opaque",
      pengui: "Governed, inspectable, owned by you",
    },
    {
      dimension: "Observability",
      boltOn: "An add-on you build or rent",
      pengui: "Included in every plan — traces, logs, cost, permissions",
    },
    {
      dimension: "Your customers",
      boltOn: "The vendor's, ultimately",
      pengui: "Yours — you deliver under your own brand, and we never meet them",
    },
  ],
};
