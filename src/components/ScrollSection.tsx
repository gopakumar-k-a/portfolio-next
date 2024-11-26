"use client";
import React, { useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const AdvancedScrollSection = ({ children }: { children: React.ReactNode }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: "0px 0px -50% 0px",
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);

  useEffect(() => {
    if (isInView && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className="w-full sticky offset-1 h-[100vh] flex justify-center items-center font-poppins text-xl md:text-2xl"
      style={{
        opacity,
        y,
      }}
    >
      {" "}
      <motion.div
        className="md:w-8/12 w-11/12"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 20,
        }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default AdvancedScrollSection;
