
import React from 'react';

const CosmicBackground = () => {
  return (
    <div className="fixed inset-0 -z-30 overflow-hidden">
      {/* Cosmic starfield effect */}
      <div className="absolute inset-0 bg-black/5 dark:bg-black/20">
        {Array.from({ length: 200 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/60 dark:bg-white/80 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      {/* Nebula-like clouds */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-64 bg-gradient-radial from-purple-500/10 via-blue-500/5 to-transparent dark:from-purple-400/20 dark:via-blue-400/10 dark:to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-cyan-500/10 via-green-500/5 to-transparent dark:from-cyan-400/20 dark:via-green-400/10 dark:to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-radial from-pink-500/10 via-rose-500/5 to-transparent dark:from-pink-400/20 dark:via-rose-400/10 dark:to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '4s' }}></div>
      </div>
    </div>
  );
};

export default CosmicBackground;
