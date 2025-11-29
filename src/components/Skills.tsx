import { Card } from "@/components/ui/card";
import { Code2, Database, Cloud, Wrench } from "lucide-react";
import RippleEffect from "./RippleEffect";

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
    <section className="py-24 px-4 bg-secondary/50 relative overflow-hidden">
      <RippleEffect />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Habilidades Técnicas
          </h2>
          <div className="w-24 h-1 gradient-bg mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologías y herramientas con las que trabajo diariamente
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-background" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-card to-secondary border-primary/30 inline-block animate-fade-in">
            <p className="text-lg text-muted-foreground mb-4">
              <span className="font-bold gradient-text text-xl">7+ años</span> de experiencia profesional
            </p>
            <p className="text-muted-foreground">
              Desarrollando soluciones fullstack, DevOps y data science en industrias minera, bancaria y tecnológica
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
