import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import SubtleParticles from "./SubtleParticles";
import profileImage from "@/assets/profile-professional.jpg";

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero = ({ onNavigate }: HeroProps) => {

  return (
    <section className="relative h-full flex">
      {/* Left side - Dark background with image and particles */}
      <div className="w-full lg:w-1/2 bg-[#1a1a1a] dark:bg-[#0a0a0a] relative flex items-center justify-center">
        <SubtleParticles />
        <div className="relative z-10 p-12">
          <img 
            src={profileImage}
            alt="Luis Omar Sánchez"
            className="w-full max-w-md mx-auto"
          />
        </div>
        
        {/* Copyright */}
        <div className="absolute bottom-8 left-8 text-white/50 text-sm">
          Copyright © {new Date().getFullYear()}
        </div>

        {/* Social Icons */}
        <div className="absolute bottom-8 right-8 flex gap-4">
          <a 
            href="https://github.com/hlcxpl" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/luisomarsanchezdiaz/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a 
            href="mailto:hlcxpl@gmail.com"
            className="text-white/70 hover:text-white transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Right side - Content */}
      <div className="w-full lg:w-1/2 bg-background flex items-center justify-center p-12 lg:p-20">
        <div className="max-w-xl">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-[0.9] tracking-tight">
            LUIS OMAR
            <br />
            SÁNCHEZ
          </h1>
          <div className="mb-12">
            <p className="text-muted-foreground text-lg mb-2">
              Desarrollador
            </p>
            <p className="text-2xl font-display font-semibold">
              Fullstack
            </p>
          </div>
          
          <Button 
            size="lg" 
            className="bg-foreground text-background hover:bg-foreground/90 text-base px-10 py-6 rounded-none font-medium tracking-wide"
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
