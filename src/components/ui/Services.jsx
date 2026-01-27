import Section from "../common/Section";
import { servicesData } from "../../data/ServiceDatas";
import "../../styles/components/services.scss";
import { motion } from "framer-motion";
import Highlights from "../common/Hightlights";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <Section
      id="services"
      title="Services"
      subtitle={
        <>Ce que je peux réaliser pour <Highlights>vos projets</Highlights></>
      }
      align="center"
    >
      <div className="services__list">
        {servicesData.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              className="services__item"
              key={service.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Icon className="services__icon" />
              <h3 className="services__name">{service.title}</h3>
              <p className="services__desc">{service.description}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default Services;
