"use client";

import React from "react";
import EaseInOut from "./transitions/EaseInOut";
import WordSplittingAnimation from "./transitions/WordSplitting";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { textVariants } from "@/components/animations/textAnimations";
import DownloadResume from "./DownloadResume";
// import AnimationComponent from "@/components/lottie/AnimationCompLotie";

// import hero from '../../public/hero.jpg'
function Hero() {
  const router = useRouter();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // const textVariants = {
  //   hidden: { opacity: 0, y: 50 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  // };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.1 }, // Slightly enlarge on hover
  };

  return (
    <>
      {/* <div classNameName="md:w-9/12 w-screen grid grid-cols-12 bg-blue-300 gap-4">
          <div classNameName="col-span-8 bg-pink-500">
      
            sds
          </div>
        
          <div classNameName="col-span-4  bg-pink-500">sd</div>
        </div> */}
      <div className="dark:bg-gray-900 bg-gray-50 md:py-20 w-full">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-center">
            {/* <EaseInOut> */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="md:w-1/3 md:hidden block md:mt-0"
            >
              <img
                src="/hero.jpg"
                alt="Hero Image"
                className="rounded-full shadow-lg md:hidden block"
                width={150}
                height={150}
              />
            </motion.div>
            <motion.div
              className="md:w-7/12 w-8/12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="text-3xl md:text-6xl lg:text-7xl dark:text-white text-black  font-bold mb-6"
                variants={textVariants.textFadeIn}
              >
                Hi <br className="hidden md:block" />
                <span className="text-red-500">I am </span>Gopakumar
              </motion.h1>
              <motion.p
                className="text-sm md:text-xl lg:text-2xl font-poppins dark:text-gray-400 text-gray-600 mb-8"
                variants={textVariants.textFadeIn}
              >
                I'm a{" "}
                <span className="text-sm md:text-xl lg:text-2xl font-poppins font-semibold text-gray-400">
                  MERN Full Stack Developer
                </span>{" "}
                dedicated to turning complex challenges into elegant front-end
                and back-end solutions.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-2"
                variants={containerVariants}
              >
                {/* Contact Me Button */}
                <motion.button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded-md"
                  variants={buttonVariants}
                  whileHover="hover"
                  onClick={() => router.push("/contact")}
                >
                  Contact Me
                </motion.button>

                {/* More About Me Button */}
                <motion.button
                  className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded-md"
                  variants={buttonVariants}
                  whileHover="hover"
                  onClick={() => router.push("/about")}
                >
                  More About Me
                </motion.button>

                {/* Download Resume Button */}
                <motion.button
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded-md"
                  variants={buttonVariants}
                  whileHover="hover"
                >
                  <DownloadResume>Download Resume</DownloadResume>
                </motion.button>
              </motion.div>
              {/* <AnimationComponent/> */}

            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="md:w-1/2 lg:w-1/3 mt-8 md:mt-0"
            >

              <img
                src="/hero.jpg"
                alt="Hero Image"
                className="rounded-full shadow-lg md:block hidden"
                width={400}
                height={400}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
