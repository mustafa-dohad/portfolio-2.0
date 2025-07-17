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
    <section className="w-full max-w-4xl mx-auto px-4 py-6 sm:py-8">
      <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-neutral-800 dark:text-neutral-100 font-sanchez text-center">Skills & Languages</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 justify-items-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center group"
          >
            {skill.icon ? (
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain mb-1 rounded-lg group-hover:scale-110 group-hover:shadow-md transition-transform duration-200 ease-in-out"
              />
            ) : (
              <span className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg bg-transparent text-neutral-500 dark:text-neutral-400 font-semibold mb-1 border border-neutral-200 dark:border-neutral-700">
                {skill.name[0]}
              </span>
            )}
            <span className="text-xs sm:text-sm md:text-base text-neutral-700 dark:text-neutral-200 font-sanchez text-center select-none">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
} 