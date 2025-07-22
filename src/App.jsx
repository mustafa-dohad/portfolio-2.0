import React, { useEffect, useState, createContext, useCallback } from "react";
import PersonalInfo from "./components/PersonalInfo";
import { motion, AnimatePresence } from "framer-motion";
import SkillsLanguages from "./components/SkillsLanguages";
import Projects from "./components/Projects";
import TopNav from "./components/TopNav";
import BottomNav from "./components/BottomNav";
import DarkModeToggle from "./components/DarkModeToggle";
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Toast from "./components/Toast";
import ParallaxBackground from "./components/ParallaxBackground";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ContactForm from "./components/ContactForm";

export const ToastContext = createContext({ showToast: () => {} });

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
    // Use device preference if no localStorage
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
  }
  return "light";
};

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [activeTab, setActiveTab] = useState("about");
  const [toast, setToast] = useState({ message: "", visible: false });
  const [showAlert, setShowAlert] = useState(true);

  const showToast = useCallback((message) => {
    setToast({ message, visible: true });
  }, []);
  const hideToast = useCallback(() => setToast(t => ({ ...t, visible: false })), []);

  // On first mount, if no localStorage, set theme to device preference
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedPrefs = window.localStorage.getItem("color-theme");
      if (!storedPrefs) {
        const devicePref = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        setTheme(devicePref);
      }
    }
    // Only run on mount
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("color-theme", theme);
  }, [theme]);

  // Listen for device color scheme changes and auto-update theme if no manual preference
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      const storedPrefs = window.localStorage.getItem("color-theme");
      if (!storedPrefs) {
        const handler = (e) => setTheme(e.matches ? "dark" : "light");
        media.addEventListener("change", handler);
        return () => media.removeEventListener("change", handler);
      }
    }
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#18181B] transition-colors duration-300 pt-16">
        {/* Sticky Top Nav (md+) */}
        <TopNav theme={theme} handleThemeChange={handleThemeChange} MaterialUISwitch={MaterialUISwitch} />
        {/* Dismissible Alert (all screens) */}
        {showAlert && (
          <div className="w-[90vw] max-w-2xl mx-auto mt-3 sm:mt-4 md:mt-6 mb-2 px-4 py-3 rounded-xl shadow-md bg-gradient-to-r from-cyan-100 to-pink-100 text-neutral-800 dark:from-[#23262F] dark:to-[#23262F] dark:text-[#FAFAFA] border border-cyan-200 dark:border-cyan-700 flex items-center justify-between">
            <span className="font-sanchez text-sm sm:text-base">
              ✨ Seeking a 2025 internship: Let’s build something extraordinary together.
            </span>
            <button
              onClick={() => setShowAlert(false)}
              className="ml-3 text-neutral-500 hover:text-cyan-500 dark:hover:text-cyan-400 focus:outline-none text-xl font-bold px-1"
              aria-label="Dismiss alert"
            >
              &times;
            </button>
          </div>
        )}
        {/* Floating Bottom Nav (mobile) */}
        <BottomNav />
        {/* Main Content */}
        <motion.div
          id="home"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <PersonalInfo />
        </motion.div>
        {/* Tabs below PersonalInfo */}
        <motion.div
          id="skills"
          className="flex w-full max-w-[180px] xs:max-w-[200px] sm:max-w-md md:max-w-[320px] lg:max-w-[240px] xl:max-w-[280px] mx-auto bg-neutral-100 dark:bg-[#23262F] rounded-full p-1 mt-2 mb-4 md:mb-8 relative scroll-mt-20"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Sliding Pill */}
          <span
            className={`absolute top-1 bottom-1 left-0 w-1/2 bg-[#C42344] dark:bg-cyan-400 rounded-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
              ${activeTab === "about" ? "translate-x-0" : "translate-x-full"}
            `}
          />
          <button
            onClick={() => setActiveTab("about")}
            className={`relative z-10 flex-1 basis-0 px-3 py-2 rounded-full text-xs xs:text-sm sm:text-base md:text-lg font-sanchez transition-colors duration-300 transition-transform duration-100 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C42344] border-0
              ${activeTab === "about"
                ? "text-white dark:text-neutral-900"
                : "text-gray-600 dark:text-neutral-200 hover:text-gray-800 dark:hover:text-white"
              }`}
          >
            About Me
          </button>
          <button
            onClick={() => setActiveTab("skills")}
            className={`relative z-10 flex-1 basis-0 px-3 py-2 rounded-full text-xs xs:text-sm sm:text-base md:text-lg font-sanchez transition-colors duration-300 transition-transform duration-100 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C42344] border-0
              ${activeTab === "skills"
                ? "text-white dark:text-neutral-900"
                : "text-gray-600 dark:text-neutral-200 hover:text-gray-800 dark:hover:text-white"
              }`}
          >
            Skills
          </button>
        </motion.div>
        <motion.div
          className="w-full max-w-2xl mx-auto relative"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {activeTab === "about" && (
              <motion.div
                key="about"
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                className="w-full flex-shrink-0 px-2 sm:px-4 py-4"
              >
                <div className="w-full bg-white/80 dark:bg-neutral-900/80 rounded-2xl shadow p-4 sm:p-6 border-l-4 border-cyan-400 dark:border-cyan-500 text-center">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent text-center">
                    More than just a full-stack dev.
                  </h2>
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg text-neutral-700 dark:text-neutral-200 font-arapey text-center">
                    <li>🧪 Experimental by nature, detail-obsessed by choice</li>
                    <li>🎧 Codes to hip-hop and metal riffs</li>
                    <li>🛠️ Builds tools that solve real-life problems</li>
                    <li>🚀 Obsessed with performance & clean aesthetics</li>
                    <li>🧠 Finds flow in vibe coding and database structuring</li>
                    <li>♟️ Chess tactician & badminton weekend warrior</li>
                    <li>🧠 Solves problems with a creative twist</li>
                  </ul>
                </div>
              </motion.div>
            )}
            {activeTab === "skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                className="w-full flex-shrink-0"
              >
                <SkillsLanguages />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          id="projects"
          className="w-full scroll-mt-20"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Projects />
        </motion.div>
        <section id="contact" className="w-[85%] md:w-[85%] lg:w-full scroll-mt-20 mt-4 sm:mt-8 md:mt-12 min-h-[6vh] sm:min-h-[10vh] md:min-h-[14vh] mx-auto">
          <ContactForm />
        </section>
        <ParallaxBackground />
        <Toast message={toast.message} visible={toast.visible} onClose={hideToast} />
        <ScrollToTopButton />
      </div>
    </ToastContext.Provider>
  );
}

export default App;
