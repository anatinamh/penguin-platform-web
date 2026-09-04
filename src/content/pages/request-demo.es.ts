// Spanish sibling of ./request-demo (English source); its types are pinned to it.
import type * as En from "./request-demo";

export const requestDemoHeader: typeof En.requestDemoHeader = {
  eyebrow: "Contactanos",
  title: "Descubrí cómo Pengui puede funcionar dentro de tu empresa.",
  subtitle:
    "Solicitá una demo con nuestro equipo y explorá cómo Pengui puede impulsar tus prioridades de IA — desde flujos de trabajo agénticos y gobernanza hasta despliegue seguro y control operativo.",
};

export const requestDemoForm: typeof En.requestDemoForm = {
  title: "Solicitá tu demo",
  fields: {
    name: "Nombre",
    workEmail: "Email corporativo",
    phone: "Teléfono",
    message: "Mensaje",
  },
  consent:
    "Al enviar este formulario, aceptás nuestra Política de Privacidad y das tu consentimiento para la recopilación, el almacenamiento, el tratamiento y la transferencia de tu información conforme a dicha política.",
  submitLabel: "Enviar",
  successTitle: "Gracias, ya lo recibimos.",
  successBody: "Alguien de nuestro equipo se pondrá en contacto pronto para entender tus necesidades y coordinar tu demo.",
};
