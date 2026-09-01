// Trust & control page copy — sourced verbatim from the approved landing doc, sections 13, 14.

export const control = {
  eyebrow: "Yours to control",
  subtitle:
    "Pengui installs on your side. Your data is stored, processed and governed by you — we don't hold it, and we don't see it. Three questions your security team will ask, answered:",
  items: [
    {
      question: "“Where does it run?”",
      answer:
        "In your own cloud or your own data center — air-gapped if you need it. The whole platform sits inside your network, and the storage is yours, so encryption and key rotation follow your own policies.",
    },
    {
      question: "“What leaves our environment?”",
      answer:
        "Only what you send to the model you picked, over your own keys. Point Pengui at a model you host yourself, and the answer is: nothing.",
    },
    {
      question: "“Who controls access?”",
      answer:
        "You do. Your own login — SSO, SAML, OIDC (Okta, Entra, Auth0 and others) — permissions by role, limits on what each agent may do, and a full record of every action. Each client's data kept isolated, exportable or deletable on request.",
    },
  ],
  note: "About certifications, plainly. The ones that govern your data are the ones you already hold. The platform runs in your environment and your information never reaches us — so the compliance perimeter, and the audit, stay yours.",
};

export const keep = {
  eyebrow: "Yours to keep",
  title: "Your data is yours. The engine is licensed.",
  subtitle: "The line is drawn on purpose — and it doesn't move if you leave.",
  items: [
    {
      question: "“What's ours, forever?”",
      answer:
        "Your data, your agents' configurations and the memory they've built. It lives in your own database, in your own cloud — readable and exportable at any time, subscription or not.",
    },
    {
      question: "“So what are we paying for?”",
      answer:
        "The engine: the logic, connectors and standards that turn that data into working agents. It runs while you subscribe — and the core is open source.",
    },
  ],
};
