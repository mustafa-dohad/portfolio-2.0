import { Home, BadgePercent, FolderOpen, Mail } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "Skills", href: "#skills", icon: BadgePercent },
  { name: "Projects", href: "#projects", icon: FolderOpen },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 xs:gap-1.5 sm:gap-2 bg-white/80 dark:bg-[#18181B]/80 backdrop-blur rounded-full px-3 py-2 xs:px-4 xs:py-2 sm:px-5 sm:py-3 shadow-lg z-50">
      {navItems.map(({ name, href, icon: Icon }) => (
        name === "Home" ? (
          <a
            key={name}
            href={href}
            aria-label={name}
            onClick={e => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group relative flex items-center justify-center w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-full transition-all duration-150 hover:bg-cyan-50 dark:hover:bg-[#23262F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
          >
            <Icon className="w-6 h-6 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-gray-700 dark:text-[#FAFAFA] group-hover:text-cyan-500 dark:group-hover:text-[#38BDF8] transition-colors duration-150 transition-transform duration-200 group-hover:-translate-y-1" />
            {/* Tooltip */}
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-[#23262F] text-white text-xs opacity-0 group-hover:opacity-100 group-focus:opacity-100 pointer-events-none transition-opacity duration-150 whitespace-nowrap font-orbitron">
              {name}
            </span>
          </a>
        ) : (
          <a
            key={name}
            href={href}
            aria-label={name}
            className="group relative flex items-center justify-center w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-full transition-all duration-150 hover:bg-cyan-50 dark:hover:bg-[#23262F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
          >
            <Icon className="w-6 h-6 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-gray-700 dark:text-[#FAFAFA] group-hover:text-cyan-500 dark:group-hover:text-[#38BDF8] transition-colors duration-150 transition-transform duration-200 group-hover:-translate-y-1" />
            {/* Tooltip */}
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-[#23262F] text-white text-xs opacity-0 group-hover:opacity-100 group-focus:opacity-100 pointer-events-none transition-opacity duration-150 whitespace-nowrap font-orbitron">
              {name}
            </span>
          </a>
        )
      ))}
    </nav>
  );
} 