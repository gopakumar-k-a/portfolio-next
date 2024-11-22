import React from "react";
import ReachMe from "@/components/ReachMe";
import EaseInOut from "@/components/transitions/EaseInOut";
import DownloadResume from "@/components/DownloadResume";
import Link from "next/link";
import SkillsSection from "@/components/SkillSection";
function About() {
  return (
    <>
      <div className="dark:bg-gray-900 font-poppins bg-white h-full w-screen flex justify-center">
        <div className="w-11/12 md:w-8/12 h-full">
          <EaseInOut>
            <div className="bg-white dark:text-white text-black dark:bg-gray-900 p-6 rounded-md">
              <p className="font-bold text-xl md:text-3xl ">
                MERN Full Stack Developer - dedicated to turning complex
                challenges into elegant front-end and back-end solutions
              </p>
              <p className="font-light text-base  md:text-xl md:font-regular leading-[1.8] md:leading-[2] md:tracking-[2px] tracking-[1.8px]  mt-4">
                As a self-taught MERN stack developer, I began my journey by
                developing a variety of hands-on projects.
              </p>
              <SkillsSection />
              <p className="font-light text-base  md:text-xl md:font-regular leading-[1.8] md:leading-[2] md:tracking-[2px] tracking-[1.8px]  mt-4">
                Technical Expertise: I focus on the MERN stack, utilizing
                JavaScript, TypeScript, React.js,Next.js, Node.js, MongoDB, and
                Express.js to build scalable and dynamic web applications.
                Professional Journey: My skills were further honed through an
                e-commerce project called Jersyman, a platform for selling
                sports jerseys built with Node.js, Express, MongoDB, and other
                technologies. This project deepened my passion for creating
                seamless online experiences and enhanced my problem-solving and
                logical thinking abilities by integrating advanced features for
                security and user convenience. Significant Project: Another
                pivotal project in my career was Used Market Zone, a platform
                that blends social media features with a dynamic marketplace for
                pre-owned items. It offers two distinct selling options: users
                can either list products for auction, where the highest bidder
                wins the item, or post products for regular sale, enabling
                direct interactions and purchases through post replies. This
                dual approach not only enriches the user experience by
                incorporating competitive bidding but also fosters community
                engagement through straightforward buying and selling. Looking
                ahead, I am excited about the opportunities to contribute to
                groundbreaking projects and drive digital transformation. This
                is only the beginning, and I am eager to apply my skills and
                passion to shape the future of technology and achieve new
                milestones. To know more about me{" "}
                <DownloadResume>
                  <span className="font-bold text-red-500 underline cursor-pointer hover:text-blue-500">
                    download my resume
                  </span>
                </DownloadResume>
              </p>
            </div>

            <div className="about px-6 py-12">
              <h4 className="text-3xl font-semibold mt-12 mb-4 text-black dark:text-white">
                Education
              </h4>

              <div className="multi-row mb-6 text-black dark:text-white">
                <p className="text-xl font-bold">MERN Stack Development</p>
                <p>Brototype Eranakulam</p>
                <p>2023-present</p>
              </div>

              <div className="multi-row mb-6 text-black dark:text-white md:w-8/12 w-full">
                <p className="text-xl font-bold">
                  Three Year Diploma In Computer Engineering
                </p>

                <p>SRGPTC Triprayar - Techincal Education of Kerala</p>
                <p>2020-2023</p>
              </div>

              <div className="multi-row mb-6 text-black dark:text-white">
                <p className="text-xl font-bold">Higher Secondary</p>
                <p>GHSS Karupadanna - Computer Science ,DHSE Kerala</p>
                <p>2018-2020</p>
              </div>
              <div className="multi-row mb-6 text-black dark:text-white">
                <p className="text-xl font-bold">Higher School</p>
                <p>THS Kodungallur - Technical Education of Kerala</p>
                <p>2018</p>
              </div>

              <h4 className="text-3xl font-semibold mt-12 mb-4 text-black dark:text-white">
                Disciplines
              </h4>
              <div className="grid grid-cols-2 mb-12 md:grid-cols-3 gap-4 text-black dark:text-white">
                <p>• Full-Stack Development</p>
                <p>• Back-End Development</p>
                <p>• API Development and Integration</p>
                <p>• Database Design and Management</p>
                <p>• Responsive Web Design</p>
                <p>• Version Control (Git)</p>
                <p>• Real-Time Web Applications (Socket.io)</p>
                <p>• Authentication and Authorization (JWT)</p>
                <p>• Deployment and Hosting (AWS)</p>
                <p>• Agile Development Practices</p>
                <p>• Problem Solving and Debugging</p>
              </div>

              <Link
                href={"/contact"}
                className="text-3xl font-semibold mt-12 mb-4 text-black dark:text-white"
              >
                Contact
              </Link>
              <ReachMe />
            </div>
          </EaseInOut>
        </div>
      </div>
    </>
  );
}

export default About;
