import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";

export default function DarkModeSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if the user prefers dark mode
    if (getDarkModeValue()) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const getDarkModeValue = () => {
    let isDarkMode = false;

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)")
    ) {
      isDarkMode = true;
    }

    try {
      const savedValue = localStorage.getItem("darkMode");

      if (savedValue !== null) {
        isDarkMode = JSON.parse(savedValue); // assign the value to the variable if it is not null
        return isDarkMode;
      } else {
        return isDarkMode;
      }
    } catch (error) {
      return isDarkMode;
    }
  };

  useEffect(() => {
    // Save the dark mode preference to local storage
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode(!darkMode);

    if (getDarkModeValue()) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div
      onClick={handleToggle}
      className={`flex-start items-center flex h-[36px] w-[68px] rounded-full bg-zinc-100 p-[5px] mr-2 shadow-inner hover:cursor-pointer dark:bg-zinc-700 place-content-start ${
        darkMode && "place-content-end"
      }`}
    >
      <motion.div
        className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-black/90"
        layout
        transition={spring}
      >
        <motion.div whileTap={{ rotate: 360 }}>
          {darkMode ? (
            <RiSunFill className="h-5 w-5 text-yellow-300" />
          ) : (
            <RiMoonClearFill className="h-5 w-5 text-slate-200" />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
