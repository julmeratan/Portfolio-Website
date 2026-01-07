import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Linkedin, Github, Download, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "julmeratan@gmail.com",
    href: "mailto:julmeratan@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9014434351",
    href: "tel:+919014434351",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ratanjulme",
    href: "https://www.linkedin.com/in/ratanjulme/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/julmeratan",
    href: "https://github.com/julmeratan",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, India",
    href: null,
  },
];

const ContactSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHireMe = () => {
    const subject = encodeURIComponent("Job Opportunity - Let's Connect!");
    const body = encodeURIComponent(
      `Hi Julme,\n\nI came across your portfolio and I'm impressed with your skills in Data Analytics, AI/ML, and Full-Stack Development.\n\nI'd love to discuss a potential opportunity with you.\n\nBest regards,`
    );
    window.open(`mailto:julmeratan@gmail.com?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <section id="contact" className="py-8 sm:py-12 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Let's Work Together
            </h2>
            <p className="font-body text-muted-foreground text-sm sm:text-base max-w-xl mx-auto px-2">
              I'm currently looking for opportunities in Data Analytics, AI/ML, and Cloud Computing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl glass-card hover-lift"
                >
                  <div className="p-2 sm:p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <item.icon size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-wide">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="font-body text-xs sm:text-sm text-foreground hover:text-primary transition-colors truncate block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-body text-xs sm:text-sm text-foreground truncate">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive CTA Section */}
            <div className="glass-card rounded-xl p-6 sm:p-8 flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse" />
                <div className="relative p-4 sm:p-6 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
                  <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-primary animate-pulse" />
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                  Ready to Contribute!
                </h3>
                <p className="font-body text-muted-foreground text-xs sm:text-sm max-w-xs">
                  Fresh graduate with hands-on experience in Power BI, Python, Full-Stack Development, and Cloud Technologies.
                </p>
              </div>

              {/* Animated Hire Button */}
              <Button
                onClick={handleHireMe}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Hire Me
                  <ArrowRight 
                    className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
                  />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              {/* Quick Actions */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-2">
                <a
                  href="/Julme_Ratan_Resume.pdf"
                  download
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-secondary/50 hover:bg-secondary text-foreground text-xs sm:text-sm font-medium transition-colors"
                >
                  <Download size={14} className="sm:w-4 sm:h-4" />
                  Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/ratanjulme/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-secondary/50 hover:bg-secondary text-foreground text-xs sm:text-sm font-medium transition-colors"
                >
                  <Linkedin size={14} className="sm:w-4 sm:h-4" />
                  Connect
                </a>
                <a
                  href="https://github.com/julmeratan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-secondary/50 hover:bg-secondary text-foreground text-xs sm:text-sm font-medium transition-colors"
                >
                  <Github size={14} className="sm:w-4 sm:h-4" />
                  Code
                </a>
              </div>

              <p className="font-body text-xs text-muted-foreground italic">
                "Eager to learn, ready to grow, committed to excellence"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
