import { Code2, Rocket, Users } from "lucide-react";
import BackgroundParticles from "./BackgroundParticles";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Desarrollo Web",
      description: "Especializado en crear aplicaciones web modernas y escalables con las últimas tecnologías."
    },
    {
      icon: Rocket,
      title: "Innovación",
      description: "Siempre buscando nuevas formas de resolver problemas y optimizar procesos."
    },
    {
      icon: Users,
      title: "Liderazgo",
      description: "Experiencia liderando equipos y proyectos de desarrollo en el sector privado."
    }
  ];

  return (
    <section className="h-full py-12 md:py-20 px-4 md:px-6 lg:px-12 overflow-y-auto relative">
      <BackgroundParticles />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12 md:mb-20 animate-fade-in-up">
          <h2 className="text-xs md:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            Sobre Mí
          </h2>
          <div className="w-12 md:w-16 h-[2px] bg-foreground mb-6 md:mb-8"></div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 md:mb-8">
            Full Stack Developer | DevOps | Data Scientist
          </h3>
        </div>

        <div className="space-y-5 md:space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl mb-12 md:mb-20">
          <p>
            Ingeniero en Computación egresado de la Universidad Dr. Rafael Belloso Chacín (2012-2017). 
            Actualmente en Santiago, Chile.
          </p>
          <p>
            Desarrollador Full Stack con experiencia en la optimización de procesos en la industria minera, 
            incorporando tecnologías innovadoras para mejorar la eficiencia operativa. Especialista en 
            soluciones bancarias digitales, con habilidad para implementar sistemas seguros y escalables 
            que mejoran la satisfacción del usuario y la gestión de datos.
          </p>
          <p>
            Con más de <span className="font-semibold text-foreground">7 años de experiencia profesional</span>, he trabajado en proyectos de alto impacto 
            utilizando tecnologías como React, Node.js, Java, Python, Apache Kafka, y plataformas cloud 
            como Azure. Mi enfoque está en crear soluciones robustas, escalables y orientadas al usuario.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="group"
              >
                <div className="mb-4 md:mb-6">
                  <Icon className="h-7 w-7 md:h-8 md:w-8 text-foreground" strokeWidth={1.5} />
                </div>
                <h4 className="text-lg md:text-xl font-display font-bold mb-3 md:mb-4 text-foreground">
                  {item.title}
                </h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
