import Section from "../common/Section";
import { motion } from "framer-motion";
import "../../styles/components/project.scss";
import { projects } from "../../data/ProjectDatas.js";
import Highlights from "../common/Hightlights"
import {
  cardVariants,
  containerVariants
} from "../../animation/CardVariants";

const Projects = () => {
  return (
    <Section
      id="projects"
      title="Mes Projets Tech"
      subtitle={
        <>
          Une sélection de projets mettant en avant mon
          <Highlights>savoir-faire</Highlights> technique
        </>
      }
    >
      <motion.div
        className="projects__grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project__card"
            variants={cardVariants}
          >
            <motion.div
              className="project__inner"
              variants={cardVariants}
              initial="hidden"
              whileHover="hover"
              animate="visible"
              transition={{
                delay: (project.id - 1) * 0.3,
              }}
            >
              <div className="project__badge">
                <span className="project__category">{project.category}</span>
                <span className="project__date">{project.date}</span>
              </div>

              <div className="project__image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project__content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <ul className="project__tags">
                  {project.tags.map((tag, i) => (
                    <li key={i}>{tag}</li>
                  ))}
                </ul>

                <div className="project__actions">
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      className="project__link"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Voir le code"
                    >
                      GitHub
                    </a>
                  )}
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      className="project__link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voir le projet
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Projects;

