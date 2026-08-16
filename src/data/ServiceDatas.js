import { FaCode, FaFileAlt, FaKeyboard, FaMapMarkedAlt } from "react-icons/fa";

export const servicesData = [
  {
    id: 1,
    title: "Développement Front-End React",
    description: "Interfaces modernes et accessibles avec React, adaptées à vos besoins métier.",
    icon: FaCode,
    pricing: [
      "Landing page : 300 000 – 600 000 Ar",
      "Site vitrine : 600 000 – 1 500 000 Ar",
      "Application React : 1 000 000 – 3 000 000+ Ar",
      // "International : 15 – 25 €/h, puis 25 – 35 €/h",
    ],
  },
  {
    id: 2,
    title: "Transcription Structurée",
    description: "Conversion audio/vidéo vers texte structuré et documenté.",
    icon: FaFileAlt,
    pricing: [
      "Audio clair (1–2 intervenants) : 3 000 Ar/min",
      "Audio complexe : 5 500 – 75 000 Ar/min",
      "Urgence : +15 à +30 %",
    ],
  },
  {
    id: 3,
    title: "Collecte de Données Terrain",
    description: "Enquêtes terrain rigoureuses avec méthodologies de recherche qualifiée.",
    icon: FaMapMarkedAlt,
    pricing: [
      "À partir de 60 000 Ar/jour",
      "Tarif courant : 60 000 – 100 000 Ar/jour",
      "Mission complexe : 100 000 – 150 000 Ar/jour",
      "Hors frais de déplacement",
    ],
  },
  {
    id: 4,
    title: "Data Entry & Structuration",
    description: "Saisie, codage et organisation de données avec contrôle qualité.",
    icon: FaKeyboard,
    pricing: [
      "Saisie simple : 15 000 Ar/h",
      "Avec vérification : 25 000 Ar/h",
      "Nettoyage / structuration : 35 000 Ar/h et +",
    ],
  },
];
