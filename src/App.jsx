import React, { useEffect, useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import SkillsLanguages from "./components/SkillsLanguages";
import Projects from "./components/Projects";
import TopNav from "./components/TopNav";
import BottomNav from "./components/BottomNav";
import DarkModeToggle from "./components/DarkModeToggle";
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
    borderRadius: 20 / 2,
  },
}));

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
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("color-theme", theme);
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300 pt-16">
      {/* Sticky Top Nav (md+) */}
      <TopNav theme={theme} handleThemeChange={handleThemeChange} MaterialUISwitch={MaterialUISwitch} />
      {/* Floating Bottom Nav (mobile) */}
      <BottomNav />
      {/* Main Content */}
      <PersonalInfo />
      {/* Tabs below PersonalInfo */}
      <div className="flex w-full max-w-[180px] xs:max-w-[200px] sm:max-w-md md:max-w-[210px] lg:max-w-[240px] xl:max-w-[280px] mx-auto bg-neutral-100 dark:bg-neutral-900 rounded-full p-1 mt-2 mb-8 relative">
        {/* Sliding Pill */}
        <span
          className={`absolute top-1 bottom-1 left-0 w-1/2 bg-[#C42344] rounded-full transition-transform duration-500 ease-in-out
            ${activeTab === "about" ? "translate-x-0" : "translate-x-full"}
          `}
        />
        <button
          onClick={() => setActiveTab("about")}
          className={`relative z-10 flex-1 basis-0 px-3 py-2 rounded-full text-xs xs:text-sm sm:text-base md:text-lg font-sanchez transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C42344] border-0
            ${activeTab === "about"
              ? "text-white"
              : "text-gray-600 hover:text-gray-800"
            }`}
        >
          About Me
        </button>
        <button
          onClick={() => setActiveTab("skills")}
          className={`relative z-10 flex-1 basis-0 px-3 py-2 rounded-full text-xs xs:text-sm sm:text-base md:text-lg font-sanchez transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C42344] border-0
            ${activeTab === "skills"
              ? "text-white"
              : "text-gray-600 hover:text-gray-800"
            }`}
        >
          Skills
        </button>
        </div>
      <div className="w-full max-w-2xl mx-auto min-h-[180px] relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform"
          style={{ transform: activeTab === "about" ? "translateX(0%)" : "translateX(-100%)", transition: 'transform 0.7s cubic-bezier(0.4,0,0.2,1)' }}
        >
          {/* About Me Panel */}
          <div className="w-full flex-shrink-0 px-4 py-4 text-neutral-700 dark:text-neutral-200 text-base font-arapey mb-4">
            <p>
              I am a passionate full stack developer with a love for building modern, minimal, and highly interactive web applications. My focus is on clean code, beautiful UI/UX, and delivering real value through technology.<br /><br />
              I enjoy working with React, TailwindCSS, and C++ for CLI tools, and I’m always exploring new ways to improve my workflow and the user experience.
            </p>
          </div>
          {/* Skills & Languages Panel */}
          <div className="w-full flex-shrink-0">
            <SkillsLanguages />
          </div>
        </div>
      </div>
      <div className="mt-0.5 sm:mt-1 lg:mt-0.5 w-full">
        <Projects />
      </div>
    </div>
  );
}

export default App;
