import { Building, Calendar, Code, Users } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional journey and internship experience in software development
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          
          {/* Main Experience Card */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-primary/20"></div>
            
            <div className="portfolio-card relative">
              {/* Timeline dot */}
              <div className="absolute -left-4 top-8 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ml-8">
                
                {/* Left - Company Info */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Building className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Software Development Intern</h3>
                      <p className="text-xl text-primary font-semibold">Bluestock Fintech</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">May 2025 – Jun 2025</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-accent/50 rounded-xl p-4 border border-border">
                    <h4 className="font-semibold mb-2 text-primary">About Bluestock Fintech</h4>
                    <p className="text-sm text-muted-foreground">
                      A forward-thinking fintech company focused on delivering innovative 
                      financial solutions through cutting-edge technology and data-driven insights.
                    </p>
                  </div>

                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="font-medium">2 Months Duration</span>
                  </div>
                </div>

                {/* Right - Responsibilities & Tech */}
                <div className="space-y-6">
                  
                  {/* Key Responsibilities */}
                  <div>
                    <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-secondary" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground">Writing efficient and clean code following industry best practices</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground">Conducting thorough code reviews and providing constructive feedback</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground">Contributing to innovative software solutions for financial technology</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground">Collaborating with cross-functional teams on project development</span>
                      </li>
                    </ul>
                  </div>

                  {/* Tech Stack Used */}
                  <div>
                    <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <Code className="w-5 h-5 text-secondary" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['JavaScript', 'Python', 'Git', 'VS Code', 'Agile', 'REST APIs'].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Learning Outcomes */}
                  <div className="bg-secondary/5 rounded-xl p-4 border border-secondary/20">
                    <h5 className="font-semibold text-secondary mb-2">Key Learning Outcomes</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Enhanced understanding of software development lifecycle</li>
                      <li>• Improved code quality and review processes</li>
                      <li>• Experience with fintech industry standards</li>
                      <li>• Team collaboration and agile methodologies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Gained Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center portfolio-card">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Code Quality</h3>
              <p className="text-sm text-muted-foreground">Learned to write clean, efficient, and maintainable code</p>
            </div>
            
            <div className="text-center portfolio-card">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-2xl mb-4">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Team Work</h3>
              <p className="text-sm text-muted-foreground">Gained experience in collaborative development environments</p>
            </div>
            
            <div className="text-center portfolio-card">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                <Building className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Industry Insight</h3>
              <p className="text-sm text-muted-foreground">Understanding of fintech industry and business requirements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;