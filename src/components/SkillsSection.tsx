const skills = {
  frontend: [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "JavaScript", level: 95 },
    { name: "HTML/CSS", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Next.js", level: 75 },
  ],
  tools: [
    { name: "Git & GitHub", level: 85 },
    { name: "Figma", level: 80 },
    { name: "VS Code", level: 95 },
    { name: "npm/yarn", level: 85 },
    { name: "REST APIs", level: 80 },
    { name: "Responsive Design", level: 90 },
  ],
};

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="group">
    <div className="flex justify-between items-center mb-2">
      <span className="font-body text-sm text-foreground font-medium">{name}</span>
      <span className="font-body text-xs text-muted-foreground">{level}%</span>
    </div>
    <div className="h-2 bg-secondary rounded-full overflow-hidden">
      <div
        className="h-full gradient-accent rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-body text-sm uppercase tracking-widest text-accent mb-4 block">
              My Skills
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Technologies & tools<br />
              <span className="text-gradient">I work with</span>
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Frontend Skills */}
            <div className="p-8 rounded-3xl bg-card shadow-soft">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-accent" />
                Frontend Development
              </h3>
              <div className="space-y-5">
                {skills.frontend.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </div>

            {/* Tools & Others */}
            <div className="p-8 rounded-3xl bg-card shadow-soft">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-accent" />
                Tools & Technologies
              </h3>
              <div className="space-y-5">
                {skills.tools.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          </div>

          {/* Additional Skills Tags */}
          <div className="mt-12 text-center">
            <p className="font-body text-sm text-muted-foreground mb-4">Also familiar with:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Node.js", "MongoDB", "PostgreSQL", "Redux", "GraphQL", "Docker", "AWS", "Agile/Scrum"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-background border border-border text-sm font-body text-muted-foreground hover:border-accent hover:text-accent transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
