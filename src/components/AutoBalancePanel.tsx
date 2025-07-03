
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

const AutoBalancePanel = () => {
  const [autoBalanceEnabled, setAutoBalanceEnabled] = useState(false);
  const [rebalanceThreshold, setRebalanceThreshold] = useState([15]);
  const [maxRebalanceAmount, setMaxRebalanceAmount] = useState([10000]);
  const [riskTarget, setRiskTarget] = useState([60]);
  const { toast } = useToast();

  const strategies = [
    { id: 'conservative', name: 'Conservative', risk: 30, apy: 8, icon: '🛡️' },
    { id: 'balanced', name: 'Balanced', risk: 50, apy: 12, icon: '⚖️' },
    { id: 'aggressive', name: 'Aggressive', risk: 80, apy: 18, icon: '🚀' },
  ];

  const [selectedStrategy, setSelectedStrategy] = useState('balanced');

  const enableAutoBalance = () => {
    setAutoBalanceEnabled(true);
    toast({
      title: "⚖️ Auto-Balance Enabled",
      description: "Your portfolio will be automatically rebalanced based on your settings",
    });
  };

  const executeRebalance = () => {
    toast({
      title: "⚖️ Rebalancing Started",
      description: "Executing optimal rebalancing strategy...",
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">⚖️</span>
            Auto-Balance Configuration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <Label className="text-lg">Enable Auto-Balance</Label>
              <p className="text-sm text-muted-foreground">Automatically rebalance your portfolio based on market conditions</p>
            </div>
            <Switch
              checked={autoBalanceEnabled}
              onCheckedChange={setAutoBalanceEnabled}
            />
          </div>

          {autoBalanceEnabled && (
            <div className="space-y-4">
              <div>
                <Label>Rebalance Threshold: {rebalanceThreshold[0]}%</Label>
                <Slider
                  value={rebalanceThreshold}
                  onValueChange={setRebalanceThreshold}
                  max={50}
                  step={5}
                  className="mt-2"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Trigger rebalancing when allocation deviates by this percentage
                </p>
              </div>
              
              <div>
                <Label>Max Rebalance Amount: ${maxRebalanceAmount[0].toLocaleString()}</Label>
                <Slider
                  value={maxRebalanceAmount}
                  onValueChange={setMaxRebalanceAmount}
                  min={1000}
                  max={50000}
                  step={1000}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label>Target Risk Level: {riskTarget[0]}%</Label>
                <Slider
                  value={riskTarget}
                  onValueChange={setRiskTarget}
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
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>🎯 Rebalancing Strategies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {strategies.map((strategy) => (
              <div
                key={strategy.id}
                className={`p-4 border rounded-lg cursor-pointer transition-all ${
                  selectedStrategy === strategy.id
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20'
                    : 'hover:border-gray-400'
                }`}
                onClick={() => setSelectedStrategy(strategy.id)}
              >
                <div className="text-center space-y-3">
                  <div className="text-3xl">{strategy.icon}</div>
                  <div>
                    <h3 className="font-semibold">{strategy.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {strategy.apy}% APY • {strategy.risk}% Risk
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Risk Level</span>
                      <span>{strategy.risk}%</span>
                    </div>
                    <Progress value={strategy.risk} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>⚡ Smart Rebalancing Features</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" onClick={() => toast({ title: "🤖 AI Optimization", description: "AI-powered rebalancing suggestions activated" })}>
              🤖 AI Optimize
            </Button>
            <Button variant="outline" onClick={() => toast({ title: "⏰ Time-based", description: "Time-based rebalancing scheduled" })}>
              ⏰ Time-based
            </Button>
            <Button variant="outline" onClick={() => toast({ title: "📊 Performance", description: "Performance-based rebalancing enabled" })}>
              📊 Performance
            </Button>
            <Button variant="outline" onClick={() => toast({ title: "🛡️ Risk-based", description: "Risk-based rebalancing activated" })}>
              🛡️ Risk-based
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button onClick={enableAutoBalance} className="flex-1" disabled={autoBalanceEnabled}>
          {autoBalanceEnabled ? '✅ Auto-Balance Active' : '⚖️ Enable Auto-Balance'}
        </Button>
        <Button variant="outline" onClick={executeRebalance}>
          ⚡ Execute Now
        </Button>
      </div>
    </div>
  );
};

export default AutoBalancePanel;
