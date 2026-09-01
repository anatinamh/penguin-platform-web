// Home page copy — sourced verbatim from the approved landing doc
// ("Pengui — Landing para validar (Santi)"), sections 01, 02, 04, 05, 06, 07, 17.

export const hero = {
  eyebrow: "The agentic operating layer for companies",
  title: "AI agents that do real work. And that you actually own.",
  subtitle:
    "Agents that answer based on your documents and perform tasks in your apps. Installed in your own cloud or your own data center, under your brand, on the models you already trust.",
  pills: ["Your agents", "Your cloud", "Your models", "Your brand"],
  primaryCta: { label: "Request a demo", href: "/request-demo" },
};

export const shift = {
  eyebrow: "The shift",
  title: "Convert your company into an agentic company.",
  note: "An agentic layer performs real work — at a scalable cost.",
  chatbot: {
    label: "A chatbot",
    heading: "Tells you how. Then waits.",
    items: ["Answers the question", "Suggests next steps", "Forgets the context"],
  },
  agentic: {
    label: "An agentic layer",
    heading: "Does it. And shows you what it did.",
    items: [
      "Pulls the answer from your data",
      "Acts in your tools, within your rules",
      "Remembers the context",
      "Carries your brand",
    ],
  },
};

export const origin = {
  eyebrow: "Why Pengui exists",
  title: "The requirement was always the same. The product didn't exist.",
  lede: "We built a product that has the 3 things companies are asking for:",
  points: [
    "Agents on your own infrastructure, your cloud, your data, your keys.",
    "Under your own brand, your name, your look, your rules.",
    "Working for your teams and your clients, in production, not in another AI pilot.",
  ],
};

export const solution = {
  eyebrow: "The solution",
  title: "Pengui is the agentic operating layer for companies.",
  titleHighlight: "agentic operating layer",
  subtitle:
    "It sits between the people asking and the systems holding the answers, so your agents don't just reply, they act. Adopt one piece, or all.",
  layer: {
    eyebrow: "The operating layer",
    title: "Pengui sits in the middle.",
    description: "Agents answer, retrieve, remember and act — over your knowledge, within your rules.",
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
        {
          label: "Orchestration",
          icon: "workflow",
          description: "Runs multi-step tasks end to end.",
        },
        {
          label: "Memory",
          icon: "brain-circuit",
          description: "Remembers what your organization means.",
        },
        {
          label: "Retrieval",
          icon: "search",
          description: "Finds answers in your documents.",
        },
        {
          label: "Governed skills",
          icon: "puzzle",
          description: "Acts only where it's allowed.",
        },
        {
          label: "Ask your data · NLQ",
          icon: "message-square-text",
          description: "Plain-language questions over your numbers.",
        },
        {
          label: "MCP apps",
          icon: "cable",
          description: "Via the open MCP standard.",
        },
        {
          label: "Bring-your-own-LLM",
          icon: "cpu",
          description: "Runs on the models you choose.",
          wide: true,
        },
      ],
    },
    {
      label: "Your enterprise",
      sub: "Apps, knowledge & data",
      logos: [
        { label: "Salesforce", logoSrc: "/logos/salesforce.svg" },
        { label: "Slack", logoSrc: "/logos/slack.svg" },
        { label: "Microsoft 365", logoSrc: "/logos/microsoft-365.png" },
        { label: "Google Workspace", logoSrc: "/logos/google-workspace.svg" },
        { label: "BambooHR", logoSrc: "/logos/bamboohr.svg" },
        { label: "Jira", logoSrc: "/logos/jira.png" },
        { label: "Your databases", icon: "database" },
        { label: "Data warehouse", icon: "warehouse" },
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

export const finalCta = {
  eyebrow: "Start free · 30 days",
  title: "Start free. Pay only your model's usage. Scale when you're ready.",
  body: "Install Pengui in your own cloud, connect your documents and data, and build your first agent — free for 30 days.",
  primaryCta: { label: "Request a demo", href: "/request-demo" },
  microcopy: "No credit card, and nothing leaves your environment by default.",
};
