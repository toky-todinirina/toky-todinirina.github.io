import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";
import Section from "../common/Section";
import { experiences } from "../../data/experiences";
import "../../styles/components/experience.scss";

const Experience = () => (
  <Section
    id="experience"
    title="Expériences"
    subtitle="Un parcours de terrain entre recherche, supervision et gestion de données"
  >
    <div className="experience-timeline">
      {experiences.map((experience, index) => (
        <motion.article
          className="experience-card"
          key={experience.id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.2) }}
        >
          <span className="experience-card__marker" aria-hidden="true" />

          <header className="experience-card__header">
            <div>
              <h3>{experience.position}</h3>
              <p className="experience-card__organization">
                <FiMapPin aria-hidden="true" />
                {experience.organization}
              </p>
            </div>

            <span className="experience-card__type">{experience.type}</span>
          </header>

          <p className="experience-card__period">
            <FiCalendar aria-hidden="true" />
            {experience.period}
          </p>

          <div className="experience-card__body">
            <h4>
              <FiBriefcase aria-hidden="true" />
              Responsabilités
            </h4>
            <ul>
              {experience.responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
          </div>

          <ul className="experience-card__skills" aria-label="Compétences associées">
            {experience.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  </Section>
);

export default Experience;
