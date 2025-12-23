import { Code2, Palette, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code following best practices",
  },
  {
    icon: Palette,
    title: "UI/UX Focus",
    description: "Creating intuitive interfaces with attention to detail",
  },
  {
    icon: Sparkles,
    title: "Fast Learner",
    description: "Quickly adapting to new technologies and frameworks",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-body text-sm uppercase tracking-widest text-accent mb-4 block">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Passionate about creating<br />
              <span className="text-gradient">meaningful experiences</span>
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                I'm a recent Computer Science graduate with a deep passion for frontend development 
                and user interface design. My journey in web development started during my first year 
                of college, and I've been hooked ever since.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                I believe in the power of well-crafted digital experiences to make a difference. 
                Whether it's a simple landing page or a complex web application, I approach every 
                project with the same level of enthusiasm and attention to detail.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new design trends, contributing to 
                open-source projects, or experimenting with the latest web technologies.
              </p>
            </div>

            {/* Highlights Cards */}
            <div className="grid gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="font-body text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
