import React, { useEffect, useRef } from "react";

export default function ParallaxBackground() {
  const blobRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40; // -20 to 20
      const y = (e.clientY / window.innerHeight - 0.5) * 40; // -20 to 20
      if (blobRef.current) {
        blobRef.current.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div
        ref={blobRef}
        className="absolute left-1/2 top-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-cyan-300/30 via-pink-200/20 to-purple-300/30 blur-3xl opacity-60 transition-transform duration-300"
        style={{ filter: "blur(80px)" }}
      />
    </div>
  );
} 