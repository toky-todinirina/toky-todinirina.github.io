// Animation commune pour TOUTES les cards
export const cardVariants = {
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

// Variante pour les conteneurs (grid, flex, etc.)
export const containerVariants = {
hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

// Effet hover standardisé
export const cardHover = {
  hover: {
    y: -6,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};
