// The product prototype's UI is Spanish-only — its language selector is a
// mockup that swaps a label and a checkmark, nothing else. The marketing site
// ships English and Spanish, so Spanish screenshots are captured as-is and
// English ones get this dictionary applied to the DOM just before the shot.
//
// Longest-first replacement: "Integraciones de la organización" must win over
// "Integraciones".

export const ES_TO_EN = {
  // ── App chrome ──────────────────────────────────────────────────────────
  "Nuevo chat": "New chat",
  PROYECTOS: "PROJECTS",
  PENGUIS: "PENGUIS",
  CANVAS: "CANVAS",
  "TAREAS PROGRAMADAS": "SCHEDULED WORK",
  EQUIPOS: "TEAMS",
  "CHATS RECIENTES": "RECENT CHATS",
  "Ver más chats": "See more chats",
  Avanzado: "Advanced",
  "Volver a la consola": "Back to the console",

  // ── Seeded chat titles ──────────────────────────────────────────────────
  "Revisión contrato proveedor": "Vendor contract review",
  "Análisis pipeline Q3": "Q3 pipeline analysis",

  // ── Admin console shell ─────────────────────────────────────────────────
  // The title is split across two text nodes by the italic <em>, so each half
  // is translated on its own: "Consola de |administración" -> "Admin |console".
  "Consola de": "Admin",
  "administración": "console",
  "Configuración avanzada": "Advanced settings",
  "Configuración": "Settings",
  avanzada: "advanced",
  "Administrá integraciones, Penguis y configuración de la organización.":
    "Manage integrations, Penguis and your organization's settings.",
  "Organización Admin": "Organization Admin",
  "Integraciones de la organización": "Organization integrations",
  "Restablecer contraseña": "Reset password",
  "Personalización de marca": "Brand customization",
  Personalización: "Branding",
  Usuarios: "Users",

  // ── Branding tab ────────────────────────────────────────────────────────
  "Ajustá la apariencia de la plataforma para tu organización.":
    "Tune the platform's appearance for your organization.",
  "Restablecer por defecto": "Reset to defaults",
  "Terminología": "Terminology",
  "Cómo se llaman tus asistentes en toda la plataforma.":
    "What your assistants are called across the platform.",
  "Aparece en la barra lateral de la plataforma.": "Appears in the platform sidebar.",
  "Usá una imagen cuadrada para mejores resultados.":
    "Use a square image for best results.",
  // Also split: the second half is a link inside the drop zone.
  "Arrastrá tu logo o": "Drag your logo in, or",
  "elegí un archivo": "choose a file",
  "Máx. 2 MB": "Max 2 MB",
  "Color primario": "Primary color",
  "Botones, íconos y acentos principales.": "Buttons, icons and main accents.",
  "Color secundario": "Secondary color",
  "Elementos de apoyo y etiquetas visuales.": "Supporting elements and visual tags.",
  "Tipografía de acento": "Accent typeface",
  "La fuente itálica que resalta una palabra en los títulos de pantalla.":
    "The italic face that highlights one word in screen titles.",
  "Color base de la plataforma en modo claro.":
    "The platform's base color in light mode.",
  "Beige cálido": "Warm beige",
  "Blanco neutro": "Neutral white",
  "Por defecto": "Default",
  Fondo: "Background",

  // ── Users tab ───────────────────────────────────────────────────────────
  "Asigná a cada usuario un nivel de acceso dentro de tu organización.":
    "Give each user an access level within your organization.",
  "Buscar por email o nombre...": "Search by email or name…",
  // Table headers are title-case in the DOM; the uppercase is CSS.
  "Nivel de acceso": "Access level",
  "Archivos + Bases de datos": "Files + Databases",
  "0 usuarios seleccionados": "0 users selected",
  "Asignar nivel": "Assign level",
  "Sin resultados para": "No results for",
  "Sin acceso": "No access",
  Archivos: "Files",
  Actualizar: "Refresh",
  Aplicar: "Apply",
  Usuario: "User",
  Rol: "Role",
};

/** Rough "did anything stay Spanish?" check, used to flag gaps in this map. */
export const SPANISH_HINT =
  /[¿¡]|\b(?:de la|de los|para|tus?|sus?|con|como|qué|más|está|están|acá|todos|cada|nuestra?)\b|[áéíóúñ]/i;

/**
 * Replaces Spanish UI strings with English, in the browser. Self-contained on
 * purpose — it is serialized into the page.
 */
export function applyDictionary(dict) {
  // Longest keys first so specific phrases win over substrings of themselves.
  const entries = Object.entries(dict).sort((a, b) => b[0].length - a[0].length);

  const swap = (value) => {
    let out = value;
    for (const [es, en] of entries) {
      if (out.includes(es)) out = out.split(es).join(en);
    }
    return out;
  };

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  for (const node of nodes) {
    if (!node.nodeValue || !node.nodeValue.trim()) continue;
    const next = swap(node.nodeValue);
    if (next !== node.nodeValue) node.nodeValue = next;
  }

  for (const el of document.querySelectorAll("input[placeholder], textarea[placeholder]")) {
    el.setAttribute("placeholder", swap(el.getAttribute("placeholder") || ""));
  }
  for (const el of document.querySelectorAll("input[value]")) {
    el.setAttribute("value", swap(el.getAttribute("value") || ""));
  }
}
