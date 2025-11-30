import { useState, useEffect } from "react";
import type React from "react";
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

  const sectionOrder = ["hero", "about", "skills", "projects", "contact"] as const;

  const sections: Record<string, JSX.Element> = {
    hero: <Hero onNavigate={setCurrentSection} />,
    about: <About />,
    skills: <Skills />,
    projects: <Projects />,
    contact: <Contact />,
  };

  const handleSectionWheel = (sectionKey: string) => (e: React.WheelEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const { scrollTop, scrollHeight, clientHeight } = container;

    const atTop = scrollTop <= 0;
    const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

    // Si todavía hay contenido para hacer scroll dentro de la sección, no cambiamos de sección
    if (!atTop && !atBottom) return;

    if (isScrolling) return;

    const deltaY = e.deltaY;
    if (Math.abs(deltaY) < 20) return;

    const currentIndex = sectionOrder.indexOf(currentSection as (typeof sectionOrder)[number]);

    // Navegar sólo cuando estamos en el límite de la sección
    if (deltaY > 0 && atBottom && currentIndex < sectionOrder.length - 1) {
      e.preventDefault();
      setIsScrolling(true);
      setCurrentSection(sectionOrder[currentIndex + 1]);
      setTimeout(() => setIsScrolling(false), 700);
    } else if (deltaY < 0 && atTop && currentIndex > 0) {
      e.preventDefault();
      setIsScrolling(true);
      setCurrentSection(sectionOrder[currentIndex - 1]);
      setTimeout(() => setIsScrolling(false), 700);
    }
  };

  // Keyboard navigation entre secciones
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;

      const currentIndex = sectionOrder.indexOf(currentSection as (typeof sectionOrder)[number]);

      if ((e.key === "ArrowDown" || e.key === "ArrowRight") && currentIndex < sectionOrder.length - 1) {
        setIsScrolling(true);
        setCurrentSection(sectionOrder[currentIndex + 1]);
        setTimeout(() => setIsScrolling(false), 800);
      } else if ((e.key === "ArrowUp" || e.key === "ArrowLeft") && currentIndex > 0) {
        setIsScrolling(true);
        setCurrentSection(sectionOrder[currentIndex - 1]);
        setTimeout(() => setIsScrolling(false), 800);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSection, isScrolling]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentSection={currentSection} onSectionChange={setCurrentSection} />
      
      {/* Section indicators */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 space-y-3">
        {sectionOrder.map((section) => (
          <button
            key={section}
            onClick={() => setCurrentSection(section)}
            className={`block w-2 h-2 rounded-full transition-all duration-300 ${
              currentSection === section
                ? "bg-foreground w-8"
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
            title={section}
          />
        ))}
      </div>

      <main className="relative h-screen overflow-hidden">
        {Object.entries(sections).map(([key, Component]) => {
          const currentIndex = sectionOrder.indexOf(currentSection as (typeof sectionOrder)[number]);
          const sectionIndex = sectionOrder.indexOf(key as (typeof sectionOrder)[number]);
          
          return (
            <div
              key={key}
              className={`absolute inset-0 transition-all duration-700 ${
                currentSection === key
                  ? "opacity-100 translate-x-0"
                  : sectionIndex < currentIndex
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
              }`}
            >
              <div className="h-screen overflow-y-auto" onWheel={handleSectionWheel(key)}>
                {Component}
              </div>
            </div>
          );
        })}
      </main>
      
      {currentSection === "contact" && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border">
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Index;
