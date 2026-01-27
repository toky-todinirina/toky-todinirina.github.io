import "../../styles/base/footer.scss";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { cardVariants } from "../../animation/CardVariants";

import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiUser,
  FiLayers,
  FiFolder,
  FiArrowUp,
} from "react-icons/fi";
const Footer = () => {
  return (
    <LazyMotion features={domAnimation}>
      <m.footer
        className="footer"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="footer__container">

          {/* BRAND */}
          <div className="footer__brand">
            <p>Développeur Front-End React</p>
          </div>

          {/* NAVIGATION ICONES */}
          <div className="footer__nav-icons">
            <a href="#about" aria-label="À propos" title="À propos">
              <FiUser />
            </a>
            <a href="#skills" aria-label="Compétences" title="Compétences">
              <FiLayers />
            </a>
            <a href="#projects" aria-label="Projets" title="Projets">
              <FiFolder />
            </a>
            <a href="#contact" aria-label="Contact" title="Contact">
              <FiMail />
            </a>
          </div>

          {/* SOCIAL */}
          <div className="footer__social">
            <a href="#" aria-label="Github"><FiGithub /></a>
            <a href="#" aria-label="LinkedIn"><FiLinkedin /></a>
          </div>

        </div>

        {/* SCROLL TOP */}
        <button
          className="footer__scrolltop"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Retour en haut"
        >
          <FiArrowUp />
        </button>

        {/* COPYRIGHT */}
        <div className="footer__bottom">
          <span>©{new Date().getFullYear()} Toky Todinirina.Tous droits réservés</span>
        </div>
      </m.footer>
    </LazyMotion>
  );
};

export default Footer;
