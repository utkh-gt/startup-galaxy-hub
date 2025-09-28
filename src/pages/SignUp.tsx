import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SignUp = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="w-full max-w-md">
        {/* Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Sign Up Card */}
        <Card className="glass">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Sign Up for Free</CardTitle>
            <CardDescription>
              Join VentureVerse and connect with the startup ecosystem
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                placeholder="Enter your full name" 
                type="text"
                className="glass"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                placeholder="Enter your email address" 
                type="email"
                className="glass"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                placeholder="Create a password" 
                type="password"
                className="glass"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">I am a...</Label>
              <select 
                id="role" 
                className="w-full px-3 py-2 glass rounded-lg text-foreground bg-transparent border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select your role</option>
                <option value="startup">Startup Founder</option>
                <option value="investor">Investor</option>
                <option value="mentor">Mentor</option>
                <option value="tech-expert">Tech Expert</option>
              </select>
            </div>
            <Button className="w-full" variant="default" size="lg">
              Create Account
            </Button>
            <div className="text-center text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link to="/login" className="text-primary hover:underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SignUp;