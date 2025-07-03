
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface PoolPosition {
  id: string;
  name: string;
  apy: number;
  borrowed: number;
  lent: number;
  collateralRatio: number;
  liquidationThreshold: number;
  riskLevel: 'low' | 'medium' | 'high';
  insuranceCoverage: number;
}

interface PortfolioOverviewProps {
  positions: PoolPosition[];
  totalValue: number;
}

const PortfolioOverview: React.FC<PortfolioOverviewProps> = ({ positions, totalValue }) => {
  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getHealthColor = (ratio: number) => {
    if (ratio > 200) return 'bg-green-500';
    if (ratio > 150) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Portfolio Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-sm text-gray-600">Total Portfolio Value</p>
              <p className="text-3xl font-bold text-blue-600">${totalValue.toLocaleString()}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Active Positions</p>
              <p className="text-3xl font-bold text-green-600">{positions.length}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Avg APY</p>
              <p className="text-3xl font-bold text-purple-600">
                {(positions.reduce((acc, pos) => acc + pos.apy, 0) / positions.length).toFixed(1)}%
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {positions.map((position) => (
          <Card key={position.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl">{position.name}</CardTitle>
                <Badge className={getRiskColor(position.riskLevel)}>
                  {position.riskLevel.toUpperCase()} RISK
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">APY</p>
                  <p className="text-2xl font-bold text-green-600">{position.apy}%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Net Position</p>
                  <p className="text-2xl font-bold">
                    ${(position.lent - position.borrowed).toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Borrowed: ${position.borrowed.toLocaleString()}</span>
                  <span>Lent: ${position.lent.toLocaleString()}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Health Ratio</span>
                  <span className="text-sm font-semibold">{position.collateralRatio}%</span>
                </div>
                <Progress 
                  value={Math.min(position.collateralRatio, 300)} 
                  max={300}
                  className="h-2"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Liquidation: {position.liquidationThreshold}%</span>
                  <span>Insurance: {position.insuranceCoverage}%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PortfolioOverview;
