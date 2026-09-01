import type { SiteContent } from "./site.en";

// Typed against SiteContent: TypeScript rejects this file if any key from the
// English source is missing or misshapen.
export const site: SiteContent = {
  config: {
    name: "Pengui AI",
    tagline: "La capa operativa agéntica para empresas.",
    description:
      "Pengui — la capa operativa agéntica para empresas. Corre en tu nube, funciona con cualquier modelo, y es tuyo de verdad.",
    domain: "pengui.ai",
    poweredBy: "Clear Tech",
  },
  mainNav: [
    { label: "Plataforma", href: "/platform" },
    { label: "Marca blanca", href: "/white-label" },
    { label: "Confianza y control", href: "/trust" },
    { label: "Precios", href: "/pricing" },
    { label: "Nosotros", href: "/faq" },
  ],
  footerNav: {
    platform: {
      title: "Plataforma",
      links: [
        { label: "Capacidades", href: "/platform#capabilities" },
        { label: "Cómo funciona", href: "/#how-it-works" },
        { label: "Servicios de agentes", href: "/platform#services" },
        { label: "Marca blanca", href: "/white-label" },
      ],
    },
    solutions: {
      title: "Nosotros",
      links: [
        { label: "Confianza y control", href: "/trust" },
        { label: "Preguntas frecuentes", href: "/faq#faq" },
        { label: "Precios", href: "/pricing" },
      ],
    },
    company: {
      title: "Empezar",
      links: [
        { label: "Pedir una demo", href: "/request-demo" },
        { label: "Probar gratis", href: "/pricing" },
        { label: "Hablar con ventas", href: "#contact" },
      ],
    },
  },
  header: {
    requestDemo: "Pedir una demo",
    openMenu: "Abrir menú",
    languageLabel: "Idioma",
  },
};
