import React, { useEffect, useRef } from "react";
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
  const skills = [
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss3 },
    { name: "JavaScript", icon: SiJavascript },
    { name: "React.js", icon: FaReact },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "React Native", icon: SiReactNative },
    { name: "Expo", icon: SiExpo },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Java", icon: FaJava },
    { name: "C", icon: SiCplusplus },
    { name: "Git", icon: SiGit },
    { name: "Postman", icon: SiPostman },
    { name: "VS Code", icon: BiLogoVisualStudio },
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
            marquee1Ref.current.style.transition = 'all 0.5s ease-in-out';
            marquee2Ref.current.style.transition = 'all 0.5s ease-in-out';
            
            if (isScrollingDown.current) {
              marquee1Ref.current.style.animationDirection = "normal";
              marquee2Ref.current.style.animationDirection = "reverse";
            } else {
              marquee1Ref.current.style.animationDirection = "reverse";
              marquee2Ref.current.style.animationDirection = "normal";
            }
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My <span className="text-indigo-600 dark:text-indigo-400">Tech Stack</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies I work with daily
          </p>
        </div>

        {/* First Marquee Row */}
        <div className="relative w-full overflow-hidden mb-6">
          <div 
            ref={marquee1Ref}
            className="flex animate-marquee whitespace-nowrap"
            style={{ width: "fit-content" }}
          >
            {duplicatedSkills.map((skill, index) => (
              <div
                key={`first-${index}`}
                className="inline-flex items-center justify-center w-24 h-24 mx-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 flex-shrink-0"
              >
                <skill.icon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
              </div>
            ))}
          </div>
        </div>

        {/* Second Marquee Row */}
        <div className="relative w-full overflow-hidden">
          <div 
            ref={marquee2Ref}
            className="flex animate-marquee whitespace-nowrap"
            style={{ width: "fit-content" }}
          >
            {[...duplicatedSkills].reverse().map((skill, index) => (
              <div
                key={`second-${index}`}
                className="inline-flex items-center justify-center w-24 h-24 mx-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 flex-shrink-0"
              >
                <skill.icon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
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
          animation: marquee 80s linear infinite;
          display: flex;
        }
        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 40s;
          }
        }
      `}</style>
    </section>
  );
}