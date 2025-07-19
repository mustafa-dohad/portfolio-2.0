import { Briefcase } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function TopNav({ theme, handleThemeChange, MaterialUISwitch }) {
  return (
    <nav className="flex fixed top-0 left-0 w-full h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur z-50 shadow-sm items-center px-8 justify-between font-baloo">
      {/* Logo/Name */}
      <a href="#home" className="text-xl font-bold tracking-wide text-gray-900 dark:text-white select-none">
        {'< mustafa />'}
      </a>
      {/* Nav Links - Centered */}
      <div className="hidden md:flex gap-8 items-center justify-center flex-1">
        {navLinks.map(link => (
          <a
            key={link.name}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-150 px-2 py-1 border-b-2 border-transparent hover:border-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            {link.name}
          </a>
        ))}
      </div>
      {/* Material UI Dark Mode Switch */}
      <div className="flex items-center">
        <div className="scale-75 md:scale-100">
          <MaterialUISwitch
            checked={theme === "dark"}
            onChange={handleThemeChange}
            inputProps={{ 'aria-label': 'Toggle dark mode' }}
          />
        </div>
      </div>
    </nav>
  );
} 