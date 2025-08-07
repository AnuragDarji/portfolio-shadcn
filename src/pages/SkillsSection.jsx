import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiGraphql,
  SiPython,
  SiDocker,
  SiGit,
  SiFigma,
  SiFramer,
} from 'react-icons/si';

import { VscVscode } from "react-icons/vsc";

export function SkillsSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Enhanced scroll animations with different speeds
  const xFrontend = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const xBackend = useTransform(scrollYProgress, [0, 1], ['-30%', '30%']);
  const xTools = useTransform(scrollYProgress, [0, 1], ['0%', '-70%']);

  // Technology data with additional metadata
  const frontendTech = [
    { name: 'React', icon: SiReact, color: '#61DAFB', speed: 1.2 },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000', speed: 1.1 },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', speed: 1.3 },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', speed: 1.0 },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#38B2AC', speed: 1.1 },
    { name: 'Framer', icon: SiFramer, color: '#0055FF', speed: 1.4 },
  ];

  const backendTech = [
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933', speed: 1.2 },
    { name: 'GraphQL', icon: SiGraphql, color: '#E10098', speed: 1.3 },
    { name: 'Python', icon: SiPython, color: '#3776AB', speed: 1.1 },
  ];

  const tools = [
    { name: 'Docker', icon: SiDocker, color: '#2496ED', speed: 1.4 },
    { name: 'Git', icon: SiGit, color: '#F05032', speed: 1.0 },
    { name: 'VS Code', icon: VscVscode, color: '#007ACC', speed: 1.2 },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E', speed: 1.3 },
  ];

  // Function to duplicate items with unique keys
  const duplicateItems = (items) => {
    return [...items, ...items].map((item, index) => ({
      ...item,
      key: `${item.name}-${index}`,
    }));
  };

  return (
    <section
      ref={ref}
      className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden"
    >
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 opacity-5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMEg2MFY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik02MCAwTDAgNjBNMCAwTDYwIDYwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] bg-center"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Tech Stack</span>
        </h2>

        {/* Frontend Technologies */}
        <div className="mb-12 overflow-hidden">
          <motion.div
            style={{ x: xFrontend }}
            className="flex gap-8 w-max"
          >
            {duplicateItems(frontendTech).map((tech) => (
              <TechCard 
                key={tech.key}
                // name={tech.name}
                icon={tech.icon}
                color={tech.color}
                speed={tech.speed}
              />
            ))}
          </motion.div>
        </div>

        {/* Backend Technologies */}
        <div className="mb-12 overflow-hidden">
          <motion.div
            style={{ x: xBackend }}
            className="flex gap-8 w-max"
          >
            {duplicateItems(backendTech).map((tech) => (
              <TechCard 
                key={tech.key}
                // name={tech.name}
                icon={tech.icon}
                color={tech.color}
                speed={tech.speed}
              />
            ))}
          </motion.div>
        </div>

        {/* Tools */}
        <div className="overflow-hidden">
          <motion.div 
            style={{ x: xTools }}
            className="flex gap-8 w-max"
          >
            {duplicateItems(tools).map((tech) => (
              <TechCard 
                key={tech.key}
                // name={tech.name}
                icon={tech.icon}
                color={tech.color}
                speed={tech.speed}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TechCard({ name, icon: Icon, color, speed }) {
  return (
    <motion.div
      className="w-40 h-40 flex-shrink-0 bg-gray-800/80 rounded-xl border border-gray-700 hover:border-blue-400/50 transition-all flex flex-col items-center justify-center gap-4 p-6 backdrop-blur-sm"
      whileHover={{ 
        // scale: 1.05,
        boxShadow: `0 0 20px ${color}40`,
        // y: -5
      }}
      transition={{ 
        duration: 0.3,
        type: 'spring',
        bounce: 0.4
      }}
    >
      <motion.div
        className="p-4 rounded-full border-2 flex items-center justify-center"
        style={{
          backgroundColor: `${color}15`,
          borderColor: color,
        }}
        // animate={{
        //   rotate: 360,
        //   transition: {
        //     duration: 20 * speed,
        //     repeat: Infinity,
        //     ease: "linear"
        //   }
        // }}
      >
        <Icon className="h-8 w-8" style={{ color }} />
      </motion.div>
      <h3 className="font-medium text-center text-white text-lg">{name}</h3>
    </motion.div>
  );
}