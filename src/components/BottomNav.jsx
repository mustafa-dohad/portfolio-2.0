import { Home, BadgePercent, FolderOpen, Mail } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "Skills", href: "#skills", icon: BadgePercent },
  { name: "Projects", href: "#projects", icon: FolderOpen },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-4 left-12 flex gap-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur rounded-full px-4 py-2 shadow-lg z-50">
      {navItems.map(({ name, href, icon: Icon }) => (
        <a
          key={name}
          href={href}
          aria-label={name}
          className="group relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-150 hover:bg-cyan-50 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          <Icon className="w-6 h-6 text-gray-700 dark:text-gray-200 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-150" />
          {/* Tooltip */}
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-900 text-white text-xs opacity-0 group-hover:opacity-100 group-focus:opacity-100 pointer-events-none transition-opacity duration-150 whitespace-nowrap font-orbitron">
            {name}
          </span>
        </a>
      ))}
    </nav>
  );
} 