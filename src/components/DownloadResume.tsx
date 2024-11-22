import React from "react";

const DownloadResume = ({ children }: { children: React.ReactNode }) => {
  return (
    <a
      href="/resume.pdf"
      download="Gopakumar_Resume.pdf"
    >
      {children}
    </a>
  );
};

export default DownloadResume;
