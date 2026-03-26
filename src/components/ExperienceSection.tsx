import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
              Internship Experience
            </h2>
            <p className="font-body text-xs sm:text-sm text-muted-foreground">
              Building real-world skills through hands-on work
            </p>
          </div>

          <div className="glass-card rounded-xl p-4 sm:p-6 hover-lift">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2">
                  <h3 className="font-display text-base sm:text-lg font-semibold text-foreground">
                    Intern – Apple Intelligence Project
                  </h3>
                  <span className="text-primary text-xs sm:text-sm font-body whitespace-nowrap">
                    Feb 2026 – Mar 2026
                  </span>
                </div>
                <p className="font-body text-sm sm:text-base font-medium text-accent mb-3">
                  StudentTribe
                </p>
                <ul className="space-y-2">
                  {[
                    "Worked with structured datasets and analyzed system-generated outputs to ensure accuracy and consistency.",
                    "Evaluated AI-generated responses and identified inconsistencies to improve overall data quality.",
                    "Supported data validation processes and contributed to improving workflow efficiency.",
                    "Assisted in maintaining documentation and ensuring smooth data handling across tasks.",
                    "Collaborated with team members to optimize processes and enhance system reliability.",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="font-body text-xs sm:text-sm text-muted-foreground">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
