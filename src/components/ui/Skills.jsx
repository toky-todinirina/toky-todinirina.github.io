import { motion } from "framer-motion";
import Section from "../common/Section";
import "../../styles/components/skills.scss";
import { skillsDatas } from "../../data/SkillsDatas";
import Highlights from "../common/Hightlights";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const categoryVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const categories = [
  {
    id: "code",
    title: "CODE",
    description: "Développement web & technologies",
  },
  {
    id: "environnement",
    title: "ENVIRONMENT",
    description: "Environnement de Développement",
  },
  {
    id: "design",
    title: "DESIGN",
    description: "Création visuelle & interfaces",
  },
  {
    id: "data",
    title: "DATA",
    description: "Collecte, traitement & qualité des données",
  },
];

const Skills = () => {
  return (
    <Section
      id="competences"
      title="Compétences"
      subtitle={
        <>
          <Highlights>Technologies</Highlights>, outils et savoir-faire
          que j’utilise régulièrement
        </>
      }
    >
      <motion.div
        className="skills"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {categories.map((category) => {
          const categorySkills = skillsDatas.filter(
            (skill) => skill.category === category.id
          );

          if (categorySkills.length === 0) {
            return null;
          }

          return (
            <motion.section
              key={category.id}
              className={`skills__category skills__category--${category.id}`}
              variants={categoryVariants}
            >
              <div className="skills__category-header">
                <div>
                  <span className="skills__category-label">
                    {category.title}
                  </span>

                  <h3>{category.description}</h3>
                </div>
              </div>

              <motion.div
                className="skills__list"
                variants={containerVariants}
              >
                {categorySkills.map((skill, index) => {
                  const Icon = skill.icon;
                  const progress = skill.percentage || 0;

                  return (
                    <motion.div
                      key={`${category.id}-${skill.name}`}
                      className="skill-bar"
                      variants={itemVariants}
                      transition={{
                        delay: index * 0.08,
                      }}
                    >
                      <div className="skill-bar__head">
                        <div className="skill-bar__meta">
                          {Icon && (
                            <Icon
                              className="skill-bar__icon"
                              aria-hidden="true"
                            />
                          )}

                          <span className="skill-bar__name">
                            {skill.name}
                          </span>
                        </div>

                        <span className="skill-bar__level">
                          {skill.level}
                        </span>
                      </div>

                      <div className="skill-bar__track">
                        <motion.div
                          className="skill-bar__fill"
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${progress}%`,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.8,
                            delay: index * 0.08,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.section>
          );
        })}
      </motion.div>
    </Section>
  );
};

export default Skills;