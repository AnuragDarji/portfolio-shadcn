import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiFlutter,
  SiMongodb,
  SiGit,
  SiCplusplus,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiPostman,
  SiReact as SiReactNative,
  SiExpo,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaJava } from "react-icons/fa";

export function SkillsSection() {
  const skills = [
    // Frontend
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "React.js", icon: FaReact, color: "#61DAFB" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    
    // Backend
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#000000" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    
    // Mobile
    { name: "React Native", icon: SiReactNative, color: "#61DAFB" },
    { name: "Expo", icon: SiExpo, color: "#000020" },
    
    // Languages
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Java", icon: FaJava, color: "#007396" },
    { name: "C", icon: SiCplusplus, color: "#A8B9CC" },
    
    // Tools
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "VS Code", icon: BiLogoVisualStudio, color: "#007ACC" },
  ];

  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col  items-center justify-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 border-1 hover:shadow-md"
            >
              <skill.icon
                className="h-8 w-8 mb-2"
                style={{ color: skill.color }}
              />
              <span className="text-sm font-medium text-center text-gray-700 dark:text-gray-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}