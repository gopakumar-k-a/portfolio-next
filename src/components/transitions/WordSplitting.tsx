import { motion } from 'framer-motion';

const WordSplittingAnimation = () => {
  const text = "Framer Motion Animations Are Awesome!";
  const words = text.split(" "); 


  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each word
        delayChildren: 0.1 * i, // Overall delay for the animation
      },
    }),
  };

  const wordAnimation = {
    hidden: { opacity: 0, y: 50 }, // Words start off hidden and below
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Animate to visible
  };

  return (
    <motion.div
      className="word-split-container"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="word"
          variants={wordAnimation}
          style={{ display: "inline-block", marginRight: "8px" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default WordSplittingAnimation;
