"use client";
import React from "react";
import { useRouter } from "next/navigation";
function ReachMe() {
  const router = useRouter();
  return (
    <>
      <p className="text-lg text-black dark:text-white mb-6">
        Feel free to reach out for projects, collaborations, or just to say
        hello! Currently seeking new opportunities.{" "}
        <span
          onClick={() => router.push("/contact")}
          className="font-bold text-red-500 underline cursor-pointer hover:text-blue-500"
        >
          contact me
        </span>
      </p>
    </>
  );
}

export default ReachMe;
