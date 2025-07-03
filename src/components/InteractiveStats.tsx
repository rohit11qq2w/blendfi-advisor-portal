
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface InteractiveStatsProps {
  totalValue: number;
  positions: Array<{
    id: string;
    name: string;
    apy: number;
    borrowed: number;
    lent: number;
    collateralRatio: number;
    riskLevel: 'low' | 'medium' | 'high';
  }>;
}

const InteractiveStats: React.FC<InteractiveStatsProps> = ({ totalValue, positions }) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('1M');
  const [showDetails, setShowDetails] = useState(false);

  const getGradeColor = (value: number) => {
    if (value >= 80) return 'text-green-600 dark:text-green-400';
    if (value >= 60) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  const portfolioHealth = Math.min(100, Math.max(0, 
    positions.reduce((acc, pos) => acc + pos.collateralRatio, 0) / positions.length - 50
  ));

  const getGrade = (health: number) => {
    if (health >= 90) return 'A+';
    if (health >= 80) return 'A';
    if (health >= 70) return 'B+';
    if (health >= 60) return 'B';
    if (health >= 50) return 'C+';
    return 'C';
  };

  return (
    <div className="space-y-6">
      {/* Portfolio Grade Card */}
      <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              🎯 Portfolio Grade
              <Badge variant="secondary" className="bg-white/20 text-white">
                Live
              </Badge>
            </span>
            <Button 
              variant="secondary" 
              size="sm"
              onClick={() => setShowDetails(!showDetails)}
              className="bg-white/20 hover:bg-white/30 text-white"
            >
              {showDetails ? 'Hide' : 'Show'} Details
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <div className={`text-6xl font-bold ${getGradeColor(portfolioHealth)}`}>
                {getGrade(portfolioHealth)}
              </div>
              <p className="text-lg opacity-90">Health Score: {portfolioHealth.toFixed(1)}/100</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">${totalValue.toLocaleString()}</p>
              <p className="opacity-90">Total Value</p>
            </div>
          </div>
          
          {showDetails && (
            <div className="mt-4 pt-4 border-t border-white/20 space-y-2">
              <div className="flex justify-between">
                <span>Risk Distribution:</span>
                <span>
                  Low: {positions.filter(p => p.riskLevel === 'low').length} | 
                  Med: {positions.filter(p => p.riskLevel === 'medium').length} | 
                  High: {positions.filter(p => p.riskLevel === 'high').length}
                </span>
              </div>
              <Progress value={portfolioHealth} className="h-2" />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Interactive Timeframe Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            📊 Performance Analytics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="1D">1D</TabsTrigger>
              <TabsTrigger value="1W">1W</TabsTrigger>
              <TabsTrigger value="1M">1M</TabsTrigger>
              <TabsTrigger value="3M">3M</TabsTrigger>
              <TabsTrigger value="1Y">1Y</TabsTrigger>
            </TabsList>
            <TabsContent value={selectedTimeframe} className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    +{(Math.random() * 10 + 5).toFixed(2)}%
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Returns</p>
                </div>
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {(Math.random() * 5 + 8).toFixed(1)}%
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Avg APY</p>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {(Math.random() * 20 + 10).toFixed(0)}%
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Volatility</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveStats;
