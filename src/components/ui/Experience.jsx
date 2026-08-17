import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiCalendar,
  FiExternalLink,
  FiMail,
  FiMapPin,
  FiPhone,
  FiBookOpen,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import Section from "../common/Section";
import { experiences } from "../../data/experiences";
import "../../styles/components/experience.scss";

const getReferenceLink = (reference) => {
  if (reference.email) {
    return {
      href: `mailto:${reference.email}`,
      label: "Contacter une référence",
      icon: FiMail,
    };
  }

  if (reference.phone) {
    return {
      href: `tel:${reference.phone}`,
      label: "Contacter une référence",
      icon: FiPhone,
    };
  }

  return null;
};

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
          transition={{
            duration: 0.45,
            delay: Math.min(index * 0.04, 0.2),
          }}
        >
          {(() => {
            const referenceLink = getReferenceLink(
              experience.reference
            );

            const ReferenceIcon =
              referenceLink?.icon || FiMail;

            return (
              <>
                <span
                  className="experience-card__marker"
                  aria-hidden="true"
                />

                <header className="experience-card__header">
                  <div>
                    <h3>{experience.position}</h3>

                    <p className="experience-card__organization">
                      <FiMapPin aria-hidden="true" />

                      {experience.organizationUrl ? (
                        <a
                          href={experience.organizationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {experience.organization}

                          <FiExternalLink
                            aria-hidden="true"
                          />
                        </a>
                      ) : (
                        experience.organization
                      )}
                    </p>
                  </div>

                  <span className="experience-card__type">
                    {experience.type}
                  </span>
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
                    {experience.responsibilities.map(
                      (responsibility) => (
                        <li key={responsibility}>
                          {responsibility}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <ul
                  className="experience-card__skills"
                  aria-label="Compétences associées"
                >
                  {experience.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>

                <div className="experience-card__actions">
                  {referenceLink ? (
                    <a
                      className="experience-card__reference"
                      href={referenceLink.href}
                    >
                      <ReferenceIcon aria-hidden="true" />
                      {referenceLink.label}
                    </a>
                  ) : (
                    <button
                      className="experience-card__reference"
                      type="button"
                      disabled
                      title="Coordonnées de référence à renseigner"
                    >
                      <ReferenceIcon aria-hidden="true" />
                      Référence à venir
                    </button>
                  )}
                                    <Link
                    className="experience-card__story"
                    to={`/experiences/${experience.id}`}
                  >
                    <FiBookOpen aria-hidden="true" />
                    <span>Story</span>
                  </Link>

                </div>
              </>
            );
          })()}
        </motion.article>
      ))}
    </div>
  </Section>
);

export default Experience;