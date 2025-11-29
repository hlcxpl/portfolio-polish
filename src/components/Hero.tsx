import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-xl md:text-2xl text-primary font-mono mb-4 animate-slide-in-right">
            Hola, soy
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text">
            Luis Omar Sánchez
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-foreground/90 mb-8">
            Desarrollador Fullstack JavaScript
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Ingeniero en Computación con 5+ años de experiencia construyendo aplicaciones web modernas.
            Especializado en React, Node.js y arquitecturas escalables.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="gradient-bg hover:opacity-90 transition-opacity glow-effect text-lg px-8"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contactar
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/50 text-foreground hover:bg-primary/10 text-lg px-8"
              onClick={() => scrollToSection("projects")}
            >
              Ver Proyectos
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <a 
              href="https://github.com/hlcxpl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-300"
            >
              <Github className="h-7 w-7" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-300"
            >
              <Linkedin className="h-7 w-7" />
            </a>
            <a 
              href="mailto:contact@luisomar.dev"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-300"
            >
              <Mail className="h-7 w-7" />
            </a>
          </div>
        </div>

        <button 
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary animate-bounce cursor-pointer"
        >
          <ArrowDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;