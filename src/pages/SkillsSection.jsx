import React, { useState, useEffect, useRef } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
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
import { FaReact, FaJava } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";

export function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const skills = [
    { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "React.js", icon: FaReact, color: "text-blue-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "Express", icon: SiExpress, color: "text-gray-400" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    { name: "React Native", icon: SiReactNative, color: "text-blue-300" },
    { name: "Expo", icon: SiExpo, color: "text-gray-700 dark:text-gray-300" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "Java", icon: FaJava, color: "text-red-500" },
    { name: "C", icon: SiCplusplus, color: "text-blue-700" },
    { name: "Git", icon: SiGit, color: "text-orange-600" },
    { name: "Postman", icon: SiPostman, color: "text-orange-400" },
    { name: "VS Code", icon: BiLogoVisualStudio, color: "text-blue-500" },
  ];

  const marquee1Ref = useRef(null);
  const marquee2Ref = useRef(null);
  const sectionRef = useRef(null);
  const lastScrollY = useRef(0);
  const isScrollingDown = useRef(true);
  const animationFrameRef = useRef(null);

  // Duplicate the array for seamless looping
  const duplicatedSkills = [...skills, ...skills, ...skills];

  useEffect(() => {
    // Check if mobile on mount and on resize
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const currentScrollY = window.scrollY;
      isScrollingDown.current = currentScrollY > lastScrollY.current;
      lastScrollY.current = currentScrollY;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight;

      // Only animate when section is in view
      if (scrollPosition > sectionTop && window.scrollY < sectionTop + sectionHeight) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = requestAnimationFrame(() => {
          if (marquee1Ref.current && marquee2Ref.current) {
            // Smooth transition by adding CSS transition
            marquee1Ref.current.style.transition = 'transform 0.5s ease-in-out';
            marquee2Ref.current.style.transition = 'transform 0.5s ease-in-out';
            
            if (isScrollingDown.current) {
              marquee1Ref.current.style.animationPlayState = 'running';
              marquee2Ref.current.style.animationPlayState = 'running';
              marquee1Ref.current.style.animationDirection = "normal";
              marquee2Ref.current.style.animationDirection = "reverse";
            } else {
              marquee1Ref.current.style.animationPlayState = 'running';
              marquee2Ref.current.style.animationPlayState = 'running';
              marquee1Ref.current.style.animationDirection = "reverse";
              marquee2Ref.current.style.animationDirection = "normal";
            }
          }
        });
      } else {
        // Pause animation when not in view
        if (marquee1Ref.current && marquee2Ref.current) {
          marquee1Ref.current.style.animationPlayState = 'paused';
          marquee2Ref.current.style.animationPlayState = 'paused';
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3 md:mb-4">
            My <span className="text-indigo-600 dark:text-indigo-400">Tech Stack</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies I work with daily
          </p>
        </div>

        {/* First Marquee Row */}
        <div className="relative w-full overflow-hidden mb-4 md:mb-6">
          <div 
            ref={marquee1Ref}
            className="flex animate-marquee whitespace-nowrap will-change-transform"
            style={{ width: "fit-content" }}
          >
            {duplicatedSkills.map((skill, index) => (
              <div
                key={`first-${index}`}
                className="inline-flex flex-col items-center justify-center w-16 h-16 md:w-24 md:h-24 mx-1 md:mx-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 flex-shrink-0 transition-all hover:shadow-md "
                onMouseEnter={() => setHoveredSkill(`first-${index}`)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <skill.icon 
                  className={`h-6 w-6 md:h-10 md:w-10 transition-colors duration-300 ${
                    hoveredSkill === `first-${index}` 
                      ? `${skill.color}` 
                      : 'text-gray-400 dark:text-gray-500'
                  }`}
                />
                {/* {isMobile && (
                  <span className="text-xs mt-1 text-gray-500 dark:text-gray-400 truncate w-full px-1">
                    {skill.name}
                  </span>
                )} */}
              </div>
            ))}
          </div>
        </div>

        {/* Second Marquee Row */}
        <div className="relative w-full overflow-hidden">
          <div 
            ref={marquee2Ref}
            className="flex animate-marquee whitespace-nowrap will-change-transform"
            style={{ width: "fit-content" }}
          >
            {[...duplicatedSkills].reverse().map((skill, index) => (
              <div
                key={`second-${index}`}
                className="inline-flex flex-col items-center justify-center w-16 h-16 md:w-24 md:h-24 mx-1 md:mx-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 flex-shrink-0 transition-all hover:shadow-md"
                onMouseEnter={() => setHoveredSkill(`second-${index}`)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <skill.icon 
                  className={`h-6 w-6 md:h-10 md:w-10 transition-colors duration-300 ${
                    hoveredSkill === `second-${index}` 
                      ? `${skill.color}` 
                      : 'text-gray-400 dark:text-gray-500'
                  }`}
                />
                {/* {isMobile && (
                  <span className="text-xs mt-1 text-gray-500 dark:text-gray-400 truncate w-full px-1">
                    {skill.name}
                  </span>
                )} */}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
          display: flex;
          will-change: transform;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 30s;
          }
        }
      `}</style>
    </section>
  );
}