import React from "react";
import EaseInOut from "./transitions/EaseInOut";
import WordSplittingAnimation from "./transitions/WordSplitting";
import { motion } from "framer-motion";
import Image from "next/image";
// import hero from '../../public/hero.jpg'
function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child's animation
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 }, // Start below and invisible
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Slide in and fade
  };

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
      <div className="dark:bg-gray-900 bg-gray-50 py-20 w-full">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-center">
            {/* <EaseInOut> */}
            <motion.div
              className="md:w-7/12 w-8/12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="text-3xl md:text-6xl lg:text-7xl text-white font-bold mb-6"
                variants={textVariants}
              >
                Hi <br className="hidden md:block" />
                <span className="text-indigo-500">I am</span> Gopakumar KA
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8"
                variants={textVariants}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                
              </motion.p>
              {/* <motion.div className="flex gap-2" variants={containerVariants}>
                <motion.a
                  href="#"
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-md"
                  variants={buttonVariants}
                  whileHover="hover"
                >
                  Get Started
                </motion.a>
                <motion.a
                  href="#"
                  className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-md"
                  variants={buttonVariants}
                  whileHover="hover"
                >
                  Learn More
                </motion.a>
              </motion.div> */}
            </motion.div>
            {/* <div className="w-9/12">
                <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6">
                  Welcome to our <br className="hidden md:block" />
                  <span className="text-indigo-500">Awesome</span> Website
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8">
                  We create beautiful and functional websites for businesses of
                  all sizes.
                </p>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-md"
                  >
                    Get Started
                  </a>
                  <a
                    href="#"
                    className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-md"
                  >
                    Learn More
                  </a>
                </div>
              </div> */}
            {/* <WordSplittingAnimation /> */}
            {/* </EaseInOut> */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="md:w-1/2 lg:w-1/3 mt-8 md:mt-0"
            >
              <img
                src="/hero.jpg"
                alt="Hero Image"
                className="rounded-lg shadow-lg md:block hidden"
                width={400}
                height={400}
              />
              <img
                src="/hero.jpg"
                alt="Hero Image"
                className="rounded-lg shadow-lg md:hidden block"
                width={200}
                height={200}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
