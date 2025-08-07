import React from "react";
import { HeroSection } from "./HeroSection";
import { About } from "./About";
import { SkillsSection } from "./SkillsSection";
import { ExperienceEducation } from "./ExperienceEducation";
import { ProjectsSection } from "./ProjectsSection";
import { ContactSection } from "./ContactSection";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const { heroRef, aboutRef, skillRef, expRef, projRef, contactRef } =
    useOutletContext();
  return (
    <div>
      <section ref={heroRef}>
        <HeroSection />
      </section>
      <section ref={aboutRef}>
        <About />
      </section>
      <section ref={skillRef}>
        <SkillsSection />
      </section>
      <section ref={expRef}>
        <ExperienceEducation />
      </section>
      <section ref={projRef}>
        <ProjectsSection />
      </section>
      <section ref={contactRef}>
        <ContactSection />
      </section>
    </div>
  );
};

export default Home;
