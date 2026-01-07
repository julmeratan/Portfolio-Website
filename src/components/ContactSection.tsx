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
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's Work Together
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              I'm currently looking for opportunities in Data Analytics, AI/ML, and Cloud Computing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-xl glass-card hover-lift"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-wide">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="font-body text-sm text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-body text-sm text-foreground">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive CTA Section */}
            <div className="glass-card rounded-xl p-8 flex flex-col items-center justify-center text-center space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse" />
                <div className="relative p-6 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
                  <Sparkles className="w-12 h-12 text-primary animate-pulse" />
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Ready to Contribute!
                </h3>
                <p className="font-body text-muted-foreground text-sm max-w-xs">
                  Fresh graduate with hands-on experience in Power BI, Python, Full-Stack Development, and Cloud Technologies.
                </p>
              </div>

              {/* Animated Hire Button */}
              <Button
                onClick={handleHireMe}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Hire Me
                  <ArrowRight 
                    className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
                  />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              {/* Quick Actions */}
              <div className="flex gap-3 pt-2">
                <a
                  href="/Julme_Ratan_Resume.pdf"
                  download
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 hover:bg-secondary text-foreground text-sm font-medium transition-colors"
                >
                  <Download size={16} />
                  Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/ratanjulme/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 hover:bg-secondary text-foreground text-sm font-medium transition-colors"
                >
                  <Linkedin size={16} />
                  Connect
                </a>
                <a
                  href="https://github.com/julmeratan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 hover:bg-secondary text-foreground text-sm font-medium transition-colors"
                >
                  <Github size={16} />
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
