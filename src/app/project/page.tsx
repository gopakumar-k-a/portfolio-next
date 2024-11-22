import React from "react";
import MyProjects from "@/components/MyProjects";

function page() {
  return (
    <>
      <div></div>
      <div className="dark:bg-gray-900 font-poppins bg-white min-h-screen min-w-screen flex justify-center ">
        <div className="w-full max-w-screen  px-4 py-3 ">
          <MyProjects />
        </div>
      </div>
    </>
  );
}

export default page;
