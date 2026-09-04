// Spanish sibling of ./home.ts — every export is type-pinned to the English source.

import type * as En from "./home";

export const hero: typeof En.hero = {
  eyebrow: "La capa operativa agéntica para empresas",
  title: "Agentes de IA que hacen trabajo real. Y que son realmente tuyos.",
  subtitle:
    "Agentes que responden a partir de tus documentos y ejecutan tareas en tus apps. Instalados en tu propia nube o en tu propio data center, con tu marca y sobre los modelos en los que ya confías.",
  pills: ["Tus agentes", "Tu nube", "Tus modelos", "Tu marca"],
  primaryCta: { label: "Solicitar una demo", href: "/request-demo" },
};

export const shift: typeof En.shift = {
  eyebrow: "El cambio",
  title: "Convierte tu empresa en una empresa agéntica.",
  note: "Una capa agéntica hace trabajo real — a un costo escalable.",
  chatbot: {
    prompt: "¿Te podés encargar de esto?",
    label: "Un chatbot",
    heading: "Te dice cómo. Y después espera.",
    items: ["Responde la pregunta", "Sugiere próximos pasos", "Olvida el contexto"],
  },
  agentic: {
    label: "Una capa agéntica",
    heading: "Lo hace. Y te muestra qué hizo.",
    items: [
      "Extrae la respuesta de tus datos",
      "Actúa en tus herramientas, dentro de tus reglas",
      "Recuerda el contexto",
      "Lleva tu marca",
    ],
  },
};

export const origin: typeof En.origin = {
  badges: { infra: "Corre en tu propia nube", brand: "Tu logo, tus colores" },
  eyebrow: "Por qué existe Pengui",
  title: "El pedido siempre era el mismo. El producto no existía.",
  lede: "Construimos un producto que tiene las 3 cosas que las empresas están pidiendo:",
  points: [
    "Agentes en tu propia infraestructura, tu nube, tus datos, tus claves.",
    "Con tu propia marca, tu nombre, tu estética, tus reglas.",
    "Trabajando para tus equipos y tus clientes, en producción, no en otro piloto de IA.",
  ],
};

export const solution: typeof En.solution = {
  eyebrow: "La solución",
  title: "Pengui es la capa operativa agéntica para empresas.",
  titleHighlight: "capa operativa agéntica",
  subtitle:
    "Se ubica entre quienes preguntan y los sistemas que tienen las respuestas, para que tus agentes no solo respondan: actúen. Adopta una pieza, o todas.",
  layer: {
    eyebrow: "La capa operativa",
    title: "Pengui está en el medio.",
    description: "Los agentes responden, recuperan, recuerdan y actúan — sobre tu conocimiento, dentro de tus reglas.",
  },
  columns: [
    {
      label: "Superficies",
      sub: "Lo que usa tu gente",
      items: [
        { label: "Chat y preguntas", icon: "message-circle" },
        { label: "Agentes especializados", icon: "briefcase" },
        { label: "Flujos automatizados", icon: "workflow" },
        { label: "Tus apps", icon: "app-window" },
      ],
    },
    {
      label: "La capa operativa",
      sub: "Pengui en el medio",
      highlight: true,
      items: [
        {
          label: "Orchestration",
          icon: "workflow",
          description: "Ejecuta tareas de varios pasos de punta a punta.",
        },
        {
          label: "Memory",
          icon: "brain-circuit",
          description: "Recuerda qué significan las cosas en tu organización.",
        },
        {
          label: "Recuperación",
          icon: "search",
          description: "Encuentra respuestas en tus documentos.",
        },
        {
          label: "Habilidades gobernadas",
          icon: "puzzle",
          description: "Actúa solo donde tiene permiso.",
        },
        {
          label: "Pregunta a tus datos · NLQ",
          icon: "message-square-text",
          description: "Preguntas en lenguaje natural sobre tus números.",
        },
        {
          label: "App MCP",
          icon: "cable",
          description: "A través del estándar abierto MCP.",
        },
        {
          label: "Trae tu propio LLM",
          icon: "cpu",
          description: "Funciona con los modelos que elijas.",
          wide: true,
        },
      ],
    },
    {
      label: "Tu empresa",
      sub: "Apps, conocimiento y datos",
      logos: [
        { label: "Salesforce", logoSrc: "/logos/salesforce.svg" },
        { label: "Slack", logoSrc: "/logos/slack.svg" },
        { label: "Microsoft 365", logoSrc: "/logos/microsoft-365.png" },
        { label: "Google Workspace", logoSrc: "/logos/google-workspace.svg" },
        { label: "BambooHR", logoSrc: "/logos/bamboohr.svg" },
        { label: "Jira", logoSrc: "/logos/jira.png" },
        { label: "Tus bases de datos", icon: "database" },
        { label: "Data warehouse", icon: "warehouse" },
      ],
    },
  ],
};

