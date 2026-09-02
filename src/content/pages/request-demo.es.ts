// Spanish sibling of ./request-demo (English source); its types are pinned to it.
import type * as En from "./request-demo";

export const requestDemoHeader: typeof En.requestDemoHeader = {
  eyebrow: "Contáctanos",
  title: "Descubre cómo Pengui puede funcionar dentro de tu empresa.",
  subtitle:
    "Solicita una demo con nuestro equipo y explora cómo Pengui puede impulsar tus prioridades de IA — desde flujos de trabajo agénticos y gobernanza hasta despliegue seguro y control operativo.",
};

export const requestDemoForm: typeof En.requestDemoForm = {
  title: "Solicita tu demo",
  fields: {
    name: "Nombre",
    workEmail: "Email corporativo",
    phone: "Teléfono",
    message: "Mensaje",
  },
  optionalHint: "Opcional",
  consent:
    "Al enviar este formulario, aceptas nuestra Política de Privacidad y das tu consentimiento para la recopilación, el almacenamiento, el tratamiento y la transferencia de tu información conforme a dicha política.",
  submitLabel: "Enviar",
  successTitle: "Gracias, ya lo recibimos.",
  successBody: "Alguien de nuestro equipo se pondrá en contacto pronto para entender tus necesidades y coordinar tu demo.",
};
