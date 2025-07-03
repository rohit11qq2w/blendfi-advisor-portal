
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {/* Enhanced gradient background with better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white/95 to-purple-50/90 dark:from-gray-950/95 dark:via-gray-900/95 dark:to-purple-950/95 transition-all duration-1000"></div>
      
      {/* Large animated gradient orbs with enhanced visibility */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-r from-purple-300/40 to-blue-400/40 dark:from-purple-600/50 dark:to-blue-700/50 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl animate-pulse"></div>
      <div className="absolute -top-16 -right-16 w-80 h-80 bg-gradient-to-r from-yellow-300/40 to-pink-400/40 dark:from-yellow-600/50 dark:to-pink-700/50 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-32 left-20 w-96 h-96 bg-gradient-to-r from-green-300/40 to-cyan-400/40 dark:from-green-600/50 dark:to-cyan-700/50 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      <div className="absolute -bottom-16 -right-32 w-80 h-80 bg-gradient-to-r from-red-300/40 to-orange-400/40 dark:from-red-600/50 dark:to-orange-700/50 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl animate-pulse" style={{ animationDelay: '6s' }}></div>
      
      {/* Enhanced grid pattern with better visibility */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-20"></div>
      
      {/* Additional floating orbs for more depth */}
      <div className="absolute top-1/4 left-1/2 w-40 h-40 bg-gradient-to-r from-indigo-400/30 to-purple-500/30 dark:from-indigo-600/40 dark:to-purple-700/40 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-gradient-to-r from-teal-400/30 to-green-500/30 dark:from-teal-600/40 dark:to-green-700/40 rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-rose-400/30 to-pink-500/30 dark:from-rose-600/40 dark:to-pink-700/40 rounded-full blur-xl animate-pulse" style={{ animationDelay: '5s' }}></div>
    </div>
  );
};

export default AnimatedBackground;
