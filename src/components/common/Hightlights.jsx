import { motion } from "framer-motion";
import "../../styles/components/highlight.scss";

const Highlights = ({ children }) => {
  return (
    <motion.span
      className="highlight"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.span>
  );
};

export default Highlights;
