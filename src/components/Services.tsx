import { Code, Cpu, Globe, Smartphone, Settings, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Frontend Web Development",
      description: "Creating responsive and interactive web applications using modern frameworks and technologies.",
      features: [
        "Responsive Design",
        "Modern UI/UX",
        "Performance Optimization",
        "Cross-browser Compatibility"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "IoT Prototyping",
      description: "Developing Internet of Things solutions using Arduino and various sensors for smart automation.",
      features: [
        "Hardware Integration",
        "Sensor Programming",
        "Data Collection",
        "Remote Monitoring"
      ],
      technologies: ["Arduino IDE", "Raspberry Pi", "ESP32", "Sensors", "Python"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Project Development Support",
      description: "Providing technical guidance and development support for academic and personal projects.",
      features: [
        "Code Review",
        "Technical Consultation",
        "Problem Solving",
        "Best Practices"
      ],
      technologies: ["C++", "Python", "Git", "Documentation", "Testing"],
      color: "from-purple-500 to-purple-600"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "Understanding your requirements and project goals"
    },
    {
      step: "02",
      title: "Planning",
      description: "Creating a detailed project roadmap and timeline"
    },
    {
      step: "03",
      title: "Development",
      description: "Building your solution with clean, efficient code"
    },
    {
      step: "04",
      title: "Testing",
      description: "Thorough testing to ensure quality and reliability"
    },
    {
      step: "05",
      title: "Delivery",
      description: "Final delivery with documentation and support"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Offering specialized services in web development, IoT solutions, and project support
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="portfolio-card relative overflow-hidden group">
              
              {/* Gradient Header */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`}></div>
              
              {/* Service Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-gradient-to-r ${service.color} text-white`}>
                {service.icon}
              </div>

              {/* Service Title & Description */}
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">What I Offer:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-sm">
                      <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="border-t border-border pt-4">
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-accent text-accent-foreground rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="portfolio-card mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">My <span className="text-primary">Process</span></h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A structured approach to ensure successful project delivery and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full font-bold text-lg mb-4">
                  {step.step}
                </div>
                
                {/* Connector Line (except for last item) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-8"></div>
                )}
                
                <h4 className="font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Me */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center portfolio-card">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">Fast Delivery</h3>
            <p className="text-sm text-muted-foreground">
              Quick turnaround times without compromising on quality
            </p>
          </div>
          
          <div className="text-center portfolio-card">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-2xl mb-4">
              <Settings className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-lg font-bold mb-2">Custom Solutions</h3>
            <p className="text-sm text-muted-foreground">
              Tailored solutions that meet your specific requirements
            </p>
          </div>
          
          <div className="text-center portfolio-card">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
              <Smartphone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">Ongoing Support</h3>
            <p className="text-sm text-muted-foreground">
              Continued support and maintenance after project completion
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="portfolio-card inline-block max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to start your project?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your ideas and turn them into reality. I'm here to help you achieve your technical goals.
            </p>
            <button
              onClick={scrollToContact}
              className="btn-hero btn-primary"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;