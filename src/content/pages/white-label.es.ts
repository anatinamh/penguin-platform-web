// Spanish (LatAm) sibling of ./white-label — every export mirrors the English source and its types are pinned to it.

import type * as En from "./white-label";

/** `typeof En.x` on a top-level string const resolves to a literal type; widen it so the
 *  Spanish copy is assignable while the export stays pinned to the English shape. */
type Widen<T> = T extends string ? string : T;

export const whiteLabelHeader: typeof En.whiteLabelHeader = {
  eyebrow: "White-label desde el primer día",
  title: "Lanza agentes como tu propio producto.",
  subtitle:
    "Poné tu marca en toda la plataforma (tu nombre, tu dominio, tu interfaz) y entrega agentes a los clientes que ya atiendes. Ellos ven tu producto. A nosotros nunca nos conocen.",
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
      "Nunca pagás por persona, así que tu margen no se achica a medida que tus clientes crecen. Defines tus precios y tus contratos.",
    strong: "Nunca pagás por persona",
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
  eyebrow: "Elegí un preset. Mirá cómo cambia esta página.",
  title: "Tus colores, tu logo, tu nombre.",
  subtitle:
    "La interfaz del producto cambia desde un solo panel de configuración, en vivo, frente a vos.",
  presets: [
    { name: "Pengui", accent: "oklch(0.5 0.06 185)" },
    { name: "Ember", accent: "oklch(0.58 0.19 35)" },
    { name: "Indigo", accent: "oklch(0.5 0.15 275)" },
    { name: "Moss", accent: "oklch(0.55 0.1 140)" },
  ],
};

export const whiteLabelClosing: Widen<typeof En.whiteLabelClosing> =
  "Usás tu propio despliegue para llevar tus agentes — construidos sobre tus datos, tus procesos y tu marca — a los clientes que ya atiendes.";

export const interfaceMockup: typeof En.interfaceMockup = {
  newChat: "Nuevo chat",
  search: "Buscar",
  projects: "Proyectos",
  projectItems: ["Ventas Q3", "Legal", "Onboarding"],
  newProject: "Nuevo proyecto",
  penguis: "Penguis",
  newPengui: "Nuevo pengui",
  scheduled: "Tareas programadas",
  noScheduled: "No hay tareas programadas aún.",
  canvas: "Canvas",
  eyebrow: "Empezá con un mensaje",
  greeting: "Buenas tardes,",
  greetingName: "Alex",
  subtext: "Escribí lo que necesitás y {brand} se encarga del resto.",
  assistantPill: "Asistente {brand}",
  inputPlaceholder: "Hola",
  addContext: "Agregar contexto",
  tools: "Herramientas",
  recentChats: "Chats recientes",
  seeAllChats: "Ver todos los chats →",
  chats: [
    { title: "Narrativa de lanzamiento Q3", assistant: "Asistente {brand}", time: "18m" },
    { title: "Feedback de la página de precios", assistant: "Asistente {brand}", time: "1d" },
    { title: "Revisión contrato proveedor", assistant: "Pengui Legal", time: "2d" },
  ],
  user: { name: "Alex Rivera", email: "alex.rivera@acme.com" },
};

export const adminConsole: typeof En.adminConsole = {
  title: "Consola de",
  titleAccent: "administración",
  subtitle: "Administrá integraciones, Penguis y la configuración de tu organización.",
  tabs: ["Usuarios", "Integraciones", "Penguis", "Personalización"],
  terminology: {
    label: "Terminología",
    hint: "Cómo se llaman tus asistentes en toda la plataforma.",
    singular: "Singular",
    plural: "Plural",
  },
  logo: { label: "Logo", hint: "Aparece en la barra lateral de la plataforma.", drop: "Arrastrá tu logo" },
  primaryColor: { label: "Color primario", hint: "Botones, íconos y acentos principales." },
  secondaryColor: { label: "Color secundario", hint: "Elementos de apoyo y etiquetas visuales." },
};
