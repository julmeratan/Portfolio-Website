const skills = [
  "Power BI",
  "Python for Data Science",
  "SQL",
  "Data Analysis",
  "AWS Cloud",
  "Machine Learning",
  "Excel & DAX",
  "HTML & CSS",
  "Web Development",
];

const softSkills = [
  "Leadership Skills",
  "Problem Solving",
  "Critical Thinking",
  "Communication",
  "Teamwork",
  "Time Management",
  "Adaptability",
  "Continuous Learning",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="font-body text-foreground font-medium max-w-3xl mx-auto space-y-3 sm:space-y-4 text-left text-sm sm:text-base">
              <p>
                I am a Computer Science undergraduate specializing in Artificial Intelligence and Data Analytics, with a strong interest in solving real-world problems through technology.
              </p>
              <p>
                I have hands-on experience with Python, SQL, Power BI, Excel, HTML, CSS, C, and PowerPoint, working across data analysis, reporting, system understanding, and basic web development. I focus on building clear, structured, and practical solutions that deliver real value.
              </p>
              <p>
                My internship experience in Data Analytics, AWS Cloud, and engineering-based environments has strengthened my adaptability, teamwork, and execution mindset. I bring strong communication, leadership skills, and a continuous willingness to learn.
              </p>
              <p>
                I am open to opportunities across multiple roles and domains, ready to contribute effectively and grow with the organization.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div id="skills" className="mb-8 sm:mb-10 scroll-mt-20">
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 text-center">
              Skills & Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-card border border-border text-xs sm:text-sm font-body text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="mb-8 sm:mb-12">
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 text-center">
              Soft Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-card border border-accent/50 text-xs sm:text-sm font-body text-foreground hover:border-accent hover:text-accent transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
              Education Timeline
            </h3>
            <p className="font-body text-xs sm:text-sm text-muted-foreground text-center mb-6 sm:mb-8">
              Time is moving fast...
            </p>

            <div className="space-y-4 sm:space-y-6">
              {/* B.Tech */}
              <div className="glass-card rounded-xl p-4 sm:p-6 hover-lift">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2">
                      <h4 className="font-display text-base sm:text-lg font-semibold text-foreground">
                        B.Tech in AI & ML
                      </h4>
                      <span className="text-primary text-xs sm:text-sm font-body">Expected 2026</span>
                    </div>
                    <p className="font-body text-muted-foreground text-xs sm:text-sm">GRIET, Hyderabad</p>
                    <p className="font-body text-muted-foreground text-xs mt-1">Currently Pursuing</p>
                  </div>
                </div>
              </div>

              {/* Diploma */}
              <div className="glass-card rounded-xl p-4 sm:p-6 hover-lift">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2">
                      <h4 className="font-display text-base sm:text-lg font-semibold text-foreground">
                        Diploma in Mechanical Engineering
                      </h4>
                      <span className="text-accent text-xs sm:text-sm font-body">Completed</span>
                    </div>
                    <p className="font-body text-muted-foreground text-xs sm:text-sm">GPT, Warangal</p>
                    <p className="font-body text-muted-foreground text-xs mt-1">CPI: 9.0</p>
                  </div>
                </div>
              </div>

              {/* SSC */}
              <div className="glass-card rounded-xl p-4 sm:p-6 hover-lift">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2">
                      <h4 className="font-display text-base sm:text-lg font-semibold text-foreground">
                        SSC (CBSE)
                      </h4>
                      <span className="text-accent text-xs sm:text-sm font-body">Completed</span>
                    </div>
                    <p className="font-body text-muted-foreground text-xs sm:text-sm">Alphores School</p>
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
