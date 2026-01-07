import { Github, Linkedin, Mail, Phone } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/julmeratan", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ratanjulme/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:julmeratan@gmail.com", label: "Email" },
  { icon: Phone, href: "tel:+919014434351", label: "Phone" },
];

const Footer = () => {
  return (
    <footer className="py-3 sm:py-4 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          {/* Logo */}
          <a href="#" className="font-display text-base sm:text-lg font-bold text-primary">
            Julme Ratan
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-2 sm:gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 rounded-full bg-card text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="font-body text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
