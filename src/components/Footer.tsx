import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">
              LOSD
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Desarrollador Fullstack apasionado por crear experiencias web excepcionales.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-wider uppercase text-muted-foreground mb-6">
              Enlaces
            </h4>
            <ul className="space-y-3">
              {["Sobre Mí", "Habilidades", "Proyectos", "Contacto"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="text-foreground hover:underline text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-wider uppercase text-muted-foreground mb-6">
              Sígueme
            </h4>
            <div className="flex gap-4">
              <a 
                href="https://github.com/hlcxpl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-all"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/luisomarsanchezdiaz/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:hlcxpl@gmail.com"
                className="w-10 h-10 border border-border flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-all"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Luis Omar Sánchez. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
