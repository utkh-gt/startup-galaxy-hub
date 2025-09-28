import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket, Users, Lightbulb, Code, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Futuristic cityscape representing the startup ecosystem" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Hero Badge */}
        <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-8 hover-glow">
          <Sparkles className="w-4 h-4 text-primary animate-glow-pulse" />
          <span className="text-sm font-medium">The Future of Startup Ecosystems</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Welcome to{' '}
          <span className="text-gradient">VentureVerse</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Connect startups with investors, mentors, and tech experts in the most advanced ecosystem platform. 
          Build the future together.
        </p>

        {/* CTA Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {/* Startup CTA */}
          <div className="glass p-6 rounded-xl hover-lift group">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/30 transition-colors">
              <Rocket className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">For Startups</h3>
            <p className="text-muted-foreground text-sm mb-4">Present your vision, find investors, and scale your business</p>
            <Button variant="startup" className="w-full" asChild>
              <Link to="/join-startup">
                Join as Startup
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Investor CTA */}
          <div className="glass p-6 rounded-xl hover-lift group">
            <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-secondary/30 transition-colors">
              <Users className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">For Investors</h3>
            <p className="text-muted-foreground text-sm mb-4">Discover promising startups and make strategic investments</p>
            <Button variant="investor" className="w-full" asChild>
              <Link to="/join-investor">
                Join as Investor
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Mentor CTA */}
          <div className="glass p-6 rounded-xl hover-lift group">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-accent/30 transition-colors">
              <Lightbulb className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">For Mentors</h3>
            <p className="text-muted-foreground text-sm mb-4">Guide entrepreneurs and share your expertise</p>
            <Button variant="mentor" className="w-full" asChild>
              <Link to="/join-mentor">
                Join as Mentor
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Tech Expert CTA */}
          <div className="glass p-6 rounded-xl hover-lift group">
            <div className="w-12 h-12 bg-primary-glow/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-primary-glow/30 transition-colors">
              <Code className="w-6 h-6 text-primary-glow" />
            </div>
            <h3 className="text-lg font-semibold mb-2">For Tech Experts</h3>
            <p className="text-muted-foreground text-sm mb-4">Collaborate on projects and provide technical solutions</p>
            <Button variant="tech" className="w-full" asChild>
              <Link to="/join-tech">
                Join as Tech Expert
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button variant="hero" size="lg" asChild>
            <Link to="/explore">
              Explore Platform
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          <Button variant="neon" size="lg" asChild>
            <Link to="/demo">Watch Demo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;