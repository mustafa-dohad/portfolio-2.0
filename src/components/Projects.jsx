import React from "react";
import {
  ExternalLink,
  Github,
  DollarSign,
  CheckSquare,
  Cloud,
  User,
  ShoppingBag,
  MessageCircle,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ExpenseFlow",
    description: "Smart expense tracking with AI-powered categorization and budget insights",
    image: "/placeholder.svg",
    tags: ["HTML", "CSS", "JS", "PHP", "MYSQL"],
    type: "expense",
    gradient: "from-green-500/10 to-emerald-500/10",
    accent: "border-green-500/20",
    icon: DollarSign,
  },
  {
    id: 7,
    title: "NFA Simulator",
    description: "Visualize and simulate nondeterministic finite automata (NFA) with interactive state diagrams.",
    subtitle: "Interactive state machine playground",
    image: "", // No image, use SVG
    tags: ["Python", "PySimpleGUI", "Graphviz", "State Machine Logic"],
    type: "Desktop GUI Application",
    accent: "border-gray-200",
    icon: null, // We'll use a custom SVG
    github: "https://github.com/mustafa-dohad/nfa-simulator",
    demo: "https://youtu.be/5VZsjyMqn4s?si=5l0K09kO1MducQYL",
    automata: true,
  },
  {
    id: 8,
    title: "Veterinary Clinic System",
    description: "C CLI app for veterinary clinic management with appointment tracking.",
    image: "", // No image, custom terminal UI
    tags: ["C language", "Command-line application"],
    type: "Command-line application",
    accent: "border-gray-300",
    icon: null, // Custom terminal UI
    github: "https://github.com/mustafa-dohad/Veterinary-Clinic-System",
    terminal: true,
  },
  {
    id: 3,
    title: "WeatherWise",
    description: "Beautiful weather app with location-based forecasts and climate insights",
    image: "/placeholder.svg",
    tags: ["React Native", "API", "Maps", "Charts"],
    type: "weather",
    gradient: "from-sky-500/10 to-blue-500/10",
    accent: "border-sky-500/20",
    icon: Cloud,
  },
  {
    id: 4,
    title: "Calculator",
    description: "Modern iOS-style calculator with clean design and smooth animations",
    image: "", // No image, custom calculator UI
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    type: "Calculator",
    accent: "border-gray-300",
    icon: null, // Custom calculator UI
    github: "https://github.com/mustafa-dohad/calculator",
    demo: "https://dohad-calculator.netlify.app",
    calculator: true,
  },
  {
    id: 5,
    title: "ShopSphere",
    description: "Modern e-commerce platform with advanced filtering and payment integration",
    image: "/placeholder.svg",
    tags: ["React", "Stripe", "Redux", "Express"],
    type: "ecommerce",
    gradient: "from-orange-500/10 to-red-500/10",
    accent: "border-orange-500/20",
    icon: ShoppingBag,
  },
  {
    id: 6,
    title: "ChatFlow",
    description: "Real-time messaging app with end-to-end encryption and file sharing",
    image: "/placeholder.svg",
    tags: ["Socket.io", "React", "Node.js", "Encryption"],
    type: "chat",
    gradient: "from-indigo-500/10 to-purple-500/10",
    accent: "border-indigo-500/20",
    icon: MessageCircle,
  },
  {
    id: 2,
    title: "TaskMaster Pro",
    description: "Collaborative task management with real-time updates and team analytics",
    image: "/placeholder.svg",
    tags: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    type: "task",
    gradient: "from-blue-500/10 to-cyan-500/10",
    accent: "border-blue-500/20",
    icon: CheckSquare,
  },
];

