import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaPaintBrush,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaTable,
  FaFileAlt,
  FaSearch,
  FaDatabase,
} from "react-icons/fa";

import {
  SiSass,
  SiJavascript,
  SiCanva,
  SiVite,
  SiGooglesheets,
  SiGoogledocs,
} from "react-icons/si";

export const skillsDatas = [
  // =========================================================
  // CODE
  // =========================================================

  {
    name: "React",
    icon: FaReact,
    level: "Expert",
    percentage: 88,
    category: "code",
  },

  {
    name: "JavaScript",
    icon: SiJavascript,
    level: "Avancé",
    percentage: 85,
    category: "code",
  },

  {
    name: "HTML5",
    icon: FaHtml5,
    level: "Expert",
    percentage: 90,
    category: "code",
  },
  {
    name: "SCSS",
    icon: SiSass,
    level: "Expert",
    percentage: 90,
    category: "code",
  },

  {
    name: "Vite",
    icon: SiVite,
    level: "Avancé",
    percentage: 82,
    category: "environnement",
  },

  {
    name: "Node.js",
    icon: FaNodeJs,
    level: "Intermédiaire",
    percentage: 72,
    category: "environnement",
  },

  {
    name: "Git",
    icon: FaGitAlt,
    level: "Avancé",
    percentage: 85,
    category: "environnement",
  },

  {
    name: "GitHub",
    icon: FaGithub,
    level: "Avancé",
    percentage: 85,
    category: "environnement",
  },

  {
    name: "Figma",
    icon: FaFigma,
    level: "Intermédiaire",
    percentage: 68,
    category: "design",
  },

  {
    name: "Adobe Illustrator",
    icon: FaPaintBrush,
    level: "Expert",
    percentage: 95,
    category: "design",
  },

  {
    name: "Adobe Express",
    icon: FaPaintBrush,
    level: "Intermédiaire",
    percentage: 65,
    category: "design",
  },

  {
    name: "Canva",
    icon: SiCanva,
    level: "Intermédiaire",
    percentage: 72,
    category: "design",
  },
  {
    name: "REDCap",
    icon: FaDatabase,
    level: "Avancé",
    percentage: 88,
    category: "data",
  },
  {
    name: "oTranscribe",
    icon: FaFileAlt,
    level: "Avancé",
    percentage: 85,
    category: "data",
  },
  {
    name: "Google Sheets",
    icon: SiGooglesheets,
    level: "Avancé",
    percentage: 90,
    category: "data",
  },

  {
    name: "Google Docs",
    icon: SiGoogledocs,
    level: "Avancé",
    percentage: 85,
    category: "data",
  },
];

export default skillsDatas;
