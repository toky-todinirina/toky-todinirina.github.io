import { useState } from "react";
import { motion } from "framer-motion";
import "../../styles/base/header.scss";

const navLinks = [
  {
    name: "A propos",
    path: "about",
  },
  {
    name: "Compétences",
    path: "competences",
  },
  {
    name: "Expériences",
    path: "experience",
  },
  {
    name: "Services",
    path: "services",
  },
  {
    name: "Projets",
    path: "projects",
  },
  {
    name: "Contact",
    path: "contact",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <button
          type="button"
          className={`header__burger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        {/* Navigation desktop */}
        <nav className="header__nav">
          {navLinks.map((link) => (
            <a key={link.name} href={`#${link.path.toLowerCase()}`}>
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Menu mobile animé */}
      {isOpen && (
        <motion.nav
          id="mobile-navigation"
          className="header__nav-mobile"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.path}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </motion.nav>
      )}
    </header>
  );
}
