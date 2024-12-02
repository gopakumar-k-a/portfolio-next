import React from "react";

const DownloadResume = ({ children }: { children: React.ReactNode }) => {
  return (
    <a
      href="/GOPAKUMAR_KA-MERN_STACK_DEVELOPER.pdf"
      download="GOPAKUMAR_KA-MERN_STACK_DEVELOPER.pdf"
    >
      {children}
    </a>
  );
};

export default DownloadResume;
