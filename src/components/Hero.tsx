import { ArrowRight, Download } from 'lucide-react';
import anshProfile from '@/assets/ansh-profile.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center gradient-hero section-padding">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 fade-in">
            <div className="space-y-4">
              <h2 className="text-lg md:text-xl text-primary font-semibold">
                Hi! I Am
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Ansh <span className="text-primary">Goswami</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                IoT Enthusiast | Web Developer | Problem Solver
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              A dedicated and enthusiastic 4th year B.Tech student specializing in IoT, 
              seeking challenging roles in tech-driven organizations. Eager to apply academic 
              knowledge and hands-on project experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('#projects')}
                className="btn-hero btn-primary inline-flex items-center gap-2"
              >
                View My Work
                <ArrowRight size={20} />
              </button>
              <button className="btn-hero btn-secondary inline-flex items-center gap-2">
                <Download size={20} />
                Download CV
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1</div>
                <div className="text-sm text-muted-foreground">Internship</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative slide-up">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl transform -rotate-3"></div>
              
              {/* Profile image */}
              <div className="relative bg-white rounded-3xl p-4 shadow-card">
                <img
                  src={anshProfile}
                  alt="Ansh Goswami"
                  className="w-full h-auto rounded-2xl"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl px-4 py-2 shadow-lg portfolio-card">
                <div className="text-2xl">🏆</div>
                <div className="text-sm font-semibold">B.Tech Student</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl px-4 py-2 shadow-lg portfolio-card">
                <div className="text-2xl">💻</div>
                <div className="text-sm font-semibold">IoT Specialist</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;