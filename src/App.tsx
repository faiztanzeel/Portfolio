import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sidebar } from './components/Sidebar';
import {
  HomeSection,
  AboutSection,
  ResumeSection,
  SkillsSection,
  CertificatesSection,
  ProjectsSection,
  PublicationsSection,
  ContactSection,
  FooterSection
} from './components/sections';
import SplashCursor from './components/SplashCursor';
function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'resume', 'skills', 'certificates', 'projects', 'publications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Sidebar activeSection={activeSection} onSectionClick={scrollToSection} />
      
      <main>
        <SplashCursor/>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
           
          <HomeSection />
          <AboutSection />
          <ResumeSection />
          <SkillsSection />
          <CertificatesSection />
          <ProjectsSection />
          <PublicationsSection />
          <ContactSection />
          <FooterSection/>
        </motion.div>
      </main>
    </div>
  );
}

export default App;