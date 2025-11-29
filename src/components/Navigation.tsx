import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

interface NavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation = ({ currentSection, onSectionChange }: NavigationProps) => {
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
    <nav className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <button 
            onClick={() => handleNavClick("hero")}
            className={`text-2xl font-display font-bold cursor-pointer transition-colors ${
              isHeroSection ? 'text-white' : 'text-foreground'
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
                className={`text-sm tracking-wider transition-colors font-medium cursor-pointer ${
                  currentSection === item.id 
                    ? (isHeroSection ? 'text-white' : 'text-foreground')
                    : (isHeroSection ? 'text-white/60 hover:text-white' : 'text-muted-foreground hover:text-foreground')
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`transition-colors ${
                  isHeroSection ? 'text-white/60 hover:text-white' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors ${
              isHeroSection ? 'text-white' : 'text-foreground'
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-b border-border">
          <div className="px-6 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 text-sm tracking-wider transition-colors font-medium cursor-pointer ${
                  currentSection === item.id ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
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
