import { useState } from "react";
import { motion } from "framer-motion";
import "../../styles/base/header.scss";

const navLinks = [
  {
    name: "A propos",
    path: "about",
  },
  {
    name: "Connaissances",
    path: "skills",
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
        {/* Remplacement du logo par le bouton hamburger */}
        <div
          className={`header__burger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span />
          <span />
          <span />
        </div>

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
          className="header__nav-mobile"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
        </motion.nav>
      )}
    </header>
  );
}
