// Spanish sibling of ./faq.ts (English source); its types are pinned to it.

import type * as En from "./faq";

export const visionMission: typeof En.visionMission = {
  eyebrow: "01 — Dirección",
  title: "Hacia dónde vamos, y cómo.",
  vision: {
    label: "Visión",
    sub: "Nuestro norte",
    icon: "megaphone",
    body: "Convertir a cada empresa en una organización aumentada por IA — donde los agentes entienden sus datos, operan sus herramientas y ejecutan trabajo real bajo su propia marca, sus reglas y su contexto.",
    strong: "organización aumentada por IA",
    tags: ["Entender", "Operar", "Ejecutar"],
  },
  mission: {
    label: "Misión",
    sub: "Cómo llegamos ahí",
    icon: "target",
    body: "Hacer que la IA empresarial sea accesible, personalizable y accionable — una plataforma para crear agentes, conectarlos al conocimiento del negocio y desplegarlos como herramientas internas, productos white-label o soluciones a medida.",
    strong: "accesible, personalizable y accionable",
    tags: ["Crear", "Conectar", "Desplegar"],
  },
};

export const faqHeader: typeof En.faqHeader = {
  eyebrow: "Nosotros",
  faqEyebrow: "Preguntas frecuentes",
  title: "Respuestas a la última pregunta antes de empezar.",
};

export const faqCategories: typeof En.faqCategories = [
  {
    category: "Despliegue y tus datos",
    items: [
      {
        question: "¿Dónde corre Pengui?",
        answer:
          "En tu propia nube o data center. La plataforma se instala en tu propio entorno. Tus datos y el tráfico hacia tu modelo se quedan dentro de tu red, salvo que decidas lo contrario.",
      },
      {
        question: "¿Nuestros datos salen alguna vez de nuestro entorno?",
        answer:
          "No, salvo que lo decidas. Lo único que sale es lo que le envías al modelo que elegiste — y si alojas el modelo por tu cuenta, no sale nada.",
      },
      {
        question: "¿Quién es responsable de nuestros datos?",
        answer:
          "Tú, y ese es justamente el punto. Pengui se instala de tu lado, así que tu información se almacena y se gobierna dentro de tu propio entorno, bajo las políticas y certificaciones con las que ya trabajas. Nosotros nunca la tocamos.",
      },
      {
        question: "Si dejamos de pagar la suscripción, ¿perdemos nuestros datos?",
        answer:
          "No. Tus datos y la memoria de tus agentes viven en tu propia base de datos, y puedes leerlos o exportarlos cuando quieras. La suscripción paga el motor — y el core es open source.",
      },
    ],
  },
  {
    category: "Agentes y memoria",
    items: [
      {
        question: "¿Qué cuenta como un agente?",
        answer:
          "Un asistente configurado que pones en marcha — para un proceso, un cliente, un flujo de trabajo. Las personas que lo usan son usuarios finales: ilimitados en todos los planes, sin costo. Los agentes de desarrollo y prueba son gratis.",
      },
      {
        question: "¿Qué tipo de agentes podemos construir?",
        answer:
          "Los que tu negocio necesite. Los agentes no están atados a departamentos — arma uno por proceso, por cliente, por flujo de trabajo o por línea de producto. Nada viene preestablecido.",
      },
      {
        question: "¿Los agentes pueden recordar sin exponer datos privados?",
        answer:
          "Sí. La memoria de cada cliente se mantiene separada, cada acceso queda registrado y puedes exportar o borrar los datos de un cliente cuando lo pida. Aun así, los agentes comparten lo que aprenden en toda tu empresa.",
      },
      {
        question: "¿Pueden construir los agentes por nosotros?",
        answer:
          "Sí. Nuestro equipo de Professional AI Service diseña, despliega y da soporte a agentes, servidores MCP e integraciones a medida para tus datos, tu marca y tus flujos de trabajo.",
      },
    ],
  },
  {
    category: "Modelos y sistemas",
    items: [
      {
        question: "¿Qué modelos de IA puedo usar?",
        answer:
          "Cualquier modelo de cualquier proveedor importante — comercial, open-weight o uno que alojes tú mismo. Cámbialo cuando quieras: por costo, por calidad o por dónde tienen que vivir los datos.",
      },
      {
        question: "¿Pengui se conecta a los sistemas que ya usamos?",
        answer:
          "Sí. Pengui habla MCP, el estándar de la industria, así que las apps, bases de datos y sistemas internos que ya usa tu empresa se pueden conectar — cualquier cosa con una API. Lo hace tu equipo, o el nuestro.",
      },
      {
        question: "¿Y si traemos un modelo más débil?",
        answer:
          "La mayor parte de la confiabilidad viene de la plataforma, no del modelo. La memoria controlada, las consultas de datos verificadas, la recuperación y los guardrails detectan los errores que cometería un modelo más débil.",
      },
    ],
  },
  {
    category: "White-label y tus clientes",
    items: [
      {
        question: "¿Qué significa “white-label” aquí, en concreto?",
        answer:
          "Tu marca, tu dominio, tus clientes — usuarios ilimitados, sin cargo por persona. No se trata de revender Pengui: tus clientes reciben tus agentes, construidos sobre tus datos y tus procesos, no una plataforma para armar los suyos.",
      },
      {
        question: "¿Compiten con nosotros por nuestros clientes?",
        answer:
          "No, y estructuralmente no podríamos. Nunca tratamos con tus clientes y no tenemos los datos de tu negocio — no tendríamos nada que ofrecerles que tenga sentido sin ti. La relación es tuya.",
      },
    ],
  },
  {
    category: "Prueba y primeros pasos",
    items: [
      {
        question: "¿Cuánto tardamos en estar en producción?",
        answer:
          "Desplegar Pengui es una instalación, no un proyecto de desarrollo. El instalador guiado levanta la plataforma con Console, interfaz, recuperación, Memory y gobernanza ya funcionando — el día uno se dedica a tu primer agente.",
      },
      {
        question: "¿Hay una prueba gratuita?",
        answer: "Sí — construye gratis durante 30 días. Sin tarjeta de crédito, y solo pagas los tokens de tu propio modelo.",
      },
      {
        question: "¿Qué pasa después de la prueba?",
        answer:
          "Lo conversamos y encontramos el plan que se ajuste a cómo terminaste usándolo. En cualquier caso, tus datos y la memoria de tus agentes se quedan en tu propia base de datos.",
      },
    ],
  },
];
