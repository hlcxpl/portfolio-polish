import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4 font-mono">
              &lt;LOS /&gt;
            </h3>
            <p className="text-muted-foreground">
              Desarrollador Fullstack apasionado por crear experiencias web excepcionales.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              {["Sobre Mí", "Habilidades", "Proyectos", "Contacto"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Conecta Conmigo
            </h4>
            <div className="flex gap-4">
              <a 
                href="https://github.com/hlcxpl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contact@luisomar.dev"
                className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Luis Omar Sánchez. Hecho con
            <Heart className="h-4 w-4 text-primary animate-pulse" />
            y React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;