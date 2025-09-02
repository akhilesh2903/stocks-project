import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Bell, 
  Smartphone, 
  Mail, 
  BarChart3, 
  Shield, 
  Clock, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: Bell,
      title: 'Real-time Alerts',
      description: 'Get instant notifications when your stocks hit key price points or show significant movement.',
      gradient: 'bg-gradient-tech'
    },
    {
      icon: Mail,
      title: 'Email & SMS Notifications',
      description: 'Receive alerts via email and SMS to never miss important market movements.',
      gradient: 'bg-gradient-health'
    },
    {
      icon: BarChart3,
      title: 'Sector Analysis',
      description: 'Monitor stocks across different sectors including tech, healthcare, finance, and energy.',
      gradient: 'bg-gradient-finance'
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Access your alerts and manage preferences on any device, anywhere, anytime.',
      gradient: 'bg-gradient-energy'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Your data is protected with enterprise-grade security and 99.9% uptime guarantee.',
      gradient: 'bg-gradient-consumer'
    },
    {
      icon: Clock,
      title: 'Custom Timing',
      description: 'Set alerts for market hours, after-hours trading, or specific times that work for you.',
      gradient: 'bg-gradient-industrial'
    }
  ];

  const sectors = [
    { name: 'Technology', stocks: 'AAPL, GOOGL, MSFT, NVDA', color: 'text-electric-blue' },
    { name: 'Healthcare', stocks: 'JNJ, PFE, UNH, ABBV', color: 'text-neon-green' },
    { name: 'Finance', stocks: 'JPM, BAC, WFC, GS', color: 'text-cyber-purple' },
    { name: 'Energy', stocks: 'XOM, CVX, COP, EOG', color: 'text-neon-orange' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark opacity-50"></div>
        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-primary/20 border-primary/30 text-primary">
            <Star className="h-3 w-3 mr-1" />
            Most Advanced Stock Alerts Platform
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Never Miss a Market Move
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Get personalized stock alerts delivered instantly to your inbox and phone. 
            Stay ahead of the market with real-time notifications for your favorite stocks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/login">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-all shadow-elegant text-lg px-8 py-6">
                Start Getting Alerts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 text-lg px-8 py-6">
                View Demo Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Why Choose Stock Alerts Pro?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional-grade tools designed for serious investors who need to stay informed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-card/80 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300 shadow-card hover:shadow-glow group">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 px-4 bg-card/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Monitor All Major Sectors
            </h2>
            <p className="text-xl text-muted-foreground">
              Get comprehensive coverage across technology, healthcare, finance, and energy stocks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300 shadow-card hover:shadow-glow text-center">
                <CardHeader>
                  <CardTitle className={`text-lg ${sector.color}`}>{sector.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{sector.stocks}</p>
                  <div className="mt-4">
                    <Badge variant="outline" className="bg-primary/10 border-primary/30 text-primary">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Available
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-primary/10 border-primary/20 shadow-elegant">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-4 text-foreground">
                Ready to Start Receiving Alerts?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of investors who trust Stock Alerts Pro for their market notifications. 
                Set up your first alert in under 2 minutes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/login">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-all shadow-elegant text-lg px-8 py-6">
                    <Zap className="mr-2 h-5 w-5" />
                    Get Started Now
                  </Button>
                </Link>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-neon-green" />
                  No credit card required
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;