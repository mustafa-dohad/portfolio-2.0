import React from "react";

import htmlIcon from "../assets/icons/tech/Html.png";
import cssIcon from "../assets/icons/tech/CSS.png";
import jsIcon from "../assets/icons/tech/JS.png";
import cppIcon from "../assets/icons/tech/C++.png";
import nodeIcon from "../assets/icons/tech/NodeJS.png";
import mysqlIcon from "../assets/icons/tech/Mysql.png";
import phpIcon from "../assets/icons/tech/Php.png";
import reactIcon from "../assets/icons/tech/React.png";
import javaIcon from "../assets/icons/tech/Java.png";
import pythonIcon from "../assets/icons/tech/Python.png";
import tailwindIcon from "../assets/icons/tech/Tailwind.png";
import gitIcon from "../assets/icons/tech/Git.png";

const skills = [
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "C++", icon: cppIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "MySQL", icon: mysqlIcon },
  { name: "PHP", icon: phpIcon },
  { name: "React", icon: reactIcon },
  { name: "Java", icon: javaIcon },
  { name: "Python", icon: pythonIcon },
  { name: "Tailwind", icon: tailwindIcon },
  { name: "Git", icon: gitIcon },
];

export default function SkillsLanguages() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-1 sm:py-2 lg:py-4 mb-0.5 sm:mb-1 lg:mb-2">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-4 md:gap-6 lg:gap-8 justify-items-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center group transition-transform duration-200 ease-in-out w-20 h-20 sm:w-24 sm:h-24 rounded-lg gap-1 sm:hover:bg-white sm:hover:border sm:hover:border-neutral-300 sm:hover:shadow-md sm:dark:hover:bg-neutral-900"
          >
            {skill.icon ? (
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain mb-1"
              />
            ) : (
              <span className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full bg-transparent text-neutral-500 dark:text-neutral-400 font-semibold border border-neutral-200 dark:border-neutral-700 mb-1">
                {skill.name[0]}
              </span>
            )}
            <span className="text-xs sm:text-sm md:text-base text-neutral-700 dark:text-neutral-200 font-sanchez text-center select-none leading-tight">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
} 