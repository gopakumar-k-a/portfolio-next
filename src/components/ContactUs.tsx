"use client";

import React, { useState } from "react";
import { TbPhoneCall } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendMail } from "@/utils/send-mail";
import Alert from "./notification/AlertComponent";
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
const ContactUs = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.message) newErrors.message = "Message is required.";

    if (Object.keys(newErrors).length === 0) {
      setErrors({});

      const { email, name, message, phone } = formData;
      try {
        setIsLoading(true);

        const info = await sendMail({
          email,
          name,
          message,
          phone,
        });

        if (!info) {
          setAlert({ message: "error sending message", type: "error" });
        } else {
          setAlert({ message: "message send successfully", type: "success" });
        }
        setTimeout(() => setAlert(null), 3000);
      } catch (error) {
        console.error("An error occurred while sending the message: ", error);
        setAlert({ message: "error sending message", type: "error" });
      } finally {
        setTimeout(() => setAlert(null), 4000);
        setIsLoading(false);
      }

      console.log("Form submitted successfully:", formData);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      setErrors(newErrors);
    }
  };
  return (
    <>
      <div className="min-h-screen w-full bg-white dark:bg-gray-900 text-white  flex items-center justify-center py-10 px-5">
        <div className="container mx-auto w-11/12 md:w-8/12 h-full">
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-orange-600 md:col-span-1 col-span-2 rounded-lg flex flex-col items-center justify-center p-4">
              <div className="flex items-center mb-2">
                <TbPhoneCall className="md:h-8 md:w-8 w-6 h-6 bg-white rounded-lg text-orange-600 mr-2" />
                <p className="md:text-lg font-semibold text-base">
                  Call Me Directly
                </p>
              </div>
              <p className="md:text-2xl font-bold text-base">
                <a href="tel:+919388867491">+91 93888 67491</a>
              </p>
            </div>
            <div className="bg-teal-600 md:col-span-1 col-span-2 rounded-lg flex flex-col items-center justify-center p-4">
              <div className="flex items-center mb-2">
                <HiOutlineMail className="md:h-8 md:w-8 w-6 h-6 bg-white rounded-lg text-teal-600 mr-2" />
                <p className="text-lg font-semibold">Chat with me</p>
              </div>
              <a
                href="mailto:gopak9145@gmail.com"
                className="text-lg font-medium"
              >
                gopak9145@gmail.com
              </a>
            </div>

            <div className="col-span-2 bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Contact me</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Feel free to contact !
              </p>
              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="mt-1 block w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 text-gray-900 dark:text-gray-100" // Adjust text color based on mode
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="mt-1 block w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 text-gray-900 dark:text-gray-100" // Adjust text color based on mode
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Phone Number (Optional)
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                    className="mt-1 block w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 text-gray-900 dark:text-gray-100" // Adjust text color based on mode
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message Here..."
                    className="mt-1 block w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 text-gray-900 dark:text-gray-100" // Adjust text color based on mode
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  // onClick={handleClick}
                  disabled={isLoading}
                  className={`w-full ${
                    isLoading
                      ? "bg-indigo-400"
                      : "bg-indigo-500 hover:bg-indigo-600"
                  } dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center`}
                >
                  {isLoading ? (
                    <>
                      <div
                        role="status"
                        className="inline-block h-4 w-4 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em]"
                      >
                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                          Loading...
                        </span>
                      </div>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
          <div className="space-y-2 p-4">
            {alert && <Alert type={alert.type} message={alert.message} />}
          </div>
          <div className="md:w-full mt-6 dark:bg-gray-900 bg-white flex justify-center h-full md:h-full">
            <div className="flex gap-4 justify-center bg-gray-200 p-4 rounded-s-full rounded-e-full">
              <motion.div whileHover={{ scale: 1.2, y: -5 }} initial={{ y: 0 }}>
                <a
                  href="https://www.instagram.com/gopakumar_ka/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  className="text-pink-500 hover:text-pink-600 text-2xl"
                >
                  <FaInstagram className="md:w-10 md:h-10 w-6 h-6" />
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, y: -5 }} initial={{ y: 0 }}>
                <a
                  href="https://www.linkedin.com/in/gopakumar-ka/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="text-blue-700 hover:text-blue-800 text-2xl"
                >
                  <FaLinkedin className="md:w-10 md:h-10 w-6 h-6 " />
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, y: -5 }} initial={{ y: 0 }}>
                <a
                  href="https://github.com/gopakumar-k-a"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  className="text-gray-800 hover:text-black text-2xl"
                >
                  <FaGithub className="md:w-10 md:h-10 w-6 h-6" />
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, y: -5 }} initial={{ y: 0 }}>
                <a
                  href="mailto:gopak9145@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Email"
                  className="text-red-500 hover:text-red-600 text-2xl"
                >
                  <FaEnvelope className="md:w-10 md:h-10 w-6 h-6" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
