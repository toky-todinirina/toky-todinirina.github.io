import { motion } from "framer-motion";
import Section from "../common/Section";
import "../../styles/components/about.scss";
import Avatar from "../../assets/images/ME.png";
import Highlights from "../common/Hightlights";

const About = () => {

  const aboutCards = [
    { number: "4+", label: "Années d’apprentissage" },
    { number: "10+", label: "Projets réalisés" },
    { number: "100%", label: "Motivation" },
  ];

  return (
    <Section
      id="about"
      title="À propos de moi"
      subtitle="Développeur Front-End passionné par les interfaces modernes"
      align="left"
    >
      <div className="about">
        {/* Avatar */}
        <motion.div
          className="about__avatar"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img src={Avatar} alt="Photo de profil" />
        </motion.div>

        {/* Contenu */}
        <motion.div
          className="about__content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="about__text">
            <p>
              Je suis <Highlights>Développeur front-end </Highlights>
              avec un fort intérêt pour la création d’interfaces modernes,
              performantes et accessibles.
            </p>

            <p>
              J’aime transformer des idées complexes en expériences utilisateur
              claires et élégantes, en utilisant <strong>Vite</strong>,
              <strong> SCSS</strong> et <Highlights> React</Highlights>.
            </p>

            <p>
              Mon objectif est de concevoir des applications web maintenables,
              évolutives et orientées utilisateur.
            </p>
          </div>

          <div className="about__stats">
 {aboutCards.map((card, index) => (
        <motion.div
          className="stat"
          key={index}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: index * 0.3, // chaque card a sa propre delay
          }}
        >
          <span className="stat__number">{card.number}</span>
          <span className="stat__label">{card.label}</span>
        </motion.div>
      ))}
      </div>
    </motion.div>
      </div >
    </Section >
  );
};

export default About;
