import { motion } from "framer-motion";
import Section from "../common/Section";
import "../../styles/components/about.scss";
import Avatar from "../../assets/images/photo.png";
import Highlights from "../common/Hightlights";

const aboutCards = [
  { number: "4+", label: "Années d’apprentissage" },
  { number: "10+", label: "Projets réalisés" },
  { number: "100%", label: "Motivation" },
];

const About = () => (
  <Section
    id="about"
    title="À propos de moi"
    subtitle="Développeur Front-End et assistant de recherche"
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
            Je suis <Highlights>développeur Front-End</Highlights> et assistant de
            recherche, passionné par la création d’interfaces modernes,
            performantes et accessibles.
          </p>

          <p>
            J’accompagne aussi vos projets de <Highlights>transcription</Highlights>,
            de collecte de données sur terrain et de <Highlights>Data Entry</Highlights>,
            avec une attention particulière à la précision et à l’organisation des données.
          </p>

          <p>
            Avec React, Vite et SCSS, mon objectif est de livrer des solutions web
            maintenables, évolutives et pensées pour les utilisateurs.
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
