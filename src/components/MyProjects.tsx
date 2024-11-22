"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaAws,
} from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiRedux,
  SiMysql,
  SiMongodb,
  SiBootstrap,
  SiRedis,
  SiTailwindcss,
} from "react-icons/si";
import { DiRedis } from "react-icons/di";

import { SiCplusplus } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandVite } from "react-icons/tb";
import ProjectCard from "./ProjectCard";
const projectData = [
  {
    headLine: "JersyMan",
    subHeadLine: "Ecommerce platform for selling jersey products",
    content:
      "A full-featured e-commerce platform built to provide a smooth shopping experience for sports jerseys, including a product catalog, user authentication, secure payment, and a user-friendly admin dashboard. Jerseys are more than merchandise, they represent heritage and pride. JersyMan aims to create a dedicated platform for fans to easily buy jerseys, making it part of their sports identity.",
    icons: [
      <FaJs className="text-yellow-400 text-4xl" />,
      <SiExpress className="text-gray-400 text-4xl" />,
      <FaNodeJs className="text-green-600 text-4xl" />,
      <SiMongodb className="text-green-500 text-4xl" />,
    ],
    liveLink: "https://jersy.jersyman.online",
    githubLink: "https://github.com/gopakumar-k-a/first_project",
    frontEndLinkGit: null,
    backEndLinkGit: null,
    bgColor: "bg-green-300",
    image: "/project-logo/jersyman_logo_cropped.png",
  },
  {
    headLine: "Used Market Zone",
    subHeadLine: "Market Zone For Selling Used Products",
    content:
      "A marketplace integrated with social media features, allowing users to buy, sell, and auction pre-owned items with an interactive, community-driven approach.",
    icons: [
      <SiTypescript className="text-blue-600 text-4xl" />,
      <SiExpress className="text-gray-400 text-4xl" />,
      <FaNodeJs className="text-green-600 text-4xl" />,
      <FaReact className="text-blue-400 text-4xl" />,
      <SiMongodb className="text-green-500 text-4xl" />,
      <DiRedis className="text-red-500 text-4xl" />,
    ],
    liveLink: "https://umz.jersyman.online",
    githubLink: "",
    frontEndLinkGit:
      "https://github.com/gopakumar-k-a/usedMarketZone-frontend.git",
    backEndLinkGit: "https://github.com/gopakumar-k-a/usedMarketZone-backend",
    bgColor: "bg-yellow-300",
    image: "/project-logo/UMZ-logo.svg",
  },
  {
    headLine: "Image Drive",
    subHeadLine: "A Centralized Platform for Image Management",
    content:
      "An intuitive platform where users can seamlessly upload, organize, and manage images. Featuring drag-and-drop rearrangement, image editing, and bulk upload capabilities, it provides a hassle-free way to manage visual content with enhanced user experience.",

    icons: [
      <FaJs className="text-yellow-400 text-4xl" />,
      <SiExpress className="text-gray-400 text-4xl" />,
      <FaNodeJs className="text-green-600 text-4xl" />,
      <FaReact className="text-blue-400 text-4xl" />,
      <SiMongodb className="text-green-500 text-4xl" />,
    ],
    liveLink: "",
    githubLink: "",
    frontEndLinkGit:
      "https://github.com/gopakumar-k-a/usedMarketZone-frontend.git",
    backEndLinkGit: "https://github.com/gopakumar-k-a/usedMarketZone-backend",
    bgColor: "bg-purple-400",
    image: "/project-logo/imagedrive_logo.png",
  },
  {
    headLine: "Task Management",
    subHeadLine: "A Seamless Platform for Managing Your Tasks",
    content:
      "A comprehensive platform for managing tasks with ease. Users can create, edit, and delete tasks, set deadlines, and track progress. Featuring real-time updates, user authentication, and data visualization, it enhances productivity and task organization, making it ideal for both personal and collaborative use.",

    icons: [
      <FaJs className="text-yellow-400 text-4xl" />,
      <SiExpress className="text-gray-400 text-4xl" />,
      <FaNodeJs className="text-green-600 text-4xl" />,
      <FaReact className="text-blue-400 text-4xl" />,
      <SiMongodb className="text-green-500 text-4xl" />,
    ],
    liveLink: "",
    githubLink: "",
    frontEndLinkGit: "https://github.com/gopakumar-k-a/task-manager-frontend",
    backEndLinkGit: "https://github.com/gopakumar-k-a/task-manager-backend",
    bgColor: "bg-indigo-400",
    image: "/project-logo/task_manager_logo.png",
  },
  {
    headLine: "OLX Clone",
    subHeadLine: "A Comprehensive Marketplace for Buying and Selling Products",
    content:
      "A fully functional OLX clone built with React.js and Context API, designed for seamless user experience. Users can create accounts, list products, and upload images via Cloudinary. The platform allows users to browse product listings, view detailed descriptions, and interact with sellers, creating an efficient online marketplace for second-hand goods.",

    icons: [
      <FaNodeJs className="text-green-600 text-4xl" />,
      <FaReact className="text-blue-400 text-4xl" />,
      <SiMongodb className="text-green-500 text-4xl" />,
    ],
    liveLink: "",
    githubLink: "",
    frontEndLinkGit: "https://github.com/gopakumar-k-a/OLX-Clone",
    // backEndLinkGit: "https://github.com/gopakumar-k-a/usedMarketZone-backend",
    bgColor: "bg-red-400",
    image: "/project-logo/olx_logo.jpeg",
  },
  {
    headLine: "Netflix Clone",
    subHeadLine: "A Movie Streaming Platform for Browsing and Viewing Trailers",
    content:
      "A Netflix clone built with React.js, leveraging the TMDB API for fetching movie data and trailers. Users can explore a wide range of recent movies, watch trailers, and discover new content. The platform simulates a real-world streaming experience with a sleek user interface and dynamic movie browsing functionality.",

    icons: [
      <FaNodeJs className="text-green-600 text-4xl" />,
      <FaReact className="text-blue-400 text-4xl" />,
      <SiMongodb className="text-green-500 text-4xl" />,
    ],
    liveLink: "",
    githubLink: "",
    frontEndLinkGit: "https://github.com/gopakumar-k-a/netflix-mini",
    // backEndLinkGit: "https://github.com/gopakumar-k-a/usedMarketZone-backend",
    bgColor: "bg-lime-600",
    image: "/project-logo/netflix_logo.jpg",
  },
  {
    headLine: "To-Do App",
    subHeadLine: "A Simple and Effective Task Management Solution",
    content:
      "A user-friendly To-Do app built with React.js to enhance productivity. Users can easily add, edit, delete, and mark tasks as completed. The app provides a clean and intuitive interface, making it an ideal solution for managing daily tasks and staying organized.",

    icons: [
      <FaNodeJs className="text-green-600 text-4xl" />,
      <FaReact className="text-blue-400 text-4xl" />,
      <SiMongodb className="text-green-500 text-4xl" />,
    ],
    liveLink: "",
    githubLink: "",
    frontEndLinkGit: "https://github.com/gopakumar-k-a/to-do-REACT",
    // backEndLinkGit: "https://github.com/gopakumar-k-a/usedMarketZone-backend",
    bgColor: "bg-blue-500",
    image: "/project-logo/todo_logo.png",
  },
];
function MyProjects() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {/* <div className="flex flex-wrap gap-4"> */}
        {projectData.map((project, index) => (
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            key={index}
            className="flex items-center"
          >
            <ProjectCard
              headLine={project.headLine}
              subHeadLine={project.subHeadLine}
              content={project.content}
              icons={project.icons}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
              frontEndLinkGit={project.frontEndLinkGit}
              backEndLinkGit={project.backEndLinkGit}
              bgColor={project.bgColor}
              image={project.image}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default MyProjects;
