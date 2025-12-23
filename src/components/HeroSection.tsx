import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-body text-sm mb-8 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Open to opportunities
          </div>

          {/* Main Heading */}
          <h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-fade-up leading-tight"
            style={{ animationDelay: "0.2s" }}
          >
            Hi, I'm <span className="text-gradient">John Doe</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="font-display text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Frontend Developer & UI Designer
          </p>

          {/* Description */}
          <p 
            className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up leading-relaxed"
            style={{ animationDelay: "0.4s" }}
          >
            Fresh graduate passionate about crafting beautiful, user-centric web experiences. 
            Turning ideas into elegant, functional interfaces.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          {/* Social Links */}
          <div 
            className="flex items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
            >
              <Github size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
            >
              <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:john@example.com"
              className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
            >
              <Mail size={20} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
            <span className="font-body text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
