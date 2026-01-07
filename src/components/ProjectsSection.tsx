import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Walmart E-Commerce Sales Report",
    description: "Developed a Power BI dashboard analyzing $12.64M in sales and $1.47M in profit. Boosted data visibility by 65%.",
    tags: ["Power BI", "DAX", "Data Modeling"],
    liveLink: null,
    codeLink: "https://github.com/users/julmeratan/projects/4",
  },
  {
    title: "ISRO Space Missions Dashboard",
    description: "Engineered a Power BI dashboard improving analytical efficiency by 65%. Leveraged DAX and predictive analytics.",
    tags: ["Power BI", "Predictive Analytics"],
    liveLink: null,
    codeLink: "https://github.com/julmeratan",
  },
  {
    title: "CampusPulse",
    description: "Developed a full-stack event platform implementing event features such as creating, viewing, and participating in events, with authentication.",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    liveLink: "https://www.campuspulse.life/",
    codeLink: null,
  },
  {
    title: "AWS Cloud Projects",
    description: "Completed cloud services training focusing on deployment and management as part of AICTE internship.",
    tags: ["AWS", "Cloud Computing"],
    liveLink: null,
    codeLink: "https://github.com/julmeratan",
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const projectLink = project.liveLink || project.codeLink;
  
  return (
    <a
      href={projectLink || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card rounded-xl p-4 sm:p-6 hover-lift group block cursor-pointer"
    >
      <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="font-body text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
        {project.description}
      </p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-body rounded-full bg-primary/10 text-primary"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links indicator */}
      <div className="flex items-center gap-4">
        {project.liveLink && (
          <span className="flex items-center gap-1 text-sm text-primary">
            <ExternalLink size={14} />
            Live
          </span>
        )}
        {project.codeLink && (
          <span className="flex items-center gap-1 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
            <Github size={14} />
            View Project
          </span>
        )}
      </div>
    </a>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              My Projects
            </h2>
            <p className="font-body text-muted-foreground text-sm sm:text-base px-2">
              Explore my collection of data analytics and development projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
