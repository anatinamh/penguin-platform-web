// Spanish sibling of ./platform — same shape, same keys; types are pinned to the English source.

import type * as En from "./platform";

export const platformHeader: typeof En.platformHeader = {
  eyebrow: "Pengui Platform",
  title: "Una sola plataforma para crear, gobernar y operar agentes confiables.",
  subtitle:
    "Para el equipo que construye: todo lo que un agente necesita — interfaz, recuperación, acceso a datos, memoria, permisos, observabilidad — ya ensamblado y corriendo sobre tu infraestructura.",
  badges: {
    permissions: "Elegí quién puede usar cada agente",
    audit: "Cada acción queda registrada",
  },
  screenshotCaption:
    "Todos tus agentes en un solo lugar — mira qué hace cada uno, quién lo usa y qué tiene permitido tocar.",
};

export const capabilities: typeof En.capabilities = {
  eyebrow: "Cómo se conectan las piezas",
  title: "Capacidades",
  subtitle: "Una sola plataforma: nada corre aislado. Cada pieza alimenta a las demás.",
  note: "Tu infraestructura — tu nube, tus modelos, tus datos — siempre incluida.",
  groups: [
    {
      layer: "Alrededor del motor",
      caption: "Opéralo y gobiérnalo",
      items: [
        {
          piece: "Canvas",
          tag: "La interfaz",
          icon: "layout-grid",
          description: "La interfaz que tu gente realmente usa.",
          long: "La interfaz que tu gente realmente usa — donde tu equipo lanza agentes, define reglas de control y trabaja con lo que ya está corriendo, sin tocar una terminal.",
          connects: ["Orchestration", "Memory", "White-label"],
        },
        {
          piece: "Console",
          tag: "Observabilidad",
          icon: "gauge",
          description:
            "Trazas, logs, costo, rendimiento, permisos: quién hizo qué y con qué datos.",
          long: "Trazas, logs, costo, rendimiento y permisos en una sola vista de operación — quién hizo qué, con qué datos y a qué costo.",
          connects: ["Orchestration", "Canvas"],
        },
      ],
    },
    {
      layer: "El núcleo",
      caption: "Razona y recuerda",
      dark: true,
      items: [
        {
          piece: "Orchestration",
          icon: "workflow",
          description: "Ejecuta tareas de varios pasos de punta a punta.",
          long: "Ejecuta tareas de varios pasos de punta a punta: planifica los pasos, llama herramientas y modelos en paralelo, contrasta los resultados con tus reglas de control y reintenta o escala cuando algo no cierra.",
          connects: ["Memory", "Skills & MCP", "Trae tu propio LLM"],
        },
        {
          piece: "Memory",
          icon: "brain-circuit",
          description:
            "Memoria gobernada e inspeccionable: los agentes aprenden qué significan las cosas en tu organización, y podés ver qué recuerdan y por qué.",
          long: "Memoria gobernada e inspeccionable: los agentes aprenden qué significan las cosas en tu organización, y podés ver qué recuerdan y por qué — con alcance por tenant, así nada se filtra entre equipos ni entre clientes.",
          connects: ["Orchestration", "Pregúntale a tus datos", "RAG Server"],
        },
      ],
    },
    {
      layer: "Capacidades",
      caption: "Responde y actúa",
      items: [
        {
          piece: "RAG Server",
          icon: "search",
          description: "Respuestas ancladas en tus documentos, políticas y bases de conocimiento.",
          long: "Respuestas ancladas en tus documentos, políticas y bases de conocimiento — una recuperación multietapa verifica y reordena entre fuentes antes de que un agente responda.",
          connects: ["Pregúntale a tus datos", "Memory"],
        },
        {
          piece: "Pregúntale a tus datos",
          tag: "NLQ",
          icon: "message-square-text",
          description:
            "Preguntas en lenguaje natural sobre tus bases de datos y tu data warehouse, validadas antes de que salga la respuesta.",
          long: "Preguntas en lenguaje natural sobre tus bases de datos y tu data warehouse, validadas antes de que salga la respuesta — así el resultado es algo que podés defender, no solo algo que suena bien.",
          connects: ["RAG Server", "Memory"],
        },
        {
          piece: "Skills & MCP",
          icon: "puzzle",
          description:
            "Los agentes actúan dentro de tus herramientas; los permisos deciden qué puede tocar cada uno.",
          long: "Los agentes actúan dentro de tus herramientas; los permisos deciden qué puede tocar cada uno. Cada skill lleva sus propios permisos, vía MCP, el estándar abierto.",
          connects: ["Orchestration", "Integraciones a medida"],
        },
        {
          piece: "Trae tu propio LLM",
          icon: "cpu",
          description:
            "Comerciales, de pesos abiertos o autoalojados. Cambia de modelo sin reconstruir nada.",
          long: "Comerciales, de pesos abiertos o autoalojados. Cambia de modelo sin reconstruir nada, así el costo, la calidad y la residencia de los datos siguen siendo decisión tuya.",
          connects: ["Orchestration"],
        },
      ],
    },
    {
      layer: "Conectar y ejecutar",
      caption: "Intégralo a tus sistemas",
      items: [
        {
          piece: "Agent Marketplace",
          icon: "store",
          description: "Agentes listos para arrancar y adaptar.",
          long: "Agentes listos para arrancar y adaptar — finanzas, RR. HH., ventas — en vez de una página en blanco, o publica los que arma tu equipo para que otros los reutilicen.",
          connects: ["Integraciones a medida", "White-label"],
        },
        {
          piece: "Integraciones a medida",
          icon: "cable",
          description: "Cualquier cosa con API, construida por tu equipo o por el nuestro.",
          long: "Cualquier cosa con API, construida por tu equipo o por el nuestro, sobre la misma capa MCP gobernada que impulsa cada skill — sin conectores sueltos que mantener.",
          connects: ["Skills & MCP", "Agent Marketplace"],
        },
        {
          piece: "White-label",
          icon: "palette",
          featured: true,
          description: "Vístelo todo con tu marca.",
          long: "Vístelo todo con tu marca: tu logo, tus colores, tu dominio y el nombre de tu producto se aplican desde la configuración de Canvas, así lo que entregas se ve como tu producto.",
          connects: ["Canvas", "Agent Marketplace"],
        },
      ],
    },
  ],
};

