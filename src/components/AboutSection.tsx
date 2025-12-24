const skills = [
  "Power BI",
  "Python for Data Science",
  "SQL",
  "Data Analysis",
  "AWS Cloud",
  "Machine Learning",
  "Excel & DAX",
  "Problem Solving",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              I am a B.Tech student specializing in AI & ML with a passion for data science and analytics
            </p>
          </div>

          {/* Skills Grid */}
          <div className="mb-16">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6 text-center">
              Skills & Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-card border border-border text-sm font-body text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2 text-center">
              Education Timeline
            </h3>
            <p className="font-body text-sm text-muted-foreground text-center mb-8">
              Time is moving fast...
            </p>

            <div className="space-y-6">
              {/* B.Tech */}
              <div className="glass-card rounded-xl p-6 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h4 className="font-display text-lg font-semibold text-foreground">
                        B.Tech in AI & ML
                      </h4>
                      <span className="text-primary text-sm font-body">Expected 2026</span>
                    </div>
                    <p className="font-body text-muted-foreground text-sm">GRIET, Hyderabad</p>
                    <p className="font-body text-muted-foreground text-xs mt-1">Currently Pursuing</p>
                  </div>
                </div>
              </div>

              {/* Diploma */}
              <div className="glass-card rounded-xl p-6 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h4 className="font-display text-lg font-semibold text-foreground">
                        Diploma in Mechanical Engineering
                      </h4>
                      <span className="text-accent text-sm font-body">Completed</span>
                    </div>
                    <p className="font-body text-muted-foreground text-sm">GPT, Warangal</p>
                    <p className="font-body text-muted-foreground text-xs mt-1">CPI: 9.0</p>
                  </div>
                </div>
              </div>

              {/* SSC */}
              <div className="glass-card rounded-xl p-6 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h4 className="font-display text-lg font-semibold text-foreground">
                        SSC (CBSE)
                      </h4>
                      <span className="text-accent text-sm font-body">Completed</span>
                    </div>
                    <p className="font-body text-muted-foreground text-sm">Alphores School</p>
                    <p className="font-body text-muted-foreground text-xs mt-1">CPI: 9.2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
