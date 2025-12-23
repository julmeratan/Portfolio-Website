import { GraduationCap, Award, BookOpen, Briefcase } from "lucide-react";

const education = [
  {
    degree: "B.Tech in AI & Machine Learning",
    institution: "GRIET, Hyderabad",
    period: "2022 - Present",
    description: "Specializing in Artificial Intelligence and Machine Learning with focus on data analytics, cloud computing, and blockchain technologies.",
    achievements: ["AI/ML Specialization", "Data Analytics Focus"],
    icon: GraduationCap,
  },
  {
    degree: "Diploma in Mechanical Engineering",
    institution: "GPT, Warangal",
    period: "2019 - 2022",
    description: "Completed diploma with excellent academic performance. Gained hands-on experience during TSRTC internship in maintenance and performance optimization.",
    achievements: ["CPI: 9.0", "TSRTC Internship"],
    icon: BookOpen,
  },
  {
    degree: "SSC (CBSE)",
    institution: "Alphores School",
    period: "2019",
    description: "Completed secondary education with distinction. Active in sports - captained volleyball team to 2nd place among 25+ teams.",
    achievements: ["CPI: 9.2", "Volleyball Captain"],
    icon: BookOpen,
  },
];

const internships = [
  { name: "Hyperledger Developer Intern", company: "IDS Pvt. Ltd", period: "May-Jul 2024" },
  { name: "Data Analytics & AWS Intern", company: "AICTE", period: "May-Jul 2023" },
  { name: "Maintenance & Operations Intern", company: "TSRTC", period: "Aug 2021 - Jan 2022" },
];

const certifications = [
  { name: "Google Data Analytics", issuer: "Google", year: "2024" },
  { name: "Power BI Certification", issuer: "Microsoft", year: "2024" },
  { name: "Microsoft Front-End Web Development", issuer: "Microsoft", year: "2024" },
  { name: "AWS Cloud Foundation & ML Foundation", issuer: "Amazon", year: "2023" },
  { name: "CLA: Programming Essentials in C", issuer: "Cisco", year: "2023" },
  { name: "Introduction to MongoDB", issuer: "MongoDB", year: "2023" },
  { name: "Deloitte Australia - Data Analytics Simulation", issuer: "Deloitte", year: "2024" },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-secondary/30 backdrop-blur-sm relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-body text-sm uppercase tracking-widest text-accent mb-4 block">
              Background
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Education & <span className="text-gradient glow-text">Experience</span>
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
                    <div className="absolute left-3 w-6 h-6 rounded-full bg-accent flex items-center justify-center animate-pulse">
                      <div className="w-2 h-2 rounded-full bg-background" />
                    </div>
                    
                    {/* Content Card */}
                    <div className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm shadow-soft glass-card hover-lift">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-body holographic">
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

              {/* Internships */}
              <div className="mt-8">
                <h3 className="font-display text-xl font-semibold text-foreground flex items-center gap-3 mb-6">
                  <Briefcase className="text-accent" size={24} />
                  Internships
                </h3>
                <div className="grid gap-4">
                  {internships.map((intern) => (
                    <div key={intern.name} className="p-4 rounded-xl bg-card/80 backdrop-blur-sm border-l-4 border-accent glass-card hover-lift">
                      <h4 className="font-display font-medium text-foreground">{intern.name}</h4>
                      <div className="flex justify-between text-sm">
                        <span className="text-accent">{intern.company}</span>
                        <span className="text-muted-foreground">{intern.period}</span>
                      </div>
                    </div>
                  ))}
                </div>
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
                    className="p-5 rounded-2xl bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-medium transition-all duration-300 border-l-4 border-accent glass-card hover-lift"
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
