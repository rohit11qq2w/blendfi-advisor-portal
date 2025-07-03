
import React from 'react';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Enhanced floating geometric shapes with better visibility */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/40 to-purple-500/40 dark:from-blue-500/50 dark:to-purple-600/50 rounded-full animate-pulse shadow-lg shadow-blue-500/20 dark:shadow-blue-400/30"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-green-400/40 to-cyan-500/40 dark:from-green-500/50 dark:to-cyan-600/50 rounded-lg animate-bounce shadow-lg shadow-green-500/20 dark:shadow-green-400/30"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-purple-400/40 to-pink-500/40 dark:from-purple-500/50 dark:to-pink-600/50 rounded-full animate-pulse shadow-lg shadow-purple-500/20 dark:shadow-purple-400/30"></div>
      <div className="absolute bottom-40 right-10 w-18 h-18 bg-gradient-to-r from-yellow-400/40 to-orange-500/40 dark:from-yellow-500/50 dark:to-orange-600/50 rounded-lg animate-bounce shadow-lg shadow-yellow-500/20 dark:shadow-yellow-400/30"></div>
      
      {/* Enhanced floating dots pattern with glow effects */}
      <div className="absolute top-1/4 left-1/4 grid grid-cols-4 gap-3 opacity-30 dark:opacity-40">
        {Array.from({ length: 16 }).map((_, i) => (
          <div 
            key={i} 
            className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-full animate-pulse shadow-md shadow-blue-500/30 dark:shadow-blue-400/40" 
            style={{ animationDelay: `${i * 0.2}s`, animationDuration: '3s' }}
          ></div>
        ))}
      </div>
      
      <div className="absolute bottom-1/4 right-1/4 grid grid-cols-3 gap-4 opacity-30 dark:opacity-40">
        {Array.from({ length: 9 }).map((_, i) => (
          <div 
            key={i} 
            className="w-4 h-4 bg-gradient-to-r from-green-500 to-cyan-500 dark:from-green-400 dark:to-cyan-400 rounded-full animate-pulse shadow-md shadow-green-500/30 dark:shadow-green-400/40" 
            style={{ animationDelay: `${i * 0.3}s`, animationDuration: '2.5s' }}
          ></div>
        ))}
      </div>
      
      {/* Floating diamond shapes */}
      <div className="absolute top-1/3 right-1/4">
        <div className="w-8 h-8 bg-gradient-to-r from-pink-400/40 to-rose-500/40 dark:from-pink-500/50 dark:to-rose-600/50 rotate-45 animate-spin shadow-lg shadow-pink-500/20 dark:shadow-pink-400/30" style={{ animationDuration: '10s' }}></div>
      </div>
      
      <div className="absolute bottom-1/3 left-1/5">
        <div className="w-6 h-6 bg-gradient-to-r from-cyan-400/40 to-teal-500/40 dark:from-cyan-500/50 dark:to-teal-600/50 rotate-45 animate-spin shadow-lg shadow-cyan-500/20 dark:shadow-cyan-400/30" style={{ animationDuration: '8s', animationDirection: 'reverse' }}></div>
      </div>
      
      {/* Floating rings */}
      <div className="absolute top-2/3 left-1/3">
        <div className="w-12 h-12 border-2 border-gradient-to-r from-indigo-400/40 to-purple-500/40 dark:from-indigo-500/50 dark:to-purple-600/50 rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
      </div>
      
      {/* Morphing shapes */}
      <div className="absolute top-16 right-1/3">
        <div className="w-10 h-10 bg-gradient-to-r from-orange-400/40 to-red-500/40 dark:from-orange-500/50 dark:to-red-600/50 rounded-xl animate-bounce shadow-lg shadow-orange-500/20 dark:shadow-orange-400/30" style={{ animationDuration: '3s' }}></div>
      </div>
      
      <div className="absolute bottom-16 left-1/2">
        <div className="w-8 h-8 bg-gradient-to-r from-violet-400/40 to-indigo-500/40 dark:from-violet-500/50 dark:to-indigo-600/50 rounded-lg animate-pulse shadow-lg shadow-violet-500/20 dark:shadow-violet-400/30" style={{ animationDuration: '2.5s' }}></div>
      </div>
    </div>
  );
};

export default FloatingElements;
