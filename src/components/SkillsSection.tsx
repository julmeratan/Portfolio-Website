const skills = {
  dataAnalytics: [
    { name: "Power BI", level: 95 },
    { name: "Excel", level: 90 },
    { name: "SQL", level: 88 },
    { name: "Python (Data Analysis)", level: 85 },
    { name: "DAX", level: 82 },
    { name: "Data Visualization", level: 90 },
  ],
  programming: [
    { name: "Python", level: 85 },
    { name: "Java", level: 75 },
    { name: "C", level: 80 },
    { name: "MongoDB", level: 70 },
    { name: "AWS Cloud", level: 75 },
    { name: "Hyperledger", level: 70 },
  ],
};

const SkillBar = ({ name, level, index = 0 }: { name: string; level: number; index?: number }) => {
  const delayClass = index % 4 === 1 ? 'water-float-delay-1' : index % 4 === 2 ? 'water-float-delay-2' : index % 4 === 3 ? 'water-float-delay-3' : '';
  
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span className={`font-body text-sm text-foreground font-medium water-float ${delayClass}`}>{name}</span>
        <span className="font-body text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden water-bubble">
        <div
          className="h-full gradient-accent rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
          style={{ width: `${level}%` }}
        >
          <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" 
               style={{ backgroundSize: "200% 100%" }} />
        </div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30 backdrop-blur-sm relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-body text-sm uppercase tracking-widest text-accent mb-4 block">
              My Skills
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Technologies & tools<br />
              <span className="text-gradient glow-text">I work with</span>
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Data Analytics Skills */}
            <div className="p-8 rounded-3xl bg-card/80 backdrop-blur-sm shadow-soft glass-card hover-lift water-wave-bg">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-accent animate-pulse water-float water-bubble" />
                Data Analytics & Visualization
              </h3>
              <div className="space-y-5">
                {skills.dataAnalytics.map((skill, index) => (
                  <SkillBar key={skill.name} {...skill} index={index} />
                ))}
              </div>
            </div>

            {/* Programming & Cloud */}
            <div className="p-8 rounded-3xl bg-card/80 backdrop-blur-sm shadow-soft glass-card hover-lift water-wave-bg">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-accent animate-pulse water-float water-bubble" />
                Programming & Cloud
              </h3>
              <div className="space-y-5">
                {skills.programming.map((skill, index) => (
                  <SkillBar key={skill.name} {...skill} index={index} />
                ))}
              </div>
            </div>
          </div>

          {/* Additional Skills Tags */}
          <div className="mt-12 text-center">
            <p className="font-body text-sm text-muted-foreground mb-4">Also experienced in:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Trading & Investing", "Team Leadership", "Sales & Marketing", "Communication", "Event Management", "Smart Contracts", "KPIs", "Predictive Analytics"].map((skill, index) => (
                <span
                  key={skill}
                  className={`px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border text-sm font-body text-muted-foreground hover:border-accent hover:text-accent transition-colors holographic water-float water-bubble ${index % 4 === 1 ? 'water-float-delay-1' : index % 4 === 2 ? 'water-float-delay-2' : index % 4 === 3 ? 'water-float-delay-3' : ''}`}
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
