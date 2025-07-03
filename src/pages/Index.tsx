
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import WalletConnection from '@/components/WalletConnection';
import PortfolioOverview from '@/components/PortfolioOverview';
import AIAssistant from '@/components/AIAssistant';
import RebalanceRecommendations from '@/components/RebalanceRecommendations';
import RiskMonitor from '@/components/RiskMonitor';
import ThemeToggle from '@/components/ThemeToggle';
import FloatingElements from '@/components/FloatingElements';
import AnimatedBackground from '@/components/AnimatedBackground';
import PortfolioChart from '@/components/PortfolioChart';
import InteractiveStats from '@/components/InteractiveStats';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [activeTab, setActiveTab] = useState('portfolio');
  const [showNotifications, setShowNotifications] = useState(false);
  const { toast } = useToast();

  // Mock data for demonstration
  const mockPositions = [
    {
      id: '1',
      name: 'USDC-XLM Pool',
      apy: 12.5,
      borrowed: 5000,
      lent: 8000,
      collateralRatio: 180,
      liquidationThreshold: 150,
      riskLevel: 'medium' as const,
      insuranceCoverage: 85
    },
    {
      id: '2',
      name: 'XLM-AQUA Pool',
      apy: 18.2,
      borrowed: 2000,
      lent: 12000,
      collateralRatio: 250,
      liquidationThreshold: 130,
      riskLevel: 'low' as const,
      insuranceCoverage: 92
    },
    {
      id: '3',
      name: 'USDC-BTC Pool',
      apy: 8.7,
      borrowed: 15000,
      lent: 18000,
      collateralRatio: 160,
      liquidationThreshold: 140,
      riskLevel: 'high' as const,
      insuranceCoverage: 78
    }
  ];

  const chartData = mockPositions.map(pos => ({
    name: pos.name,
    value: pos.lent - pos.borrowed,
    apy: pos.apy,
    risk: pos.collateralRatio
  }));

  const mockRecommendations = [
    {
      id: '1',
      type: 'move' as const,
      fromPool: 'USDC-BTC Pool',
      toPool: 'XLM-AQUA Pool',
      amount: 3000,
      asset: 'USDC',
      reason: 'Reduce liquidation risk by moving to safer pool with better collateral ratio',
      impact: {
        apyChange: 2.1,
        riskChange: -15.0
      },
      priority: 'high' as const
    },
    {
      id: '2',
      type: 'add' as const,
      amount: 2000,
      asset: 'USDC',
      reason: 'Add collateral to USDC-BTC Pool to improve health ratio',
      impact: {
        apyChange: -0.5,
        riskChange: -8.0
      },
      priority: 'medium' as const
    }
  ];

  const mockAlerts = [
    {
      id: '1',
      type: 'warning' as const,
      pool: 'USDC-BTC Pool',
      message: 'Health ratio approaching liquidation threshold (160% vs 140%)',
      action: 'Add $2,000 USDC collateral or reduce borrowed amount'
    },
    {
      id: '2',
      type: 'info' as const,
      pool: 'XLM-AQUA Pool',
      message: 'New lending opportunity: 19.1% APY available',
      action: 'Consider increasing position size'
    }
  ];

  const handleWalletConnect = (address: string) => {
    setWalletAddress(address);
    setIsWalletConnected(true);
  };

  const handleQuickAction = (action: string) => {
    toast({
      title: `${action} Action Triggered`,
      description: `Executing ${action.toLowerCase()} operation...`,
    });
  };

  const handleEmergency = () => {
    toast({
      title: "🚨 Emergency Mode Activated",
      description: "Moving all funds to safest pools...",
      variant: "destructive",
    });
  };

  const totalPortfolioValue = mockPositions.reduce((acc, pos) => acc + (pos.lent - pos.borrowed), 0);

  if (!isWalletConnected) {
    return (
      <div className="min-h-screen relative">
        <AnimatedBackground />
        <FloatingElements />
        <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
          <div className="w-full max-w-4xl space-y-8">
            <div className="absolute top-4 right-4">
              <ThemeToggle />
            </div>
            <div className="text-center space-y-4">
              <div className="text-6xl mb-4 animate-bounce">🧩</div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                BlendFi Hub
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Your intelligent cross-pool Blend dashboard with AI-powered portfolio optimization, 
                risk monitoring, and smart rebalancing suggestions.
              </p>
              <div className="flex justify-center gap-4 text-sm text-gray-500 dark:text-gray-400 flex-wrap">
                <span className="flex items-center gap-1">🔗 Multi-Pool Monitoring</span>
                <span className="flex items-center gap-1">🤖 AI Assistant</span>
                <span className="flex items-center gap-1">⚖️ Smart Rebalancing</span>
                <span className="flex items-center gap-1">🛡️ Risk Alerts</span>
              </div>
            </div>
            <WalletConnection 
              onConnect={handleWalletConnect}
              isConnected={isWalletConnected}
              address={walletAddress}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <FloatingElements />
      <div className="relative z-10">
        <div className="container mx-auto p-4">
          <div className="mb-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  🧩 BlendFi Hub
                </h1>
                <p className="text-gray-600 dark:text-gray-300">Intelligent DeFi Portfolio Management</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative"
                >
                  🔔 Alerts
                  {mockAlerts.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {mockAlerts.length}
                    </span>
                  )}
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={handleEmergency}
                  className="animate-pulse"
                >
                  🚨 Emergency Exit
                </Button>
                <ThemeToggle />
                <WalletConnection 
                  onConnect={handleWalletConnect}
                  isConnected={isWalletConnected}
                  address={walletAddress}
                />
              </div>
            </div>
          </div>

          {/* Quick Actions Bar */}
          <div className="mb-6 flex gap-2 flex-wrap">
            <Button variant="outline" size="sm" onClick={() => handleQuickAction('Refresh')}>
              🔄 Refresh Data
            </Button>
            <Button variant="outline" size="sm" onClick={() => handleQuickAction('Auto-Rebalance')}>
              ⚖️ Auto-Rebalance
            </Button>
            <Button variant="outline" size="sm" onClick={() => handleQuickAction('Export')}>
              📊 Export Data
            </Button>
            <Button variant="outline" size="sm" onClick={() => handleQuickAction('Simulate')}>
              🎯 Run Simulation
            </Button>
          </div>

          {/* Interactive Stats Section */}
          <InteractiveStats totalValue={totalPortfolioValue} positions={mockPositions} />

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6 mt-8">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="portfolio" className="flex items-center gap-2">
                📊 Portfolio
              </TabsTrigger>
              <TabsTrigger value="charts" className="flex items-center gap-2">
                📈 Charts
              </TabsTrigger>
              <TabsTrigger value="risk" className="flex items-center gap-2">
                🛡️ Risk Monitor
              </TabsTrigger>
              <TabsTrigger value="rebalance" className="flex items-center gap-2">
                ⚖️ Rebalance
              </TabsTrigger>
              <TabsTrigger value="ai" className="flex items-center gap-2">
                🤖 AI Assistant
              </TabsTrigger>
            </TabsList>

            <TabsContent value="portfolio" className="space-y-6">
              <PortfolioOverview 
                positions={mockPositions}
                totalValue={totalPortfolioValue}
              />
            </TabsContent>

            <TabsContent value="charts" className="space-y-6">
              <PortfolioChart data={chartData} />
            </TabsContent>

            <TabsContent value="risk" className="space-y-6">
              <RiskMonitor 
                alerts={mockAlerts}
                overallRisk="medium"
                portfolioHealth={72}
              />
            </TabsContent>

            <TabsContent value="rebalance" className="space-y-6">
              <RebalanceRecommendations recommendations={mockRecommendations} />
            </TabsContent>

            <TabsContent value="ai" className="space-y-6">
              <AIAssistant portfolioData={mockPositions} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Index;
