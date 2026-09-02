// Spanish sibling of ./trust — types pinned to the English source so structure drift is a compile error.

import type * as En from "./trust";

export const trustHeader: typeof En.trustHeader = {
  eyebrow: "Confianza y control",
  title: "Nivel enterprise, corriendo dentro de tu propia red.",
  subtitle:
    "Las preguntas que van a hacer tu equipo de seguridad, tu equipo legal y tu CFO, respondidas sin vueltas: el perímetro, el modelo de acceso y quién es dueño de qué.",
  badges: {
    region: "Los datos no salen de tu región",
    soc2: "Listo para SOC 2",
    rbac: "Acceso por rol",
    audit: "Auditoría completa",
  },
  screenshotLabel: "Permisos y registro de auditoría",
  figureBadges: { access: "Acceso por rol", audit: "Nada queda sin registrar" },
  figureCaption:
    "Cada rol, cada acción, cada agente — registrado y auditable desde una sola Console.",
};

export const control: typeof En.control = {
  eyebrow: "Bajo tu control",
  subtitle:
    "Pengui se instala de tu lado. Tus datos los almacenás, los procesás y los gobernás vos — nosotros no los guardamos ni los vemos. Tres preguntas que te hará tu equipo de seguridad, respondidas:",
  items: [
    {
      question: "“¿Dónde se ejecuta?”",
      answer:
        "En tu propia nube o en tu propio centro de datos — air-gapped si lo necesitás. Toda la plataforma vive dentro de tu red, y el almacenamiento es tuyo: el cifrado y la rotación de claves siguen tus propias políticas.",
    },
    {
      question: "“¿Qué sale de nuestro entorno?”",
      answer:
        "Solo lo que enviás al modelo que elegiste, con tus propias claves. Conectá Pengui a un modelo que alojes vos mismo y la respuesta es: nada.",
    },
    {
      question: "“¿Quién controla el acceso?”",
      answer:
        "Tú. Tu propio inicio de sesión — SSO, SAML, OIDC (Okta, Entra, Auth0 y otros) — permisos por rol, límites sobre lo que puede hacer cada agente y un registro completo de cada acción. Los datos de cada cliente quedan aislados, exportables o eliminables cuando lo pidas.",
    },
  ],
  note: "Sobre las certificaciones, sin vueltas. Las que gobiernan tus datos son las que ya tenés. La plataforma corre en tu entorno y tu información nunca llega a nosotros — así que el perímetro de cumplimiento, y la auditoría, siguen siendo tuyos.",
};
