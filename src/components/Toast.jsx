import React, { useEffect } from "react";

export default function Toast({ message, visible, onClose }) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    <div
      className={`fixed left-1/2 bottom-8 z-[9999] px-4 py-2 rounded-full bg-neutral-900/90 text-white text-sm font-sanchez shadow-lg pointer-events-none transition-all duration-300 transform -translate-x-1/2
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  );
} 