import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  ErrorIcon,
  InfoIcon,
  SuccessIcon,
  WarningIcon,
} from "./IconComponents";

type AlertType = "success" | "info" | "warning" | "error";

const Alert = ({ type, message }: { type: AlertType; message: string }) => {
  const icons = {
    success: <SuccessIcon />,
    info: <InfoIcon />,
    warning: <WarningIcon />,
    error: <ErrorIcon />,
  };

  const colors = {
    success:
      "bg-green-100 dark:bg-green-900 border-green-500 dark:border-green-700 text-green-900 dark:text-green-100 hover:bg-green-200 dark:hover:bg-green-800",
    info: "bg-blue-100 dark:bg-blue-900 border-blue-500 dark:border-blue-700 text-blue-900 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-800",
    warning:
      "bg-yellow-100 dark:bg-yellow-900 border-yellow-500 dark:border-yellow-700 text-yellow-900 dark:text-yellow-100 hover:bg-yellow-200 dark:hover:bg-yellow-800",
    error:
      "bg-red-100 dark:bg-red-900 border-red-500 dark:border-red-700 text-red-900 dark:text-red-100 hover:bg-red-200 dark:hover:bg-red-800",
  };

  const animationControls = useAnimation();

  useEffect(() => {
    animationControls.start({ opacity: 1, y: 0 });

    const timeout = setTimeout(() => {
      animationControls.start({ opacity: 0, y: -20 });
    }, 3000);

    return () => clearTimeout(timeout);
  }, [animationControls]);

  return (
    <motion.div
      role="alert"
      className={`border-l-4 p-2 rounded-lg flex items-center transition duration-300 ease-in-out transform hover:scale-105 ${colors[type]}`}
      initial={{ opacity: 0, y: -20 }}
      animate={animationControls}
      transition={{ duration: 0.5 }}
    >
      {icons[type]}
      <p className="text-xs font-semibold">{message}</p>
    </motion.div>
  );
};

export default Alert;
