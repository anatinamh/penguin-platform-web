// Spanish (LatAm) sibling of ./white-label — every export mirrors the English source and its types are pinned to it.

import type * as En from "./white-label";

/** `typeof En.x` on a top-level string const resolves to a literal type; widen it so the
 *  Spanish copy is assignable while the export stays pinned to the English shape. */
type Widen<T> = T extends string ? string : T;

export const whiteLabelHeader: typeof En.whiteLabelHeader = {
  eyebrow: "White-label desde el primer día",
  title: "Lanza agentes como tu propio producto.",
  subtitle:
    "Pon tu marca en toda la plataforma (tu nombre, tu dominio, tu interfaz) y entrega agentes a los clientes que ya atiendes. Ellos ven tu producto. A nosotros nunca nos conocen.",
  note: "Úsala internamente, véndela a tus clientes o lanza un producto vertical: el mismo motor por debajo.",
  screenshotCaption:
    "Una sola pantalla de configuración le cambia la marca a todo: la interfaz que usan tus clientes y la Console desde la que operas.",
  badges: { cloud: "Corre en tu propia nube", unseen: "Tus clientes nunca nos ven" },
  screenshotLabel: "Tu workspace con tu marca",
  figureCaption:
    "La misma Console, vestida con el logo, los colores y el dominio de un cliente.",
};

export const whiteLabelFeatures: typeof En.whiteLabelFeatures = [
  {
    title: "Tu identidad, desde el primer minuto",
    icon: "palette",
    description:
      "Logo, colores, dominio y nombre de producto. Co-branding por cliente o unidad de negocio cuando lo necesites.",
    strong: "Co-branding por cliente o unidad de negocio",
  },
  {
    title: "Entornos aislados por cliente",
    icon: "layers",
    description:
      "Cada cliente ve solo sus propios datos. Gestionas todos los entornos desde una sola Console.",
    strong: "solo sus propios datos",
  },
  {
    title: "Usuarios finales ilimitados",
    icon: "users",
    description:
      "Nunca pagas por persona, así que tu margen no se achica a medida que tus clientes crecen. Defines tus precios y tus contratos.",
    strong: "Nunca pagas por persona",
  },
  {
    title: "Tu nube o on-prem",
    icon: "cloud",
    description:
      "Toda la plataforma corre en tu entorno. Nada sale de ahí por defecto, ni tus datos ni los de tus clientes.",
    strong: "Nada sale de ahí por defecto",
  },
  {
    title: "Trae tus propios modelos",
    icon: "cpu",
    description:
      "Costo, residencia de datos y elección de modelo quedan en tus manos. Las herramientas se conectan a través del estándar abierto MCP.",
    strong: "Costo, residencia de datos y elección de modelo",
  },
  {
    title: "Un producto, no un proyecto",
    icon: "package",
    description:
      "La plataforma ya viene construida: Console, interfaz, recuperación, Memory, gobernanza. Le agregas tu marca y tus agentes, no un año de ingeniería.",
    strong: "no un año de ingeniería",
  },
];

export const whiteLabelBanner: Widen<typeof En.whiteLabelBanner> =
  "Úsala internamente, véndela hacia afuera o lanza un vertical — el poder de una plataforma agéntica, sin tener que construirla.";

export const presetDemo: typeof En.presetDemo = {
  eyebrow: "Elige un preset. Mira cómo cambia esta página.",
  title: "Tus colores, tu logo, tu nombre.",
  subtitle:
    "La interfaz del producto cambia desde un solo panel de configuración, en vivo, frente a ti.",
  presets: [
    { name: "Pengui", accent: "oklch(0.5 0.06 185)" },
    { name: "Ember", accent: "oklch(0.58 0.19 35)" },
    { name: "Indigo", accent: "oklch(0.5 0.15 275)" },
    { name: "Moss", accent: "oklch(0.55 0.1 140)" },
  ],
};

export const whiteLabelClosing: Widen<typeof En.whiteLabelClosing> =
  "Usas tu propio despliegue para llevar tus agentes — construidos sobre tus datos, tus procesos y tu marca — a los clientes que ya atiendes.";