export const servicePaths: typeof En.servicePaths = {
  eyebrow: "Servicios profesionales de agentes",
  title: "Hecho para vos, o hecho por vos.",
  titleEmphasis: [
    { text: "para", color: "primary" },
    { text: "por", color: "indigo" },
  ],
  subtitle:
    "Cada agente Pengui se construye a medida para tus datos, tu marca y tus flujos de trabajo — nunca genérico. Lo que cambia es quién lo construye.",
  strong: "nunca genérico",
  badge: "Un agente hecho a medida — dos formas de conseguirlo",
  paths: [
    {
      key: "a",
      label: "Camino A · Hecho para vos",
      sub: "Professional Services",
      icon: "handshake",
      accent: "primary",
      title: "Lo construimos por ti",
      body: [
        {
          text: "Nos encargamos del descubrimiento, el diseño, la integración, las pruebas y el despliegue — lanzas un agente funcionando sin contratar especialistas en IA.",
          strong: "sin contratar especialistas en IA",
        },
        {
          text: "Lo construimos, lo desplegamos y lo mantenemos dentro de tu entorno.",
        },
      ],
      footnote: "Pengui y sus partners lo diseñan, construyen, alojan y mantienen",
    },
    {
      key: "b",
      label: "Camino B · Hecho por vos",
      sub: "Pengui Platform",
      icon: "code",
      accent: "indigo",
      title: "Construilo vos mismo",
      body: [
        {
          text: "Tu equipo construye, lanza y es dueño de los agentes, con control total sobre despliegue, gobernanza y roadmap.",
          strong: "es dueño de los agentes",
        },
        {
          text: "Pengui se vuelve tu infraestructura interna de agentes — cada nuevo caso de uso es algo que construyes, no otra compra que negociar.",
        },
      ],
      footnote: "Impulsado por Pengui Platform",
    },
  ],
  commonBuilds: {
    label: "Desarrollos frecuentes",
    items: [
      { label: "Finanzas", icon: "landmark" },
      { label: "RR. HH.", icon: "users" },
      { label: "Ventas", icon: "trending-up" },
      { label: "Marketing", icon: "megaphone" },
      { label: "Legal y cumplimiento", icon: "scale" },
      { label: "Operaciones", icon: "workflow" },
      { label: "Reportes", icon: "bar-chart" },
      { label: "Soporte IT", icon: "life-buoy" },
      { label: "Integraciones a medida · CRMs, ERPs, APIs", icon: "cable" },
    ],
  },
};

export const howItWorks: typeof En.howItWorks = {
  eyebrow: "Cómo funciona",
  title: "De cero a un agente con tu marca, en cuatro pasos.",
  steps: [
    {
      number: "01",
      title: "Despliega",
      description:
        "Instalá Pengui en tu propia nube o en tu propio data center, air-gapped si lo necesitás, con el instalador guiado.",
    },
    {
      number: "02",
      title: "Conectá",
      description:
        "Conectá tus modelos, tus datos y tus aplicaciones corporativas a través de MCP. Tus claves, tus endpoints, y vos decidís dónde viven los datos.",
    },
    {
      number: "03",
      title: "Construí y goberná",
      description:
        "Construí tus agentes o partí de una plantilla del marketplace. Dales memoria y herramientas, y observá todo lo que hacen desde la consola.",
    },
    {
      number: "04",
      title: "Personaliza y lanza",
      description:
        "Ponle tu nombre y lánzalo a tus equipos, con cada pregunta respondida y cada acción registrada. Eso es nuestra oferta White label.",
      strong: "White label",
    },
  ],
};

export const difference: typeof En.difference = {
  eyebrow: "La diferencia",
  title: "La IA añadida te alquila una ventana de chat. Pengui te entrega el motor.",
  columns: ["Dimensión", "IA añadida — carcasa de entrega", "Pengui — motor de valor"],
  rows: [
    {
      dimension: "Dónde corre",
      boltOn: "La nube del proveedor; tus datos salen",
      pengui: "Tu nube u on-prem; los datos se quedan",
    },
    {
      dimension: "El modelo",
      boltOn: "Atado a un solo proveedor",
      pengui: "Trae el tuyo",
    },
    {
      dimension: "La inteligencia",
      boltOn: "Un extra atornillado a la UI de otro",
      pengui: "Los agentes, la memoria y el acceso a datos son la plataforma",
    },
    {
      dimension: "Memory",
      boltOn: "Sin estado u opaca",
      pengui: "Gobernada, inspeccionable y tuya",
    },
    {
      dimension: "Observabilidad",
      boltOn: "Un extra que construyes o alquilas",
      pengui: "Incluida en todos los planes — trazas, logs, costo, permisos",
    },
    {
      dimension: "Tus clientes",
      boltOn: "En el fondo, del proveedor",
      pengui: "Tuyos — entregas bajo tu propia marca y nosotros nunca los conocemos",
    },
  ],
};
