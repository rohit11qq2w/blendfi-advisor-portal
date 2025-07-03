
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface RiskAlert {
  id: string;
  type: 'warning' | 'critical' | 'info' | 'success';
  pool: string;
  message: string;
  action?: string;
}

interface RiskMonitorProps {
  alerts: RiskAlert[];
  overallRisk: 'low' | 'medium' | 'high';
  portfolioHealth: number;
}

const RiskMonitor: React.FC<RiskMonitorProps> = ({ alerts, overallRisk, portfolioHealth }) => {
  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-600 dark:text-green-400';
      case 'medium': return 'text-yellow-600 dark:text-yellow-400';
      case 'high': return 'text-red-600 dark:text-red-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'critical': return '🚨';
      case 'warning': return '⚠️';
      case 'info': return 'ℹ️';
      case 'success': return '✅';
      default: return '📊';
    }
  };

  const getRiskGrade = (health: number) => {
    if (health >= 90) return 'A+';
    if (health >= 80) return 'A';
    if (health >= 70) return 'B+';
    if (health >= 60) return 'B';
    if (health >= 50) return 'C+';
    if (health >= 40) return 'C';
    return 'D';
  };

  return (
    <div className="space-y-6">
      <Card className="bg-background/80 backdrop-blur-sm border-2">
        <CardHeader>
          <CardTitle className="text-xl text-foreground">🛡️ Portfolio Risk Monitor</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Overall Risk Level</p>
              <div className="space-y-2">
                <p className={`text-3xl font-bold ${getRiskColor(overallRisk)}`}>
                  {overallRisk.toUpperCase()}
                </p>
                <Badge 
                  variant="outline" 
                  className={`${
                    overallRisk === 'low' ? 'border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200' :
                    overallRisk === 'medium' ? 'border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-200' :
                    'border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-200'
                  }`}
                >
                  {overallRisk === 'low' ? '😌 Chill' : overallRisk === 'medium' ? '😐 Moderate' : '😰 Spicy'}
                </Badge>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Portfolio Health</p>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{portfolioHealth}%</p>
                <Progress value={portfolioHealth} className="h-2" />
                <div className="grid grid-cols-3 gap-1 text-xs text-muted-foreground">
                  <span>Critical</span>
                  <span>Warning</span>
                  <span>Healthy</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Risk Grade</p>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">{getRiskGrade(portfolioHealth)}</p>
                <p className="text-xs text-muted-foreground">
                  {portfolioHealth >= 80 ? 'Excellent' : 
                   portfolioHealth >= 60 ? 'Good' : 
                   portfolioHealth >= 40 ? 'Fair' : 'Poor'}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-background/80 backdrop-blur-sm border-2">
        <CardHeader>
          <CardTitle className="text-lg text-foreground">🚨 Active Alerts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {alerts.map((alert) => (
            <Alert key={alert.id} className={`border-l-4 ${
              alert.type === 'critical' ? 'border-l-red-500 bg-red-50 dark:bg-red-950/20' :
              alert.type === 'warning' ? 'border-l-yellow-500 bg-yellow-50 dark:bg-yellow-950/20' :
              alert.type === 'success' ? 'border-l-green-500 bg-green-50 dark:bg-green-950/20' :
              'border-l-blue-500 bg-blue-50 dark:bg-blue-950/20'
            }`}>
              <AlertDescription>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span>{getAlertIcon(alert.type)}</span>
                      <Badge variant="outline" className="text-xs bg-background/50">
                        {alert.pool}
                      </Badge>
                    </div>
                    <p className="text-sm font-medium text-foreground">{alert.message}</p>
                    {alert.action && (
                      <p className="text-xs text-muted-foreground mt-1">
                        💡 Suggestion: {alert.action}
                      </p>
                    )}
                  </div>
                </div>
              </AlertDescription>
            </Alert>
          ))}
          
          {alerts.length === 0 && (
            <div className="text-center py-6">
              <p className="text-muted-foreground">✅ No active alerts</p>
              <p className="text-sm text-muted-foreground mt-1">Your portfolio is looking healthy!</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default RiskMonitor;
