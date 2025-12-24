import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Walmart E-Commerce Sales Report",
    description: "Developed a Power BI dashboard analyzing $12.64M in sales and $1.47M in profit. Boosted data visibility by 65%.",
    tags: ["Power BI", "DAX", "Data Modeling"],
    liveLink: null,
    codeLink: "https://github.com/julmeratan",
  },
  {
    title: "ISRO Space Missions Dashboard",
    description: "Engineered a Power BI dashboard improving analytical efficiency by 65%. Leveraged DAX and predictive analytics.",
    tags: ["Power BI", "Predictive Analytics"],
    liveLink: null,
    codeLink: "https://github.com/julmeratan",
  },
  {
    title: "Hyperledger Blockchain Development",
    description: "Worked on blockchain technology and smart contracts during internship at IDS Pvt. Ltd.",
    tags: ["Hyperledger", "Smart Contracts", "Blockchain"],
    liveLink: null,
    codeLink: "https://github.com/julmeratan",
  },
  {
    title: "AWS Cloud Projects",
    description: "Completed cloud services training focusing on deployment and management as part of AICTE internship.",
    tags: ["AWS", "Cloud Computing"],
    liveLink: null,
    codeLink: "https://github.com/julmeratan",
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <div className="glass-card rounded-xl p-6 hover-lift group">
    <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
      {project.title}
    </h3>
    <p className="font-body text-muted-foreground text-sm mb-4 line-clamp-2">
      {project.description}
    </p>
    
    {/* Tags */}
    <div className="flex flex-wrap gap-2 mb-4">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="px-3 py-1 text-xs font-body rounded-full bg-primary/10 text-primary"
        >
          {tag}
        </span>
      ))}
    </div>

    {/* Links */}
    <div className="flex items-center gap-4">
      {project.liveLink && (
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
        >
          <ExternalLink size={14} />
          Live
        </a>
      )}
      {project.codeLink && (
        <a
          href={project.codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github size={14} />
          Code
        </a>
      )}
    </div>
  </div>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              My Projects
            </h2>
            <p className="font-body text-muted-foreground">
              Explore my collection of data analytics and development projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
