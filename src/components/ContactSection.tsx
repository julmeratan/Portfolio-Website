import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, India",
    href: null,
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background/80 backdrop-blur-sm relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-body text-sm uppercase tracking-widest text-accent mb-4 block">
              Get in Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Let's work <span className="text-gradient glow-text">together</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm currently looking for opportunities in Data Analytics, AI/ML, and Cloud Computing. 
              Whether you have a question or just want to say hi, my inbox is always open!
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="font-display text-xl font-semibold text-foreground">
                Contact Information
              </h3>
              <p className="font-body text-muted-foreground">
                Feel free to reach out through any of these channels. 
                I typically respond within 24 hours.
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors glass-card hover-lift"
                  >
                    <div className="p-3 rounded-xl bg-accent/10 text-accent">
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
                          className="font-display font-medium text-foreground hover:text-accent transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-display font-medium text-foreground">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-card/80 backdrop-blur-sm shadow-soft glass-card">
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="font-body text-sm text-foreground mb-2 block">
                      Your Name
                    </label>
                    <Input
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background border-border focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm text-foreground mb-2 block">
                      Your Email
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background border-border focus:border-accent"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="font-body text-sm text-foreground mb-2 block">
                    Your Message
                  </label>
                  <Textarea
                    placeholder="Tell me about your opportunity or project..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-background border-border focus:border-accent resize-none"
                  />
                </div>
                <Button type="submit" variant="accent" size="lg" className="w-full sm:w-auto hover-lift">
                  Send Message
                  <Send size={16} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
