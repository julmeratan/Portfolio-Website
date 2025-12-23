import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Folder, BarChart3, Rocket } from "lucide-react";

const projects = [
  {
    title: "Walmart E-Commerce Sales Report",
    description: "Developed a Power BI dashboard analyzing $12.64M in sales and $1.47M in profit. Boosted data visibility by 65% while optimizing shipping trends across markets and regions.",
    tags: ["Power BI", "DAX", "Data Modeling", "KPIs"],
    company: "Tech-Tip24",
    featured: true,
    icon: BarChart3,
  },
  {
    title: "ISRO Space Missions Dashboard",
    description: "Engineered a Power BI dashboard improving analytical efficiency by 65%. Leveraged DAX, performance metrics, and predictive analytics for comprehensive mission analysis.",
    tags: ["Power BI", "Predictive Analytics", "Data Visualization"],
    featured: true,
    icon: Rocket,
  },
  {
    title: "Hyperledger Blockchain Development",
    description: "Worked on blockchain technology and smart contracts during internship at IDS Pvt. Ltd, gaining hands-on experience in distributed ledger systems.",
    tags: ["Hyperledger", "Smart Contracts", "Blockchain"],
    featured: false,
  },
  {
    title: "AWS Cloud Projects",
    description: "Completed cloud services training focusing on deployment and management as part of 10-week AICTE internship.",
    tags: ["AWS", "Cloud Computing", "Deployment"],
    featured: false,
  },
  {
    title: "Data Analytics Pipeline",
    description: "Built comprehensive data analysis workflows using Python and SQL for processing and visualizing large datasets.",
    tags: ["Python", "SQL", "Data Analysis"],
    featured: false,
  },
  {
    title: "MongoDB Integration Project",
    description: "Implemented database solutions using MongoDB for efficient data storage and retrieval in analytics applications.",
    tags: ["MongoDB", "Database Design", "NoSQL"],
    featured: false,
  },
];

const ProjectCard = ({ project, featured }: { project: typeof projects[0]; featured: boolean }) => (
  <div
    className={`group rounded-3xl overflow-hidden transition-all duration-300 hover-lift ${
      featured 
        ? "bg-card/80 backdrop-blur-sm shadow-medium hover:shadow-lg glass-card" 
        : "bg-background/80 backdrop-blur-sm border border-border hover:border-accent/50"
    }`}
  >
    <div className={`p-6 ${featured ? "md:p-8" : ""}`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${featured ? "bg-accent/10 text-accent" : "bg-secondary text-muted-foreground"} group-hover:animate-glow`}>
          {project.icon ? <project.icon size={featured ? 28 : 24} /> : <Folder size={featured ? 28 : 24} />}
        </div>
        {project.company && (
          <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-body">
            {project.company}
          </span>
        )}
      </div>

      {/* Content */}
      <h3 className={`font-display font-semibold text-foreground mb-2 group-hover:text-accent transition-colors ${featured ? "text-xl" : "text-lg"}`}>
        {project.title}
      </h3>
      <p className={`font-body text-muted-foreground mb-4 ${featured ? "text-base" : "text-sm"} line-clamp-3`}>
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-body rounded-full bg-secondary text-muted-foreground holographic"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-background/80 backdrop-blur-sm relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-body text-sm uppercase tracking-widest text-accent mb-4 block">
              My Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Featured <span className="text-gradient glow-text">Projects</span>
            </h2>
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} featured={true} />
            ))}
          </div>

          {/* Other Projects */}
          <div className="mb-8">
            <h3 className="font-display text-2xl font-semibold text-foreground text-center mb-8">
              Other Noteworthy Projects
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherProjects.map((project) => (
                <ProjectCard key={project.title} project={project} featured={false} />
              ))}
            </div>
          </div>

          {/* View More CTA */}
          <div className="text-center">
            <Button variant="outline" size="lg" asChild className="hover-lift">
              <a href="https://linkedin.com/in/ratanjulme" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
                <ExternalLink size={16} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
