// Spanish sibling of ./pricing.ts (English source) — every export is type-pinned to it, so a missing or misshapen key is a compile error.

import type * as En from "./pricing";

/** `tiersNote` is a bare string in the source, so `typeof` pins it to that exact
 *  literal. Widen literals to `string` while staying tied to the English export. */
type Widen<T> = T extends string ? string : T;

export const pricingHeader: typeof En.pricingHeader = {
  eyebrow: "Precios",
  titleLead: "Empezá gratis en tu nube.",
  titleEmphasis: "Pagá solo por lo que encendés.",
  badge: "Usuarios ilimitados en todos los planes",
  subtitle: "Usuarios ilimitados en todos los planes.",
};

export const trial: typeof En.trial = {
  title: "Prueba gratis de 30 días · en tu nube",
  description: "Despliega el stack completo de agentes en tu propia nube y evalúalo gratis",
  includes: [
    "Console (observabilidad y control)",
    "Canvas (la interfaz)",
    "RAG Server (respuestas a partir de tus documentos).",
  ],
  closing: "Creá y poné a correr agentes con usuarios ilimitados; solo pagás los tokens de tu propio modelo.",
  altNote: "¿Todavía no querés desplegar en tu propia nube? Usá Pengui alojado por nosotros y empezá ahora.",
  price: "$0",
  primaryCta: { label: "Empezá gratis", href: "/request-demo" },
};

export const tiers: typeof En.tiers = [
  {
    name: "Studio",
    tagline: "Respuestas sobre tus documentos",
    price: "$2,000",
    period: "/mes",
    seatsLabel: "Hasta 3 licencias de agente incluidas",
    featured: false,
    includes: ["Console · observabilidad", "Interfaz front end", "RAG System", "Soporte estándar"],
  },
  {
    name: "Growth",
    tagline: "Memory, activada",
    price: "$4,000",
    period: "/mes",
    seatsLabel: "Hasta 12 licencias de agente incluidas",
    featured: false,
    inherits: "Todo lo de Studio",
    includes: [
      "Memory M1 · personalización",
      "Explorer E1 · NLQ sobre archivos",
      "SSO multi-IdP",
      "Soporte estándar (email o chat)",
    ],
  },
  {
    name: "Scale",
    tagline: "Conocimiento compartido, a escala",
    price: "$6,000",
    period: "/mes",
    seatsLabel: "Hasta 40 licencias de agente incluidas",
    featured: true,
    badge: "El más elegido",
    inherits: "Todo lo de Growth",
    includes: [
      "Memory M2 · conocimiento compartido",
      "Explorer E2 · + bases de datos",
      "Soporte premium (email, chat y videollamada)",
    ],
  },
  {
    name: "Enterprise+",
    tagline: "Regulado y on-prem",
    price: "Hablemos",
    period: "",
    seatsLabel: "Hasta 100 licencias de agente incluidas",
    featured: false,
    inherits: "Todo lo de Scale",
    includes: [
      "Explorer E3 · cruces entre fuentes",
      "On-prem · entorno dedicado · SLAs",
      "Acceso anticipado a M3 en su lanzamiento",
      "Soporte premium (email, chat y videollamada)",
    ],
  },
  {
    name: "Custom",
    tagline: "Elegí tus módulos",
    price: "Hablemos",
    period: "",
    seatsLabel: "Licencias de agente a la medida de lo que necesitás",
    featured: false,
    dashed: true,
    inherits: "Se arma desde cualquier plan",
    includes: [
      "Elegí solo los módulos que necesitás",
      "Niveles de Memory y Explorer à la carte",
      "El nivel de soporte que prefieras",
    ],
    prebuilt: "El precio sale de los módulos que elijas",
  },
];

export const tiersNote: Widen<typeof En.tiersNote> =
  "Todos los planes corren en tu propia nube. Los despliegues bare-metal y totalmente aislados se manejan como un acuerdo a medida.";

export const priceLevers: typeof En.priceLevers = {
  title: "Pagás por funcionalidades, no por personas.",
  subtitle:
    "Tres cosas mueven el precio. Todo lo demás — Console, interfaz, recuperación, onboarding y soporte — viene incluido.",
  items: [
    {
      title: "Memory, cuánto recuerda",
      description: "Individual → Equipo y empresa → Ciclo de automejora (muy pronto).",
    },
    {
      title: "Pregúntale a tus datos, cuántas fuentes",
      description:
        "Archivos → + Bases de datos → + Cruces entre fuentes. El salto de valor está en cruzar datos entre fuentes.",
    },
    {
      title: "Agentes, cuantos más, más barato cada uno",
      description: "Los agentes de desarrollo y prueba son gratis · usuarios finales ilimitados, siempre.",
    },
  ],
  extras: [
    {
      title: "À la carte",
      description: "Suma solo Memory, o solo Pregúntale a tus datos, sobre Studio — sin tener que subir de plan entero.",
    },
    {
      title: "Precio por uso",
      description: "¿Nada de esto te cierra? También podemos cobrar por uso.",
    },
    {
      title: "Pengui White Label",
      description: "Pago único de implementación + licencia mensual. Tu marca, tu dominio, usuarios finales ilimitados.",
    },
  ],
};
