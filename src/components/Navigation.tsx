import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-soft py-3"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-3 group"
        >
          <img 
            src={profilePhoto} 
            alt="Julme Ratan" 
            className="w-10 h-10 rounded-full object-cover border-2 border-accent/50 group-hover:border-accent transition-colors"
          />
          <span className="font-display text-xl font-bold text-foreground group-hover:text-accent transition-colors">
            JR<span className="text-accent">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a href="/Julme_Ratan_Resume.pdf" download>
          <Button variant="accent" size="sm" className="hidden md:flex gap-2">
            <Download size={16} />
            Download Resume
          </Button>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg shadow-medium animate-fade-in">
          <ul className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="font-body text-lg text-foreground hover:text-accent transition-colors block py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a href="/Julme_Ratan_Resume.pdf" download className="block">
                <Button variant="accent" className="w-full gap-2">
                  <Download size={16} />
                  Download Resume
                </Button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navigation;
