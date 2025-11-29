import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "ParkFacil - Gestión de Estacionamientos",
      description: "Plataforma completa para optimizar la administración de estacionamientos. Incluye módulos de reportería, gestión de datos SQL Server, y CI/CD con GitHub Actions.",
      tags: ["Node.js", "SQL Server", "GitHub Actions", "PM2"],
      image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&h=500&fit=crop",
      github: null,
      demo: null
    },
    {
      title: "Culligan Water - Suite de Aplicaciones",
      description: "Desarrollo de múltiples herramientas: 4DX para OKRs, sistema de inventario de dispensadores, módulo de contabilidad de activos, planificación de rutas y sistema de bonificaciones para técnicos.",
      tags: ["React", "Node.js", "Prisma", "SQL", "Agile"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      github: null,
      demo: null
    },
    {
      title: "IoT Mining Platform - Global Conexus",
      description: "Plataforma IoT para telemetría de equipos mineros. Procesamiento de datos en tiempo real con Apache Kafka, dashboards React y servicios backend en Java.",
      tags: ["Java", "Apache Kafka", "React", "Azure", "IoT"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop",
      github: null,
      demo: null
    },
    {
      title: "Mining Analytics Dashboard",
      description: "Dashboards interactivos con Dash (Plotly) para análisis operativo minero. Integración con Azure Data Lake y algoritmos de optimización para planes de excavadoras.",
      tags: ["Python", "Dash", "Flask", "Azure", "Data Analytics"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      github: null,
      demo: null
    },
    {
      title: "Cognitiva - Plataforma de Agentes IA",
      description: "Plataforma de gestión de campañas con agentes conversacionales personalizables. Integración con Watson Assistant, Rasa NLU y OpenAI APIs.",
      tags: ["Node.js", "React", "Python", "IBM Watson", "OpenAI"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
      github: null,
      demo: null
    },
    {
      title: "ELK Stack Monitoring - WISE VISION",
      description: "Clusters de Elasticsearch para monitoreo en tiempo real de servicios e infraestructura. Configuración de índices, alertas con Logstash, FluentBit y Kibana.",
      tags: ["Elasticsearch", "Logstash", "Kibana", "DevOps"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      github: "https://github.com/hlcxpl/elk-template",
      demo: null
    },
    {
      title: "DevOps Portfolio & CI/CD",
      description: "Portafolio de proyectos DevOps: ArgoCD GitOps, Kubernetes, Docker, infraestructura como código, y pipelines automatizados con GitHub Actions.",
      tags: ["Kubernetes", "ArgoCD", "Docker", "GitOps", "CI/CD"],
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=500&fit=crop",
      github: "https://github.com/hlcxpl/mastering_devops_g1",
      demo: null
    },
    {
      title: "TeleFruver FruitFlow",
      description: "Sistema de gestión y logística para distribución de frutas. Frontend desarrollado en TypeScript con arquitectura escalable.",
      tags: ["TypeScript", "React", "Node.js", "Logistics"],
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=500&fit=crop",
      github: "https://github.com/hlcxpl/telefruver-fruitflow",
      demo: null
    },
    {
      title: "Django Auto Motor App",
      description: "Aplicación web Django para gestión de inventario automotriz. Sistema completo de administración con panel de control y reportes.",
      tags: ["Python", "Django", "PostgreSQL", "API REST"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop",
      github: "https://github.com/hlcxpl/django-auto-motor-app",
      demo: null
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 animate-fade-in-up">
          <h2 className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            Proyectos
          </h2>
          <div className="w-16 h-[2px] bg-foreground mb-8"></div>
          <h3 className="text-4xl md:text-5xl font-display font-bold">
            Trabajos Destacados
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group border border-border hover:border-foreground transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-display font-bold mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs text-muted-foreground tracking-wider"
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
                      className="border-foreground hover:bg-foreground hover:text-background rounded-none"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </Button>
                  )}
                  {project.demo && (
                    <Button 
                      size="sm"
                      className="bg-foreground text-background hover:bg-foreground/90 rounded-none"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
