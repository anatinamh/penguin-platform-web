// FAQs page copy — sourced verbatim from the content review. The page is one
// straight Q&A list: "Direction" used to be a pair of Vision/Mission cards and
// is now the first two questions, so the whole page reads the same way through.

export const faqHeader = {
  eyebrow: "FAQs",
  title: "Answers to the last question before you start.",
};

export const faqCategories = [
  {
    category: "Direction",
    items: [
      {
        question: "Where is Pengui headed?",
        answer:
          "Toward a world where every company runs on agents it actually owns — agents that understand its data, act in its tools, and do real work under its own name. Every product decision points there.",
      },
      {
        question: "And how do you get there?",
        answer:
          "By making enterprise AI something you install, not something you rent: a platform to build agents, connect them to your business knowledge, and ship them — as internal tools, as white-label products, or built for you.",
      },
    ],
  },
  {
    category: "Deployment & your data",
    items: [
      {
        question: "Where does Pengui run?",
        answer:
          "In your own cloud or your own data center — air-gapped if you need it. The whole platform installs inside your network: the interface, the engine, the storage. Nothing about it lives on our side.",
      },
      {
        question: "Does our data ever leave our environment?",
        answer:
          "Not unless you choose to. Your data, your documents and your agents' memory all sit inside your network. The only thing that leaves is what you send to the model you picked, over your own keys — and if you point Pengui at a model you host yourself, nothing leaves at all. The hosted evaluation sandbox is the one exception, and it's meant for non-sensitive data only.",
      },
      {
        question: "Who is responsible for our data?",
        answer:
          "You are — by architecture, not just by contract. The platform runs in your environment, under your access controls, and in the standard deployment your information never reaches us — so there's nothing on our side to hold, see or leak. The specifics are set out in the agreement.",
      },
      {
        question: "If we stop subscribing, do we lose our data?",
        answer:
          "No. Your data, your agents' configurations and the memory they've built live in your own database, in your own cloud — readable and exportable at any time, subscription or not. The subscription licenses the engine that puts that data to work; it never holds the data itself. And the core of that engine is open source. Specific post-termination terms are set out in the agreement.",
      },
    ],
  },
  {
    category: "Agents & memory",
    items: [
      {
        question: "What counts as an agent?",
        answer:
          "An agent is a configured assistant you deploy — for a process, a client, a workflow. The people who use it are end users: unlimited on every plan, at no cost. You're billed for the agents you run, never for the people who use them — and dev & test agents are free.",
      },
      {
        question: "What kind of agents can we build?",
        answer:
          "Whatever your business needs. Agents aren't tied to departments — build one per process, per client, per product line or per workflow, or one that covers several. Nothing is preset, so nothing limits what you can build.",
      },
      {
        question: "Can agents remember without exposing private data?",
        answer:
          "Yes. Memory is governed and isolated: each client — or team — only ever sees its own information, every access is recorded, and you can export or delete anyone's data on request. Agents still get sharper from what the organization learns, without exposing anything private.",
      },
      {
        question: "Can you build the agents for us?",
        answer:
          "Yes. Our Professional Agent Services team handles discovery, design, integration, testing and deployment — purpose-built agents for your data, your brand and your workflows, running inside your environment. Or your team builds them on the platform. You choose.",
      },
    ],
  },
  {
    category: "Models & systems",
    items: [
      {
        question: "Which AI models can I use?",
        answer:
          "Any model from any major provider — commercial, open-weight, or one you host yourself. You choose, and you can switch at any time for cost, quality or data residency. (MCP is how Pengui connects to your tools and systems, not to your models.)",
      },
      {
        question: "Can Pengui connect to the systems we already use?",
        answer:
          "Yes. Microsoft 365, Google Workspace and BambooHR work today, and anything with an API — your CRM, your ERP, your databases and warehouse — can be connected through the open MCP standard or as a custom integration. Your team builds it, or ours does.",
      },
      {
        question: "What if we bring a weaker model?",
        answer:
          "Most of the reliability comes from the platform, not the model. Governed memory, validated data queries, retrieval and guardrails catch what a weaker model would get wrong. A stronger model helps — but the platform is what makes an answer hold up.",
      },
    ],
  },
  {
    category: "White-label",
    items: [
      {
        question: "What does “white-label” actually mean here?",
        answer:
          "Your brand, your domain, your customers. The whole platform — the interface your clients use and the console you run it from — carries your name. Our customers deliver agents to their own clients as their own product, and we never meet them. Unlimited end users, with no charge per person.",
      },
    ],
  },
  {
    category: "Trial & getting started",
    items: [
      {
        question: "Is there a free trial?",
        answer:
          "Yes — deploy the full agent stack (Console, Canvas and the RAG Server) in your own environment and build free for 30 days. No credit card, nothing leaves your environment, and you pay only your own model tokens. Not ready to deploy yet? There's a hosted sandbox to start on — for non-sensitive data only.",
      },
      {
        question: "What happens after the trial?",
        answer:
          "Pick a plan to keep your agents running. Your data and the memory your agents have built stay in your database either way.",
      },
    ],
  },
];
