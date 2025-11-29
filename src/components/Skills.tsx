import { Code2, Database, Cloud, Wrench } from "lucide-react";
import BackgroundParticles from "./BackgroundParticles";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      skills: ["React", "Vue.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Dash (Plotly)", "WordPress", "Elementor"]
    },
    {
      icon: Database,
      title: "Backend",
      skills: ["Node.js", "Python", "Java", "Spring Boot", "Django", "Flask", "Express.js", "Laravel"]
    },
    {
      icon: Database,
      title: "Bases de Datos & Cloud",
      skills: ["PostgreSQL", "MySQL", "SQL Server", "Prisma", "Azure", "Azure Data Lake", "Azure Functions", "Elasticsearch"]
    },
    {
      icon: Cloud,
      title: "DevOps & Herramientas",
      skills: ["Docker", "Kubernetes", "ArgoCD", "GitHub Actions", "PM2", "Git", "Apache Kafka", "Kibana", "Logstash", "CI/CD", "GitOps"]
    },
    {
      icon: Wrench,
      title: "IA & Data Science",
      skills: ["OpenAI API", "IBM Watson", "Rasa NLU", "Pandas", "Data Analysis", "Machine Learning", "REST APIs", "IoT", "Telemetría", "Agile (Scrum)"]
    }
  ];

  return (
    <section className="h-full py-20 px-6 lg:px-12 bg-secondary/30 dark:bg-secondary/10 overflow-y-auto relative">
      <BackgroundParticles />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20 animate-fade-in-up">
          <h2 className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            Habilidades
          </h2>
          <div className="w-16 h-[2px] bg-foreground mb-8"></div>
          <h3 className="text-4xl md:text-5xl font-display font-bold">
            Stack Tecnológico
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className="group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Icon className="h-7 w-7 text-foreground" strokeWidth={1.5} />
                  <h3 className="text-xl font-display font-bold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 border border-border text-foreground text-sm hover:bg-foreground hover:text-background transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 pt-12 border-t border-border">
          <p className="text-lg text-muted-foreground">
            <span className="font-display font-bold text-foreground text-3xl">7+</span> años de experiencia profesional desarrollando soluciones fullstack, DevOps y data science en industrias minera, bancaria y tecnológica.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
