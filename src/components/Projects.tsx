import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "ELK Stack Template",
      description: "Template completo de Elasticsearch, Logstash y Kibana para monitoreo y análisis de logs en tiempo real. Incluye configuración Docker y scripts automatizados.",
      tags: ["ELK", "Docker", "Shell", "DevOps"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      github: "https://github.com/hlcxpl/elk-template",
      demo: null
    },
    {
      title: "Django Auto Motor App",
      description: "Aplicación web Django para gestión de inventario automotriz. Sistema completo de administración con panel de control y reportes.",
      tags: ["Python", "Django", "PostgreSQL", "API REST"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop",
      github: "https://github.com/hlcxpl/django-auto-motor-app",
      demo: null
    },
    {
      title: "CI/CD Express + OpenAI",
      description: "Pipeline CI/CD para aplicación Express.js integrada con OpenAI. Automatización completa de pruebas, builds y deployment.",
      tags: ["JavaScript", "Express", "OpenAI", "CI/CD"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      github: "https://github.com/hlcxpl/cicd-express-openai",
      demo: null
    },
    {
      title: "DevOps Mastering Portfolio",
      description: "Portafolio de proyectos DevOps incluyendo infraestructura como código, Kubernetes, Docker y pipelines automatizados.",
      tags: ["DevOps", "Kubernetes", "Docker", "IaC"],
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=500&fit=crop",
      github: "https://github.com/hlcxpl/mastering_devops_g1",
      demo: null
    },
    {
      title: "ArgoCD Example Apps",
      description: "Aplicaciones de ejemplo para demostrar GitOps con ArgoCD. Implementación de continuous deployment en Kubernetes.",
      tags: ["ArgoCD", "Kubernetes", "GitOps", "Jsonnet"],
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=500&fit=crop",
      github: "https://github.com/hlcxpl/argocd-example-apps",
      demo: null
    },
    {
      title: "TeleFruver FruitFlow",
      description: "Sistema de gestión y logística para distribución de frutas. Frontend desarrollado en TypeScript con arquitectura escalable.",
      tags: ["TypeScript", "React", "Node.js", "Logistics"],
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=500&fit=crop",
      github: "https://github.com/hlcxpl/telefruver-fruitflow",
      demo: null
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
                  {project.github && (
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-primary/50 hover:bg-primary/10 flex-1"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </Button>
                  )}
                  {project.demo && (
                    <Button 
                      size="sm"
                      className="gradient-bg hover:opacity-90 flex-1"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver
                    </Button>
                  )}
                  {!project.demo && project.github && (
                    <Button 
                      size="sm"
                      className="gradient-bg hover:opacity-90 flex-1"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver Repo
                    </Button>
                  )}
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