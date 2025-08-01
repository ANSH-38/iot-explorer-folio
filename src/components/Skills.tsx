import { Code, Database, Cpu, Globe, Settings, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-blue-500",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 }
      ]
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      color: "bg-green-500",
      skills: [
        { name: "C++", level: 85 },
        { name: "Python", level: 80 },
        { name: "JavaScript", level: 80 },
        { name: "TypeScript", level: 70 }
      ]
    },
    {
      title: "IoT & Hardware",
      icon: <Cpu className="w-6 h-6" />,
      color: "bg-purple-500",
      skills: [
        { name: "Arduino IDE", level: 85 },
        { name: "Raspberry Pi", level: 75 },
        { name: "Sensors", level: 80 },
        { name: "Microcontrollers", level: 75 }
      ]
    },
    {
      title: "Development Tools",
      icon: <Settings className="w-6 h-6" />,
      color: "bg-orange-500",
      skills: [
        { name: "VS Code", level: 90 },
        { name: "Git & GitHub", level: 85 },
        { name: "Linux", level: 70 },
        { name: "Postman", level: 75 }
      ]
    }
  ];

  const techStack = [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "C++", icon: "💻" },
    { name: "Python", icon: "🐍" },
    { name: "Arduino", icon: "🔧" },
    { name: "GitHub", icon: "📚" },
    { name: "VS Code", icon: "👨‍💻" }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical proficiencies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="portfolio-card">
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl text-white ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="portfolio-card">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Tech Stack</h3>
            <p className="text-muted-foreground">Technologies and tools I frequently use</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:scale-105 bg-accent/30"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <span className="text-sm font-medium text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center portfolio-card">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
              <Code className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Clean Code</h3>
            <p className="text-muted-foreground">Writing maintainable and efficient code following best practices</p>
          </div>
          
          <div className="text-center portfolio-card">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-2xl mb-4">
              <Zap className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Fast Learning</h3>
            <p className="text-muted-foreground">Quick to adapt to new technologies and frameworks</p>
          </div>
          
          <div className="text-center portfolio-card">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
              <Cpu className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Problem Solving</h3>
            <p className="text-muted-foreground">Analytical thinking to solve complex technical challenges</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;