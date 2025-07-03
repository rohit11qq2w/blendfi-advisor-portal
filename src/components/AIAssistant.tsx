
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

interface AIMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

interface AIAssistantProps {
  portfolioData: any;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ portfolioData }) => {
  const [messages, setMessages] = useState<AIMessage[]>([
    {
      id: '1',
      type: 'ai',
      content: "👋 Hi! I'm your BlendFi AI assistant. I can help you optimize your portfolio, assess risks, and suggest rebalancing strategies. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const quickSuggestions = [
    "What's my portfolio risk level?",
    "Should I rebalance my positions?",
    "How can I improve my APY?",
    "What's my liquidation risk?"
  ];

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    const userMessage: AIMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(message);
      const aiMessage: AIMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: aiResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('risk')) {
      return "🎯 Based on your current positions, you have a MEDIUM risk profile. Your Pool A position has a 180% health ratio - consider adding more collateral or reducing leverage. Pool B looks healthy with 250% ratio.";
    } else if (lowerMessage.includes('rebalance')) {
      return "⚖️ I recommend moving 30% of your Pool C position to Pool A for better risk-adjusted returns. This would increase your overall APY by 0.8% while reducing liquidation risk by 15%.";
    } else if (lowerMessage.includes('apy')) {
      return "📈 Your current weighted APY is 12.4%. I found Pool D offering 15.2% APY with similar risk. Consider allocating 20% of your portfolio there for +2.1% improvement.";
    } else if (lowerMessage.includes('liquidation')) {
      return "⚠️ Your Pool A position is at 180% health ratio. Liquidation risk is MODERATE. Consider adding $2,000 USDC collateral or reducing borrowed amount by $1,500 to improve safety.";
    } else {
      return "🤖 I'm analyzing your portfolio... Based on current market conditions, your positions look generally healthy. The main opportunity I see is optimizing your yield while maintaining your risk tolerance. Would you like specific recommendations?";
    }
  };

  return (
    <Card className="h-full max-h-[600px] flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">🤖</span>
          AI Portfolio Assistant
          <Badge variant="outline" className="bg-blue-50 text-blue-700">BETA</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto space-y-4 mb-4 max-h-80">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.type === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
                <p className="text-sm">🤔 Analyzing your portfolio...</p>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {quickSuggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => handleSendMessage(suggestion)}
                className="text-xs"
              >
                {suggestion}
              </Button>
            ))}
          </div>

          <div className="flex gap-2">
            <Textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything about your portfolio..."
              className="flex-1"
              rows={2}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage(inputValue);
                }
              }}
            />
            <Button
              onClick={() => handleSendMessage(inputValue)}
              disabled={!inputValue.trim() || isLoading}
              className="self-end"
            >
              Send
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIAssistant;
