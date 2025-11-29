import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("hero");

  const sections = {
    hero: <Hero onNavigate={setCurrentSection} />,
    about: <About />,
    skills: <Skills />,
    projects: <Projects />,
    contact: <Contact />
  };

  const sectionOrder = ["hero", "about", "skills", "projects", "contact"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentSection={currentSection} onSectionChange={setCurrentSection} />
      <main className="relative h-screen overflow-hidden">
        {Object.entries(sections).map(([key, Component]) => {
          const currentIndex = sectionOrder.indexOf(currentSection);
          const sectionIndex = sectionOrder.indexOf(key);
          
          return (
            <div
              key={key}
              className={`absolute inset-0 transition-all duration-700 ${
                currentSection === key
                  ? 'opacity-100 translate-x-0'
                  : sectionIndex < currentIndex
                  ? 'opacity-0 -translate-x-full'
                  : 'opacity-0 translate-x-full'
              }`}
            >
              {Component}
            </div>
          );
        })}
      </main>
      {currentSection === 'contact' && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border">
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Index;
