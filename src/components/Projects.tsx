import { ExternalLink, Github, Cpu, Globe, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "EVM System Using IoT",
      description: "A secure electronic voting machine built with IoT technology, featuring real-time monitoring, biometric authentication, and blockchain-based vote verification for transparent elections.",
      image: "🗳️",
      techStack: ["Arduino", "Raspberry Pi", "Python", "IoT Sensors", "Blockchain"],
      category: "IoT",
      status: "Completed",
      features: [
        "Biometric voter authentication",
        "Real-time vote counting",
        "Secure data transmission",
        "Blockchain verification"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Smart Home Automation",
      description: "IoT-based home automation system that controls lighting, temperature, and security through a web interface and mobile app with voice command integration.",
      image: "🏠",
      techStack: ["Arduino IDE", "ESP32", "React", "Firebase", "Node.js"],
      category: "IoT",
      status: "In Development",
      features: [
        "Voice control integration",
        "Mobile app interface",
        "Energy monitoring",
        "Security alerts"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Personal Portfolio Website",
      description: "Responsive portfolio website built with modern web technologies, featuring smooth animations, dark/light mode, and optimized performance.",
      image: "💼",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      category: "Web Development",
      status: "Completed",
      features: [
        "Responsive design",
        "Smooth animations",
        "Performance optimized",
        "SEO friendly"
      ],
      github: "#",
      demo: "#"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "In Development":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "IoT":
        return <Cpu className="w-4 h-4" />;
      case "Web Development":
        return <Globe className="w-4 h-4" />;
      default:
        return <Zap className="w-4 h-4" />;
    }
  };

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my technical skills through innovative projects and solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card group">
              
              {/* Project Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{project.image}</div>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Title & Category */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-primary">{getCategoryIcon(project.category)}</span>
                  <span className="text-sm text-primary font-medium">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {project.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-accent text-accent-foreground rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.github}
                  className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors text-sm font-medium flex-1 justify-center"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a
                  href={project.demo}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium flex-1 justify-center"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center portfolio-card">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="text-sm text-muted-foreground">Total Projects</div>
          </div>
          <div className="text-center portfolio-card">
            <div className="text-3xl font-bold text-secondary mb-2">2</div>
            <div className="text-sm text-muted-foreground">IoT Projects</div>
          </div>
          <div className="text-center portfolio-card">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center portfolio-card">
            <div className="text-3xl font-bold text-secondary mb-2">1</div>
            <div className="text-sm text-muted-foreground">In Development</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="portfolio-card inline-block">
            <h3 className="text-xl font-bold mb-2">Interested in my work?</h3>
            <p className="text-muted-foreground mb-4">
              Check out my GitHub for more projects and code samples
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero btn-primary inline-flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;