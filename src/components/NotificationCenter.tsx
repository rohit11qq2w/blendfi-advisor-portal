
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Bell, X, AlertTriangle, Info, CheckCircle } from 'lucide-react';

interface NotificationCenterProps {
  alerts: Array<{
    id: string;
    type: 'warning' | 'info' | 'success';
    pool: string;
    message: string;
    action: string;
  }>;
  isOpen: boolean;
  onClose: () => void;
}

const NotificationCenter: React.FC<NotificationCenterProps> = ({ alerts, isOpen, onClose }) => {
  const [dismissedAlerts, setDismissedAlerts] = useState<string[]>([]);
  const { toast } = useToast();

  const handleDismiss = (alertId: string) => {
    setDismissedAlerts([...dismissedAlerts, alertId]);
    toast({
      title: "🔕 Alert Dismissed",
      description: "Notification has been cleared"
    });
  };

  const handleAction = (alert: any) => {
    toast({
      title: "⚡ Action Executed",
      description: `Performing: ${alert.action}`,
    });
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'warning': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'info': return <Info className="h-4 w-4 text-blue-500" />;
      case 'success': return <CheckCircle className="h-4 w-4 text-green-500" />;
      default: return <Bell className="h-4 w-4" />;
    }
  };

  const getVariant = (type: string) => {
    switch (type) {
      case 'warning': return 'secondary';
      case 'info': return 'outline';
      case 'success': return 'secondary';
      default: return 'outline';
    }
  };

  const activeAlerts = alerts.filter(alert => !dismissedAlerts.includes(alert.id));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-end p-4">
      <Card className="w-full max-w-md bg-background/95 backdrop-blur-sm border-2 animate-slide-in-right">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notifications
            {activeAlerts.length > 0 && (
              <Badge variant="destructive" className="ml-2">{activeAlerts.length}</Badge>
            )}
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-3">
          {activeAlerts.length === 0 ? (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              <Bell className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p>All caught up! No new notifications.</p>
            </div>
          ) : (
            activeAlerts.map((alert) => (
              <div
                key={alert.id}
                className="p-3 border rounded-lg bg-card hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2 flex-1">
                    {getIcon(alert.type)}
                    <div className="flex-1">
                      <Badge variant={getVariant(alert.type) as any} className="mb-1 text-xs">
                        {alert.pool}
                      </Badge>
                      <p className="text-sm font-medium mb-1">{alert.message}</p>
                      <p className="text-xs text-muted-foreground">{alert.action}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDismiss(alert.id)}
                    className="h-6 w-6 p-0"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleAction(alert)}
                  className="w-full mt-2 h-7 text-xs"
                >
                  Take Action
                </Button>
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default NotificationCenter;
