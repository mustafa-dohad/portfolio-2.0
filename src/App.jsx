import React, { useEffect, useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import SkillsLanguages from "./components/SkillsLanguages";
import Projects from "./components/Projects";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }
    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }
  return "light";
};

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("color-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300">
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 z-10"
      >
        Switch to {theme === "dark" ? "Light" : "Dark"} Mode
      </button>
      <PersonalInfo />
      <SkillsLanguages />
      <div className="mt-8">
        <Projects />
      </div>
    </div>
  );
}

export default App;
