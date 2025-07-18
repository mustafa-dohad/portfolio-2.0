import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle({ isDark, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle dark mode"
      className="fixed md:top-5 md:right-6 bottom-5 right-5 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur rounded-full p-3 shadow-lg border border-gray-200 dark:border-gray-800 transition-colors duration-200 hover:bg-cyan-50 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-cyan-500" />
      ) : (
        <Moon className="w-5 h-5 text-cyan-500" />
      )}
    </button>
  );
} 