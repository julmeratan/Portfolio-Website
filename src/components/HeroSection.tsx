import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-8 sm:pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div 
            className="mb-6 sm:mb-8 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="relative inline-block">
              <img 
                src={profilePhoto} 
                alt="Julme Ratan" 
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover profile-glow"
              />
              <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-pulse" />
            </div>
          </div>

          {/* Name with gradient */}
          <h1 
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-gradient glow-text">Julme Ratan</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="font-body text-base sm:text-lg md:text-xl text-muted-foreground mb-2 animate-fade-up px-2"
            style={{ animationDelay: "0.3s" }}
          >
            B.Tech AI & ML | Data Analyst & Developer
          </p>

          {/* Location */}
          <p 
            className="font-body text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Hyderabad, India
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Button 
              variant="default" 
              size="lg" 
              asChild 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 sm:px-8 text-sm sm:text-base w-full sm:w-auto"
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild 
              className="border-primary text-primary hover:bg-primary/10 px-6 sm:px-8 gap-2 text-sm sm:text-base w-full sm:w-auto"
            >
              <a href="/Julme_Ratan_Resume.pdf" download>
                <Download size={18} />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-fade-up" style={{ animationDelay: "0.7s" }}>
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
