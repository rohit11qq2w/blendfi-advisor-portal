
import React from 'react';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg opacity-20 animate-bounce"></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-40 right-10 w-14 h-14 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg opacity-20 animate-bounce"></div>
      
      {/* Floating dots pattern */}
      <div className="absolute top-1/4 left-1/4 grid grid-cols-3 gap-2 opacity-10">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
        ))}
      </div>
      
      <div className="absolute bottom-1/4 right-1/4 grid grid-cols-3 gap-2 opacity-10">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.3}s` }}></div>
        ))}
      </div>
    </div>
  );
};

export default FloatingElements;
