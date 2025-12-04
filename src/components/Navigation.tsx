import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

interface NavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
  isScrolled: boolean;
}

const Navigation = ({ currentSection, onSectionChange, isScrolled }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { label: "Inicio", id: "hero" },
    { label: "Sobre Mí", id: "about" },
    { label: "Habilidades", id: "skills" },
    { label: "Proyectos", id: "projects" },
    { label: "Contacto", id: "contact" }
  ];

  const handleNavClick = (id: string) => {
    onSectionChange(id);
    setIsOpen(false);
  };

  const isHeroSection = currentSection === 'hero';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 ${isScrolled
      ? "md:bg-background/80 md:backdrop-blur-md md:border-b md:border-border/10 md:shadow-sm md:supports-[backdrop-filter]:bg-background/60 py-2"
      : "bg-transparent py-4"
      }`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`flex items-center h-20 ${isHeroSection ? 'justify-between' : 'justify-end'}`}>
          <button
            onClick={() => handleNavClick("hero")}
            className={`text-2xl font-display font-bold cursor-pointer transition-colors ${isHeroSection
              ? 'text-black dark:!text-black'
              : 'text-foreground hidden'
              }`}
          >
            LOSD
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm tracking-wider transition-colors font-medium cursor-pointer ${currentSection === item.id
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
                  }`}
              >
                {item.label}
              </button>
            ))}

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors ${isHeroSection ? 'text-black dark:!text-black' : 'text-foreground'}`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Removed backdrop-blur-sm */}
      {isOpen && (
        <div className="md:hidden bg-background/95 border-b border-border">
          <div className="px-6 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 text-sm tracking-wider transition-colors font-medium cursor-pointer ${currentSection === item.id ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
              >
                {item.label}
              </button>
            ))}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="block w-full text-left px-4 py-3 text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
