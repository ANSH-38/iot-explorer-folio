import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:ansh.goswami@example.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold mb-4 hover:text-primary transition-colors"
            >
              Ansh<span className="text-primary">.</span>
            </button>
            <p className="text-muted-foreground mb-6 max-w-md">
              A passionate IoT enthusiast and web developer, dedicated to creating 
              innovative solutions that bridge technology and real-world applications.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-border rounded-lg hover:bg-accent hover:text-primary transition-all duration-300 hover:scale-105"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📧 ansh.goswami@example.com</p>
              <p>📱 +91 XXXXX XXXXX</p>
              <p>📍 Ghaziabad, India</p>
              <div className="mt-4 p-3 bg-accent/30 rounded-lg border border-border">
                <p className="text-xs">
                  <span className="font-medium text-foreground">Currently:</span> 
                  <br />Available for internships and freelance projects
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Ansh Goswami. Made with</span>
            <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
            <span>and lots of ☕</span>
          </div>
          
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="text-xs text-muted-foreground">
              Built with React & TypeScript
            </span>
            <button
              onClick={scrollToTop}
              className="text-xs text-primary hover:underline"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;