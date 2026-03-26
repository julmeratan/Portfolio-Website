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
    <section id="about" className="py-8 sm:py-12 relative">
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
        
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
