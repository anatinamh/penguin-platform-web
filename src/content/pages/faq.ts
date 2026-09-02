// About page copy. FAQ items are sourced verbatim from the approved landing
// doc, section 16. Vision & Mission come from the Way 02 deck (Santi).

export const visionMission = {
  eyebrow: "01 — Direction",
  title: "Where we're going, and how.",
  vision: {
    label: "Vision",
    sub: "Our north star",
    icon: "megaphone",
    body: "Convert every company into an AI-augmented organization — where agents understand its data, operate its tools, and execute real work under its own brand, rules, and context.",
    strong: "AI-augmented organization",
    tags: ["Understand", "Operate", "Execute"],
  },
  mission: {
    label: "Mission",
    sub: "How we get there",
    icon: "target",
    body: "Make enterprise AI accessible, customizable, and actionable — a platform to create agents, connect them to business knowledge, and deploy them as internal tools, white-label products, or custom solutions.",
    strong: "accessible, customizable, and actionable",
    tags: ["Create", "Connect", "Deploy"],
  },
};

export const faqHeader = {
  eyebrow: "About",
  faqEyebrow: "FAQ",
  title: "Answers to the last question before you start.",
};

export const faqCategories = [
  {
    category: "Deployment & your data",
    items: [
      {
        question: "Where does Pengui run?",
        answer:
          "In your own cloud or data center. The platform installs into your own environment. Your data and the traffic to your model stay inside your network unless you decide otherwise.",
      },
      {
        question: "Does our data ever leave our environment?",
        answer:
          "Not unless you choose to. The only thing that leaves is what you send to the model you picked — and if you host the model yourself, nothing leaves at all.",
      },
      {
        question: "Who is responsible for our data?",
        answer:
          "You are, and that's the point. Pengui installs on your side, so your information is stored and governed inside your own environment, under the policies and certifications you already work with. We never handle it.",
      },
      {
        question: "If we stop subscribing, do we lose our data?",
        answer:
          "No. Your data and your agents' memory live in your own database, and you can read or export them at any time. The subscription pays for the engine — and the core is open source.",
      },
    ],
  },
  {
    category: "Agents & memory",
    items: [
      {
        question: "What counts as an agent?",
        answer:
          "A configured assistant you deploy — for a process, a client, a workflow. The people who use it are end users: unlimited on every plan, at no cost. Dev & test agents are free.",
      },
      {
        question: "What kind of agents can we build?",
        answer:
          "Whatever your business needs. Agents aren't tied to departments — build one per process, per client, per workflow, or per product line. Nothing is preset.",
      },
      {
        question: "Can agents remember without exposing private data?",
        answer:
          "Yes. Each client's memory is kept separate, every access is recorded, and you can export or delete a client's data whenever they ask. Agents still share what they learn across your company.",
      },
      {
        question: "Can you build the agents for us?",
        answer:
          "Yes. Our Professional AI Service team designs, deploys and supports custom agents, MCP servers and integrations for your data, brand and workflows.",
      },
    ],
  },
  {
    category: "Models & systems",
    items: [
      {
        question: "Which AI models can I use?",
        answer:
          "Any model from any major provider — commercial, open-weight, or one you host yourself. Change it at any time for cost, quality, or where the data has to live.",
      },
      {
        question: "Can Pengui connect to the systems we already use?",
        answer:
          "Yes. Pengui speaks MCP, the industry standard, so the apps, databases and internal systems your company runs can be connected — anything with an API. Your team builds it, or ours does.",
      },
      {
        question: "What if we bring a weaker model?",
        answer:
          "Most of the reliability comes from the platform, not the model. Controlled memory, checked data queries, retrieval and guardrails catch what a weaker model would get wrong.",
      },
    ],
  },
  {
    category: "White-label & your clients",
    items: [
      {
        question: "What does “white-label” actually mean here?",
        answer:
          "Your brand, your domain, your customers — unlimited users, no charge per person. It doesn't mean reselling Pengui: your customers get your agents, built on your data and processes, not a platform to build their own.",
      },
      {
        question: "Do you compete with us for our clients?",
        answer:
          "No, and structurally we couldn't. We never meet your clients and we don't hold your business data — we'd have nothing to offer them that makes sense without you. The relationship is yours.",
      },
    ],
  },
  {
    category: "Trial & getting started",
    items: [
      {
        question: "How long until we're live?",
        answer:
          "Deploying Pengui is an install, not a build project. The guided installer brings the platform up with console, interface, retrieval, memory and governance in place — day one is spent on your first agent.",
      },
      {
        question: "Is there a free trial?",
        answer: "Yes — build free for 30 days. No credit card, and you only pay for your own model tokens.",
      },
      {
        question: "What happens after the trial?",
        answer:
          "We'll talk it through and find the plan that fits how you ended up using it. Your data and your agents' memory stay in your own database either way.",
      },
    ],
  },
];
