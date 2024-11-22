"use client";
import React from "react";
function AnimatedButton({
  name,
  Icon,
  link,
}: {
  name: string;
  Icon: JSX.Element;
  link: string;
}) {
  // const handleClick = () => {
  //   // window.open(link, "_blank", "noopener,noreferrer");
  //   window.location.href = link;
  // };
  const handleClick = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      {/* <div className="flex items-center justify-center h-screen"> */}
      <div className="relative group">
        {/* <a href={link}> */}
          <button
            // onClick={()=>router.push(link)}
            onClick={handleClick}
            className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

            <span className="relative z-10 block px-4 py-3 rounded-xl bg-gray-950">
              <div className="relative z-10 flex items-center space-x-2">
                <span className="transition-all duration-500 group-hover:translate-x-1">
                  {name}
                </span>
                {Icon}
              </div>
            </span>
          </button>
        {/* </a> */}
      </div>
      {/* </div> */}
    </>
  );
}

export default AnimatedButton;
