import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Cpu, 
  Heart, 
  Banknote, 
  Zap, 
  ShoppingCart, 
  Building, 
  Plane,
  Settings,
  Bell,
  LogOut
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const stockSectors = [
  {
    id: 'technology',
    name: 'Technology',
    icon: Cpu,
    color: 'electric-blue',
    stocks: ['AAPL', 'GOOGL', 'MSFT', 'NVDA', 'TSLA', 'META', 'AMZN', 'NFLX'],
    gradient: 'gradient-tech'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: Heart,
    color: 'neon-green',
    stocks: ['JNJ', 'PFE', 'UNH', 'ABBV', 'MRK', 'TMO', 'ABT', 'LLY'],
    gradient: 'gradient-health'
  },
  {
    id: 'finance',
    name: 'Finance',
    icon: Banknote,
    color: 'cyber-purple',
    stocks: ['JPM', 'BAC', 'WFC', 'GS', 'MS', 'C', 'AXP', 'BLK'],
    gradient: 'gradient-finance'
  },
  {
    id: 'energy',
    name: 'Energy',
    icon: Zap,
    color: 'neon-orange',
    stocks: ['XOM', 'CVX', 'COP', 'EOG', 'SLB', 'PXD', 'KMI', 'OKE'],
    gradient: 'gradient-energy'
  },
  {
    id: 'consumer',
    name: 'Consumer Goods',
    icon: ShoppingCart,
    color: 'hot-pink',
    stocks: ['PG', 'KO', 'PEP', 'WMT', 'HD', 'MCD', 'NKE', 'SBUX'],
    gradient: 'gradient-consumer'
  },
  {
    id: 'industrial',
    name: 'Industrial',
    icon: Building,
    color: 'electric-blue',
    stocks: ['BA', 'CAT', 'GE', 'MMM', 'HON', 'UPS', 'LMT', 'RTX'],
    gradient: 'gradient-industrial'
  }
];

const Dashboard = () => {
  const [selectedStocks, setSelectedStocks] = useState<Record<string, string[]>>({});
  const navigate = useNavigate();

  const toggleStock = (sectorId: string, stock: string) => {
    setSelectedStocks(prev => ({
      ...prev,
      [sectorId]: prev[sectorId]?.includes(stock)
        ? prev[sectorId].filter(s => s !== stock)
        : [...(prev[sectorId] || []), stock]
    }));
  };

  const getTotalSelected = () => {
    return Object.values(selectedStocks).flat().length;
  };

  const handleSaveAlerts = () => {
    // In a real app, this would save to backend
    alert(`Successfully set up alerts for ${getTotalSelected()} stocks!`);
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-accent/20 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Stock Alerts Pro</h1>
              <p className="text-sm text-muted-foreground">Manage your notifications</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="bg-gradient-primary/20 border-electric-blue/30">
              <Bell className="h-3 w-3 mr-1" />
              {getTotalSelected()} Selected
            </Badge>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
            Choose Your Stock Sectors
          </h2>
          <p className="text-muted-foreground">
            Select stocks from different sectors to receive email alerts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stockSectors.map((sector) => {
            const Icon = sector.icon;
            const sectorSelected = selectedStocks[sector.id] || [];
            
            return (
              <Card key={sector.id} className="bg-card/80 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300 shadow-elegant hover:shadow-glow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 bg-${sector.gradient} rounded-lg`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-foreground">{sector.name}</CardTitle>
                      <CardDescription>
                        {sectorSelected.length}/{sector.stocks.length} selected
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {sector.stocks.map((stock) => {
                      const isSelected = sectorSelected.includes(stock);
                      return (
                        <Button
                          key={stock}
                          variant={isSelected ? "default" : "outline"}
                          size="sm"
                          onClick={() => toggleStock(sector.id, stock)}
                          className={`
                            transition-all duration-200 text-xs
                            ${isSelected 
                              ? `bg-${sector.gradient} hover:opacity-80 border-transparent shadow-sm` 
                              : 'hover:border-accent/60 hover:bg-accent/20'
                            }
                          `}
                        >
                          {stock}
                        </Button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Save Button */}
        {getTotalSelected() > 0 && (
          <div className="fixed bottom-8 right-8">
            <Button
              onClick={handleSaveAlerts}
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-elegant animate-fade-in"
            >
              <Settings className="h-4 w-4 mr-2" />
              Save Alert Settings ({getTotalSelected()})
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;