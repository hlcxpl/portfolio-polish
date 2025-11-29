import { Card } from "@/components/ui/card";
import { Code2, Rocket, Users } from "lucide-react";
import profileImage from "@/assets/profile-professional.jpg";

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
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Sobre Mí
          </h2>
          <div className="w-24 h-1 gradient-bg mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-xl opacity-50"></div>
              <img 
                src={profileImage}
                alt="Luis Omar Sánchez - Desarrollador Fullstack"
                className="relative rounded-2xl shadow-2xl w-full aspect-square object-contain bg-gradient-to-br from-background/50 to-background/30 p-4"
              />
            </div>
          </div>

          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl font-bold text-foreground">
              Full Stack Developer | DevOps | Data Scientist
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ingeniero en Computación egresado de la Universidad Dr. Rafael Belloso Chacín (2012-2017). 
              Actualmente en Santiago, Chile.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Desarrollador Full Stack con experiencia en la optimización de procesos en la industria minera, 
              incorporando tecnologías innovadoras para mejorar la eficiencia operativa. Especialista en 
              soluciones bancarias digitales, con habilidad para implementar sistemas seguros y escalables 
              que mejoran la satisfacción del usuario y la gestión de datos.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Con más de 7 años de experiencia profesional, he trabajado en proyectos de alto impacto 
              utilizando tecnologías como React, Node.js, Java, Python, Apache Kafka, y plataformas cloud 
              como Azure. Mi enfoque está en crear soluciones robustas, escalables y orientadas al usuario.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Certificado en FullStack JavaScript y Python, Científico de Datos, Backend Java, y DevOps. 
              Actualmente busco nuevos desafíos profesionales que me permitan seguir innovando y aportando 
              valor en el desarrollo de soluciones tecnológicas de vanguardia.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index}
                className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-lg gradient-bg flex items-center justify-center">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3 text-foreground">
                  {item.title}
                </h4>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;