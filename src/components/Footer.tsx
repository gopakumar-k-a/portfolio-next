"use client";
import React, { useState } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { textVariants } from "@/components/animations/textAnimations";
import { motion } from "framer-motion";
import { FaHandshake } from "react-icons/fa6";
import { div } from "framer-motion/client";
function Footer() {
  const [showIcons, setShowIcons] = useState(false);

  const toggleIcons = () => setShowIcons((prev) => !prev);

  return (
    <>
      <div className="fixed bottom-0 right-0 mb-4 mr-4 z-10">
        {showIcons ? (
          <motion.div
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 15,
            }}
            className="p-4 bg-white rounded-full shadow-lg flex gap-4"
          >
            <a
              href="https://www.instagram.com/gopakumar_ka/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="text-pink-500 hover:text-pink-600 text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/gopakumar-ka/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="text-blue-700 hover:text-blue-800 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/gopakumar-k-a"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="text-gray-800 hover:text-black text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:gopak9145@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Email"
              className="text-red-500 hover:text-red-600 text-2xl"
            >
              <FaEnvelope />
            </a>
            <p>|</p>
            <div
              onClick={toggleIcons}
              className="text-black hover:text-gray-600 text-2xl"
            >
              <RxCross2 />
            </div>
          </motion.div>
        ) : (
          <div>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 15,
              }}
              onClick={toggleIcons}
              className="animate-bounce w-12 h-12 md:w-16 md:h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110  bg-blue-500 flex items-center justify-center"
              title="Follow me on Twitter"
            >
              <FaHandshake className="text-white text-2xl" />
            </motion.button>
          </div>
        )}
      </div>
    </>
  );
}

export default Footer;