export const productOffering: typeof En.productOffering = {
  eyebrow: "Capacidades",
  titleLead: "Un solo stack.",
  titleEmphasis: "Hecho a tu medida.",
  subtitle: "Una sola plataforma: nada corre aislado. Cada pieza alimenta a las demás.",
  whereItRuns: {
    label: "Dónde se ejecuta",
    options: [
      {
        name: "Pengui Cloud",
        icon: "cloud",
        description: "Alojado por nosotros, en nuestro tenant. Arranque inmediato, cero infraestructura.",
      },
      {
        name: "Client Cloud",
        icon: "server",
        description: "Tu tenant o on-prem. Tus datos nunca salen de casa.",
      },
    ],
  },
  stack: {
    label: "El stack de Pengui",
    addOn: {
      eyebrow: "Por encima",
      name: "Professional AI Service",
      description: "Nuestro equipo diseña y construye tus agentes, integrados con tu stack.",
      icon: "users",
    },
    base: {
      eyebrow: "La base",
      name: "Pengui Platform — White Label",
      badge: "Personalización total de marca",
      description: "Vestida con tu marca — lanza agentes como producto propio, con tus propios modelos.",
      strong: "lanza agentes como producto propio",
      modules: [
        {
          label: "Console",
          tag: "observabilidad",
          icon: "gauge",
          description: "Trazas, logs, costo, rendimiento, permisos: quién hizo qué y con qué datos.",
        },
        {
          label: "Orchestration",
          icon: "share",
          description: "Ejecuta tareas de varios pasos de punta a punta.",
        },
        {
          label: "RAG System",
          icon: "file-search",
          description: "Respuestas ancladas en tus documentos, políticas y bases de conocimiento.",
        },
        {
          label: "Front End Interface",
          icon: "layout",
          description: "La interfaz que tu gente realmente usa.",
        },
        {
          label: "Memory",
          icon: "brain-circuit",
          description:
            "Memoria gobernada e inspeccionable: los agentes aprenden qué significan las cosas en tu organización, y podés ver qué recuerdan y por qué.",
        },
        {
          label: "Explorer",
          icon: "compass",
          description: "Explorá y consultá tus datos conectados directamente, fuera de cualquier agente puntual.",
        },
      ],
      connectivity: {
        label: "Platform Connectivity Layer",
        tag: "conectá tus propios agentes y MCPs",
        icon: "plug",
        description: "Los agentes actúan dentro de tus herramientas; los permisos deciden qué puede tocar cada uno.",
      },
    },
  },
  marketplace: {
    label: "Agent Marketplace",
    note: "listos para usar",
    agents: [
      "Agente de RR. HH.",
      "Agente de Ventas",
      "Agente de Marketing",
      "Agente de Finanzas",
      "Agente de Soporte IT",
    ],
    more: "Y más — construí el tuyo",
  },
};

export const finalCta: typeof En.finalCta = {
  eyebrow: "Empezá gratis · 30 días",
  title: "Empezá gratis. Pagá solo el uso de tu modelo. Escalá cuando estés listo.",
  body: "Instalá Pengui en tu propia nube, conectá tus documentos y datos, y construí tu primer agente — gratis por 30 días.",
  primaryCta: { label: "Solicitar una demo", href: "/request-demo" },
  microcopy: "Sin tarjeta de crédito, y nada sale de tu entorno por defecto.",
};
