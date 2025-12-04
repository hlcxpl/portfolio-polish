import { Github, Linkedin, Mail } from "lucide-react";
import SubtleParticles from "./SubtleParticles";
import ProfileCard from "./ProfileCard/ProfileCard";
import Beams from "./Beams";
import profileImage from "@/assets/Luis_2.png";
import grainTexture from "@/assets/grain.png";
import diamondIcon from "@/assets/diamond-icon.png";

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero = ({ onNavigate }: HeroProps) => {

  return (
    <section className="relative min-h-full flex flex-col lg:flex-row">
      {/* Left side - Light background with image and particles */}
      <div className="w-full lg:w-1/2 bg-white dark:bg-[#f5f5f5] relative flex items-center justify-center min-h-[50vh] lg:min-h-full">
        <SubtleParticles />
        <div className="relative z-10 p-8 md:p-12">
          {/* 
            ========== PROFILE CARD - CONFIGURACIÓN COMPLETA ==========
            
            IMÁGENES Y ASSETS:
            - avatarUrl: Imagen principal del perfil
            - miniAvatarUrl: Avatar pequeño en barra inferior (opcional)
            - grainUrl: Textura de grano para profundidad (✅ ACTIVADO)
            - iconUrl: Patrón para efecto holográfico (✅ ACTIVADO)
            - innerGradient: Gradiente interno personalizado
            
            EFECTOS VISUALES:
            - behindGlowEnabled: Resplandor detrás de la tarjeta (✅ ACTIVADO)
            - behindGlowColor: Color del resplandor
            - behindGlowSize: Tamaño del resplandor (25%, 50%, 75%)
            
            EFECTOS DE INCLINACIÓN (TILT):
            - enableTilt: Efecto tilt en desktop (✅ ACTIVADO)
            - enableMobileTilt: Efecto tilt con giroscopio móvil (✅ ACTIVADO)
            - mobileTiltSensitivity: Sensibilidad del tilt móvil (1-10)
            
            INFORMACIÓN DE USUARIO:
            - name: Nombre principal (arriba)
            - title: Título profesional (arriba)
            - handle: Handle de usuario (@hlcxpl en barra inferior)
            - status: Estado (en barra inferior)
            - contactText: Texto del botón de contacto
            - showUserInfo: Muestra barra inferior con info (✅ ACTIVADO)
            
            EVENTOS:
            - onContactClick: Acción al hacer click en "Contactar"
            
            PARA DESACTIVAR EFECTOS:
            - Grain texture: grainUrl={undefined}
            - Pattern icon: iconUrl={undefined}
            - Glow: behindGlowEnabled={false}
            - Tilt desktop: enableTilt={false}
            - Tilt móvil: enableMobileTilt={false}
            - Barra inferior: showUserInfo={false}
          */}
          <ProfileCard
            avatarUrl={profileImage}
            miniAvatarUrl={profileImage}
            grainUrl={grainTexture}
            iconUrl={diamondIcon}
            innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
            behindGlowEnabled={true}
            behindGlowColor="rgba(125, 190, 255, 0.67)"
            behindGlowSize="50%"
            enableTilt={true}
            enableMobileTilt={true}
            mobileTiltSensitivity={5}
            name="LUIS SÁNCHEZ"
            title="Software Engineer"
            handle="hlcxpl"
            status="Disponible"
            contactText="Contactar"
            showUserInfo={true}
            onContactClick={() => onNavigate("contact")}
          />
        </div>




      </div>

      {/* Right side - Content */}
      <div className="w-full lg:w-1/2 bg-background flex items-center justify-center p-8 md:p-12 lg:p-20 min-h-[50vh] lg:min-h-full relative overflow-hidden">
        {/* Beams background - only visible in dark mode */}
        <div className="hidden dark:block absolute inset-0">
          <Beams />
        </div>

        <div className="max-w-xl relative z-10">
          {/* Social Icons - Above name on mobile, below button on desktop */}
          <div className="flex flex-row gap-6 mb-6 justify-center md:hidden">
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

          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-6 md:mb-8 leading-[0.9] tracking-tight">
            LUIS OMAR
            <br />
            SÁNCHEZ
          </h1>
          <div className="mb-8 md:mb-12">
            <p className="text-muted-foreground text-base md:text-lg mb-2">
              Desarrollador Fullstack | Devops | Data Scientist
            </p>
            <p className="text-xl md:text-2xl font-display font-semibold">
              Ingeniero en Computación
            </p>
          </div>

          {/* Social Icons - Below info on desktop only */}
          <div className="hidden md:flex flex-row gap-4 justify-start">
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
    </section>
  );
};

export default Hero;
