
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const SimulationPanel = () => {
  const [timeHorizon, setTimeHorizon] = useState([30]);
  const [marketCondition, setMarketCondition] = useState('normal');
  const [strategy, setStrategy] = useState('balanced');
  const [investmentAmount, setInvestmentAmount] = useState([10000]);
  const { toast } = useToast();

  const simulationData = [
    { day: 0, conservative: 10000, balanced: 10000, aggressive: 10000 },
    { day: 7, conservative: 10050, balanced: 10120, aggressive: 10200 },
    { day: 14, conservative: 10100, balanced: 10250, aggressive: 10450 },
    { day: 21, conservative: 10150, balanced: 10380, aggressive: 10720 },
    { day: 30, conservative: 10200, balanced: 10520, aggressive: 11000 },
  ];

  const riskAnalysis = [
    { scenario: 'Best Case', conservative: 12, balanced: 25, aggressive: 45 },
    { scenario: 'Expected', conservative: 6, balanced: 15, aggressive: 22 },
    { scenario: 'Worst Case', conservative: -2, balanced: -8, aggressive: -18 },
  ];

  const runSimulation = () => {
    toast({
      title: "🎯 Simulation Complete",
      description: `Analyzed ${timeHorizon[0]} days with ${strategy} strategy under ${marketCondition} conditions`,
    });
  };

  const exportResults = () => {
    toast({
      title: "📊 Results Exported",
      description: "Simulation results exported to CSV",
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            Portfolio Simulation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label>Time Horizon: {timeHorizon[0]} days</Label>
                <Slider
                  value={timeHorizon}
                  onValueChange={setTimeHorizon}
                  min={7}
                  max={365}
                  step={7}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label>Investment Amount: ${investmentAmount[0].toLocaleString()}</Label>
                <Slider
                  value={investmentAmount}
                  onValueChange={setInvestmentAmount}
                  min={1000}
                  max={100000}
                  step={1000}
                  className="mt-2"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label>Market Condition</Label>
                <Select value={marketCondition} onValueChange={setMarketCondition}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bull">🐂 Bull Market</SelectItem>
                    <SelectItem value="normal">📈 Normal Market</SelectItem>
                    <SelectItem value="bear">🐻 Bear Market</SelectItem>
                    <SelectItem value="volatile">⚡ High Volatility</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label>Strategy</Label>
                <Select value={strategy} onValueChange={setStrategy}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="conservative">🛡️ Conservative</SelectItem>
                    <SelectItem value="balanced">⚖️ Balanced</SelectItem>
                    <SelectItem value="aggressive">🚀 Aggressive</SelectItem>
                    <SelectItem value="custom">🎨 Custom</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4">
            <Button onClick={runSimulation} className="flex-1">
              🎯 Run Simulation
            </Button>
            <Button variant="outline" onClick={exportResults}>
              📊 Export Results
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>📈 Projected Returns</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={simulationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="conservative" stroke="#10b981" name="Conservative" />
                <Line type="monotone" dataKey="balanced" stroke="#3b82f6" name="Balanced" />
                <Line type="monotone" dataKey="aggressive" stroke="#ef4444" name="Aggressive" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>🎲 Risk Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={riskAnalysis}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="scenario" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="conservative" fill="#10b981" name="Conservative" />
                <Bar dataKey="balanced" fill="#3b82f6" name="Balanced" />
                <Bar dataKey="aggressive" fill="#ef4444" name="Aggressive" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SimulationPanel;
