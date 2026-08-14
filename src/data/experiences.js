export const experiences = [
  {
    id: "assistant-recherche-2026-04",
    position: "Assistant de recherche",
    organization: "Projet Jeune Leader",
    type: "Prestation",
    period: "Avril 2026 – Juin 2026",
    responsibilities: [
      "Réalisation d'enquêtes et collecte de données qualitatives et quantitatives auprès des jeunes en milieu scolaire (collèges) dans la région Haute Matsiatra.",
      "Contribution active aux initiatives visant à assurer une éducation de qualité et à garantir la sécurité ainsi que la santé de chacun de ces jeunes.",
    ],
    skills: [
      "Méthodes de recherche quantitatives",
      "Communication interpersonnelle",
      "Communication standardisée",
    ],
  },
  {
    id: "operateur-saisie-2026-01",
    position: "Opérateur de saisie",
    organization: "Projet Jeune Leader",
    type: "Prestation",
    period: "Janvier 2026 – Mars 2026",
    responsibilities: [
      "Prise en charge de la transcription rigoureuse de fichiers audio vers la plateforme Google Docs.",
      "Imputation des données sur papier vers Google Sheets.",
      "Assurance du respect intégral du ton, des expressions idiomatiques et de la structure grammaticale des phrases originales.",
    ],
    skills: [
      "Saisie de données en ligne",
      "Traitement de texte",
      "Google Docs",
      "Google Sheets",
      "Rigueur éditoriale",
    ],
  },
  {
    id: "assistant-recherche-2025-09",
    position: "Assistant de recherche",
    organization: "Projet Jeune Leader",
    type: "Prestation",
    period: "Septembre 2025 – Octobre 2025",
    responsibilities: [
      "Réalisation d'enquêtes et collecte de données qualitatives et quantitatives auprès des jeunes en milieu scolaire (collèges) dans la région Haute Matsiatra.",
      "Contribution active aux initiatives visant à assurer une éducation de qualité et à garantir la sécurité ainsi que la santé de chacun de ces jeunes.",
    ],
    skills: [
      "Méthodes de recherche quantitatives",
      "Communication interpersonnelle",
      "Communication standardisée",
    ],
  },
  {
    id: "operateur-saisie-2025-07",
    position: "Opérateur de saisie",
    organization: "Projet Jeune Leader",
    type: "Prestation",
    period: "Juillet 2025 – Août 2025",
    responsibilities: [
      "Exécution de la saisie textuelle et transcription minutieuse de fichiers audio sur Google Docs.",
      "Restitution fidèle de la structure, des expressions et des nuances de ton des fichiers sources.",
    ],
    skills: ["Saisie de données", "Rigueur éditoriale"],
  },
  {
    id: "assistant-recherche-2025-04",
    position: "Assistant de recherche",
    organization: "Projet Jeune Leader",
    type: "Prestation",
    period: "Avril 2025 – Juin 2025",
    responsibilities: [
      "Conduite d'enquêtes pour le recueil de données quantitatives et qualitatives ciblant les jeunes collégiens de la région Haute Matsiatra.",
      "Appui aux programmes de sensibilisation et d'évaluation portant sur la qualité de l'éducation, la sécurité, la santé psychologique, l'éducation sexuelle, le développement de relations saines et l'initiation au counseling.",
    ],
    skills: [
      "Méthodes de recherche qualitatives",
      "Méthodes de recherche quantitatives",
      "Français",
      "Communication adaptative",
      "Communication interpersonnelle",
      "Communication standardisée",
    ],
  },
  {
    id: "assistant-recherche-2024-09",
    position: "Assistant de recherche",
    organization: "Projet Jeune Leader",
    type: "Prestation",
    period: "Septembre 2024 – Novembre 2024",
    responsibilities: [
      "Déploiement de méthodes de recherche quantitatives et qualitatives pour collecter des données auprès d'un public scolaire (collèges).",
      "Évaluation des facteurs liés à la sécurité, la santé et l'accès à une éducation de qualité pour les jeunes bénéficiaires.",
    ],
    skills: [
      "Méthodes de recherche qualitatives",
      "Méthodes de recherche quantitatives",
      "Français",
      "Communication interpersonnelle",
      "Communication standardisée",
    ],
  },
  {
    id: "superviseur-socio-organisateur-2024-05",
    position: "Superviseur Socio-Organisateur",
    organization: "ONG Young Progress",
    type: "Prestation",
    period: "Mai 2024 – Juillet 2024 (3 mois)",
    responsibilities: [
      "Coordination, encadrement et organisation des tâches quotidiennes d'une équipe d'enquêteurs sur le terrain.",
      "Pilotage opérationnel des enquêtes de terrain lors d'une intervention de ciblage des ménages éligibles.",
      "Déploiement du projet Transfert Monétaire Non Conditionnel Tsimbina mené par l'association Young Progress.",
    ],
    skills: [
      "Management d'équipe terrain",
      "Supervision socio-économique",
      "Français",
    ],
  },
  {
    id: "redacteur-revu-2024-02",
    position: "Rédacteur REVU",
    organization: "Équipe REVU de l'Université de Fianarantsoa",
    type: "Freelance",
    period: "Février 2024 – Avril 2024 (2 mois)",
    responsibilities: [
      "Rédaction et publication d'un article thématique majeur intitulé \"Digitalisation et Vie Estudiantine Harmonieuse\" pour la revue universitaire.",
      "Valorisation et démonstration de l'apport des outils numériques dans le renforcement de la cohésion sociale et la facilitation du quotidien des étudiants.",
    ],
    skills: ["Communication écrite", "Google Sheets", "Rédaction de rapports"],
  },
  {
    id: "chef-chantier-2023-05",
    position: "Chef de Chantier",
    organization: "Agence d'Exécution Nasandratra",
    type: "Prestation",
    period: "Mai 2023 – Juillet 2023 (3 mois)",
    responsibilities: [
      "Gestion, encadrement et suivi des travailleurs locaux bénéficiaires des activités à Haute Intensité de Main-d'Œuvre (HIMO).",
      "Supervision des activités sur le terrain dans le cadre du projet Asa Vonjy Voina à Tuléar, suite au passage du cyclone Freddy.",
      "Liaison opérationnelle pour l'association Nasandratra, partenaire officiel de l'ONG FID (Fonds d'Intervention pour le Développement).",
    ],
    skills: [
      "Gestion de chantier",
      "Coordination de projets d'urgence",
      "Français",
    ],
  },
];

export const formatExperiencesForAI = () =>
  experiences
    .map(
      (experience, index) => `${index + 1}. Poste : ${experience.position}
Organisation : ${experience.organization}
Type : ${experience.type}
Période : ${experience.period}
Responsabilités :
${experience.responsibilities.map((responsibility) => `- ${responsibility}`).join("\n")}
Compétences associées : ${experience.skills.join(", ")}`
    )
    .join("\n\n");

export default experiences;
