import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Wrench, Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      color: "from-primary to-accent",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Sass", "WordPress", "Elementor"]
    },
    {
      icon: Database,
      title: "Backend & Databases",
      color: "from-accent to-primary",
      skills: ["Node.js", "Java", "Python", "MySQL", "PostgreSQL"]
    },
    {
      icon: Wrench,
      title: "Herramientas",
      color: "from-primary/80 to-accent/80",
      skills: ["GitHub", "Git", "VS Code", "npm"]
    },
    {
      icon: Cpu,
      title: "Electrónica",
      color: "from-accent/80 to-primary/80",
      skills: ["MATLAB", "C++", "PICs", "Circuitos Integrados", "Robótica"]
    }
  ];

  return (
    <section className="py-24 px-4 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Habilidades Técnicas
          </h2>
          <div className="w-24 h-1 gradient-bg mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologías y herramientas con las que trabajo diariamente
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 glow-effect`}>
                    <Icon className="h-8 w-8 text-background" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="px-4 py-2 text-sm font-medium bg-secondary/50 hover:bg-primary/20 hover:text-primary border border-border hover:border-primary/50 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-card to-secondary border-primary/30 inline-block animate-fade-in">
            <p className="text-lg text-muted-foreground mb-4">
              <span className="font-bold gradient-text text-xl">5+ años</span> de experiencia profesional
            </p>
            <p className="text-muted-foreground">
              Desarrollando soluciones web innovadoras y escalables
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;