import { useState, useEffect, useRef, useCallback } from "react";
import type React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("hero");
  const [isScrolling, setIsScrolling] = useState(false);
  const touchStartRef = useRef<number>(0);
  const touchEndRef = useRef<number>(0);

  const sectionOrder = ["hero", "about", "skills", "projects", "contact"] as const;

  const sections: Record<string, JSX.Element> = {
    hero: <Hero onNavigate={setCurrentSection} />,
    about: <About />,
    skills: <Skills />,
    projects: <Projects />,
    contact: <Contact />,
  };

  // Función para cambiar de sección
  const changeSection = useCallback((direction: 'next' | 'prev') => {
    if (isScrolling) return;
    
    const currentIndex = sectionOrder.indexOf(currentSection as (typeof sectionOrder)[number]);
    
    if (direction === 'next' && currentIndex < sectionOrder.length - 1) {
      setIsScrolling(true);
      setCurrentSection(sectionOrder[currentIndex + 1]);
      setTimeout(() => setIsScrolling(false), 700);
    } else if (direction === 'prev' && currentIndex > 0) {
      setIsScrolling(true);
      setCurrentSection(sectionOrder[currentIndex - 1]);
      setTimeout(() => setIsScrolling(false), 700);
    }
  }, [currentSection, isScrolling]);

  const handleSectionWheel = (sectionKey: string) => (e: React.WheelEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const { scrollTop, scrollHeight, clientHeight } = container;

    const atTop = scrollTop === 0;
    const atBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 5;
    
    // Si no estamos en los límites, dejar que haga scroll normal
    if (!atTop && !atBottom) {
      return; // Permitir scroll normal dentro de la sección
    }

    if (isScrolling) {
      e.preventDefault();
      return;
    }

    const deltaY = e.deltaY;
    
    // Solo cambiar de sección si estamos en el límite correcto Y scrolleando en esa dirección
    if (deltaY > 0 && atBottom) {
      // Estamos abajo y queremos seguir bajando -> siguiente sección
      e.preventDefault();
      changeSection('next');
    } else if (deltaY < 0 && atTop) {
      // Estamos arriba y queremos seguir subiendo -> sección anterior
      e.preventDefault();
      changeSection('prev');
    }
  };

  // Touch/Swipe navigation para móviles
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (sectionKey: string) => (e: React.TouchEvent) => {
    const container = e.currentTarget;
    const { scrollTop, scrollHeight, clientHeight } = container;

    const atTop = scrollTop === 0;
    const atBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 5;
    
    // Si no estamos en los límites, no cambiar de sección
    if (!atTop && !atBottom) return;

    const swipeDistance = touchStartRef.current - touchEndRef.current;
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0 && atBottom) {
        // Swipe up (hacia arriba con el dedo) - next section
        changeSection('next');
      } else if (swipeDistance < 0 && atTop) {
        // Swipe down (hacia abajo con el dedo) - prev section
        changeSection('prev');
      }
    }
  };

  // Keyboard navigation entre secciones
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;

      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        changeSection('next');
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        changeSection('prev');
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [changeSection, isScrolling]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentSection={currentSection} onSectionChange={setCurrentSection} />
      
      {/* Section indicators - más grandes en móvil */}
      <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 space-y-4 md:space-y-3">
        {sectionOrder.map((section) => (
          <button
            key={section}
            onClick={() => setCurrentSection(section)}
            className={`block rounded-full transition-all duration-300 ${
              currentSection === section
                ? "bg-foreground w-10 md:w-8 h-3 md:h-2"
                : "bg-foreground/30 hover:bg-foreground/50 w-3 md:w-2 h-3 md:h-2"
            }`}
            aria-label={section}
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
              <div 
                className="h-screen overflow-y-auto" 
                onWheel={handleSectionWheel(key)}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd(key)}
              >
                {Component}
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Index;
