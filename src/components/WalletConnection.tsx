
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Wallet, Copy, ExternalLink, RefreshCw } from 'lucide-react';

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
      await new Promise(resolve => setTimeout(resolve, 1500));
      const mockAddress = "GDZFQ7XMCNVLGB2QKYJJDVGNFQVJKPJDGVJKPJDGVJKPJDGVJKPJDGVJKPJDGVJKPJD";
      onConnect(mockAddress);
      toast({
        title: "🎉 Wallet Connected!",
        description: "Successfully connected to Stellar network",
      });
    } catch (error) {
      toast({
        title: "❌ Connection Failed",
        description: "Please install Freighter wallet extension",
        variant: "destructive",
      });
    } finally {
      setIsConnecting(false);
    }
  };

  const copyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      toast({
        title: "📋 Address Copied!",
        description: "Wallet address copied to clipboard",
      });
    }
  };

  const disconnect = () => {
    toast({
      title: "👋 Wallet Disconnected",
      description: "Successfully disconnected from wallet",
    });
    // Reset connection state would go here
  };

  const openStellarExpert = () => {
    if (address) {
      window.open(`https://stellar.expert/explorer/public/account/${address}`, '_blank');
      toast({
        title: "🔍 Opening Stellar Expert",
        description: "Viewing account details in new tab",
      });
    }
  };

  if (isConnected && address) {
    return (
      <Card className="w-full max-w-xs mx-auto bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-green-200 dark:border-green-800">
        <CardHeader className="pb-2">
          <CardTitle className="text-center text-sm flex items-center justify-center gap-2">
            <Wallet className="h-4 w-4 text-green-600 dark:text-green-400" />
            Connected
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 pt-0">
          <div className="flex items-center justify-center">
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs">
              ✅ Active
            </Badge>
          </div>
          <div className="text-center">
            <p className="font-mono text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded border">
              {address.slice(0, 6)}...{address.slice(-6)}
            </p>
            <div className="flex justify-center gap-1 mt-2">
              <Button variant="ghost" size="sm" onClick={copyAddress} className="h-6 px-2 text-xs">
                <Copy className="h-3 w-3" />
              </Button>
              <Button variant="ghost" size="sm" onClick={openStellarExpert} className="h-6 px-2 text-xs">
                <ExternalLink className="h-3 w-3" />
              </Button>
              <Button variant="ghost" size="sm" onClick={disconnect} className="h-6 px-2 text-xs">
                <RefreshCw className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-xs mx-auto bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
      <CardHeader className="pb-2">
        <CardTitle className="text-center text-sm flex items-center justify-center gap-2">
          <Wallet className="h-4 w-4" />
          Connect Wallet
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 pt-0">
        <div className="text-center">
          <p className="text-xs text-gray-600 dark:text-gray-300 mb-3">
            Connect to view your Blend positions
          </p>
          <Button 
            onClick={connectWallet} 
            disabled={isConnecting}
            className="w-full h-8 text-xs"
          >
            {isConnecting ? (
              <>
                <RefreshCw className="h-3 w-3 mr-1 animate-spin" />
                Connecting...
              </>
            ) : (
              <>
                <Wallet className="h-3 w-3 mr-1" />
                Connect Freighter
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WalletConnection;
