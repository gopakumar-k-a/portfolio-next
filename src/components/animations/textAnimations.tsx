export const textVariants = {
  textFadeIn: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  },
  textSlideIn: {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  },
  textZoomIn: {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
  },
  textZoomOut: {
    hidden: { scale: 1.5, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
  },
  textRotateIn: {
    hidden: { rotate: -90, opacity: 0 },
    visible: { rotate: 0, opacity: 1, transition: { duration: 1 } },
  },
  textBounce: {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: [0, -10, 0],
      opacity: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 300,
      },
    },
  },
  textShake: {
    hidden: { x: 0, opacity: 0 },
    visible: {
      x: [0, -5, 5, -5, 5, 0],
      opacity: 1,
      transition: { duration: 0.6 },
    },
  },
  textStagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 1,
      },
    },
  },
};
