import { motion } from "framer-motion";
import {
  cardVariants,
  cardHover
} from "../../animations/CardVariants";

const FeaturedProject = ({ project }) => {
  return (
    <motion.article
      className="featured-project"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="featured-project__inner"
        whileHover="hover"
        variants={cardHover}
      >
        {/* IMAGE */}
        <div className="featured-project__image">
          <img src={project.image} alt={project.title} />
        </div>

        {/* CONTENT */}
        <div className="featured-project__content">
          <span className="featured-project__badge">
            Projet phare
          </span>

          <h3>{project.title}</h3>
          <p>{project.description}</p>

          <ul className="featured-project__tags">
            {project.tags.map((tag, i) => (
              <li key={i}>{tag}</li>
            ))}
          </ul>

          <div className="featured-project__actions">
            <a href={project.link} target="_blank">
              Voir le projet
            </a>
            <a href={project.github} target="_blank">
              Code source
            </a>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
};

export default FeaturedProject;
