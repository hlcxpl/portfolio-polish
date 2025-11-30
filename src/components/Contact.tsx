import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import BackgroundParticles from "./BackgroundParticles";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_2e2iw4n',
        'template_cxzr25i',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'WTaD6tGe4oGf6sepp'
      );

      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarme. Te responderé pronto.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error al enviar",
        description: "Hubo un problema al enviar el mensaje. Por favor, intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hlcxpl@gmail.com",
      href: "mailto:hlcxpl@gmail.com"
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Santiago, Chile",
      href: null
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/hlcxpl",
      href: "https://github.com/hlcxpl"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Luis Omar Sánchez Díaz",
      href: "https://www.linkedin.com/in/luisomarsanchezdiaz/"
    }
  ];

  return (
    <section className="h-full py-12 md:py-20 px-4 md:px-6 lg:px-12 bg-secondary/30 dark:bg-secondary/10 overflow-y-auto relative">
      <BackgroundParticles />
      <div className="max-w-6xl mx-auto pb-20 md:pb-32 relative z-10">
        <div className="mb-12 md:mb-20 animate-fade-in-up">
          <h2 className="text-xs md:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            Contacto
          </h2>
          <div className="w-12 md:w-16 h-[2px] bg-foreground mb-6 md:mb-8"></div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Trabajemos Juntos
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div className="space-y-8">
            <div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 md:mb-12">
                ¿Tienes un proyecto en mente? Estoy disponible para nuevos desafíos y oportunidades de colaboración.
              </p>
              <div className="space-y-5 md:space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-center gap-3 md:gap-4 group cursor-pointer">
                      <Icon className="h-5 w-5 md:h-5 md:w-5 text-foreground flex-shrink-0" strokeWidth={1.5} />
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                          {item.label}
                        </p>
                        <p className="text-sm md:text-base text-foreground group-hover:underline break-words">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a 
                      key={index}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs tracking-wider uppercase text-muted-foreground mb-2 md:mb-3">
                  Nombre
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Tu nombre"
                  required
                  className="bg-background border-border focus:border-foreground rounded-none text-sm md:text-base"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs tracking-wider uppercase text-muted-foreground mb-2 md:mb-3">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="tu@email.com"
                  required
                  className="bg-background border-border focus:border-foreground rounded-none text-sm md:text-base"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs tracking-wider uppercase text-muted-foreground mb-2 md:mb-3">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="¿En qué puedo ayudarte?"
                  required
                  rows={6}
                  className="bg-background border-border focus:border-foreground resize-none rounded-none text-sm md:text-base"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-none py-5 md:py-6 text-sm md:text-base"
                disabled={isSubmitting}
              >
                <Mail className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright section */}
        <div className="mt-12 md:mt-20 pt-6 md:pt-8 border-t border-border text-center">
          <p className="text-xs md:text-sm text-muted-foreground">
            © {new Date().getFullYear()} Luis Omar Sánchez. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
