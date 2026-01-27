import "../../styles/components/section.scss";
import { motion } from "framer-motion";
export default function Section({
  id,
  title,
  subtitle,
  children,
  align = 'center'

}) {
  return (
    <motion.section
      id={id}
      className={`section section--${align}`}
      initial={{ opacity: 0, y: 40, scale:0.96 }}
      whileInView={{ opacity: 1, y: 0, scale:1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}>
      <header className="section__header">
        <motion.h2 className="section__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >{title}</motion.h2>
        {subtitle && (
          <p className="section__subtitle">{subtitle}</p>
        )}
      </header>
      <div className="section__content">
        {children}
      </div>
    </motion.section>
  );
}

