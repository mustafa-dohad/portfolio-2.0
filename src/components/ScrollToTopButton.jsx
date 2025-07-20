import React, { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-4 z-50 p-2 rounded-full bg-white/80 dark:bg-gray-900/80 shadow-lg border border-neutral-200 dark:border-neutral-700 text-cyan-500 hover:bg-cyan-50 dark:hover:bg-gray-800 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} backdrop-blur`}
      style={{ transition: 'opacity 0.3s' }}
    >
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
} 