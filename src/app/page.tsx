"use client";
import Hero from "@/components/Hero";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AdvancedScrollSection from "@/components/ScrollSection";
export default function Home() {
  const route = useRouter();
  useEffect(() => {
    console.log("loaded home");
  }, []);
  return (
    <>
      <div className=" dark:bg-gray-900 bg-gray-50 ">
        <AdvancedScrollSection>
          <Hero />
          {/* <AnimationComponent /> */}
        </AdvancedScrollSection>
        <AdvancedScrollSection>
          {/* <CloudAnimation/> */}
          <p className="dark:text-white text-black font-poppins font-normal md:text-2xl text-sm leading-[1.8] md:leading-[2] md:tracking-[2px] tracking-[1.8px] ">
            In 2023 I have completed{" "}
            <span className="font-bold">
              Three-Year Diploma in Computer Engineering,{" "}
            </span>
            built a strong foundation in software development, and further honed
            my skills through a Self-Learning Bootcamp, where I specialized in
            web development using MERN Stack and learned web standards from
            experienced professionals
            <br />
            You can read a bit more{" "}
            <span
              onClick={() => route.push("/about")}
              className="font-bold text-red-500 underline cursor-pointer hover:text-blue-500"
            >
              about me{" "}
            </span>{" "}
            and my past work. Most of my personal code is on{" "}
            <span
              onClick={() =>
                window.open("https://github.com/gopakumar-k-a", "_blank")
              }
              className="font-bold text-red-500 underline cursor-pointer hover:text-blue-500"
            >
              GitHub
            </span>{" "}
          </p>
        </AdvancedScrollSection>

        <AdvancedScrollSection>
          <p className="font-bold text-2xl underline text-red-500">
            {" "}
            Code & Craft
          </p>
          <p className="dark:text-white text-black font-poppins font-normal md:text-2xl text-sm leading-[1.8] md:leading-[2] md:tracking-[2px] tracking-[1.8px] ">
            I’m a full-stack developer passionate about turning ideas into
            functional and user-friendly web applications. Skilled in MongoDB,
            Express.js, React.js, Next.js, and Node.js, I craft solutions for
            real-world problems, from auction systems to e-commerce platforms.
            Coding fuels my creativity and curiosity, often accompanied by
            coffee and a great playlist.
            <br />
            You can see my recent projects{" "}
            <span
              onClick={() => route.push("/projects")}
              className="font-bold text-red-500 underline cursor-pointer hover:text-blue-500"
            >
              here{" "}
            </span>{" "}
          </p>
        </AdvancedScrollSection>
        <AdvancedScrollSection>
          <p className="font-bold text-2xl underline text-red-500">
            {" "}
            My Goal ?
          </p>
          <p className="dark:text-white text-black font-poppins font-normal md:text-2xl text-sm leading-[1.8] md:leading-[2] md:tracking-[2px] tracking-[1.8px] ">
            My ultimate goal? To build systems that people love using. Whether
            I’m working solo or collaborating with a team, I approach every
            challenge with curiosity, adaptability, and the drive to create
            solutions that matter.
          </p>
        </AdvancedScrollSection>
      </div>
    </>
  );
}
