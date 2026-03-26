const EducationSection = () => {
  return (
    <section id="education" className="py-8 sm:py-12 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
            Education Timeline
          </h3>
          <p className="font-body text-xs sm:text-sm text-muted-foreground text-center mb-6 sm:mb-8">
            Time is moving fast...
          </p>

          <div className="space-y-4 sm:space-y-6">
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
    </section>
  );
};

export default EducationSection;
