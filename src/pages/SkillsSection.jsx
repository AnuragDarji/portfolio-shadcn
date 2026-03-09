import React, { useState, useEffect, useRef } from "react";
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact,
  SiMongodb, SiGit, SiCplusplus, SiTailwindcss, SiBootstrap,
  SiNodedotjs, SiExpress, SiPostman, SiExpo,
} from "react-icons/si";
import { FaReact, FaJava } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";

const skills = [
  { name: "HTML5",        icon: SiHtml5,           color: "#E34F26", glow: "rgba(227,79,38,0.4)" },
  { name: "CSS3",         icon: SiCss3,            color: "#1572B6", glow: "rgba(21,114,182,0.4)" },
  { name: "JavaScript",   icon: SiJavascript,      color: "#F7DF1E", glow: "rgba(247,223,30,0.4)" },
  { name: "React.js",     icon: FaReact,           color: "#61DAFB", glow: "rgba(97,218,251,0.4)" },
  { name: "Tailwind",     icon: SiTailwindcss,     color: "#06B6D4", glow: "rgba(6,182,212,0.4)" },
  { name: "Bootstrap",    icon: SiBootstrap,       color: "#7952B3", glow: "rgba(121,82,179,0.4)" },
  { name: "Node.js",      icon: SiNodedotjs,       color: "#339933", glow: "rgba(51,153,51,0.4)" },
  { name: "Express",      icon: SiExpress,         color: "#AAAAAA", glow: "rgba(170,170,170,0.3)" },
  { name: "MongoDB",      icon: SiMongodb,         color: "#47A248", glow: "rgba(71,162,72,0.4)" },
  { name: "React Native", icon: SiReact,           color: "#61DAFB", glow: "rgba(97,218,251,0.4)" },
  { name: "Expo",         icon: SiExpo,            color: "#CCCCCC", glow: "rgba(200,200,200,0.3)" },
  { name: "TypeScript",   icon: SiTypescript,      color: "#3178C6", glow: "rgba(49,120,198,0.4)" },
  { name: "Java",         icon: FaJava,            color: "#ED8B00", glow: "rgba(237,139,0,0.4)" },
  { name: "C++",          icon: SiCplusplus,       color: "#00599C", glow: "rgba(0,89,156,0.4)" },
  { name: "Git",          icon: SiGit,             color: "#F05032", glow: "rgba(240,80,50,0.4)" },
  { name: "Postman",      icon: SiPostman,         color: "#FF6C37", glow: "rgba(255,108,55,0.4)" },
  { name: "VS Code",      icon: BiLogoVisualStudio,color: "#007ACC", glow: "rgba(0,122,204,0.4)" },
];

function SkillCard({ skill, id, hoveredSkill, setHoveredSkill }) {
  const isHovered = hoveredSkill === id;
  return (
    <div
      className="skill-card"
      onMouseEnter={() => setHoveredSkill(id)}
      onMouseLeave={() => setHoveredSkill(null)}
      style={{
        "--glow": skill.glow,
        "--color": skill.color,
      }}
    >
      <div className="skill-icon-wrap">
        <skill.icon
          className="skill-icon"
          style={{ color: isHovered ? skill.color : undefined }}
        />
      </div>
      <span className="skill-label">{skill.name}</span>
      <div className="skill-shine" />
    </div>
  );
}

