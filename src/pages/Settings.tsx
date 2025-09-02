import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Bell, 
  Mail, 
  Phone, 
  Clock, 
  Volume2, 
  Shield, 
  User,
  Save,
  AlertTriangle
} from 'lucide-react';

const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [marketHoursOnly, setMarketHoursOnly] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);

  const [email, setEmail] = useState('archankumar705@gmail.com');
  const [phone, setPhone] = useState('+1 (555) 123-4567');
  const [alertFrequency, setAlertFrequency] = useState('immediate');

  const handleSave = () => {
    // In real app, this would save to backend
    alert('Settings saved successfully!');
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
            Alert Settings
          </h1>
          <p className="text-muted-foreground">
            Customize how and when you receive stock alerts
          </p>
        </div>

        <div className="grid gap-6">
          {/* Account Information */}
          <Card className="bg-card/80 backdrop-blur-sm border-accent/20 shadow-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-primary rounded-lg">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div>
                  <CardTitle>Account Information</CardTitle>
                  <CardDescription>Update your contact details</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Mail className="h-4 w-4 text-electric-blue" />
                    Email Address
                  </label>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-background/50 border-accent/30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Phone className="h-4 w-4 text-neon-green" />
                    Phone Number
                  </label>
                  <Input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-background/50 border-accent/30"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notification Preferences */}
          <Card className="bg-card/80 backdrop-blur-sm border-accent/20 shadow-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-health rounded-lg">
                  <Bell className="h-5 w-5 text-white" />
                </div>
                <div>
                  <CardTitle>Notification Channels</CardTitle>
                  <CardDescription>Choose how you want to receive alerts</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-electric-blue" />
                  <div>
                    <div className="font-medium">Email Notifications</div>
                    <div className="text-sm text-muted-foreground">Receive alerts via email</div>
                  </div>
                </div>
                <Switch 
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                />
              </div>
              
              <Separator className="opacity-20" />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-neon-green" />
                  <div>
                    <div className="font-medium">SMS Notifications</div>
                    <div className="text-sm text-muted-foreground">Receive alerts via text message</div>
                  </div>
                  <Badge variant="outline" className="bg-primary/10 border-primary/30 text-primary text-xs">
                    Premium
                  </Badge>
                </div>
                <Switch 
                  checked={smsNotifications}
                  onCheckedChange={setSmsNotifications}
                />
              </div>
              
              <Separator className="opacity-20" />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="h-5 w-5 text-cyber-purple" />
                  <div>
                    <div className="font-medium">Push Notifications</div>
                    <div className="text-sm text-muted-foreground">Browser push notifications</div>
                  </div>
                </div>
                <Switch 
                  checked={pushNotifications}
                  onCheckedChange={setPushNotifications}
                />
              </div>
            </CardContent>
          </Card>

          {/* Timing & Frequency */}
          <Card className="bg-card/80 backdrop-blur-sm border-accent/20 shadow-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-finance rounded-lg">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <CardTitle>Timing & Frequency</CardTitle>
                  <CardDescription>Control when and how often you get alerts</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Market Hours Only</div>
                  <div className="text-sm text-muted-foreground">Only receive alerts during trading hours (9:30 AM - 4:00 PM EST)</div>
                </div>
                <Switch 
                  checked={marketHoursOnly}
                  onCheckedChange={setMarketHoursOnly}
                />
              </div>
              
              <Separator className="opacity-20" />
              
              <div className="space-y-3">
                <div className="font-medium">Alert Frequency</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <Button
                    variant={alertFrequency === 'immediate' ? 'default' : 'outline'}
                    onClick={() => setAlertFrequency('immediate')}
                    className={alertFrequency === 'immediate' ? 'bg-gradient-primary' : ''}
                  >
                    Immediate
                  </Button>
                  <Button
                    variant={alertFrequency === 'hourly' ? 'default' : 'outline'}
                    onClick={() => setAlertFrequency('hourly')}
                    className={alertFrequency === 'hourly' ? 'bg-gradient-primary' : ''}
                  >
                    Hourly Digest
                  </Button>
                  <Button
                    variant={alertFrequency === 'daily' ? 'default' : 'outline'}
                    onClick={() => setAlertFrequency('daily')}
                    className={alertFrequency === 'daily' ? 'bg-gradient-primary' : ''}
                  >
                    Daily Summary
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Audio & Visual */}
          <Card className="bg-card/80 backdrop-blur-sm border-accent/20 shadow-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-energy rounded-lg">
                  <Volume2 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <CardTitle>Audio & Visual</CardTitle>
                  <CardDescription>Customize the alert experience</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Sound Notifications</div>
                  <div className="text-sm text-muted-foreground">Play a sound when alerts are received</div>
                </div>
                <Switch 
                  checked={soundEnabled}
                  onCheckedChange={setSoundEnabled}
                />
              </div>
            </CardContent>
          </Card>

          {/* Security */}
          <Card className="bg-card/80 backdrop-blur-sm border-accent/20 shadow-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-consumer rounded-lg">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <CardTitle>Security & Privacy</CardTitle>
                  <CardDescription>Manage your account security</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-primary" />
                <div className="text-sm">
                  <div className="font-medium text-foreground">Two-Factor Authentication</div>
                  <div className="text-muted-foreground">Enable 2FA to secure your account (Recommended)</div>
                </div>
                <Button variant="outline" size="sm" className="ml-auto">
                  Enable
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="flex-1">
                  Change Password
                </Button>
                <Button variant="outline" className="flex-1">
                  Download Data
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button 
              onClick={handleSave}
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-all shadow-elegant"
            >
              <Save className="h-4 w-4 mr-2" />
              Save All Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;