"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface ThemeToggleProps {
  inline?: boolean;
}

export default function ThemeToggle({ inline = false }: ThemeToggleProps) {
  const [mode, setMode] = useState<"dark" | "light">("dark");

  // Keep the app in dark visual theme and only animate lamp for "light mode"
  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.toggle("lamp-on", mode === "light");
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className={`${
        inline
          ? "flex items-center justify-center cursor-pointer rounded-full transition-all"
          : ""
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle lamp mode"
      title={mode === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      <AnimatePresence mode="wait">
        {mode === "light" ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="h-5 w-5 text-yellow-500" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="h-5 w-5 text-blue-600" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