export function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const marquee1Ref = useRef(null);
  const marquee2Ref = useRef(null);
  const sectionRef = useRef(null);
  const lastScrollY = useRef(0);

  const row1 = [...skills, ...skills, ...skills];
  const row2 = [...[...skills].reverse(), ...[...skills].reverse(), ...[...skills].reverse()];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isDown = currentScrollY > lastScrollY.current;
      lastScrollY.current = currentScrollY;

      if (!sectionRef.current) return;
      const { top, bottom } = sectionRef.current.getBoundingClientRect();
      const inView = top < window.innerHeight && bottom > 0;

      [marquee1Ref, marquee2Ref].forEach((ref, i) => {
        if (!ref.current) return;
        if (!inView) {
          ref.current.style.animationPlayState = "paused";
        } else {
          ref.current.style.animationPlayState = "running";
          const forward = (i === 0) ? isDown : !isDown;
          ref.current.style.animationDirection = forward ? "normal" : "reverse";
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="skills-section">
      {/* Ambient background blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <div className="skills-container">
        {/* Header */}
        <div className="skills-header">
          <div className="skills-eyebrow">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">What I build with</span>
            <span className="eyebrow-line" />
          </div>
          <h2 className="skills-title">
            My <em>Tech Stack</em>
          </h2>
          <p className="skills-subtitle">
            Tools & technologies I use to craft modern digital experiences
          </p>
        </div>

        {/* Marquee Rows */}
        <div className="marquee-wrapper">
          <div className="marquee-fade marquee-fade-left" />
          <div className="marquee-fade marquee-fade-right" />

          {/* Row 1 */}
          <div className="marquee-track">
            <div ref={marquee1Ref} className="marquee-inner marquee-r1">
              {row1.map((skill, i) => (
                <SkillCard
                  key={`r1-${i}`}
                  id={`r1-${i}`}
                  skill={skill}
                  hoveredSkill={hoveredSkill}
                  setHoveredSkill={setHoveredSkill}
                />
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="marquee-track">
            <div ref={marquee2Ref} className="marquee-inner marquee-r2">
              {row2.map((skill, i) => (
                <SkillCard
                  key={`r2-${i}`}
                  id={`r2-${i}`}
                  skill={skill}
                  hoveredSkill={hoveredSkill}
                  setHoveredSkill={setHoveredSkill}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="stats-strip">
          {[["17+", "Technologies"], ["2+", "Years Learning"], ["10+", "Projects Built"]].map(([num, label]) => (
            <div key={label} className="stat-item">
              <span className="stat-num">{num}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;1,300&display=swap');

        .skills-section {
          position: relative;
          padding: 100px 0 80px;
          background: #080b12;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }

        /* Ambient blobs */
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.18;
          pointer-events: none;
        }
        .blob-1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, #6366f1, transparent 70%);
          top: -100px; left: -150px;
        }
        .blob-2 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, #06b6d4, transparent 70%);
          bottom: -80px; right: -100px;
        }
        .blob-3 {
          width: 300px; height: 300px;
          background: radial-gradient(circle, #a855f7, transparent 70%);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }

        .skills-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Header */
        .skills-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .skills-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 20px;
        }
        .eyebrow-line {
          display: block;
          width: 40px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #6366f1, transparent);
        }
        .eyebrow-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 300;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #818cf8;
        }
        .skills-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(36px, 6vw, 64px);
          font-weight: 800;
          color: #f0f4ff;
          line-height: 1.05;
          margin: 0 0 16px;
          letter-spacing: -0.02em;
        }
        .skills-title em {
          font-style: normal;
          background: linear-gradient(135deg, #818cf8 0%, #06b6d4 50%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .skills-subtitle {
          font-size: 16px;
          font-weight: 300;
          color: #64748b;
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Marquee */
        .marquee-wrapper {
          position: relative;
        }
        .marquee-fade {
          position: absolute;
          top: 0; bottom: 0;
          width: 120px;
          z-index: 10;
          pointer-events: none;
        }
        .marquee-fade-left {
          left: 0;
          background: linear-gradient(90deg, #080b12 0%, transparent 100%);
        }
        .marquee-fade-right {
          right: 0;
          background: linear-gradient(-90deg, #080b12 0%, transparent 100%);
        }
        .marquee-track {
          overflow: hidden;
          margin-bottom: 14px;
        }
        .marquee-inner {
          display: flex;
          width: fit-content;
          will-change: transform;
        }
        .marquee-r1 {
          animation: scroll-left 50s linear infinite;
        }
        .marquee-r2 {
          animation: scroll-left 45s linear infinite reverse;
        }
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }

        /* Skill Card */
        .skill-card {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 88px;
          height: 88px;
          margin: 0 7px;
          flex-shrink: 0;
          border-radius: 16px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          cursor: default;
          transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .skill-card:hover {
          background: rgba(255,255,255,0.07);
          border-color: var(--color, #818cf8);
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 12px 40px var(--glow, rgba(99,102,241,0.3)),
                      0 0 0 1px rgba(255,255,255,0.08) inset;
        }
        .skill-shine {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 0%, rgba(255,255,255,0.07), transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: inherit;
        }
        .skill-card:hover .skill-shine {
          opacity: 1;
        }
        .skill-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .skill-icon {
          width: 28px;
          height: 28px;
          color: rgba(255,255,255,0.25);
          transition: color 0.3s ease, filter 0.3s ease;
        }
        .skill-card:hover .skill-icon {
          filter: drop-shadow(0 0 8px var(--glow, rgba(99,102,241,0.6)));
        }
        .skill-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 9px;
          font-weight: 400;
          letter-spacing: 0.04em;
          color: rgba(255,255,255,0.25);
          text-align: center;
          transition: color 0.3s ease;
          line-height: 1.2;
          max-width: 72px;
          white-space: normal;
        }
        .skill-card:hover .skill-label {
          color: rgba(255,255,255,0.7);
        }

        /* Stats strip */
        .stats-strip {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0;
          margin-top: 56px;
          border-radius: 20px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          overflow: hidden;
        }
        .stat-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 28px 20px;
          position: relative;
        }
        .stat-item + .stat-item::before {
          content: '';
          position: absolute;
          left: 0; top: 20%; bottom: 20%;
          width: 1px;
          background: rgba(255,255,255,0.07);
        }
        .stat-num {
          font-family: 'Syne', sans-serif;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 800;
          background: linear-gradient(135deg, #818cf8, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 6px;
        }
        .stat-label {
          font-size: 12px;
          font-weight: 300;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #475569;
        }

        @media (max-width: 640px) {
          .skills-section { padding: 64px 0 56px; }
          .skill-card { width: 72px; height: 72px; margin: 0 5px; border-radius: 12px; }
          .skill-icon { width: 22px; height: 22px; }
          .skill-label { font-size: 8px; }
          .marquee-fade { width: 60px; }
          .stats-strip { flex-direction: row; flex-wrap: wrap; }
        }
      `}</style>
    </section>
  );
}
