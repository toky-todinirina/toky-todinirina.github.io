import { useState } from "react";
import { motion } from "framer-motion";
import Section from "../common/Section";
import "../../styles/components/project.scss";
import { projects } from "../../data/ProjectDatas.js";
import { graphicWorks } from "../../data/GraphicDatas.js";
import Highlights from "../common/Hightlights";
import {
  cardVariants,
  containerVariants
} from "../../animation/CardVariants";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const portfolioItems = [
    ...projects.map((project) => ({ ...project, type: "web" })),
    ...graphicWorks.map((work) => ({ ...work, type: "graphic" })),
  ];
  const visibleItems = portfolioItems.filter(
    (item) => filter === "all" || item.type === filter
  );

  return (
    <Section
      id="projects"
      title="Mon Portfolio"
      subtitle={
        <>
          Une sélection de projets web et de créations graphiques qui mettent
          en avant mon <Highlights>savoir-faire</Highlights>.
        </>
      }
    >
      <div className="portfolio__filters" role="group" aria-label="Filtrer le portfolio">
        {[
          ["all", "Tout"],
          ["web", "Web"],
          ["graphic", "Graphic design"],
        ].map(([value, label]) => (
          <button
            key={value}
            type="button"
            className={`portfolio__filter${filter === value ? " is-active" : ""}`}
            onClick={() => setFilter(value)}
            aria-pressed={filter === value}
          >
            {label}
          </button>
        ))}
      </div>

      <motion.div
        className="projects__grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {visibleItems.map((project) => (
          <motion.div
            key={`${project.type}-${project.id}`}
            className={`project__card project__card--${project.type}`}
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
                <span className="project__category">
                  {project.type === "graphic" ? "Graphic design" : "Web"}
                </span>
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

                {project.type === "web" && (
                  <div className="project__actions">
                    {project.github && project.github !== "#" && (
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
                    {project.link && project.link !== "#" && (
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
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Projects;

