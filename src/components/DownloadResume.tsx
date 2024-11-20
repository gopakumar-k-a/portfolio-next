import React from "react";

const DownloadResume = ({ children }: { children: React.ReactNode }) => {
  return (
    // <div className="flex justify-center items-center h-screen">
    <a
      href="/resume.pdf"
      download="Gopakumar_Resume.pdf"
      // className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
    >
      {children}
    </a>
    // </div>
  );
};

export default DownloadResume;
