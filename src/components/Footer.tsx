import { Link } from 'react-router-dom';
import { Rocket, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass border-t border-border/20 mt-24">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <Rocket className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-gradient">VentureVerse</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Connecting startups with investors, mentors, and tech experts to build the future together.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><Link to="/startups" className="text-muted-foreground hover:text-primary transition-colors">For Startups</Link></li>
              <li><Link to="/investors" className="text-muted-foreground hover:text-primary transition-colors">For Investors</Link></li>
              <li><Link to="/mentors" className="text-muted-foreground hover:text-primary transition-colors">For Mentors</Link></li>
              <li><Link to="/tech-experts" className="text-muted-foreground hover:text-primary transition-colors">For Tech Experts</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/opportunities" className="text-muted-foreground hover:text-primary transition-colors">Funding Opportunities</Link></li>
              <li><Link to="/community" className="text-muted-foreground hover:text-primary transition-colors">Community</Link></li>
              <li><Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">Resource Library</Link></li>
              <li><Link to="/events" className="text-muted-foreground hover:text-primary transition-colors">Events</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/20 mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 VentureVerse. All rights reserved. Built for the future of entrepreneurship.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;