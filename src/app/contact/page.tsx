import EaseInOut from "@/components/transitions/EaseInOut";
import React from "react";
import ContactUs from "@/components/ContactUs";
function Contact() {
  return (
    <>
      <div className="dark:bg-gray-900 font-poppins bg-white h-full w-screen flex justify-center">
        <div className="w-full h-full">
          <EaseInOut>
            <ContactUs />
          </EaseInOut>
        </div>
      </div>
    </>
  );
}

export default Contact;
