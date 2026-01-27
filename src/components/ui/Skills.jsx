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
          return(
          <motion.div
            key={index}
            className="skill-card"
            variants={itemVariants}
            transition={{
              delay: index * 0.3
            }}
          >
            <div className="skill-card__icon">
              <Icon className="skill__icon"/>
            </div>
            <span className="skill-card__name">{skill.name}</span>
            <span className="skill-card__level">{skill.level}</span>
          </motion.div>
          );
        })}
      </motion.div>
    </Section >
  );
};

export default Skills;
