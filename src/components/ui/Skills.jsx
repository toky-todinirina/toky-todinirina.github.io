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

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
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

const Skills = () => {

  return (
    <Section
      id="skills"
      title="Compétences"
      subtitle={
        <><Highlights>Technologies</Highlights> et outils que j’utilise régulièrement</>
      }
    >
      <motion.div
        className="skills"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillsDatas.map((skill, index) => {
          const Icon = skill.icon;
          const progress = skill.percentage || 0;

          return (
            <motion.div
              key={index}
              className="skill-bar"
              variants={itemVariants}
              transition={{
                delay: index * 0.12,
              }}
            >
              <div className="skill-bar__head">
                <div className="skill-bar__meta">
                  <Icon className="skill-bar__icon" />
                  <span className="skill-bar__name">{skill.name}</span>
                </div>
                <span className="skill-bar__level">{skill.level}</span>
              </div>
              <div className="skill-bar__track">
                <motion.div
                  className="skill-bar__fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
              <span className="skill-bar__percentage">{progress}%</span>
            </motion.div>
          );
        })}
      </motion.div>
    </Section >
  );
};

export default Skills;
