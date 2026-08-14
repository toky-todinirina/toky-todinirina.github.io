import { FaCode, FaFileAlt, FaKeyboard, FaMapMarkedAlt } from "react-icons/fa";

export const servicesData = [
  {
    id: 1,
    title: "Développement Front-End",
    description: "Création d'interfaces web modernes, performantes et accessibles.",
    icon: FaCode,
    pricing: [
      "À partir de 300 000 Ar",
      "Landing page : 300 000 – 600 000 Ar",
      "Site vitrine : 600 000 – 1 500 000 Ar",
      "Application React : 1 000 000 – 3 000 000+ Ar",
      "International : 15 – 25 €/h, puis 25 – 35 €/h",
    ],
  },
  {
    id: 2,
    title: "Transcription",
    description: "Transcription précise de contenus audio et vidéo en texte structuré.",
    icon: FaFileAlt,
    pricing: [
      "Audio clair (1–2 intervenants) : 5 000 Ar/min",
      "Audio complexe : 7 500 – 10 000 Ar/min",
      "Urgence : +25 à +50 %",
    ],
  },
  {
    id: 3,
    title: "Collecte de données sur terrain",
    description: "Collecte rigoureuse d'informations sur le terrain, selon vos besoins.",
    icon: FaMapMarkedAlt,
    pricing: [
      "À partir de 100 000 Ar/jour",
      "Tarif courant : 100 000 – 200 000 Ar/jour",
      "Mission complexe : 150 000 – 250 000 Ar/jour",
      "Hors frais de déplacement",
    ],
  },
  {
    id: 4,
    title: "Data Entry",
    description: "Saisie, vérification et organisation de vos données avec précision.",
    icon: FaKeyboard,
    pricing: [
      "Saisie simple : 30 000 Ar/h",
      "Avec vérification : 40 000 Ar/h",
      "Nettoyage / structuration : 50 000 Ar/h et +",
    ],
  },
];
