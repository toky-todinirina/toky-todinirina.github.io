import Project from "../assets/images/avatar.png";
import Portfolio from "../assets/images/portfolio.png";
import Portfolio2 from "../assets/images/dashboard.png"
export const projects = [
  {
    id: 1,
    title: "Portfolio React",
    description: "Portfolio personnel moderne avec animations et design responsive.",
    image: Portfolio,
    tags: ["React", "SCSS", "Framer Motion"],
    link: "https://toky-todinirina.vercel.app",
    date: "2026",
    category: "Personnel",
    github: "https://github.com/toky-todinirina/toky-todinirina.github.io"
  },
  {
    id: 2,
    title: "E-commerce App",
    description: "Application e-commerce avec panier, filtres et UX optimisée.",
    image: Project,
    tags: ["React", "API", "Stripe"],
    link: "https://toky-todinirina.vercel.app",
    date: "2025",
    category: "Professionnel",
    github: "https://github.com/toky-todinirina/toky-todinirina.github.io"
  },
  {
    id: 3,
    title: "Dashboard Admin",
    description: "Dashboard analytique avec graphiques et gestion utilisateurs.",
    image: Portfolio2,
    tags: ["React", "Charts", "Admin"],
    link: "https://e-dashboard-qvdp.vercel.app",
    date: "2026",
    category: "Personnel",
    github: "https://github.com/toky-todinirina/e-dashboard"
  }
];