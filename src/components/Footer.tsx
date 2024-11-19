import React from "react";

function Footer() {
  return (
    <>
      {/* Footer */}
      <div className="absolute bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Follow me on Twitter"
            href="https://www.twitter.com/asad_codes"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg"
              alt="Twitter Logo"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
