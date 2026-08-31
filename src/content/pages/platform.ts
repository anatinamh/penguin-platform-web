// Platform page copy — sourced verbatim from the approved landing doc, sections 09, 08, 10, 11, 12.

export const platformHeader = {
  eyebrow: "Pengui Platform",
  title: "One platform to build, govern and run trusted agents.",
  subtitle:
    "Convince the people who build: what's inside the engine, and how you work with it.",
};

export const capabilities = {
  eyebrow: "Capabilities",
  note: "Your infrastructure — your cloud, your models, your data — always included.",
  groups: [
    {
      layer: "Control plane",
      caption: "Govern it all",
      items: [
        {
          piece: "Canvas",
          tag: "The console",
          icon: "layout-grid",
          description:
            "Build, configure, observe and control every agent and tenant from one pane — who did what, with which data, at what cost.",
          long: "Every agent, every tenant, every cost line — in one operator view. Canvas is where your team ships agents, sets guardrails, and watches what's running without touching a terminal.",
          connects: ["Orchestration", "Memory-as-a-service", "White Label customization"],
        },
      ],
    },
    {
      layer: "The core",
      caption: "Reason & remember",
      dark: true,
      items: [
        {
          piece: "Orchestration",
          icon: "workflow",
          description:
            "Multi-step agents that reason, call tools in parallel, and act under guardrails.",
          long: "The reasoning loop underneath every agent: it plans the steps, calls tools and models in parallel, checks results against your guardrails, and retries or escalates when something doesn't fit.",
          connects: ["Memory-as-a-service", "Governed skills & MCP", "Bring-your-own-LLM"],
        },
        {
          piece: "Memory-as-a-service",
          icon: "brain-circuit",
          description:
            "A governed, inspectable memory layer — the trusted context beneath every chat box.",
          long: "Every agent shares one governed memory instead of starting cold each time — inspectable, exportable, and scoped per tenant so nothing leaks across teams or clients.",
          connects: ["Orchestration", "Ask your data", "Retrieval"],
        },
      ],
    },
    {
      layer: "Capabilities",
      caption: "Answer & act",
      items: [
        {
          piece: "Ask your data",
          tag: "NLQ",
          icon: "message-square-text",
          description: "Plain-language questions — validated, governed answers you can defend.",
          long: "Your team asks in plain language; Pengui grounds the answer in your governed sources and shows its work, so the response is something you can defend, not just something that sounds right.",
          connects: ["Retrieval", "Memory-as-a-service"],
        },
        {
          piece: "Retrieval",
          icon: "search",
          description: "Multi-stage retrieval grounds every answer in the right facts.",
          long: "Multi-stage retrieval — not a single vector search — checks and re-ranks across sources before an agent ever answers, so accuracy doesn't fall off as your knowledge base grows.",
          connects: ["Ask your data", "Memory-as-a-service"],
        },
        {
          piece: "Governed skills & MCP",
          icon: "puzzle",
          description: "Permissioned skills and any tool via MCP — new powers, safely.",
          long: "Every skill and tool an agent can reach is permissioned individually via MCP, the open standard — so adding new powers never means widening what an agent can silently do.",
          connects: ["Orchestration", "Custom integrations"],
        },
        {
          piece: "Bring-your-own-LLM",
          icon: "cpu",
          description: "Point at any model via MCP: commercial, open-weight, or self-hosted.",
          long: "Point Orchestration at any model — commercial, open-weight or self-hosted — and swap it later without rebuilding your agents, so cost, quality and data residency stay your call.",
          connects: ["Orchestration"],
        },
      ],
    },
    {
      layer: "Connect & run",
      caption: "Wire it in",
      items: [
        {
          piece: "Custom integrations",
          icon: "cable",
          description: "Wire Pengui to your warehouses, your SaaS, and your internal systems.",
          long: "Wire Pengui into the warehouses, SaaS tools and internal systems you already run, using the same governed MCP layer that powers every skill — no one-off connectors to maintain.",
          connects: ["Governed skills & MCP", "Agent Marketplace"],
        },
        {
          piece: "Agent Marketplace",
          icon: "store",
          description: "Discover and deploy prebuilt agents and skills, or publish your own.",
          long: "Start from a prebuilt agent for a common job — finance, HR, sales — instead of a blank page, or publish the ones your team builds for others in your organization to reuse.",
          connects: ["Custom integrations", "White Label customization"],
        },
        {
          piece: "White Label customization",
          icon: "palette",
          featured: true,
          description: "Your brand, domain, and UI on the Pengui engine — ship it as your own product.",
          long: "Your logo, colors, domain and product name apply from Canvas's own settings — so what you ship to your clients looks like your product, running on the Pengui engine underneath.",
          connects: ["Canvas", "Agent Marketplace"],
        },
      ],
    },
  ],
};

export const servicePaths = {
  eyebrow: "Professional agent services",
  title: "Built for you, or built by you.",
  titleEmphasis: [
    { text: "for", color: "primary" },
    { text: "by", color: "indigo" },
  ],
  subtitle:
    "Every Pengui agent is purpose-built for your data, brand and workflows — never generic. You choose who builds it.",
  strong: "never generic",
  badge: "One agent, purpose-built — two ways to get it",
  paths: [
    {
      key: "a",
      label: "Path A · Professional Services",
      sub: "Done for you",
      icon: "handshake",
      accent: "primary",
      title: "We build it for you",
      body: [
        {
          text: "We build, configure and deploy bespoke AI agents for customers with specific workflows, data and business requirements.",
          strong: "bespoke AI agents",
        },
        {
          text: "This path gives customers a fully managed implementation experience: we handle discovery, design, integration, testing and deployment so they can launch a trusted agent without needing internal AI expertise.",
        },
      ],
      footnote: "Pengui & partners design, build, host & maintain it",
    },
    {
      key: "b",
      label: "Path B · Pengui Platform",
      sub: "Built by you",
      icon: "code",
      accent: "indigo",
      title: "Build it yourself",
      body: [
        {
          text: "Your IT team builds, ships and owns AI agents on the Pengui Platform — with full control over deployment, governance and roadmap.",
          strong: "owns AI agents on the Pengui Platform",
        },
        {
          text: "This path turns Pengui into the customer's internal AI agent infrastructure, allowing technical teams to create and manage trusted agents across departments without relying on custom services for every use case.",
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
        "Build your agents, or start from one of our marketplace templates, give them memory and tools, and watch everything they do from the console.",
    },
    {
      number: "04",
      title: "Brand & deliver",
      description:
        "Put your name on it and deliver to your own clients as branded, multi-tenant experiences.",
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
      boltOn: "An extra bolted onto someone else's BI",
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
