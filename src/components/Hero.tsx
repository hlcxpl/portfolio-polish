import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import SubtleParticles from "./SubtleParticles";
import profileImage from "@/assets/profile-professional.jpg";

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero = ({ onNavigate }: HeroProps) => {

  return (
    <section className="relative h-full flex flex-col lg:flex-row">
      {/* Left side - Light background with image and particles */}
      <div className="w-full lg:w-1/2 bg-white dark:bg-[#f5f5f5] relative flex items-center justify-center min-h-[50vh] lg:min-h-full">
        <SubtleParticles />
        <div className="relative z-10 p-8 md:p-12">
          <img 
            src={profileImage}
            alt="Luis Omar Sánchez"
            className="w-full max-w-xs md:max-w-md mx-auto"
          />
        </div>
        
        {/* Copyright */}
        <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 text-black/40 text-xs md:text-sm">
          Copyright © {new Date().getFullYear()}
        </div>

        {/* Social Icons */}
        <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 flex gap-3 md:gap-4">
          <a 
            href="https://github.com/hlcxpl" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-black/60 hover:text-black transition-colors p-2 md:p-0"
          >
            <Github className="h-5 w-5 md:h-5 md:w-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/luisomarsanchezdiaz/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-black/60 hover:text-black transition-colors p-2 md:p-0"
          >
            <Linkedin className="h-5 w-5 md:h-5 md:w-5" />
          </a>
          <a 
            href="mailto:hlcxpl@gmail.com"
            className="text-black/60 hover:text-black transition-colors p-2 md:p-0"
          >
            <Mail className="h-5 w-5 md:h-5 md:w-5" />
          </a>
        </div>
      </div>

      {/* Right side - Content */}
      <div className="w-full lg:w-1/2 bg-background flex items-center justify-center p-8 md:p-12 lg:p-20 min-h-[50vh] lg:min-h-full">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-6 md:mb-8 leading-[0.9] tracking-tight">
            LUIS OMAR
            <br />
            SÁNCHEZ
          </h1>
          <div className="mb-8 md:mb-12">
            <p className="text-muted-foreground text-base md:text-lg mb-2">
              Desarrollador
            </p>
            <p className="text-xl md:text-2xl font-display font-semibold">
              Fullstack
            </p>
          </div>
          
          <Button 
            size="lg" 
            className="bg-foreground text-background hover:bg-foreground/90 text-sm md:text-base px-8 md:px-10 py-5 md:py-6 rounded-none font-medium tracking-wide w-full md:w-auto"
            onClick={() => onNavigate("contact")}
          >
            Contactar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
