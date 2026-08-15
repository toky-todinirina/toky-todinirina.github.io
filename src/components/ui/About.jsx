import { motion } from "framer-motion";
import Section from "../common/Section";
import "../../styles/components/about.scss";
import Avatar from "../../assets/images/photo.png";
import Highlights from "../common/Hightlights";

const aboutCards = [
  { number: "Front-End", label: "Développement d'interfaces React & Vite" },
  { number: "UX", label: "Expérience utilisateur & accessibilité" },
  { number: "Data", label: "Saisie, transcription et organisation de données" },
];

const About = () => (
  <Section
    id="about"
    title="Qui suis-je ?"
    subtitle="Développeur Front-End • Spécialiste Data & Communication"
    align="left"
  >
    <div className="about">
      <motion.div
        className="about__avatar"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img src={Avatar} alt="Photo de profil de Toky Todinirina" />
      </motion.div>

      <motion.div
        className="about__content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="about__text">
          <p>
            Je suis <Highlights>développeur Front-End</Highlights> React créant des interfaces modernes et accessibles.
            Ma différenciation ? Une expertise unique combinant <Highlights>data</Highlights>, communication et terrain.
          </p>

          <p>
            <Highlights>Collecte, transcription et organisation de données</Highlights> – expertise acquise en mission auprès de
            projets de recherche, complétant ma palette Front-End.
          </p>

          <p>
            Avec React, Vite et SCSS, je conçois des solutions maintenables et évolutives,
            véritablement adaptées à vos <Highlights>utilisateurs et enjeux métier</Highlights>.
          </p>
        </div>

        <div className="about__stats">
          {aboutCards.map((card, index) => (
            <motion.div
              className="stat"
              key={card.label}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <span className="stat__number">{card.number}</span>
              <span className="stat__label">{card.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </Section>
);

export default About;
