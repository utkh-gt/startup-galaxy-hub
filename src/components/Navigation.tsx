import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Rocket, Users, Lightbulb, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover-glow">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <Rocket className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-gradient">VentureVerse</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/startups" className="text-foreground hover:text-primary transition-colors">
              Startups
            </Link>
            <Link to="/investors" className="text-foreground hover:text-primary transition-colors">
              Investors
            </Link>
            <Link to="/mentors" className="text-foreground hover:text-primary transition-colors">
              Mentors
            </Link>
            <Link to="/tech-experts" className="text-foreground hover:text-primary transition-colors">
              Tech Experts
            </Link>
            <Link to="/opportunities" className="text-foreground hover:text-primary transition-colors">
              Opportunities
            </Link>
            <Link to="/community" className="text-foreground hover:text-primary transition-colors">
              Community
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button variant="hero" asChild>
              <Link to="/get-started">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border/20">
            <div className="flex flex-col space-y-4 pt-4">
              <Link 
                to="/startups" 
                className="text-foreground hover:text-primary transition-colors flex items-center space-x-2"
              >
                <Rocket className="w-4 h-4" />
                <span>Startups</span>
              </Link>
              <Link 
                to="/investors" 
                className="text-foreground hover:text-primary transition-colors flex items-center space-x-2"
              >
                <Users className="w-4 h-4" />
                <span>Investors</span>
              </Link>
              <Link 
                to="/mentors" 
                className="text-foreground hover:text-primary transition-colors flex items-center space-x-2"
              >
                <Lightbulb className="w-4 h-4" />
                <span>Mentors</span>
              </Link>
              <Link 
                to="/tech-experts" 
                className="text-foreground hover:text-primary transition-colors flex items-center space-x-2"
              >
                <Code className="w-4 h-4" />
                <span>Tech Experts</span>
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="justify-start" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button variant="hero" className="justify-start" asChild>
                  <Link to="/get-started">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;