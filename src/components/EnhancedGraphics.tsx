
import React from 'react';

const EnhancedGraphics = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Animated background mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/50 dark:via-purple-950/30 dark:to-pink-950/50"></div>
      
      {/* Floating currency symbols */}
      <div className="absolute top-20 left-1/4 text-6xl opacity-10 animate-pulse text-blue-500">💰</div>
      <div className="absolute top-40 right-1/3 text-4xl opacity-10 animate-bounce text-green-500">💎</div>
      <div className="absolute bottom-32 left-1/3 text-5xl opacity-10 animate-pulse text-purple-500">🚀</div>
      <div className="absolute bottom-20 right-1/4 text-3xl opacity-10 animate-bounce text-yellow-500">⭐</div>
      
      {/* Floating geometric patterns */}
      <div className="absolute top-1/3 left-20">
        <div className="grid grid-cols-4 gap-1 opacity-5">
          {Array.from({ length: 16 }).map((_, i) => (
            <div 
              key={i} 
              className="w-1 h-1 bg-blue-500 rounded-full animate-pulse" 
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Network connection lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        <path 
          d="M100 100 Q 300 200 500 150 T 900 200" 
          stroke="url(#line-gradient)" 
          strokeWidth="2" 
          fill="none"
          className="animate-pulse"
        />
        <path 
          d="M200 300 Q 400 100 600 250 T 800 200" 
          stroke="url(#line-gradient)" 
          strokeWidth="1" 
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </svg>
      
      {/* Particle effects */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default EnhancedGraphics;
