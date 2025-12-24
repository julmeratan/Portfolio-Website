import { Github, Linkedin, Mail, Phone } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const socialLinks = [
  { icon: Github, href: "https://github.com/julmeratan", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ratanjulme/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:julmeratan@gmail.com", label: "Email" },
  { icon: Phone, href: "tel:+919014434351", label: "Phone" },
];

const Footer = () => {
  return (
    <footer className="py-6 bg-foreground border-t border-background/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo with Photo */}
          <a href="#" className="flex items-center gap-2 group">
            <img 
              src={profilePhoto} 
              alt="Julme Ratan" 
              className="w-8 h-8 rounded-full object-cover border border-accent/50"
            />
            <span className="font-display text-lg font-bold text-background group-hover:text-accent transition-colors">
              Julme Ratan
            </span>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 text-background hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="font-body text-xs text-background/60">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
