import { ArrowRight, Download, Sparkles, Code, Zap } from 'lucide-react';
import anshProfile from '@/assets/ansh-profile.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/20 rounded-full animate-bounce delay-300"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-secondary/20 rounded-full animate-bounce delay-700"></div>
      <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-primary/30 rounded-full animate-bounce delay-1000"></div>
      
      <div className="relative max-w-7xl mx-auto w-full section-padding z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 hero-fade-in">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full text-primary font-medium text-sm">
              <Sparkles size={16} className="animate-spin-slow" />
              Available for opportunities
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-lg md:text-xl text-primary font-semibold tracking-wide">
                  Hi! I Am
                </h2>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none">
                  <span className="block text-foreground">Ansh</span>
                  <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Goswami
                  </span>
                </h1>
              </div>
              
              <div className="flex flex-wrap gap-4 text-xl md:text-2xl font-semibold text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Code size={24} className="text-primary" />
                  IoT Enthusiast
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={24} className="text-secondary" />
                  Web Developer
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles size={24} className="text-primary" />
                  Problem Solver
                </div>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              A dedicated and enthusiastic 4th year B.Tech student specializing in IoT, 
              seeking challenging roles in tech-driven organizations. Eager to apply academic 
              knowledge and hands-on project experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('#projects')}
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-primary/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative inline-flex items-center gap-2">
                  View My Work
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
              
              <button className="group relative bg-background/80 backdrop-blur-sm border-2 border-primary/20 text-foreground px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:bg-primary/5 hover:border-primary/40">
                <div className="inline-flex items-center gap-2">
                  <Download size={20} className="group-hover:animate-bounce" />
                  Download CV
                </div>
              </button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="group text-center p-4 rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-black bg-gradient-to-br from-primary to-primary-glow bg-clip-text text-transparent">4+</div>
                <div className="text-sm text-muted-foreground font-medium">Years Learning</div>
              </div>
              <div className="group text-center p-4 rounded-2xl bg-background/50 backdrop-blur-sm border border-secondary/10 hover:border-secondary/30 transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-black bg-gradient-to-br from-secondary to-secondary-glow bg-clip-text text-transparent">10+</div>
                <div className="text-sm text-muted-foreground font-medium">Projects</div>
              </div>
              <div className="group text-center p-4 rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-black bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">1</div>
                <div className="text-sm text-muted-foreground font-medium">Internship</div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Profile Image */}
          <div className="relative hero-slide-up">
            <div className="relative">
              {/* Animated background rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 animate-spin-slow"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-secondary/15 to-primary/15 animate-spin-reverse"></div>
              
              {/* Glass morphism container */}
              <div className="relative m-8 p-6 bg-background/20 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl">
                {/* Profile image with modern frame */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-1">
                  <img
                    src={anshProfile}
                    alt="Ansh Goswami"
                    className="w-full h-auto rounded-2xl transition-transform duration-500 hover:scale-105"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent rounded-2xl"></div>
                </div>
              </div>

              {/* Modern floating badges */}
              <div className="absolute -top-6 -right-6 group">
                <div className="bg-background/90 backdrop-blur-lg border border-primary/20 rounded-2xl px-6 py-4 shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-primary/25">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl animate-bounce">🏆</div>
                    <div>
                      <div className="text-sm font-bold text-foreground">B.Tech Student</div>
                      <div className="text-xs text-muted-foreground">Computer Science</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 group">
                <div className="bg-background/90 backdrop-blur-lg border border-secondary/20 rounded-2xl px-6 py-4 shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-secondary/25">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl animate-pulse">💻</div>
                    <div>
                      <div className="text-sm font-bold text-foreground">IoT Specialist</div>
                      <div className="text-xs text-muted-foreground">Arduino Expert</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional floating elements */}
              <div className="absolute top-1/4 -left-4 w-8 h-8 bg-primary/20 rounded-full backdrop-blur-sm animate-bounce delay-500"></div>
              <div className="absolute bottom-1/4 -right-4 w-6 h-6 bg-secondary/20 rounded-full backdrop-blur-sm animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;