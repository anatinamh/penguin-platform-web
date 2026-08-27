// Home page copy — sourced verbatim from the approved landing doc
// ("Pengui — Landing para validar (Santi)"), sections 01, 02, 04, 05, 06, 07, 17.

export const hero = {
  eyebrow: "The agentic operating layer for companies",
  title: "AI agents that do real work. And that you actually own.",
  subtitle:
    "An AI platform for building stable, trusted agents that understand your data, operate your tools and execute real work — under your brand, rules and context. Installed in your own cloud or your own data center, running on the models you already trust.",
  pills: ["Your agents", "Your cloud", "Your models", "Your brand"],
  primaryCta: { label: "Request a demo", href: "/request-demo" },
  secondaryCta: { label: "Explore Pengui AI", href: "/platform" },
  microcopy: "Start free for 30 days · no credit card · you pay only your own model tokens",
};

export const industries = {
  eyebrow: "Where Pengui runs",
  title: "Built for companies that keep their data close.",
  subtitle:
    "Pengui runs inside the environments of companies in energy, retail, financial services, HR and architecture. Different sectors, one shared requirement: agents working on their own data, inside their own infrastructure, under their own brand.",
  items: [
    {
      name: "Energy",
      icon: "zap",
      blurb: "Agents across grid, trading and field-ops data — without it leaving your infrastructure.",
    },
    {
      name: "Retail",
      icon: "shopping-bag",
      blurb: "Inventory, demand and customer data, turned into agents your team already trusts.",
    },
    {
      name: "Financial services",
      icon: "landmark",
      blurb: "Governed agents over regulated data — auditable, isolated, yours.",
    },
    {
      name: "HR",
      icon: "users",
      blurb: "Employee data stays internal while agents handle policy, onboarding and support.",
    },
    {
      name: "Architecture",
      icon: "building",
      blurb: "Agents that reason over drawings, specs and project data, under your own roof.",
    },
  ],
};

export const shift = {
  eyebrow: "The shift",
  title: "Convert your company into an agentic company.",
  note: "An agentic layer performs real work — at a scalable cost.",
  chatbot: {
    label: "A chatbot",
    heading: "Replies. Then waits.",
    items: ["Answers questions", "Suggests next steps", "Forgets the context"],
  },
  agentic: {
    label: "An agentic layer",
    heading: "Understands. Decides. Acts.",
    items: [
      "Understands your data",
      "Follows your rules",
      "Adapts to your brand",
      "Performs real work",
    ],
  },
};

export const origin = {
  eyebrow: "Why Pengui exists",
  title: "The requirement was always the same. The product didn't exist.",
  body: "Companies came to us with data they couldn't move, customers they weren't willing to hand over, and a mandate to do something with AI anyway. Every platform on the market asked them to give up at least one of the three. So we built the one that doesn't: agents running on their own infrastructure, under their own brand, serving their own clients.",
};

export const solution = {
  eyebrow: "The solution",
  title: "Pengui is the agentic operating layer for companies.",
  titleHighlight: "agentic operating layer",
  subtitle:
    "It sits between the people asking and the systems holding the answers — so your agents don't just reply, they act. Adopt one piece, or all.",
  layer: {
    eyebrow: "The operating layer",
    title: "Pengui sits in the middle.",
    description:
      "Agents answer, retrieve, remember and act — orchestrated over your knowledge, governed by your rules.",
  },
  columns: [
    {
      label: "Surfaces",
      sub: "What your people use",
      items: [
        { label: "Chat & Q&A", icon: "message-circle" },
        { label: "Specialized agents", icon: "briefcase" },
        { label: "Automated workflows", icon: "workflow" },
        { label: "Your apps", icon: "app-window" },
      ],
    },
    {
      label: "The operating layer",
      sub: "Pengui in the middle",
      highlight: true,
      items: [
        { label: "Orchestration", icon: "workflow" },
        { label: "Memory", icon: "brain-circuit" },
        { label: "Retrieval", icon: "search" },
        { label: "Governed skills", icon: "puzzle" },
        { label: "Ask your data · NLQ", icon: "message-square-text" },
        { label: "Bring-your-own-LLM", icon: "cpu" },
        { label: "Cost effective", icon: "coins" },
        { label: "MCP apps", icon: "cable" },
      ],
    },
    {
      label: "Your enterprise",
      sub: "Apps, knowledge & data",
      logos: [
        { label: "Salesforce", icon: "cloud" },
        { label: "Slack", icon: "hash" },
        { label: "Microsoft 365", icon: "app-window" },
        { label: "Google Workspace", icon: "mail" },
        { label: "Your databases", icon: "database" },
        { label: "Data warehouse", icon: "warehouse" },
        { label: "Google Drive", icon: "hard-drive" },
        { label: "Teams & directory", icon: "users" },
      ],
    },
  ],
};

export const productOffering = {
  eyebrow: "04 — Product offering",
  titleLead: "One stack.",
  titleEmphasis: "Built to fit you.",
  whereItRuns: {
    label: "Where it runs",
    options: [
      {
        name: "Pengui Cloud",
        icon: "cloud",
        description: "Hosted by us, in our tenant. Instant start, zero infrastructure.",
      },
      {
        name: "Client Cloud",
        icon: "server",
        description: "Your tenant or on-prem. Your data never leaves home.",
      },
    ],
  },
  stack: {
    label: "The Pengui stack",
    addOn: {
      eyebrow: "On top",
      name: "Professional AI Service",
      description: "Our team designs and builds your agents, integrated with your stack.",
      icon: "users",
    },
    base: {
      eyebrow: "The base",
      name: "Pengui Platform — White Label",
      badge: "Full brand customization",
      description: "Dressed in your brand — ship agents as your own product, with your own models.",
      strong: "ship agents as your own product",
      modules: [
        { label: "Console", tag: "observability", icon: "gauge" },
        { label: "Orchestration", icon: "share" },
        { label: "RAG System", icon: "file-search" },
        { label: "Front End Interface", icon: "layout" },
        { label: "Memory", icon: "brain-circuit" },
        { label: "Explorer", icon: "compass" },
      ],
      connectivity: {
        label: "Platform Connectivity Layer",
        tag: "plug in your own agents & MCPs",
        icon: "plug",
      },
    },
  },
  marketplace: {
    label: "Agent Marketplace",
    note: "out of the box",
    agents: ["HR Agent", "Sales Agent", "Marketing Agent", "Finance Agent", "Support IT Agent"],
    more: "And more — build your own",
  },
};

export const whiteLabelTeaser = {
  title: "Your customers never need to know our name.",
  body: "Your logo, your colors, your domain and your name apply from one set of settings.",
  cta: { label: "Explore white-label", href: "/white-label" },
};

export const pricingTeaser = {
  title: "Start free in your cloud. Scale by tier.",
  body: "$0 for 30 days · BYO tokens · no credit card · unlimited users on every plan",
  cta: { label: "See pricing", href: "/pricing" },
};

export const finalCta = {
  eyebrow: "Start free · 30 days",
  title: "Start free. Pay for tokens. Scale when you're ready.",
  body: "Pengui gives your company the agentic operating layer to turn data, tools and workflows into real, executed work. Stand up Pengui in your own cloud and build your first agent free for 30 days. No credit card, and nothing leaves your environment by default.",
  primaryCta: { label: "Request a demo", href: "/request-demo" },
};
