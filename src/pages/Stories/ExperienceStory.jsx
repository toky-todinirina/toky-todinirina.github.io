import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiCalendar,
  FiMapPin,
  FiBriefcase,
  FiCheckCircle,
} from "react-icons/fi";
import { Link, useParams } from "react-router-dom";

import { experiences } from "../../data/experiences";
import "../../styles/pages/experienceStory.scss";
import NotFound from "../NotFound";

const ExperienceStory = () => {
  const { id } = useParams();

  const experienceIndex = experiences.findIndex(
    (experience) => experience.id === id
  );

  const experience = experiences[experienceIndex];

  if (!experience) {
    return (
      <main className="experience-story experience-story--not-found">
        <div className="experience-story__not-found">
          <NotFound />
          <Link to="/#experience">
            <FiArrowLeft aria-hidden="true" />
            Retour aux expériences
          </Link>
        </div>
      </main>
    );
  }

  /*
   * Récupération du contenu Story associé
   * directement depuis experiences.js
   */
  const story = experience.story;

  /*
   * Sécurité :
   * si une expérience n'a pas encore de story,
   * on affiche un message plutôt que de provoquer
   * une erreur JavaScript.
   */
  if (!story) {
    return (
      <main className="experience-story">
        <div className="experience-story__container">
          <Link
            className="experience-story__back"
            to="/#experience"
          >
            <FiArrowLeft aria-hidden="true" />
            Retour aux expériences
          </Link>

          <div className="experience-story__not-found">
            <h1>Story bientôt disponible</h1>

            <p>
              Le storytelling de cette expérience n'a pas
              encore été ajouté.
            </p>
          </div>
        </div>
      </main>
    );
  }

  const previousExperience =
    experiences[experienceIndex + 1];

  const nextExperience =
    experiences[experienceIndex - 1];

  return (
    <main className="experience-story">
      <div className="experience-story__container">
        <Link
          className="experience-story__back"
          to="/#experience"
        >
          <FiArrowLeft aria-hidden="true" />
          Retour aux expériences
        </Link>
        <motion.header
          className="experience-story__hero"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="experience-story__eyebrow">
            EXPERIENCE STORY
          </span>

          <h1>{experience.position}</h1>

          <p className="experience-story__organization">
            {experience.organization}
          </p>

          <div className="experience-story__meta">
            <span>
              <FiCalendar aria-hidden="true" />
              {experience.period}
            </span>

            <span>
              <FiMapPin aria-hidden="true" />
              {story.location ||
                experience.location ||
                "Madagascar"}
            </span>

            <span>
              <FiBriefcase aria-hidden="true" />
              {experience.type}
            </span>
          </div>
        </motion.header>

 {/* Tagline de l'expérience */}
        {story.tagline && (
          <motion.div
            className="experience-story__intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
          >
            <p>{story.tagline}</p>
          </motion.div>
        )}

        {/* CONTENU STORY */}

        <div className="experience-story__content">

          {story.introduction && (
            <motion.section
              className="experience-story__section"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{ duration: 0.5 }}
            >
              <span className="experience-story__number">
                01
              </span>

              <div>
                <h2>Introduction</h2>

                <p>{story.introduction}</p>
              </div>
            </motion.section>
          )}

          {story.context && (
            <motion.section
              className="experience-story__section"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{ duration: 0.5 }}
            >
              <span className="experience-story__number">
                02
              </span>

              <div>
                <h2>Le contexte</h2>

                <p>{story.context}</p>
              </div>
            </motion.section>
          )}


          {story.challenge && (
            <motion.section
              className="experience-story__section"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{ duration: 0.5 }}
            >
              <span className="experience-story__number">
                03
              </span>

              <div>
                <h2>Le défi</h2>

                <p>{story.challenge}</p>
              </div>
            </motion.section>
          )}
          {story.approach && (
            <motion.section
              className="experience-story__section"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{ duration: 0.5 }}
            >
              <span className="experience-story__number">
                04
              </span>

              <div>
                <h2>Mon approche</h2>

                <p>{story.approach}</p>
              </div>
            </motion.section>
          )}

          {story.responsibilities?.length > 0 && (
            <motion.section
              className="experience-story__section"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{ duration: 0.5 }}
            >
              <span className="experience-story__number">
                05
              </span>

              <div>
                <h2>La mission</h2>

                <p>
                  Les principales responsabilités de cette
                  mission étaient les suivantes :
                </p>

                <ul>
                  {story.responsibilities.map(
                    (responsibility) => (
                      <li key={responsibility}>
                        <FiCheckCircle
                          aria-hidden="true"
                        />

                        <span>{responsibility}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </motion.section>
          )}
          {story.skillsDeveloped?.length > 0 && (
            <motion.section
              className="experience-story__section"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{ duration: 0.5 }}
            >
              <span className="experience-story__number">
                06
              </span>

              <div>
                <h2>Compétences développées</h2>

                <div className="experience-story__skills">
                  {story.skillsDeveloped.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </motion.section>
          )}


          {story.learning && (
            <motion.section
              className="experience-story__section"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{ duration: 0.5 }}
            >
              <span className="experience-story__number">
                07
              </span>

              <div>
                <h2>Ce que j'ai appris</h2>

                <p>{story.learning}</p>
              </div>
            </motion.section>
          )}

          {story.impact && (
            <motion.section
              className="experience-story__section"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{ duration: 0.5 }}
            >
              <span className="experience-story__number">
                08
              </span>

              <div>
                <h2>Impact</h2>

                <p>{story.impact}</p>
              </div>
            </motion.section>
          )}

          {story.conclusion && (
            <motion.section
              className="experience-story__section experience-story__section--conclusion"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{ duration: 0.5 }}
            >
              <span className="experience-story__number">
                09
              </span>

              <div>
                <h2>Conclusion</h2>

                <p>{story.conclusion}</p>
              </div>
            </motion.section>
          )}

          {story.highlights?.length > 0 && (
            <motion.section
              className="experience-story__section experience-story__section--highlights"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{ duration: 0.5 }}
            >
              <span className="experience-story__number">
                10
              </span>

              <div>
                <h2>Points clés</h2>

                <div className="experience-story__skills">
                  {story.highlights.map((highlight) => (
                    <span key={highlight}>
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

        </div>

        <nav
          className="experience-story__navigation"
          aria-label="Navigation entre les expériences"
        >
          {previousExperience ? (
            <Link
              to={`/experiences/${previousExperience.id}`}
              className="experience-story__nav experience-story__nav--previous"
            >
              <span>
                Expérience suivante dans le temps
              </span>

              <strong>
                {previousExperience.position}
              </strong>

              <small>
                {previousExperience.organization}
              </small>
            </Link>
          ) : (
            <span />
          )}

          {nextExperience ? (
            <Link
              to={`/experiences/${nextExperience.id}`}
              className="experience-story__nav experience-story__nav--next"
            >
              <span>Expérience précédente</span>

              <strong>
                {nextExperience.position}
              </strong>

              <small>
                {nextExperience.organization}
              </small>
            </Link>
          ) : (
            <span />
          )}
        </nav>

      </div>
    </main>
  );
};

export default ExperienceStory;