import { Github, Linkedin, Mail, Phone } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/julmeratan", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ratanjulme/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:julmeratan@gmail.com", label: "Email" },
  { icon: Phone, href: "tel:+919014434351", label: "Phone" },
];

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <a href="#" className="font-display text-2xl font-bold text-background">
              JR<span className="text-accent">.</span>
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-background/10 text-background hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="font-body text-sm text-background/60">
              © {new Date().getFullYear()} Julme Ratan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