export default function Projects() {
  const cardBaseClass =
    "group relative rounded-2xl shadow-md overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-lg flex flex-col justify-between h-auto md:h-[280px] lg:h-[280px] min-h-[140px]";
  return (
    <section className="min-h-screen bg-background w-full">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-neutral-100 dark:to-neutral-400 bg-clip-text text-transparent mb-2 font-sanchez">
            Projects
          </h1>
        </div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const Icon = project.icon;
  const cardBaseClass =
    "group relative rounded-2xl shadow-md overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-lg flex flex-col justify-between h-auto md:h-[280px] lg:h-[280px] min-h-[140px]";
  if (project.id === 1) {
    // Custom ExpenseFlow card as a modern credit/debit card
    const dollarCursor = 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\'%3E%3Ctext x=\'0\' y=\'24\' font-size=\'24\'%3E%24%3C/text%3E%3C/svg%3E") 0 24, pointer';
    return (
      <div
        className={`${cardBaseClass} border-2 border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900`}
        style={{ cursor: dollarCursor }}
      >
        {/* Subtle Card Texture Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity duration-500">
          <svg width="100%" height="100%" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <pattern id="subtleDots" patternUnits="userSpaceOnUse" width="16" height="16">
              <circle cx="8" cy="8" r="1" fill="#e5e7eb" opacity="0.18" />
            </pattern>
            <rect width="400" height="220" fill="url(#subtleDots)" />
          </svg>
        </div>
        {/* Card Top Row */}
        <div className="flex items-center justify-between px-4 pt-4">
          {/* Chip */}
          <span className="w-8 h-6 bg-gradient-to-br from-yellow-300 to-yellow-200 dark:from-yellow-400 dark:to-yellow-600 rounded-sm shadow-inner border border-yellow-400 flex items-center justify-center relative overflow-hidden">
            {/* Chip Texture Overlay */}
            <svg className="absolute left-0 top-0 w-full h-full" width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <pattern id="chipTexture" patternUnits="userSpaceOnUse" width="4" height="4">
                <rect x="0" y="0" width="2" height="4" fill="#fef9c3" opacity="0.25" />
              </pattern>
              <rect width="32" height="24" fill="url(#chipTexture)" />
            </svg>
            {/* Chip lines */}
            <svg className="absolute left-0 top-0 w-full h-full" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="32" height="24" fill="none" />
              <line x1="6" y1="4" x2="26" y2="4" stroke="#b0b3b8" strokeWidth="1" opacity="0.7" />
              <line x1="6" y1="8" x2="26" y2="8" stroke="#b0b3b8" strokeWidth="1" opacity="0.7" />
              <line x1="6" y1="12" x2="26" y2="12" stroke="#b0b3b8" strokeWidth="1" opacity="0.7" />
              <line x1="6" y1="16" x2="26" y2="16" stroke="#b0b3b8" strokeWidth="1" opacity="0.7" />
              <line x1="6" y1="20" x2="26" y2="20" stroke="#b0b3b8" strokeWidth="1" opacity="0.7" />
            </svg>
          </span>
          {/* Card Number */}
          <span className="tracking-widest text-xs sm:text-sm font-mono select-none px-2 text-gray-500 dark:text-gray-300"
            style={{
              textShadow: '0 1px 2px #fff8, 0 1px 0 #bbb8',
              letterSpacing: '0.15em',
              fontWeight: 700,
            }}
          >
            4532 9821 1743 2210
          </span>
          {/* Card Icon */}
          <Icon className="w-6 h-6 text-neutral-500 dark:text-neutral-300" />
        </div>
        {/* Card Content */}
        <div className="flex-1 flex flex-col justify-center px-4 py-2">
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-1 font-sanchez tracking-wide">{project.title}</h3>
          <p className="text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-300 mb-4 font-arapey max-w-[90%]">{project.description}</p>
          {/* Transactions */}
          <div className="flex items-center justify-between mb-4">
            <span className="flex items-center gap-1 text-green-600 dark:text-green-400 font-mono text-base">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17l5-5 5 5" /></svg>
              +$2,450.00
            </span>
            <span className="flex items-center gap-1 text-red-500 font-mono text-base">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-5 5-5-5" /></svg>
              -$1,230.50
            </span>
          </div>
          {/* Tags as categories */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => (
              <span key={tag} className="bg-neutral-100 text-neutral-700 px-2 py-1 rounded text-xs font-sanchez border border-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:border-neutral-700">
                {tag}
              </span>
            ))}
          </div>
        </div>
        {/* Card Bottom Row (Actions) */}
        <div className="flex items-center justify-between px-4 pb-4">
          <a
            href="https://github.com/mustafa-dohad/expense-tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200 group/btn font-sanchez hover:border hover:border-neutral-800 dark:hover:border-neutral-200 rounded-lg px-3 py-1.5"
            style={{ cursor: dollarCursor }}
          >
            <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
            View Statement
          </a>
          <a
            href="https://mustafa-dohad.infinityfreeapp.com/public/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200 group/btn font-sanchez hover:border hover:border-neutral-800 dark:hover:border-neutral-200 rounded-lg px-3 py-1.5"
            style={{ cursor: dollarCursor }}
          >
            <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
            Open Account
          </a>
        </div>

      </div>
    );
  }
  if (project.automata) {
    // Custom NFA Simulator card with a cool, minimal Slate & Cyan theme
    const circleCursor = 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\'%3E%3Ccircle cx=\'16\' cy=\'16\' r=\'10\' fill=\'none\' stroke=\'white\' stroke-width=\'2\'/%3E%3C/svg%3E") 16 16, pointer';
    return (
      <div
        className={`${cardBaseClass} border border-[#38bdf8] bg-gradient-to-br from-[#233554] to-[#0f172a] rounded-xl shadow-none relative p-2 flex flex-col justify-between`}
        style={{ cursor: circleCursor }}
      >
        {/* Glowing Status Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#38bdf8] via-[#60a5fa] to-[#38bdf8] blur-[2px] opacity-80 z-20 rounded-t-xl" />
        {/* Subtle Geometric + Cyan Pattern Background */}
        <div className="absolute inset-0 pointer-events-none z-0 rounded-xl overflow-hidden">
          <svg width="100%" height="100%" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="nfaGrid" width="14" height="14" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="14" height="14" fill="none" />
                <path d="M14 0 L0 0 0 14" fill="none" stroke="#38bdf8" strokeWidth="0.7" opacity="0.13" />
                <circle cx="7" cy="7" r="1.2" fill="#38bdf8" opacity="0.08" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#nfaGrid)" />
            {/* Faint binary/code overlay */}
            <text x="12%" y="30%" fontSize="10" fill="#38bdf8" opacity="0.13">101101</text>
            <text x="70%" y="60%" fontSize="10" fill="#60a5fa" opacity="0.11">{`{}`}</text>
            <text x="40%" y="80%" fontSize="10" fill="#38bdf8" opacity="0.11">λ</text>
          </svg>
        </div>
        {/* Card Content */}
        <div className="flex-1 flex flex-col justify-center px-6 py-6 z-10 text-[15px] sm:text-base md:text-lg">
          {/* Custom Automata SVG Icon and Title */}
          <div className="flex items-center gap-3 mb-3">
            <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="18" r="7" stroke="#38bdf8" strokeWidth="1.2" fill="#1e293b" />
              <circle cx="28" cy="8" r="7" stroke="#38bdf8" strokeWidth="1.2" fill="#1e293b" />
              <circle cx="28" cy="28" r="7" stroke="#38bdf8" strokeWidth="1.2" fill="#1e293b" />
              <path d="M15 18 Q18 8 28 8" stroke="#38bdf8" strokeWidth="0.9" fill="none" markerEnd="url(#arrowhead2)" />
              <path d="M28 15 Q28 20 28 28" stroke="#38bdf8" strokeWidth="0.9" fill="none" markerEnd="url(#arrowhead2)" />
              <path d="M23 28 Q15 28 8 18" stroke="#38bdf8" strokeWidth="0.9" fill="none" markerEnd="url(#arrowhead2)" />
              <defs>
                <marker id="arrowhead2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L8,3 Z" fill="#38bdf8" />
                </marker>
              </defs>
            </svg>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#38bdf8] font-orbitron tracking-wide">
              {project.title}
            </h3>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-[#e5e7eb] font-arapey mb-4 max-w-[90%]">
            {project.description}
          </p>
          {/* Tags as ultra-minimal pills */}
          <div className="flex flex-nowrap gap-2 mb-2 overflow-hidden">
            {['Python', 'Graphviz', 'PySimpleGUI', 'Algorithms'].map(tag => (
              <span key={tag} className="bg-[#1e293b] text-[#38bdf8] px-2 py-0.5 rounded-lg text-xs font-orbitron border border-[#38bdf8] whitespace-nowrap overflow-hidden text-ellipsis">
                {tag}
              </span>
            ))}
          </div>
        </div>
        {/* Card Bottom Row (Actions) */}
        <div className="flex items-center justify-between px-6 pb-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-orbitron text-[#38bdf8] hover:border hover:border-[#38bdf8] hover:bg-[#1e293b]/40 px-3 py-1.5 rounded-lg transition-colors duration-200 group/btn"
            style={{ cursor: circleCursor }}
          >
            <Github className="w-4 h-4" />
            View Code
          </a>
          <a
            href="https://youtu.be/5VZsjyMqn4s?si=5l0K09kO1MducQYL"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-orbitron text-[#38bdf8] hover:border hover:border-[#38bdf8] hover:bg-[#1e293b]/40 px-3 py-1.5 rounded-lg transition-colors duration-200 group/btn"
            style={{ cursor: circleCursor }}
          >
            <ExternalLink className="w-4 h-4" />
            Watch Video
          </a>
        </div>
      </div>
    );
  }
  if (project.terminal) {
    // Custom Veterinary Clinic System card as a realistic terminal window
    const catCursor = 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\'%3E%3Ctext x=\'0\' y=\'24\' font-size=\'24\'%3E%F0%9F%90%B1%3C/text%3E%3C/svg%3E") 0 24, pointer';
    return (
      <div
        className="rounded-xl shadow-lg border border-[#23272e] bg-[#0d1117] relative flex flex-col h-auto md:h-[280px] lg:h-[280px] min-h-[140px] overflow-hidden transition-transform duration-300 hover:scale-105"
        style={{ cursor: catCursor }}
      >
        {/* macOS Terminal Top Bar */}
        <div className="flex items-center h-8 px-4 bg-[#1f2937] border-b border-[#374151]">
          <div className="flex items-center gap-2 mr-4">
            <span className="w-3 h-3 rounded-full bg-red-500 mr-1 border border-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow-400 mr-1 border border-yellow-300" />
            <span className="w-3 h-3 rounded-full bg-green-500 border border-green-400" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-[#9ca3af] text-xs font-mono">Terminal — bash — 80×24</span>
          </div>
        </div>
        {/* Terminal Content */}
        <div className="flex-1 flex flex-col justify-center px-6 py-4 font-mono text-xs bg-[#0d1117]">
          {/* Command Line */}
          <div className="mb-3 flex items-center">
            <span className="text-[#6b7280] mr-2 text-[8px]">~</span>
            <span className="text-[#6b7280] mr-2 text-xs">$</span>
            <span className="text-[#f8f8f2] font-mono text-sm md:text-base font-bold">./vet-clinic-management-system</span>
            <span className="text-[#22c55e] ml-1 text-xs" style={{ animation: 'blink 1s infinite' }}>|</span>
          </div>
          {/* Terminal Output */}
          <div className="bg-[#161b22] border border-[#30363d] rounded p-3 mb-3">
            <pre className="whitespace-pre-line text-[#c9d1d9] text-[10px] md:text-xs leading-relaxed font-mono">{project.description}</pre>
          </div>
          {/* File Info */}
          <div className="text-[#8b949e] text-[10px] mb-3">
            <span>Size: 15.2KB</span>
            <span className="mx-2">|</span>
            <span>Lines: 847</span>
          </div>
          {/* Tags as terminal-style labels */}
          <div className="flex gap-2 flex-wrap">
            {project.tags.map(tag => (
              <span key={tag} className="bg-[#21262d] text-[#58a6ff] px-2 py-1 rounded text-[9px] font-mono border border-[#30363d] whitespace-nowrap">
                {tag}
              </span>
            ))}
          </div>
        </div>
        {/* Actions full width below tags */}
        <div className="flex gap-2 px-6 pb-4 w-full bg-[#0d1117]">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1 text-xs font-mono text-[#58a6ff] hover:border hover:border-[#58a6ff] hover:bg-[#21262d]/40 px-3 py-1.5 rounded transition-colors duration-200 group/btn"
            style={{ cursor: catCursor }}
          >
            <Github className="w-4 h-4" />
            View Code
          </a>
        </div>
      </div>
    );
  }
  if (project.calculator) {
    // Custom iOS/iPadOS Calculator card
    const calculatorCursor = 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\'%3E%3Ctext x=\'0\' y=\'24\' font-size=\'24\' fill=\'white\'%3E%3D%3C/text%3E%3C/svg%3E") 0 24, pointer';
    return (
      <div
        className={`${cardBaseClass} bg-[#000000] rounded-3xl shadow-2xl border border-[#333333] relative overflow-hidden`}
        style={{ cursor: calculatorCursor }}
      >
        {/* Calculator Body */}
        <div className="flex flex-col h-full">
          {/* Calculator Screen */}
          <div className="bg-[#000000] p-4 flex items-center justify-center min-h-[60px] border-b border-[#333333]">
            <div className="text-center">
              <div className="text-[#ffffff] text-xl font-bold font-mono tracking-wider">
                Calculator WebApp
              </div>
            </div>
          </div>
          
          {/* Calculator Buttons Container */}
          <div className="flex-1 p-3">
            {/* Row 1 */}
            <div className="flex justify-center gap-1 mb-1">
              <div className="bg-[#666666] rounded-full w-16 h-11 flex items-center justify-center text-white text-sm font-light hover:bg-[#999999] transition-colors">
                7
              </div>
              <div className="bg-[#666666] rounded-full w-16 h-11 flex items-center justify-center text-white text-sm font-light hover:bg-[#999999] transition-colors">
                8
              </div>
              <div className="bg-[#666666] rounded-full w-16 h-11 flex items-center justify-center text-white text-sm font-light hover:bg-[#999999] transition-colors">
                9
              </div>
              <div className="bg-[#333333] rounded-full w-16 h-11 flex items-center justify-center text-white text-sm font-light hover:bg-[#666666] transition-colors">
                AC
              </div>
              <div className="bg-[#ff9500] rounded-full w-16 h-11 flex items-center justify-center text-white text-sm font-light hover:bg-[#ffaa33] transition-colors">
                ÷
              </div>
            </div>
            
            {/* Row 2 */}
            <div className="flex justify-center gap-1 mb-1">
              <div className="bg-[#666666] rounded-full w-16 h-11 flex items-center justify-center text-white text-sm font-light hover:bg-[#999999] transition-colors">
                4
              </div>
              <div className="bg-[#666666] rounded-full w-16 h-11 flex items-center justify-center text-white text-sm font-light hover:bg-[#999999] transition-colors">
                5
              </div>
              <div className="bg-[#666666] rounded-full w-16 h-11 flex items-center justify-center text-white text-sm font-light hover:bg-[#999999] transition-colors">
                6
              </div>
              <div className="bg-[#333333] rounded-full w-16 h-11 flex items-center justify-center text-white text-sm font-light hover:bg-[#666666] transition-colors">
                ±
              </div>
              <div className="bg-[#ff9500] rounded-full w-16 h-11 flex items-center justify-center text-white text-sm font-light hover:bg-[#ffaa33] transition-colors">
                ×
              </div>
            </div>
            
            {/* Row 3 */}
            <div className="flex justify-center gap-1 mb-1">
              <div className="bg-[#666666] rounded-full w-16 h-11 flex items-center justify-center text-white text-sm font-light hover:bg-[#999999] transition-colors">
                1
              </div>
              <div className="bg-[#666666] rounded-full w-16 h-11 flex items-center justify-center text-white text-sm font-light hover:bg-[#999999] transition-colors">
                2
              </div>
              <div className="bg-[#666666] rounded-full w-16 h-11 flex items-center justify-center text-white text-sm font-light hover:bg-[#999999] transition-colors">
                3
              </div>
              <div className="bg-[#333333] rounded-full w-16 h-11 flex items-center justify-center text-white text-sm font-light hover:bg-[#666666] transition-colors">
                %
              </div>
              <div className="bg-[#ff9500] rounded-full w-16 h-11 flex items-center justify-center text-white text-sm font-light hover:bg-[#ffaa33] transition-colors">
                −
              </div>
            </div>
            
            {/* Row 4 */}
            <div className="flex justify-center gap-1">
              {/* GitHub Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#333333] rounded-full w-16 h-11 flex items-center justify-center text-white text-sm font-medium hover:bg-[#666666] transition-colors group"
                style={{ cursor: calculatorCursor }}
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <div className="bg-[#666666] rounded-full w-16 h-11 flex items-center justify-center text-white text-sm font-light hover:bg-[#999999] transition-colors">
                0
              </div>
              <div className="bg-[#666666] rounded-full w-16 h-11 flex items-center justify-center text-white text-sm font-light hover:bg-[#999999] transition-colors">
                .
              </div>
              <div className="bg-[#333333] rounded-full w-16 h-11 flex items-center justify-center text-white text-sm font-light hover:bg-[#666666] transition-colors">
                +
              </div>
              {/* Demo Button */}
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ff9500] rounded-full w-16 h-11 flex items-center justify-center text-white text-sm font-medium hover:bg-[#ffaa33] transition-colors group"
                style={{ cursor: calculatorCursor }}
              >
                <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className={`${cardBaseClass} ${project.accent} border-2 hover:border-opacity-50 bg-white dark:bg-neutral-900`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />
      <div className="p-0 relative z-10">
        {/* Project Type Header */}
        <div className="relative">
          <div className="absolute top-4 left-4 z-20">
            <div className="flex items-center gap-2 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm rounded-full px-3 py-1.5 border border-neutral-200 dark:border-neutral-700">
              <Icon className="w-4 h-4" />
              <span className="text-xs font-medium capitalize font-sanchez">{project.type}</span>
            </div>
          </div>
          {/* Image */}
          <div className="relative overflow-hidden rounded-t-2xl">
            <img
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
        </div>
        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 font-sanchez">
            {project.title}
          </h3>
          {/* Description */}
          <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-4 line-clamp-2 font-arapey">{project.description}</p>
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 font-sanchez border border-neutral-200 dark:border-neutral-700"
              >
                {tag}
              </span>
            ))}
          </div>
          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 text-sm font-medium text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200 group/btn"
              style={{ cursor: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2732%27 height=%2732%27%3E%3Ccircle cx=%2716%27 cy=%2716%27 r=%2710%27 fill=%27white%27/%3E%3C/svg%3E") 16 16, pointer' }}
            >
              <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
              Code
            </button>
            <button className="flex items-center gap-2 text-sm font-medium text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200 group/btn"
              style={{ cursor: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2732%27 height=%2732%27%3E%3Ccircle cx=%2716%27 cy=%2716%27 r=%2710%27 fill=%27white%27/%3E%3C/svg%3E") 16 16, pointer' }}
            >
              <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
              Live Demo
            </button>
          </div>
        </div>
        {/* Unique Personality Elements */}
        {project.type === "expense" && (
          <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
            <div className="text-right text-xs font-mono">
              <div className="text-green-600">+$2,450.00</div>
              <div className="text-red-600">-$1,230.50</div>
            </div>
          </div>
        )}
        {project.type === "task" && (
          <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
            <div className="space-y-1">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            </div>
          </div>
        )}
        {project.type === "chat" && (
          <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
            <div className="space-y-1">
              <div className="w-8 h-2 bg-blue-400/30 dark:bg-blue-300/30 rounded-full"></div>
              <div className="w-6 h-2 bg-neutral-300 dark:bg-neutral-700 rounded-full ml-auto"></div>
              <div className="w-10 h-2 bg-blue-400/30 dark:bg-blue-300/30 rounded-full"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 