import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* 3D Rotating geometric shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-accent/20 rotate-45 animate-rotate-3d" 
           style={{ transformStyle: "preserve-3d" }} />
      <div className="absolute bottom-40 left-32 w-24 h-24 border border-accent/30 animate-rotate-3d"
           style={{ animationDelay: "5s", animationDuration: "15s" }} />
      
      {/* Halogen glow orbs - floating */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-primary animate-glow water-float" 
           style={{ boxShadow: "0 0 60px 20px hsla(352, 32%, 61%, 0.4)" }} />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 rounded-full bg-accent animate-glow water-float water-float-delay-1"
           style={{ animationDelay: "1s", boxShadow: "0 0 50px 15px hsla(290, 80%, 79%, 0.4)" }} />
      <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-primary animate-glow water-float water-float-delay-2"
           style={{ animationDelay: "2s", boxShadow: "0 0 40px 12px hsla(352, 32%, 61%, 0.4)" }} />
      
      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge with shimmer */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-body text-sm mb-8 animate-fade-up holographic"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Open to opportunities
          </div>

          {/* Main Heading with glow */}
          <h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-fade-up leading-tight"
            style={{ animationDelay: "0.2s" }}
          >
            Hi, I'm <span className="text-gradient glow-text">Julme Ratan</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="font-display text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Data Analyst & AI/ML Developer
          </p>

          {/* Description */}
          <p 
            className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up leading-relaxed"
            style={{ animationDelay: "0.4s" }}
          >
            B.Tech AI & ML student passionate about data analytics, visualization, and cloud technologies. 
            Transforming raw data into actionable insights with Power BI, Python, and SQL.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Button variant="hero" size="lg" asChild className="hover-lift">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild className="hover-lift">
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          {/* Social Links - Icons float */}
          <div 
            className="flex items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="https://github.com/ratanjulme"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300 group hover-lift water-float"
            >
              <Github size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://linkedin.com/in/ratanjulme"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300 group hover-lift water-float water-float-delay-1"
            >
              <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:ratanjulme20@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300 group hover-lift water-float water-float-delay-2"
            >
              <Mail size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="tel:+919014434351"
              className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300 group hover-lift water-float water-float-delay-3"
            >
              <Phone size={20} className="group-hover:scale-110 transition-transform" />
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
