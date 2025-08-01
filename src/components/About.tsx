import { GraduationCap, Calendar, Award, Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about technology and innovation, with a focus on IoT and web development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Bio Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A dedicated and enthusiastic 4th year B.Tech student specializing in IoT, 
              seeking a challenging role in a tech-driven organization. Eager to apply academic 
              knowledge and hands-on project experience in software development, IoT, and web 
              technologies to contribute to impactful solutions.
            </p>
            
            <div className="bg-accent/50 rounded-2xl p-6 border border-border">
              <h4 className="text-xl font-semibold mb-3 text-primary">Why IoT? – My Passion Journey</h4>
              <p className="text-muted-foreground leading-relaxed">
                The Internet of Things fascinates me because it bridges the physical and digital worlds. 
                I believe IoT has the potential to solve real-world problems by making everyday objects 
                smarter and more connected. My goal is to create innovative solutions that improve people's 
                lives through intelligent automation and data-driven insights.
              </p>
            </div>

            <button className="btn-hero btn-primary inline-flex items-center gap-2">
              <Download size={20} />
              Download Full Resume
            </button>
          </div>

          {/* Education & Timeline */}
          <div className="space-y-8">
            
            {/* Education Card */}
            <div className="portfolio-card">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">Education</h3>
                  <p className="text-muted-foreground">Current Academic Journey</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-6 py-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">2022 – 2026</span>
                  </div>
                  <h4 className="text-lg font-semibold">B.Tech in Computer Science and Engineering (IoT)</h4>
                  <p className="text-muted-foreground">Raj Kumar Goel Institute of Technology</p>
                  <div className="mt-2">
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      4th Year Student
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="portfolio-card text-center">
                <div className="text-3xl font-bold text-primary mb-2">2026</div>
                <div className="text-sm text-muted-foreground">Expected Graduation</div>
              </div>
              <div className="portfolio-card text-center">
                <div className="text-3xl font-bold text-secondary mb-2">IoT</div>
                <div className="text-sm text-muted-foreground">Specialization</div>
              </div>
            </div>

            {/* Achievements */}
            <div className="portfolio-card">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-secondary" />
                <h3 className="text-xl font-bold">Academic Focus</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Software Development Fundamentals
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  IoT System Architecture
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Web Technologies
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Embedded Systems
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;