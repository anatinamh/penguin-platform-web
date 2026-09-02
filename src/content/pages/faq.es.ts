// Spanish (LatAm) sibling of ./faq — types pinned to the English source so
// structure drift is a compile error.

import type * as En from "./faq";

export const faqHeader: typeof En.faqHeader = {
  eyebrow: "Preguntas frecuentes",
  title: "Las respuestas a la última duda antes de empezar.",
};

export const faqCategories: typeof En.faqCategories = [
  {
    category: "Rumbo",
    items: [
      {
        question: "¿Hacia dónde va Pengui?",
        answer:
          "Hacia un mundo donde cada empresa funcione con agentes que le pertenecen de verdad — agentes que entienden sus datos, actúan en sus herramientas y hacen trabajo real bajo su propio nombre. Cada decisión de producto apunta ahí.",
      },
      {
        question: "¿Y cómo llegan?",
        answer:
          "Haciendo que la IA empresarial sea algo que instalás, no algo que alquilás: una plataforma para construir agentes, conectarlos al conocimiento de tu negocio y lanzarlos — como herramientas internas, como productos con tu marca, o construidos por nosotros para vos.",
      },
    ],
  },
  {
    category: "Despliegue y tus datos",
    items: [
      {
        question: "¿Dónde se ejecuta Pengui?",
        answer:
          "En tu propia nube o en tu propio data center — air-gapped si lo necesitás. Toda la plataforma se instala dentro de tu red: la interfaz, el motor, el almacenamiento. Nada de eso vive de nuestro lado.",
      },
      {
        question: "¿Nuestros datos salen alguna vez de nuestro entorno?",
        answer:
          "Solo si vos lo decidís. Tus datos, tus documentos y la memoria de tus agentes viven dentro de tu red. Lo único que sale es lo que le mandás al modelo que elegiste, con tus propias claves — y si apuntás Pengui a un modelo que hospedás vos, no sale nada. El sandbox de evaluación hospedado es la única excepción, y está pensado solo para datos no sensibles.",
      },
      {
        question: "¿Quién es responsable de nuestros datos?",
        answer:
          "Vos — por arquitectura, no solo por contrato. La plataforma corre en tu entorno, bajo tus controles de acceso, y en el despliegue estándar tu información nunca llega hasta nosotros — así que no hay nada de nuestro lado que guardar, ver o filtrar. Los detalles están en el acuerdo.",
      },
      {
        question: "Si dejamos de pagar la suscripción, ¿perdemos nuestros datos?",
        answer:
          "No. Tus datos, la configuración de tus agentes y la memoria que construyeron viven en tu propia base de datos, en tu propia nube — legibles y exportables en cualquier momento, con suscripción o sin ella. La suscripción licencia el motor que pone esos datos a trabajar; nunca guarda los datos. Y el núcleo de ese motor es open source. Los términos post-terminación están en el acuerdo.",
      },
    ],
  },
  {
    category: "Agentes y memoria",
    items: [
      {
        question: "¿Qué cuenta como un agente?",
        answer:
          "Un agente es un asistente configurado que desplegás — para un proceso, un cliente, un flujo de trabajo. Las personas que lo usan son usuarios finales: ilimitados en todos los planes, sin costo. Se te cobra por los agentes que corrés, nunca por la gente que los usa — y los agentes de desarrollo y prueba son gratis.",
      },
      {
        question: "¿Qué tipo de agentes podemos construir?",
        answer:
          "Los que tu negocio necesite. Los agentes no están atados a departamentos — armá uno por proceso, por cliente, por línea de producto o por flujo de trabajo, o uno que cubra varios. Nada viene preestablecido, así que nada limita lo que podés construir.",
      },
      {
        question: "¿Pueden los agentes recordar sin exponer datos privados?",
        answer:
          "Sí. La memoria está gobernada y aislada: cada cliente — o equipo — solo ve su propia información, cada acceso queda registrado, y podés exportar o borrar los datos de cualquiera cuando lo pidan. Los agentes igual se vuelven más certeros con lo que la organización aprende, sin exponer nada privado.",
      },
      {
        question: "¿Pueden construir los agentes por nosotros?",
        answer:
          "Sí. Nuestro equipo de Professional Agent Services se encarga del relevamiento, el diseño, la integración, las pruebas y el despliegue — agentes hechos a medida de tus datos, tu marca y tus flujos de trabajo, corriendo dentro de tu entorno. O los construye tu equipo sobre la plataforma. Vos elegís.",
      },
    ],
  },
  {
    category: "Modelos y sistemas",
    items: [
      {
        question: "¿Qué modelos de IA puedo usar?",
        answer:
          "Cualquier modelo de cualquier proveedor importante — comercial, open-weight, o uno que hospedes vos. Vos elegís, y podés cambiarlo cuando quieras por costo, calidad o residencia de datos. (MCP es cómo Pengui se conecta a tus herramientas y sistemas, no a tus modelos.)",
      },
      {
        question: "¿Pengui se puede conectar a los sistemas que ya usamos?",
        answer:
          "Sí. Microsoft 365, Google Workspace y BambooHR ya funcionan, y cualquier cosa con una API — tu CRM, tu ERP, tus bases de datos y tu warehouse — se puede conectar a través del estándar abierto MCP o como integración a medida. La construye tu equipo, o el nuestro.",
      },
      {
        question: "¿Y si traemos un modelo más débil?",
        answer:
          "La mayor parte de la confiabilidad viene de la plataforma, no del modelo. La memoria gobernada, las consultas de datos validadas, la recuperación y los guardrails atajan lo que un modelo más débil erraría. Un modelo más potente ayuda — pero la plataforma es lo que hace que una respuesta se sostenga.",
      },
    ],
  },
  {
    category: "White-label",
    items: [
      {
        question: "¿Qué significa “white-label” acá, concretamente?",
        answer:
          "Tu marca, tu dominio, tus clientes. Toda la plataforma — la interfaz que usan tus clientes y la Console desde la que operás — lleva tu nombre. Nuestros clientes entregan agentes a sus propios clientes como producto propio, y a esos clientes nunca los conocemos. Usuarios finales ilimitados, sin cargo por persona.",
      },
    ],
  },
  {
    category: "Prueba y primeros pasos",
    items: [
      {
        question: "¿Hay una prueba gratis?",
        answer:
          "Sí — desplegá el stack completo de agentes (Console, Canvas y el RAG Server) en tu propio entorno y construí gratis por 30 días. Sin tarjeta de crédito, nada sale de tu entorno, y pagás solo tus propios tokens de modelo. ¿Todavía no estás listo para desplegar? Hay un sandbox hospedado para empezar — solo para datos no sensibles.",
      },
      {
        question: "¿Qué pasa después de la prueba?",
        answer:
          "Elegís un plan para que tus agentes sigan corriendo. Tus datos y la memoria que construyeron tus agentes se quedan en tu base de datos en cualquier caso.",
      },
    ],
  },
];
