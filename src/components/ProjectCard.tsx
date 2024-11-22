"use client";
import React from "react";
import AnimatedButton from "./buttons/AnimatedButton";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import WebSiteNotAvailable from "./buttons/WebNotAvailable";
import Image from "next/image";
import { motion } from "framer-motion";

function ProjectCard({
  headLine,
  subHeadLine,
  content,
  icons,
  githubLink = null,
  liveLink = null,
  frontEndLinkGit = null,
  backEndLinkGit = null,
  bgColor,
  image,
}: {
  headLine: string;
  subHeadLine: string;
  content: string;
  icons: JSX.Element[];
  githubLink: string | null;
  liveLink: string | null;
  frontEndLinkGit: string | null;
  backEndLinkGit: string | null;
  bgColor: string;
  image: string;
}) {
  return (
    // <motion.div
    //   initial={{ opacity: 0, y: 50 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" }}
    //   transition={{ duration: 0.3, ease: "easeInOut" }}
    // >
      <div
        className={`${bgColor}  justify-between h-full shadow-lg rounded-lg p-6 max-w-full max-h-max text-center flex flex-col hover:scale-105 transition-transform duration-300 ease-in-out`}
      >
        {/* Profile image and headline */}
        <div className="flex w-full">
          <div className="p-2">
            <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 relative">
              <Image
                src={image} // Ensure the image path is valid and starts with "/"
                alt={`${headLine} thumbnail`}
                layout="fill"
                objectFit="cover"
                className="rounded-full" // Ensure the image itself is rounded like the container
              />
            </div>
          </div>
          <div>
            {/* Headline */}
            <h2 className="text-lg font-semibold text-black text-left">
              {headLine}
            </h2>
            <p className="text-sm text-black text-left">{subHeadLine}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid md:grid-cols-3 grid-cols-2 gap-2 mt-4">
          {liveLink ? (
            <AnimatedButton
              name="live link"
              Icon={<FaExternalLinkAlt />}
              link={liveLink}
            />
          ) : (
            <WebSiteNotAvailable />
          )}
          {githubLink && (
            <AnimatedButton
              name="gitHub"
              Icon={<FaGithub />}
              link={githubLink}
            />
          )}
          {frontEndLinkGit && (
            <AnimatedButton
              name="frontend"
              Icon={<FaGithub />}
              link={frontEndLinkGit}
            />
          )}
          {backEndLinkGit && (
            <AnimatedButton
              name="backend"
              Icon={<FaGithub />}
              link={backEndLinkGit}
            />
          )}
        </div>

        {/* Content */}
        <div className="w-full max-w-md mx-auto p-2 rounded-lg mt-4">
          <p className="text-sm text-black break-words">{content}</p>
        </div>

        {/* Footer dots */}
        {/* <div className="bg-gray-900 w-full"> */}
        <div
          className="flex justify-center gap-2 mt-4 flex-wrap opacity-90 p-2 max-w-fit 
      
      relative font-semibold leading-6 text-white bg-gray-900 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
        >
          {icons.map((Icon, index) => (
            <span
              key={index}
              className="w-8 h-8 text-center flex justify-center items-center rounded-full"
            >
              {Icon}
            </span>
          ))}
        </div>
      </div>
    // </motion.div>
    // </div>
  );
}

export default ProjectCard;
