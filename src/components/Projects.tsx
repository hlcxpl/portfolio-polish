import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Aplicación Web Fullstack",
      description: "Desarrollo de aplicación web completa con React y Node.js, incluyendo autenticación, gestión de usuarios y panel administrativo.",
      tags: ["React", "Node.js", "PostgreSQL", "Express"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
    },
    {
      title: "Sistema de Gestión",
      description: "Sistema empresarial para gestión de inventario y ventas con dashboard interactivo y reportes en tiempo real.",
      tags: ["JavaScript", "MySQL", "REST API"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop"
    },
    {
      title: "Sitio WordPress Custom",
      description: "Desarrollo de tema personalizado para WordPress con Elementor, optimizado para SEO y rendimiento.",
      tags: ["WordPress", "Elementor", "PHP", "CSS"],
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=500&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Proyectos Destacados
          </h2>
          <div className="w-24 h-1 gradient-bg mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Algunos de los proyectos en los que he trabajado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-secondary/50 text-primary text-xs font-medium rounded-full border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-primary/50 hover:bg-primary/10 flex-1"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Código
                  </Button>
                  <Button 
                    size="sm"
                    className="gradient-bg hover:opacity-90 flex-1"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;