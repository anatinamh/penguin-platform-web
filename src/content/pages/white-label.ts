// White-label page copy — sourced verbatim from the approved landing doc, section 03,
// with the Way 02 deck (Santi) layered in: MCP callout on "Bring your own models",
// the memory/trust card, and the per-word title color treatment.

export const whiteLabelHeader = {
  eyebrow: "White-label from day one",
  title: "Ship agents as your own product.",
  subtitle:
    "Put your brand on the whole platform (your name, your domain, your interface) and deliver agents to the clients you already serve. They see your product. We never meet them.",
  note: "Run it internally, sell it to your clients, or launch a vertical product: same engine underneath.",
  badges: { cloud: "Runs in your own cloud", unseen: "Your clients never see us" },
  screenshotLabel: "Your branded workspace",
  figureCaption:
    "The same console, dressed in a client's logo, colors and domain.",
};

export const whiteLabelFeatures = [
  {
    title: "Your identity, from the first minute",
    icon: "palette",
    description:
      "Logo, colors, domain and product name. Co-brand per client or business unit when you need to.",
    strong: "Co-brand per client or business unit",
  },
  {
    title: "Isolated environments per client",
    icon: "layers",
    description:
      "Each client sees only their own data. You manage every environment from one console.",
    strong: "only their own data",
  },
  {
    title: "Unlimited end users",
    icon: "users",
    description:
      "You never pay per person, so your margin doesn't shrink as your clients grow. You set your own pricing and your own contracts.",
    strong: "never pay per person",
  },
  {
    title: "Your cloud or on-prem",
    icon: "cloud",
    description:
      "The whole platform runs in your environment. Nothing leaves it by default, yours or your clients'.",
    strong: "Nothing leaves it by default",
  },
  {
    title: "Bring your own models",
    icon: "cpu",
    description:
      "Cost, data residency and model choice stay in your hands. Tools connect through the open MCP standard.",
    strong: "Cost, data residency and model choice",
  },
  {
    title: "A product, not a project",
    icon: "package",
    description:
      "The platform is pre-built: console, interface, retrieval, memory, governance. You add your brand and your agents, not a year of engineering.",
    strong: "not a year of engineering",
  },
];

export const whiteLabelBanner =
  "Run it internally, sell it externally, or launch a vertical — the power of an agentic platform, without building one.";

export const presetDemo = {
  eyebrow: "Pick a preset. Watch this page change.",
  title: "Your colors, your logo, your name.",
  subtitle:
    "The product interface changes from one set of settings, live, in front of you.",
  presets: [
    { name: "Pengui", accent: "oklch(0.5 0.06 185)" },
    { name: "Ember", accent: "oklch(0.55 0.16 55)" },
    { name: "Indigo", accent: "oklch(0.5 0.15 275)" },
    { name: "Moss", accent: "oklch(0.55 0.1 140)" },
  ],
};

export const whiteLabelClosing =
  "You use your own deployment to deliver your agents — built on your data, your processes and your brand — to the clients you already serve.";

// Copy for the shared Pengui-interface mockup (sidebar + chat home). "{brand}"
// is substituted with the active preset's name, so the white-label story holds
// everywhere the product names itself — not just on the wordmark.
export const interfaceMockup = {
  newChat: "New chat",
  search: "Search",
  projects: "Projects",
  projectItems: ["Q3 Sales", "Legal", "Onboarding"],
  newProject: "New project",
  penguis: "Penguis",
  newPengui: "New pengui",
  scheduled: "Scheduled work",
  noScheduled: "No scheduled work yet.",
  canvas: "Canvas",
  eyebrow: "Start with a message",
  greeting: "Good afternoon,",
  greetingName: "Annie",
  subtext: "Write what you need and {brand} takes care of the rest.",
  assistantPill: "{brand} Assistant",
  inputPlaceholder: "Hello",
  addContext: "Add context",
  tools: "Tools",
  recentChats: "Recent chats",
  seeAllChats: "See all chats →",
  chats: [
    { title: "Q3 launch narrative", assistant: "{brand} Assistant", time: "18m" },
    { title: "Pricing page feedback", assistant: "{brand} Assistant", time: "1d" },
    { title: "Vendor contract review", assistant: "Legal Pengui", time: "2d" },
  ],
  user: { name: "Annie Rivera", email: "annie.rivera@acme.com" },
};
