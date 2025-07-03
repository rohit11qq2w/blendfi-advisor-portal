
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface WalletConnectionProps {
  onConnect: (address: string) => void;
  isConnected: boolean;
  address?: string;
}

const WalletConnection: React.FC<WalletConnectionProps> = ({ onConnect, isConnected, address }) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const { toast } = useToast();

  const connectWallet = async () => {
    setIsConnecting(true);
    try {
      // Simulate wallet connection (in real app, this would use Freighter/XBull)
      await new Promise(resolve => setTimeout(resolve, 1500));
      const mockAddress = "GDZFQ7XMCNVLGB2QKYJJDVGNFQVJKPJDGVJKPJDGVJKPJDGVJKPJDGVJKPJDGVJKPJD";
      onConnect(mockAddress);
      toast({
        title: "Wallet Connected!",
        description: "Successfully connected to Stellar network",
      });
    } catch (error) {
      toast({
        title: "Connection Failed",
        description: "Please install Freighter wallet extension",
        variant: "destructive",
      });
    } finally {
      setIsConnecting(false);
    }
  };

  if (isConnected && address) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center">Wallet Connected</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-center">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              ✅ Connected
            </Badge>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Address:</p>
            <p className="font-mono text-xs bg-gray-100 p-2 rounded">
              {address.slice(0, 8)}...{address.slice(-8)}
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Connect Your Wallet</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-4">
            Connect your Stellar wallet to view your Blend positions
          </p>
          <Button 
            onClick={connectWallet} 
            disabled={isConnecting}
            className="w-full"
          >
            {isConnecting ? "Connecting..." : "Connect Freighter Wallet"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WalletConnection;
