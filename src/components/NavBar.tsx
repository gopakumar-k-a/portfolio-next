"use client";
import React, { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import Spinner from "./Spinner/Spinner";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const containerVariantsMobile = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between child animations
      },
    },
  };
  const itemVariantsMobile = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* <div className="flex flex-wrap place-items-center h-screen"> */}
      {/* {loading ? <Spinner />} */}
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
                  className="dark:hover:text-gray-300 hover:text-gray-500 font-poppins font-medium"
                  href="/"
                >
                  Home
                </Link>
              </li>

              <li>
                <a
                  className="dark:hover:text-gray-300 hover:text-gray-500 font-poppins font-medium"
                  href="/project"
                >
                  projects
                </a>
              </li>
              <li>
                <Link
                  className="dark:hover:text-gray-300 hover:text-gray-500 font-poppins font-medium"
                  href="/about"
                >
                  about me
                </Link>
              </li>
              <li>
                <Link
                  className="dark:hover:text-gray-300 hover:text-gray-500 font-poppins font-medium"
                  href="/contact"
                >
                  Contact me
                </Link>
              </li>
            </ul>
            {/* Header Icons */}
            <div className="hidden xl:flex items-center space-x-5">
              <a
                className="dark:hover:text-gray-300 hover:text-gray-500"
                href="#"
              >
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg> */}
                <ThemeSwitch />
              </a>
              {/* <a className="flex items-center hover:text-gray-200" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="flex absolute -mt-5 ml-4">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                </span>
              </a>
              <a className="flex items-center hover:text-gray-200" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 hover:text-gray-200 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a> */}
            </div>
          </div>
          {/* Responsive Navbar */}
          <a className="xl:hidden flex mr-6 items-center" href="#">
            {/* <span className="flex absolute -mt-5 ml-4">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span> */}
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

      {/* <div className="relative mx-auto z-50 w-screen h-screen bg-white">
        sfdf
      </div> */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-gray-900 bg-opacity-90 flex items-center justify-center text-white">
          <div>
            <RxCross2
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-10 right-10 h-7 w-7  text-gray-300 hover:text-white"
            />

            <motion.ul
              className="space-y-6 text-center"
              initial="hidden"
              animate="visible"
              variants={containerVariantsMobile}
            >
              <motion.li variants={itemVariantsMobile}>
                <Link href="/" className="text-2xl hover:text-gray-400">
                  Home
                </Link>
              </motion.li>
              <motion.li variants={itemVariantsMobile}>
                <Link href="/project" className="text-2xl hover:text-gray-400">
                  Projects
                </Link>
              </motion.li>
              <motion.li variants={itemVariantsMobile}>
                <a href="/about" className="text-2xl hover:text-gray-400">
                  about me
                </a>
              </motion.li>
              <motion.li variants={itemVariantsMobile}>
                <a href="/contact" className="text-2xl hover:text-gray-400">
                  contact me
                </a>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      )}

    </>
  );
};

export default Navbar;
