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
  SiC,
} from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
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
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 flex-grow">
          <div className="flex flex-col items-center justify-center">
            <FaHtml5 className="text-orange-500 text-4xl" />
            <span className="text-sm mt-2">HTML5</span>
          </div>
          <div className="flex flex-col items-center">
            <FaCss3Alt className="text-blue-500 text-4xl" />
            <span className="text-sm mt-2">CSS3</span>
          </div>
          <div className="flex flex-col items-center">
            <FaJs className="text-yellow-400 text-4xl" />
            <span className="text-sm mt-2">JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <SiTypescript className="text-blue-600 text-4xl" />
            <span className="text-sm mt-2">TypeScript</span>
          </div>
          <div className="flex flex-col items-center">
            <SiExpress className="text-gray-400 text-4xl" />
            <span className="text-sm mt-2">Express.js</span>
          </div>
          <div className="flex flex-col items-center">
            <FaNodeJs className="text-green-600 text-4xl" />
            <span className="text-sm mt-2">Node.js</span>
          </div>
          <div className="flex flex-col items-center">
            <FaReact className="text-blue-400 text-4xl" />
            <span className="text-sm mt-2">React.js</span>
          </div>
          <div className="flex flex-col items-center">
            <RiNextjsLine className="dark:text-white text-gray-700 text-4xl" />
            <span className="text-sm mt-2">Next.js</span>
          </div>
          <div className="flex flex-col items-center">
            <SiRedux className="text-purple-600 text-4xl" />
            <span className="text-sm mt-2">Redux</span>
          </div>
          <div className="flex flex-col items-center">
            <SiMongodb className="text-green-500 text-4xl" />
            <span className="text-sm mt-2">MongoDB</span>
          </div>
          <div className="flex flex-col items-center">
            <SiMysql className="text-blue-600 text-4xl" />
            <span className="text-sm mt-2">MySQL</span>
          </div>
          <div className="flex flex-col items-center">
            <TbBrandVite className="text-yellow-500 text-4xl" />
            <span className="text-sm mt-2">Vite</span>
          </div>
          <div className="flex flex-col items-center">
            <FaGit className="text-red-500 text-4xl" />
            <span className="text-sm mt-2">Git</span>
          </div>
          <div className="flex flex-col items-center">
            <FaAws className="text-orange-400 text-4xl" />
            <span className="text-sm mt-2">AWS</span>
          </div>
          <div className="flex flex-col items-center">
            <SiRedis className="text-red-500 text-4xl" />
            <span className="text-sm mt-2">Redis</span>
          </div>
          <div className="flex flex-col items-center">
            <SiTailwindcss className="text-teal-400 text-4xl" />
            <span className="text-sm mt-2">Tailwind CSS</span>
          </div>
          <div className="flex flex-col items-center">
            <SiBootstrap className="text-purple-600 text-4xl" />
            <span className="text-sm mt-2">Bootstrap</span>
          </div>
          <div className="flex flex-col items-center">
            <SiC className="text-blue-500 text-4xl" />
            <span className="text-sm mt-2">C</span>
          </div>

          <div className="flex flex-col items-center">
            <SiCplusplus className="text-blue-600 text-4xl" />
            <span className="text-sm mt-2">C++</span>
          </div>
        </div>

        <div className="ml-4  md:block hidden rounded-full ">
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
