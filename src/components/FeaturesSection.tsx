import { MessageSquare, Search, Calendar, FileText, Briefcase, Users } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Real-time Chat System',
      description: 'Built-in messaging with AI-powered bots, file sharing, and group communication for seamless collaboration.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Search,
      title: 'Advanced Search & Discovery',
      description: 'Find the perfect investors, mentors, or opportunities with intelligent filtering and matching algorithms.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Calendar,
      title: 'Meeting & Event Management',
      description: 'Schedule meetings, track events, and manage your networking calendar with integrated tools.',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: FileText,
      title: 'Comprehensive Profiles',
      description: 'Showcase your startup, investment portfolio, or expertise with rich profiles, documents, and media.',
      color: 'text-primary-glow',
      bgColor: 'bg-primary-glow/10',
    },
    {
      icon: Briefcase,
      title: 'Funding Opportunities',
      description: 'Access grants, accelerator programs, and crowdfunding options tailored to your startup stage.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Users,
      title: 'Community & Resources',
      description: 'Join discussion forums, networking groups, and access a comprehensive resource library.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to{' '}
            <span className="text-gradient">Scale & Succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            VentureVerse provides all the tools and connections you need to build, fund, and grow your startup ecosystem.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass p-8 rounded-xl hover-lift group"
            >
              <div className={`w-14 h-14 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;