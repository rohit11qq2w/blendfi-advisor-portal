
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const SettingsPanel = () => {
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [riskTolerance, setRiskTolerance] = useState([50]);
  const [alertThreshold, setAlertThreshold] = useState([70]);
  const [currency, setCurrency] = useState('USD');
  const [theme, setTheme] = useState('system');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [autoRebalance, setAutoRebalance] = useState(false);
  const { toast } = useToast();

  const handleSaveSettings = () => {
    toast({
      title: "⚙️ Settings Saved",
      description: "Your preferences have been updated successfully",
    });
  };

  const handleResetSettings = () => {
    setAutoRefresh(false);
    setNotifications(true);
    setRiskTolerance([50]);
    setAlertThreshold([70]);
    setCurrency('USD');
    setTheme('system');
    setSoundEnabled(true);
    setAutoRebalance(false);
    toast({
      title: "🔄 Settings Reset",
      description: "All settings have been reset to default values",
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">⚙️</span>
            General Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-refresh">Auto Refresh Data</Label>
                <Switch
                  id="auto-refresh"
                  checked={autoRefresh}
                  onCheckedChange={setAutoRefresh}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="notifications">Push Notifications</Label>
                <Switch
                  id="notifications"
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="sound">Sound Alerts</Label>
                <Switch
                  id="sound"
                  checked={soundEnabled}
                  onCheckedChange={setSoundEnabled}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-rebalance">Auto Rebalance</Label>
                <Switch
                  id="auto-rebalance"
                  checked={autoRebalance}
                  onCheckedChange={setAutoRebalance}
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label>Display Currency</Label>
                <Select value={currency} onValueChange={setCurrency}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">USD ($)</SelectItem>
                    <SelectItem value="EUR">EUR (€)</SelectItem>
                    <SelectItem value="XLM">XLM</SelectItem>
                    <SelectItem value="USDC">USDC</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label>Theme Preference</Label>
                <Select value={theme} onValueChange={setTheme}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            Risk & Trading Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label>Risk Tolerance: {riskTolerance[0]}%</Label>
            <Slider
              value={riskTolerance}
              onValueChange={setRiskTolerance}
              max={100}
              step={5}
              className="mt-2"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>Conservative</span>
              <span>Moderate</span>
              <span>Aggressive</span>
            </div>
          </div>
          
          <div>
            <Label>Alert Threshold: {alertThreshold[0]}%</Label>
            <Slider
              value={alertThreshold}
              onValueChange={setAlertThreshold}
              max={100}
              step={5}
              className="mt-2"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>Early Warning</span>
              <span>Balanced</span>
              <span>Critical Only</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🔧</span>
            Advanced Options
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" onClick={() => toast({ title: "🔄 Cache Cleared", description: "Application cache has been cleared" })}>
              Clear Cache
            </Button>
            <Button variant="outline" onClick={() => toast({ title: "📊 Data Exported", description: "Settings exported successfully" })}>
              Export Settings
            </Button>
            <Button variant="outline" onClick={() => toast({ title: "📥 Data Imported", description: "Settings imported successfully" })}>
              Import Settings
            </Button>
            <Button variant="outline" onClick={() => toast({ title: "🔒 Privacy Mode", description: "Privacy mode activated" })}>
              Privacy Mode
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button onClick={handleSaveSettings} className="flex-1">
          💾 Save Settings
        </Button>
        <Button variant="outline" onClick={handleResetSettings}>
          🔄 Reset to Default
        </Button>
      </div>
    </div>
  );
};

export default SettingsPanel;
