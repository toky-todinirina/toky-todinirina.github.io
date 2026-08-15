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
      title="Ce que je fais"
      subtitle={
        <>Mes services : développement <Highlights>Front-End</Highlights> et solutions <Highlights>données</Highlights> complètes</>
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
              <div className="services__pricing">
                <h4>Tarifs indicatifs</h4>
                <ul>
                  {service.pricing.map((rate) => (
                    <li key={rate}>{rate}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
      <p className="services__notice">
        Chaque mission fait l'objet d'un devis adapté à son périmètre et à ses contraintes.
      </p>
    </Section>
  );
};

export default Services;
