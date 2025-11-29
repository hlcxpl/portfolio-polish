import { Code2, Rocket, Users } from "lucide-react";

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
    <section id="about" className="py-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 animate-fade-in-up">
          <h2 className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            Sobre Mí
          </h2>
          <div className="w-16 h-[2px] bg-foreground mb-8"></div>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Full Stack Developer | DevOps | Data Scientist
          </h3>
        </div>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-4xl mb-20">
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

        <div className="grid md:grid-cols-3 gap-12">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="group"
              >
                <div className="mb-6">
                  <Icon className="h-8 w-8 text-foreground" strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-display font-bold mb-4 text-foreground">
                  {item.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
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
