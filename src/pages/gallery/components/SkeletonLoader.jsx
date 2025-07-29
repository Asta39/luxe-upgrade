import React from 'react';

const SkeletonLoader = ({ count = 8 }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-lg bg-muted animate-pulse"
          style={{ aspectRatio: '4/3' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-muted via-muted/50 to-muted"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;