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
      title: "Lo construimos por vos",
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
