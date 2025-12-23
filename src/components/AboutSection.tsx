import { BarChart3, Cloud, Database, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Proficient in Excel, SQL, Power BI, and Python for data analysis and reporting",
  },
  {
    icon: Database,
    title: "Database & Blockchain",
    description: "Experienced with SQL databases, MongoDB, and Hyperledger blockchain development",
  },
  {
    icon: Cloud,
    title: "Cloud Technologies",
    description: "AWS certified with hands-on experience in cloud services and deployment",
  },
  {
    icon: Sparkles,
    title: "AI & Machine Learning",
    description: "B.Tech specialization in AI/ML with practical project experience",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background/80 backdrop-blur-sm relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-body text-sm uppercase tracking-widest text-accent mb-4 block">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Turning data into<br />
              <span className="text-gradient glow-text">actionable insights</span>
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                I'm Julme Ratan, a B.Tech student specializing in Artificial Intelligence and 
                Machine Learning at GRIET, Hyderabad. My passion lies in transforming raw data 
                into meaningful business insights through analytics and visualization.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                With hands-on experience in Power BI, Python, and SQL, I've developed dashboards 
                that improved data visibility by 65%. My internship at IDS Pvt. Ltd as a Hyperledger 
                Developer gave me unique insights into blockchain technology.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                I'm also AWS certified and have completed training in cloud services, deployment, 
                and management through AICTE. I love organizing tech events and have led hackathons 
                with participants from multiple colleges.
              </p>
            </div>

            {/* Highlights Cards */}
            <div className="grid gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-medium transition-all duration-300 group hover-lift glass-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 water-float ${index % 4 === 1 ? 'water-float-delay-1' : index % 4 === 2 ? 'water-float-delay-2' : index % 4 === 3 ? 'water-float-delay-3' : ''}`}>
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
