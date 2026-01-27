import { useState } from "react";
import { motion } from "framer-motion";
import "../../styles/base/header.scss";

const navLinks = ["About", "Skills", "Services","Projects", "Contact"];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <a href="#about" className="brand">Toky</a>
        </div>
        <nav className="header__nav">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}>
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div
          className={`header__burger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      {/* Mobile menu overlay */}
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
