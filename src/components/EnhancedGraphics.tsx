
import React from 'react';

const EnhancedGraphics = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Multi-layered animated background mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-purple-50/60 to-pink-50/80 dark:from-blue-950/80 dark:via-purple-950/60 dark:to-pink-950/80 transition-all duration-1000"></div>
      
      {/* Animated gradient orbs with glow effects */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 dark:from-cyan-600/40 dark:to-blue-700/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-r from-purple-400/30 to-pink-500/30 dark:from-purple-600/40 dark:to-pink-700/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-gradient-to-r from-green-400/30 to-emerald-500/30 dark:from-green-600/40 dark:to-emerald-700/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-20 -right-40 w-80 h-80 bg-gradient-to-r from-yellow-400/30 to-orange-500/30 dark:from-yellow-600/40 dark:to-orange-700/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      
      {/* Floating cryptocurrency symbols with enhanced animations */}
      <div className="absolute top-20 left-1/4 text-6xl opacity-20 dark:opacity-30 animate-bounce text-blue-500 dark:text-blue-400" style={{ animationDuration: '3s' }}>💰</div>
      <div className="absolute top-40 right-1/3 text-4xl opacity-20 dark:opacity-30 animate-pulse text-green-500 dark:text-green-400" style={{ animationDuration: '2s' }}>💎</div>
      <div className="absolute bottom-32 left-1/3 text-5xl opacity-20 dark:opacity-30 animate-bounce text-purple-500 dark:text-purple-400" style={{ animationDuration: '2.5s' }}>🚀</div>
      <div className="absolute bottom-20 right-1/4 text-3xl opacity-20 dark:opacity-30 animate-pulse text-yellow-500 dark:text-yellow-400" style={{ animationDuration: '1.8s' }}>⭐</div>
      <div className="absolute top-1/3 left-10 text-4xl opacity-15 dark:opacity-25 animate-bounce text-cyan-500 dark:text-cyan-400" style={{ animationDuration: '2.2s' }}>🔮</div>
      <div className="absolute bottom-1/3 right-10 text-5xl opacity-15 dark:opacity-25 animate-pulse text-pink-500 dark:text-pink-400" style={{ animationDuration: '2.8s' }}>⚡</div>
      
      {/* Floating geometric patterns with enhanced visibility */}
      <div className="absolute top-1/3 left-20">
        <div className="grid grid-cols-5 gap-2 opacity-20 dark:opacity-30">
          {Array.from({ length: 25 }).map((_, i) => (
            <div 
              key={i} 
              className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-full animate-pulse" 
              style={{ animationDelay: `${i * 0.1}s`, animationDuration: '2s' }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-1/4 right-20">
        <div className="grid grid-cols-4 gap-3 opacity-20 dark:opacity-30">
          {Array.from({ length: 16 }).map((_, i) => (
            <div 
              key={i} 
              className="w-3 h-3 bg-gradient-to-r from-green-500 to-cyan-500 dark:from-green-400 dark:to-cyan-400 rounded-lg animate-pulse" 
              style={{ animationDelay: `${i * 0.15}s`, animationDuration: '2.5s' }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Enhanced network connection lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20 dark:opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
          <linearGradient id="line-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          <linearGradient id="line-gradient-3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        <path 
          d="M100 100 Q 300 200 500 150 T 900 200" 
          stroke="url(#line-gradient-1)" 
          strokeWidth="3" 
          fill="none"
          className="animate-pulse"
        />
        <path 
          d="M200 300 Q 400 100 600 250 T 800 200" 
          stroke="url(#line-gradient-2)" 
          strokeWidth="2" 
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <path 
          d="M50 250 Q 350 50 650 300 T 950 100" 
          stroke="url(#line-gradient-3)" 
          strokeWidth="2" 
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </svg>
      
      {/* Enhanced particle effects with better visibility */}
      <div className="absolute inset-0">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full opacity-40 dark:opacity-60 ${
              i % 4 === 0 ? 'w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400' :
              i % 4 === 1 ? 'w-1.5 h-1.5 bg-gradient-to-r from-green-400 to-cyan-400' :
              i % 4 === 2 ? 'w-2.5 h-2.5 bg-gradient-to-r from-pink-400 to-rose-400' :
              'w-1 h-1 bg-gradient-to-r from-yellow-400 to-orange-400'
            } animate-bounce`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Floating hexagon patterns */}
      <div className="absolute top-1/4 right-1/4 opacity-10 dark:opacity-20">
        <svg width="120" height="120" viewBox="0 0 120 120" className="animate-spin" style={{ animationDuration: '20s' }}>
          <polygon points="60,10 90,30 90,70 60,90 30,70 30,30" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-500 dark:text-blue-400"/>
          <polygon points="60,25 80,35 80,55 60,65 40,55 40,35" fill="none" stroke="currentColor" strokeWidth="1" className="text-purple-500 dark:text-purple-400"/>
        </svg>
      </div>
      
      <div className="absolute bottom-1/4 left-1/4 opacity-10 dark:opacity-20">
        <svg width="100" height="100" viewBox="0 0 100 100" className="animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
          <polygon points="50,5 75,25 75,55 50,75 25,55 25,25" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-500 dark:text-green-400"/>
          <circle cx="50" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyan-500 dark:text-cyan-400"/>
        </svg>
      </div>
    </div>
  );
};

export default EnhancedGraphics;
