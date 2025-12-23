import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    period: "2020 - 2024",
    description: "Graduated with honors. Specialized in Software Engineering and Web Technologies. Active member of the coding club and hackathon participant.",
    achievements: ["GPA: 3.8/4.0", "Dean's List", "Best Capstone Project"],
    icon: GraduationCap,
  },
  {
    degree: "High School Diploma",
    institution: "Springfield High School",
    period: "2018 - 2020",
    description: "Focused on Mathematics and Computer Science. Led the school's programming club and organized coding workshops.",
    achievements: ["Valedictorian", "Programming Club President"],
    icon: BookOpen,
  },
];

const certifications = [
  { name: "Meta Frontend Developer Professional Certificate", issuer: "Coursera", year: "2024" },
  { name: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp", year: "2023" },
  { name: "React - The Complete Guide", issuer: "Udemy", year: "2023" },
  { name: "AWS Cloud Practitioner", issuer: "Amazon", year: "2024" },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-body text-sm uppercase tracking-widest text-accent mb-4 block">
              Background
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Education & <span className="text-gradient">Certifications</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Education Timeline */}
            <div className="lg:col-span-3 space-y-8">
              <h3 className="font-display text-xl font-semibold text-foreground flex items-center gap-3 mb-6">
                <GraduationCap className="text-accent" size={24} />
                Education
              </h3>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />
                
                {education.map((item, index) => (
                  <div key={item.degree} className="relative pl-16 pb-12 last:pb-0">
                    {/* Timeline Dot */}
                    <div className="absolute left-3 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-background" />
                    </div>
                    
                    {/* Content Card */}
                    <div className="p-6 rounded-2xl bg-card shadow-soft">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-body">
                          {item.period}
                        </span>
                      </div>
                      <h4 className="font-display text-lg font-semibold text-foreground mb-1">
                        {item.degree}
                      </h4>
                      <p className="font-body text-accent mb-3">{item.institution}</p>
                      <p className="font-body text-muted-foreground text-sm mb-4">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.achievements.map((achievement) => (
                          <span
                            key={achievement}
                            className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-xs font-body text-muted-foreground"
                          >
                            <Award size={12} />
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="lg:col-span-2">
              <h3 className="font-display text-xl font-semibold text-foreground flex items-center gap-3 mb-6">
                <Award className="text-accent" size={24} />
                Certifications
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="p-5 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-all duration-300 border-l-4 border-accent"
                  >
                    <h4 className="font-display font-medium text-foreground mb-1 text-sm">
                      {cert.name}
                    </h4>
                    <div className="flex items-center justify-between">
                      <span className="font-body text-xs text-muted-foreground">
                        {cert.issuer}
                      </span>
                      <span className="font-body text-xs text-accent">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
