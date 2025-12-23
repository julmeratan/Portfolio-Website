import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A modern admin dashboard for e-commerce platforms with real-time analytics, order management, and inventory tracking.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with drag-and-drop functionality, real-time updates, and team collaboration features.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Socket.io"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Weather Application",
    description: "Beautiful weather app with location-based forecasts, interactive maps, and customizable notifications.",
    tags: ["React", "OpenWeather API", "Geolocation"],
    github: "https://github.com",
    featured: false,
  },
  {
    title: "Portfolio Generator",
    description: "Tool to create stunning portfolio websites from markdown files with customizable themes.",
    tags: ["Next.js", "MDX", "Tailwind CSS"],
    github: "https://github.com",
    featured: false,
  },
  {
    title: "Recipe Finder",
    description: "Search and discover recipes based on ingredients you have, with filtering and favorites functionality.",
    tags: ["React", "Spoonacular API", "LocalStorage"],
    github: "https://github.com",
    featured: false,
  },
  {
    title: "Markdown Editor",
    description: "Real-time markdown editor with preview, syntax highlighting, and export options.",
    tags: ["React", "CodeMirror", "HTML-to-PDF"],
    github: "https://github.com",
    featured: false,
  },
];

const ProjectCard = ({ project, featured }: { project: typeof projects[0]; featured: boolean }) => (
  <div
    className={`group rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
      featured 
        ? "bg-card shadow-medium hover:shadow-lg" 
        : "bg-background border border-border hover:border-accent/50"
    }`}
  >
    <div className={`p-6 ${featured ? "md:p-8" : ""}`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${featured ? "bg-accent/10 text-accent" : "bg-secondary text-muted-foreground"}`}>
          <Folder size={featured ? 28 : 24} />
        </div>
        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={18} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
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
            className="px-3 py-1 text-xs font-body rounded-full bg-secondary text-muted-foreground"
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
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-body text-sm uppercase tracking-widest text-accent mb-4 block">
              My Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Featured <span className="text-gradient">Projects</span>
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
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                View More on GitHub
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
