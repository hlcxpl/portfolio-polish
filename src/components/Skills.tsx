import { Code2, Server, Database, Cloud, Terminal, Bot } from "lucide-react";
import BackgroundParticles from "./BackgroundParticles";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      skills: ["React", "Vue.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Sass", "Tailwind CSS", "shadcn/ui", "Material UI", "Magic UI", "Dash (Plotly)", "WordPress", "Elementor"]
    },
    {
      icon: Server,
      title: "Backend",
      skills: ["Node.js", "Nest.js", ".NET", "Python", "Java", "Spring Boot", "Django", "Flask", "Express.js"]
    },
    {
      icon: Database,
      title: "Bases de Datos & Cloud",
      skills: ["AWS", "DynamoDB", "Lambda", "SAM", "MongoDB", "PostgreSQL", "MySQL", "SQL Server", "Prisma", "Azure", "Azure Data Lake", "Azure Functions"]
    },
    {
      icon: Terminal,
      title: "DevOps & Observabilidad",
      skills: ["Docker", "Kubernetes", "Jenkins", "ArgoCD", "GitHub Actions", "ELK Stack", "Prometheus", "Grafana", "PM2", "Git"]
    },
    {
      icon: Bot,
      title: "Automatización & Herramientas",
      skills: ["MCP", "n8n", "Make", "Lovable", "VS Code", "Antigravity", "OpenAI API", "IBM Watson", "Rasa NLU"]
    }
  ];

  return (
    <section className="min-h-full py-12 md:py-20 px-4 md:px-6 lg:px-12 bg-secondary/30 dark:bg-secondary/10 relative">
      <BackgroundParticles />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12 md:mb-20 animate-fade-in-up">
          <h2 className="text-xs md:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            Habilidades
          </h2>
          <div className="w-12 md:w-16 h-[2px] bg-foreground mb-6 md:mb-8"></div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Stack Tecnológico
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group"
              >
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <Icon className="h-6 w-6 md:h-7 md:w-7 text-foreground" strokeWidth={1.5} />
                  <h3 className="text-lg md:text-xl font-display font-bold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2.5 md:px-3 py-1 md:py-1.5 border border-border text-foreground text-xs md:text-sm hover:bg-foreground hover:text-background transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
