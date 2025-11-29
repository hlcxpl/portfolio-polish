import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import SubtleParticles from "./SubtleParticles";
import profileImage from "@/assets/profile-professional.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <SubtleParticles />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="relative">
              <img 
                src={profileImage}
                alt="Luis Omar Sánchez"
                className="w-full max-w-lg mx-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 animate-fade-in-up">
            <h2 className="text-lg md:text-xl text-muted-foreground mb-6 tracking-wider">
              Hola, soy
            </h2>
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-6 leading-tight">
              LUIS OMAR
              <br />
              SÁNCHEZ
            </h1>
            <div className="mb-8">
              <span className="text-xl md:text-2xl text-muted-foreground">
                Desarrollador <span className="font-display font-semibold text-foreground">Fullstack</span>
              </span>
            </div>
            
            <Button 
              size="lg" 
              className="bg-foreground text-background hover:bg-foreground/90 text-lg px-12 py-6 rounded-none font-medium tracking-wide"
              onClick={() => scrollToSection("contact")}
            >
              Contactar
            </Button>

            <div className="flex gap-6 mt-12">
              <a 
                href="https://github.com/hlcxpl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/luisomarsanchezdiaz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:hlcxpl@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-foreground animate-bounce cursor-pointer"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default Hero;
