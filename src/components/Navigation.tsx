import React from 'react';
import { Button } from '@/components/ui/button';
import { TrendingUp, Home, BarChart3, Settings, LogIn } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="border-b border-accent/20 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Stock Alerts Pro</h1>
              <p className="text-xs text-muted-foreground">Smart Investment Notifications</p>
            </div>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                isActive('/') ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link 
              to="/dashboard" 
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                isActive('/dashboard') ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <BarChart3 className="h-4 w-4" />
              Dashboard
            </Link>
            <Link 
              to="/settings" 
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                isActive('/settings') ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </div>
          
          {/* Login Button */}
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button className="bg-gradient-primary hover:opacity-90 transition-all">
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;