import { motion } from "framer-motion";
import "../../styles/components/preloader.scss";

const Preloader = ({ onComplete }) => {
  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        duration: 0.5,
        delay: 1.7,
        ease: "easeInOut",
      }}
      onAnimationComplete={onComplete}
    >
      <div className="preloader__content">
        <div className="cube">
          <div className="cube__face cube__face--front">
            {"</>"}
          </div>

          <div className="cube__face cube__face--back">
            {"</>"}
          </div>

          <div className="cube__face cube__face--right">
            {"{}"}
          </div>

          <div className="cube__face cube__face--left">
            {"[]"}
          </div>

          <div className="cube__face cube__face--top">
            {"_"}
          </div>

          <div className="cube__face cube__face--bottom">
            {"_"}
          </div>
        </div>

        <div className="preloader__identity">
          <span className="preloader__initials">
            BONJOUR
          </span>

          <span className="preloader__name">
            Bienvenue dans l'univers numérique de Toky Todinirina.
          </span>

        </div>

        <div className="preloader__progress">
          <span />
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;