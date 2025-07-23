import React, { useState, useContext } from "react";
import githubIcon from "../assets/icons/social/Github Icon.png";
import githubIconHover from "../assets/icons/social/Github-hover.png";
import githubIconWhite from "../assets/icons/social/Github Icon (white).png";
import githubIconHoverWhite from "../assets/icons/social/Github-hover(white).png";
import linkedinIcon from "../assets/icons/social/LinkedIn Icon.png";
import linkedinIconHover from "../assets/icons/social/LinkedIn-hover.png";
import linkedinIconWhite from "../assets/icons/social/LinkedIn Icon (white).png";
import linkedinIconHoverWhite from "../assets/icons/social/LinkedIn-hover(white).png";
import twitterIcon from "../assets/icons/social/X Icon.png";
import twitterIconHover from "../assets/icons/social/X-hover.png";
import twitterIconWhite from "../assets/icons/social/X Icon (white).png";
import twitterIconHoverWhite from "../assets/icons/social/X-hover(white).png";
import profilePic from "../assets/profile/profile.jpg";
// import resumePDF from "../assets/resume/MustafaDohad-Resume.pdf";
import { ToastContext } from "../App";

const socialLinks = [
  {
    href: "https://github.com/mustafa-dohad",
    label: "GitHub",
    icon: githubIcon,
    hoverIcon: githubIconHover,
    iconWhite: githubIconWhite,
    hoverIconWhite: githubIconHoverWhite,
  },
  {
    href: "https://www.linkedin.com/in/mustafa-dohad/",
    label: "LinkedIn",
    icon: linkedinIcon,
    hoverIcon: linkedinIconHover,
    iconWhite: linkedinIconWhite,
    hoverIconWhite: linkedinIconHoverWhite,
  },
  {
    href: "https://x.com/DohadMustafa",
    label: "Twitter",
    icon: twitterIcon,
    hoverIcon: twitterIconHover,
    iconWhite: twitterIconWhite,
    hoverIconWhite: twitterIconHoverWhite,
  },
];

export default function PersonalInfo() {
  const { showToast } = useContext(ToastContext);
  const [hovered, setHovered] = useState(null);

  // Detect dark mode
  const [isDark, setIsDark] = useState(false);
  React.useEffect(() => {
    const update = () => setIsDark(document.documentElement.classList.contains('dark'));
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center w-full max-w-4xl px-4 sm:px-8 py-0 mt-2 lg:mt-4 mb-1 lg:mb-2 mx-auto min-h-[48vh]">
      {/* Profile Column */}
      <div className="flex flex-col items-center justify-center w-full lg:w-[45%] lg:max-w-none mb-4 lg:mb-0 lg:mr-8">
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-56 lg:h-56 rounded-full bg-neutral-200 dark:bg-[#23262F] flex items-center justify-center overflow-hidden flex-shrink-0">
          {profilePic ? (
            <img src={profilePic} alt="Profile" className="w-full h-full object-cover rounded-full" />
          ) : (
            <span className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-neutral-400 select-none">👤</span>
          )}
        </div>
      </div>
      {/* Info Column */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-[55%] max-w-lg lg:max-w-none">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-neutral-900 dark:text-[#FAFAFA] tracking-tight mb-1 font-sanchez">Mustafa Murtaza Dohad</h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-xl text-neutral-500 dark:text-[#A3A3A3] font-medium mb-2 font-arapey">Full Stack Developer</p>
        {/* Location */}
        <div className="flex items-center justify-center lg:justify-start space-x-2 text-neutral-400 dark:text-[#A3A3A3] mb-2 font-sanchez">
          <span className="text-sm sm:text-base md:text-lg lg:text-lg">Karachi, Pakistan</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-7 lg:h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
        </div>
        {/* Email */}
        <a
          href="mailto:mustafamurtazadohad@gmail.com"
          className="flex items-center justify-center lg:justify-start space-x-2 text-neutral-500 dark:text-[#A3A3A3] mb-2 font-sanchez hover:text-blue-500 dark:hover:text-blue-400 focus:text-blue-500 dark:focus:text-blue-400 transition-colors outline-none"
          aria-label="Send email to mustafamurtazadohad@gmail.com"
          onClick={e => {
            e.preventDefault();
            navigator.clipboard.writeText('mustafamurtazadohad@gmail.com');
            showToast('Email copied to clipboard!');
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-7 lg:h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          <span className="text-sm sm:text-base md:text-lg lg:text-lg select-all">mustafamurtazadohad@gmail.com</span>
        </a>
        {/* Social Links */}
        <div className="flex space-x-4 sm:space-x-5 mb-4 lg:mb-6 justify-center lg:justify-start">
          {socialLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="rounded-full bg-transparent p-2 transition-colors"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => showToast(`${link.label} link opened!`)}
            >
              <span className="relative block w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 transition-transform duration-200 group-hover:-translate-y-1">
                <img
                  src={isDark ? link.iconWhite : link.icon}
                  alt={link.label}
                  className={`absolute inset-0 w-full h-full object-contain transition-all duration-400 ease-in-out ${hovered === idx ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}
                  draggable="false"
                />
                <img
                  src={isDark ? link.hoverIconWhite : link.hoverIcon}
                  alt={link.label + ' hover'}
                  className={`absolute inset-0 w-full h-full object-contain transition-all duration-400 ease-in-out ${hovered === idx ? 'opacity-100 scale-110' : 'opacity-0 scale-100'}`}
                  draggable="false"
                />
              </span>
            </a>
          ))}
        </div>
        {/* Resume Download Button */}
        <a
          href="/resume/Mustafa Dohad - Resume.pdf"
          download="Mustafa Dohad - Resume.pdf"
          className="px-5 py-2 rounded-full bg-neutral-100 dark:bg-[#23262F] text-neutral-700 dark:text-[#FAFAFA] font-medium transition-all duration-200 text-base sm:text-lg hover:bg-[#C42344] dark:hover:bg-cyan-400 hover:text-white dark:hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:focus:ring-cyan-400 font-sanchez transform hover:scale-105"
          onClick={() => showToast('Resume download started!')}
        >
          Download Resume
        </a>
      </div>
    </section>
  );
} 