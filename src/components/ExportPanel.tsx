
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const ExportPanel = () => {
  const [selectedData, setSelectedData] = useState({
    portfolio: true,
    transactions: true,
    riskAnalysis: false,
    alerts: false,
    settings: false,
  });
  const [format, setFormat] = useState('csv');
  const [dateRange, setDateRange] = useState('30d');
  const { toast } = useToast();

  const handleDataSelection = (key: string, checked: boolean) => {
    setSelectedData(prev => ({ ...prev, [key]: checked }));
  };

  const exportData = () => {
    const selectedCount = Object.values(selectedData).filter(Boolean).length;
    toast({
      title: "📊 Export Started",
      description: `Exporting ${selectedCount} data types as ${format.toUpperCase()}`,
    });
  };

  const scheduleExport = () => {
    toast({
      title: "⏰ Export Scheduled",
      description: "Automatic exports will be sent to your email weekly",
    });
  };

  const exportOptions = [
    { key: 'portfolio', label: 'Portfolio Overview', icon: '📊', size: '~2MB' },
    { key: 'transactions', label: 'Transaction History', icon: '💳', size: '~5MB' },
    { key: 'riskAnalysis', label: 'Risk Analysis', icon: '🛡️', size: '~1MB' },
    { key: 'alerts', label: 'Alert History', icon: '🔔', size: '~500KB' },
    { key: 'settings', label: 'Settings & Config', icon: '⚙️', size: '~100KB' },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">📊</span>
            Export Data
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label>Export Format</Label>
                <Select value={format} onValueChange={setFormat}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="csv">📄 CSV</SelectItem>
                    <SelectItem value="json">📋 JSON</SelectItem>
                    <SelectItem value="xlsx">📗 Excel</SelectItem>
                    <SelectItem value="pdf">📕 PDF Report</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label>Date Range</Label>
                <Select value={dateRange} onValueChange={setDateRange}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7d">Last 7 days</SelectItem>
                    <SelectItem value="30d">Last 30 days</SelectItem>
                    <SelectItem value="90d">Last 3 months</SelectItem>
                    <SelectItem value="1y">Last year</SelectItem>
                    <SelectItem value="all">All time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-4">
              <Label>Select Data to Export</Label>
              {exportOptions.map((option) => (
                <div key={option.key} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id={option.key}
                      checked={selectedData[option.key as keyof typeof selectedData]}
                      onCheckedChange={(checked) => handleDataSelection(option.key, checked as boolean)}
                    />
                    <Label htmlFor={option.key} className="flex items-center gap-2">
                      <span>{option.icon}</span>
                      {option.label}
                    </Label>
                  </div>
                  <Badge variant="outline">{option.size}</Badge>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            Quick Export Options
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" onClick={() => toast({ title: "📊 Portfolio Exported", description: "Portfolio data exported as PDF" })}>
              📊 Portfolio Report
            </Button>
            <Button variant="outline" onClick={() => toast({ title: "💳 Transactions Exported", description: "Transaction history exported as CSV" })}>
              💳 Transaction Log
            </Button>
            <Button variant="outline" onClick={() => toast({ title: "🛡️ Risk Report Exported", description: "Risk analysis exported as PDF" })}>
              🛡️ Risk Report
            </Button>
            <Button variant="outline" onClick={() => toast({ title: "📈 Performance Exported", description: "Performance data exported as Excel" })}>
              📈 Performance
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">⏰</span>
            Automated Exports
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" onClick={scheduleExport}>
              📅 Weekly Reports
            </Button>
            <Button variant="outline" onClick={() => toast({ title: "📊 Monthly Summary", description: "Monthly summary reports scheduled" })}>
              📊 Monthly Summary
            </Button>
            <Button variant="outline" onClick={() => toast({ title: "🚨 Alert Exports", description: "Alert-triggered exports enabled" })}>
              🚨 Alert Triggers
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button onClick={exportData} className="flex-1">
          📊 Export Selected Data
        </Button>
        <Button variant="outline" onClick={() => toast({ title: "📧 Email Sent", description: "Export options sent to your email" })}>
          📧 Email Options
        </Button>
      </div>
    </div>
  );
};

export default ExportPanel;
