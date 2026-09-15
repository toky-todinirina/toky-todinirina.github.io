import { motion } from "framer-motion";
import Section from "../common/Section";
import Highlights from "../common/Hightlights";
import {
  cardVariants,
  containerVariants,
} from "../../animation/CardVariants";
import "../../styles/components/graphicPortfolio.scss";

import brushImage from "../../assets/images/brush.png";
import photoImage from "../../assets/images/photo.png";
import avatarImage from "../../assets/images/avatar.png";

const graphicWorks = [
  {
    id: 1,
    title: "Identité visuelle",
    category: "Branding",
    date: "2025",
    image: brushImage,
    description:
      "Création d’une identité visuelle cohérente, pensée pour renforcer la présence de marque sur les réseaux et supports digitaux.",
    tags: ["Branding", "Illustration", "Packaging"],
  },
  {
    id: 2,
    title: "Direction artistique",
    category: "Social Media",
    date: "2025",
    image: photoImage,
    description:
      "Campagnes visuelles modernes pour des contenus sociaux, avec un design fort et des compositions orientées conversion.",
    tags: ["Design social", "Photo", "Visual Storytelling"],
  },
  {
    id: 3,
    title: "Portrait / mise en scène",
    category: "Photographie",
    date: "2024",
    image: avatarImage,
    description:
      "Mise en scène visuelle et retouches orientées portrait, avec une esthétique propre au storytelling personnel.",
    tags: ["Portrait", "Retouche", "Moodboard"],
  },
];

const GraphicPortfolio = () => {
  return (
    <Section
      id="graphic-portfolio"
      title="Portfolio Graphisme"
      subtitle={
        <>
          Des créations visuelles qui allient
          <Highlights>identité</Highlights>, émotion et communication claire
        </>
      }
    >
      <motion.div
        className="graphic__grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {graphicWorks.map((item) => (
          <motion.article
            key={item.id}
            className="graphic__card"
            variants={cardVariants}
          >
            <div className="graphic__badge">
              <span className="graphic__category">{item.category}</span>
              <span className="graphic__date">{item.date}</span>
            </div>

            <div className="graphic__image">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="graphic__content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <ul className="graphic__tags">
                {item.tags.map((tag, index) => (
                  <li key={`${item.id}-${index}`}>{tag}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
};

export default GraphicPortfolio;
