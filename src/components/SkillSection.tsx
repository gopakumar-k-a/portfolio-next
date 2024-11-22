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
import { SiCplusplus } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import Image from "next/image";
import { TbBrandVite } from "react-icons/tb";

const SkillsSection = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="ml-4 md:hidden  block rounded-full p-4">
          <img
            src="/hero.jpg"
            alt="hero"
            className="w-28 h-28 rounded-full object-cover"
          />
        </div>
      </div>

      <div className="flex items-center dark:bg-gray-900 bg-white text-white p2 md:p-4  rounded-lg">

        <div className="grid grid-cols-6 gap-4 flex-grow">
          <FaHtml5 className="text-orange-500 text-4xl" />
          <FaCss3Alt className="text-blue-500 text-4xl" />
          <FaJs className="text-yellow-400 text-4xl" />
          <SiTypescript className="text-blue-600 text-4xl" />
          <SiExpress className="text-gray-400 text-4xl" />
          <FaNodeJs className="text-green-600 text-4xl" />
          <FaReact className="text-blue-400 text-4xl" />
          <RiNextjsLine className="dark:text-white text-gray-700 text-4xl" />
          <SiRedux className="text-purple-600 text-4xl" />
          <SiMongodb className="text-green-500 text-4xl" />
          <SiMysql className="text-blue-600 text-4xl" />
          <TbBrandVite className="text-yellow-500 text-4xl" />
          <FaGit className="text-red-500 text-4xl" />
          <FaAws className="text-orange-400 text-4xl" />
          <SiRedis className="text-red-500 text-4xl" />
          <SiTailwindcss className="text-teal-400 text-4xl" />
          <SiBootstrap className="text-purple-600 text-4xl" />
          <SiCplusplus className="text-blue-600 text-4xl" />
        </div>

        <div className="ml-4 md:block hidden rounded-full">
          <img
            src="/hero.jpg"
            alt="hero"
            className="md:w-44 md:h-44 rounded-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default SkillsSection;
