import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, TrendingUp } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && phone) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-dark flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('/financial-bg.jpg')] bg-cover bg-center opacity-10"></div>
      
      <Card className="w-full max-w-md bg-card/95 backdrop-blur-sm border-accent/20 shadow-glow relative z-10">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="p-3 bg-gradient-primary rounded-full">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Stock Alerts Pro
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Get personalized stock notifications delivered to your inbox
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Mail className="h-4 w-4 text-electric-blue" />
                Email Address
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="bg-background/50 border-accent/30 focus:border-electric-blue transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Phone className="h-4 w-4 text-neon-green" />
                Phone Number
              </label>
              <Input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                required
                className="bg-background/50 border-accent/30 focus:border-neon-green transition-colors"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-elegant"
            >
              Access Dashboard
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">
              Get real-time alerts for your favorite stocks
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;