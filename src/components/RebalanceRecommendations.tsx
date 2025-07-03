
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

interface RebalanceAction {
  id: string;
  type: 'move' | 'add' | 'remove';
  fromPool?: string;
  toPool?: string;
  amount: number;
  asset: string;
  reason: string;
  impact: {
    apyChange: number;
    riskChange: number;
  };
  priority: 'high' | 'medium' | 'low';
}

interface RebalanceRecommendationsProps {
  recommendations: RebalanceAction[];
}

const RebalanceRecommendations: React.FC<RebalanceRecommendationsProps> = ({ recommendations }) => {
  const [executingActions, setExecutingActions] = useState<Set<string>>(new Set());
  const { toast } = useToast();

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const executeAction = async (action: RebalanceAction) => {
    setExecutingActions(prev => new Set(prev).add(action.id));
    
    try {
      // Simulate transaction execution
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Action Executed Successfully!",
        description: `Moved ${action.amount} ${action.asset} ${action.fromPool ? `from ${action.fromPool} to ${action.toPool}` : 'as recommended'}`,
      });
    } catch (error) {
      toast({
        title: "Transaction Failed",
        description: "Please try again or check your wallet connection",
        variant: "destructive",
      });
    } finally {
      setExecutingActions(prev => {
        const newSet = new Set(prev);
        newSet.delete(action.id);
        return newSet;
      });
    }
  };

  const executeAllActions = async () => {
    for (const action of recommendations.filter(r => r.priority === 'high')) {
      await executeAction(action);
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">🎯 AI Rebalance Recommendations</CardTitle>
          <Button 
            onClick={executeAllActions}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
          >
            Execute All High Priority
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {recommendations.map((action) => (
          <Card key={action.id} className="border-l-4 border-l-blue-500">
            <CardContent className="pt-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={getPriorityColor(action.priority)}>
                      {action.priority.toUpperCase()}
                    </Badge>
                    <span className="text-sm text-gray-600">
                      {action.type === 'move' ? '↔️' : action.type === 'add' ? '➕' : '➖'}
                    </span>
                  </div>
                  <p className="font-semibold text-lg mb-1">
                    {action.type === 'move' 
                      ? `Move ${action.amount} ${action.asset} from ${action.fromPool} to ${action.toPool}`
                      : `${action.type === 'add' ? 'Add' : 'Remove'} ${action.amount} ${action.asset}`
                    }
                  </p>
                  <p className="text-sm text-gray-600 mb-3">{action.reason}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500">APY Impact</p>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-semibold ${action.impact.apyChange > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {action.impact.apyChange > 0 ? '+' : ''}{action.impact.apyChange.toFixed(2)}%
                        </span>
                        <div className="flex-1">
                          <Progress 
                            value={Math.abs(action.impact.apyChange) * 10} 
                            max={50}
                            className="h-1"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Risk Impact</p>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-semibold ${action.impact.riskChange < 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {action.impact.riskChange > 0 ? '+' : ''}{action.impact.riskChange.toFixed(1)}%
                        </span>
                        <div className="flex-1">
                          <Progress 
                            value={Math.abs(action.impact.riskChange) * 2} 
                            max={20}
                            className="h-1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button
                  onClick={() => executeAction(action)}
                  disabled={executingActions.has(action.id)}
                  className="ml-4"
                  variant={action.priority === 'high' ? 'default' : 'outline'}
                >
                  {executingActions.has(action.id) ? 'Executing...' : 'Execute'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
        
        {recommendations.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">🎉 Your portfolio is well-balanced!</p>
            <p className="text-sm text-gray-400 mt-2">No immediate rebalancing needed.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RebalanceRecommendations;
