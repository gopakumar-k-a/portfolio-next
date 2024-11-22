"use client";
import React, { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const containerVariantsMobile = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };
  const itemVariantsMobile = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      
      <section className="z-40 sticky top-0 mx-auto flex justify-center pt-4  dark:bg-gray-900 dark:text-white bg-gray-50 text-black">
        <nav className="flex justify-between dark:bg-gray-900 dark:text-white bg-gray-50 text-black w-11/12 rounded-md drop-shadow-md">
          <div className="px-5 xl:px-12  flex w-full items-center dark:bg-gray-900 dark:text-white bg-gray-50 text-black rounded-md">
            <div>
              <motion.p
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-2xl font-heading cursor-pointer font-poppins font-semibold"
              >
                Gopakumar
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                Full Stack Developer
              </motion.p>
            </div>
            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
              <li>
                <Link
                  className={`dark:hover:text-gray-300 hover:text-gray-500 font-poppins font-medium ${
                    pathname === "/" ? "text-blue-500" : ""
                  }`}
                  href="/"
                >
                  Home
                </Link>
              </li>

              <li>
                <a
                  className={`dark:hover:text-gray-300 hover:text-gray-500 font-poppins font-medium ${
                    pathname === "/project" ? "text-blue-500" : ""
                  }`}
                  href="/project"
                >
                  projects
                </a>
              </li>
              <li>
                <Link
                  className={`dark:hover:text-gray-300 hover:text-gray-500 font-poppins font-medium ${
                    pathname === "/about" ? "text-blue-500" : ""
                  }`}
                  href="/about"
                >
                  about me
                </Link>
              </li>
              <li>
                <Link
                  className={`dark:hover:text-gray-300 hover:text-gray-500 font-poppins font-medium ${
                    pathname === "/contact" ? "text-blue-500" : ""
                  }`}
                  href="/contact"
                >
                  Contact me
                </Link>
              </li>
            </ul>
            <div className="hidden xl:flex items-center space-x-5">
              <div className="dark:hover:text-gray-300 hover:text-gray-500">
       
                <ThemeSwitch />
              </div>
             
            </div>
          </div>
          <a className="xl:hidden flex mr-6 items-center" href="#">
        
          </a>
          <div className="navbar-burger self-center mr-2 xl:hidden">
            <ThemeSwitch />
          </div>
          <div
            onClick={() => setIsMobileMenuOpen(true)}
            className="navbar-burger self-center mr-12 xl:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </nav>
      </section>

      
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-gray-900 bg-opacity-90 flex items-center justify-center text-white">
          <div>
            <RxCross2
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-10 right-10 h-7 w-7 text-gray-300 hover:text-white"
            />
            <motion.ul
              className="space-y-6 text-center"
              initial="hidden"
              animate="visible"
              variants={containerVariantsMobile}
            >
              <motion.li variants={itemVariantsMobile}>
                <Link
                  href="/"
                  className={`text-2xl hover:text-gray-400 ${
                    pathname === "/" ? "text-blue-400" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)} 
                >
                  Home
                </Link>
              </motion.li>
              <motion.li variants={itemVariantsMobile}>
                <Link
                  href="/project"
                  className={`text-2xl hover:text-gray-400 ${
                    pathname === "/project" ? "text-blue-400" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)} 
                >
                  Projects
                </Link>
              </motion.li>
              <motion.li variants={itemVariantsMobile}>
                <Link
                  href="/about"
                  className={`text-2xl hover:text-gray-400 ${
                    pathname === "/about" ? "text-blue-400" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)} 
                >
                  About Me
                </Link>
              </motion.li>
              <motion.li variants={itemVariantsMobile}>
                <Link
                  href="/contact"
                  className={`text-2xl hover:text-gray-400 ${
                    pathname === "/contact" ? "text-blue-400" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)} 
                >
                  Contact Me
                </Link>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
