import { FaCode, FaFileAlt, FaKeyboard, FaMapMarkedAlt } from "react-icons/fa";

export const servicesData = [
  
  {
    id: 1,
    title: "Collecte de Données Terrain",
    description: "Enquêtes terrain rigoureuses avec méthodologies de recherche qualifiée.",
    icon: FaMapMarkedAlt,
    pricing: [
      "Collecte de données",
      "Snalyse de données",
      "Traitement de données",
    ],
  },
  {
    id: 2,
    title: "Data Entry & Structuration",
    description: "Saisie, codage et organisation de données avec contrôle qualité.",
    icon: FaKeyboard,
    pricing: [
      "Codage de données",
      "Saisie de données",
      "Vérification de text",
    ],
  },

    {
    id: 3,
    title: "Développement Front-End React",
    description: "Interfaces modernes et accessibles avec React, adaptées à vos besoins métier.",
    icon: FaCode,
    pricing: [
      "Landing page",
      "Site vitrine",
      "Application React",
      
    ],
  },
  {
    id: 4,
    title: "Transcription Structurée",
    description: "Conversion audio/vidéo vers texte structuré et documenté.",
    icon: FaFileAlt,
    pricing: [
      "Audio clair (1–2 intervenants)",
      "Audio complexe",
      "Focus Group",
    ],
  },
];
