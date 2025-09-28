import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket, TrendingUp, Users, FileText } from 'lucide-react';

const JoinStartup = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-8 hover-glow">
            <Rocket className="w-4 h-4 text-primary animate-glow-pulse" />
            <span className="text-sm font-medium">Join as Startup</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Launch Your Startup into the{' '}
            <span className="text-gradient">Future</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Connect with investors, mentors, and technical experts. Get the funding, guidance, and resources you need to scale your vision.
          </p>
          
          <Button variant="hero" size="lg">
            Get Started Free
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="glass p-8 rounded-xl hover-lift">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Find Investors</h3>
            <p className="text-muted-foreground">
              Connect with VCs, angel investors, and strategic partners looking for innovative startups like yours.
            </p>
          </div>

          <div className="glass p-8 rounded-xl hover-lift">
            <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Get Mentorship</h3>
            <p className="text-muted-foreground">
              Access experienced mentors who've built successful companies and can guide your journey.
            </p>
          </div>

          <div className="glass p-8 rounded-xl hover-lift">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
              <FileText className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Showcase Your Vision</h3>
            <p className="text-muted-foreground">
              Create compelling profiles with pitch decks, financial projections, and team information.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center glass p-12 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Startup?</h2>
          <p className="text-muted-foreground mb-6">
            Join thousands of startups already using VentureVerse to scale their businesses.
          </p>
          <Button variant="hero" size="lg">
            Create Your Profile
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JoinStartup;