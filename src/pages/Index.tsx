import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("hero");
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  const sectionOrder = ["hero", "about", "skills", "projects", "contact"];

  const sections = {
    hero: <Hero onNavigate={setCurrentSection} />,
    about: <About />,
    skills: <Skills />,
    projects: <Projects />,
    contact: <Contact />
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isScrolling) return;

      const currentIndex = sectionOrder.indexOf(currentSection);
      
      // More sensitive scrolling - lower threshold
      if (Math.abs(e.deltaY) < 10) return;
      
      if (e.deltaY > 0 && currentIndex < sectionOrder.length - 1) {
        // Scroll down
        setIsScrolling(true);
        setCurrentSection(sectionOrder[currentIndex + 1]);
      } else if (e.deltaY < 0 && currentIndex > 0) {
        // Scroll up
        setIsScrolling(true);
        setCurrentSection(sectionOrder[currentIndex - 1]);
      }

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 800);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [currentSection, isScrolling]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;

      const currentIndex = sectionOrder.indexOf(currentSection);

      if ((e.key === 'ArrowDown' || e.key === 'ArrowRight') && currentIndex < sectionOrder.length - 1) {
        setIsScrolling(true);
        setCurrentSection(sectionOrder[currentIndex + 1]);
        setTimeout(() => setIsScrolling(false), 800);
      } else if ((e.key === 'ArrowUp' || e.key === 'ArrowLeft') && currentIndex > 0) {
        setIsScrolling(true);
        setCurrentSection(sectionOrder[currentIndex - 1]);
        setTimeout(() => setIsScrolling(false), 800);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection, isScrolling]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentSection={currentSection} onSectionChange={setCurrentSection} />
      
      {/* Section indicators */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 space-y-3">
        {sectionOrder.map((section, index) => (
          <button
            key={section}
            onClick={() => setCurrentSection(section)}
            className={`block w-2 h-2 rounded-full transition-all duration-300 ${
              currentSection === section 
                ? 'bg-foreground w-8' 
                : 'bg-foreground/30 hover:bg-foreground/50'
            }`}
            title={section}
          />
        ))}
      </div>

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
