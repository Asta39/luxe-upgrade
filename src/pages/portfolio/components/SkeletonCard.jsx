import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="bg-card rounded-xl overflow-hidden elevation-card animate-pulse">
      {/* Image Skeleton */}
      <div className="aspect-[4/3] bg-muted"></div>
      
      {/* Content Skeleton */}
      <div className="p-6">
        {/* Title */}
        <div className="h-6 bg-muted rounded mb-2"></div>
        
        {/* Description */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-muted rounded w-full"></div>
          <div className="h-4 bg-muted rounded w-3/4"></div>
        </div>
        
        {/* Testimonial */}
        <div className="bg-muted rounded-lg p-4 mb-4">
          <div className="space-y-2">
            <div className="h-3 bg-background rounded w-full"></div>
            <div className="h-3 bg-background rounded w-5/6"></div>
            <div className="h-3 bg-background rounded w-1/2 mt-3"></div>
          </div>
        </div>
        
        {/* Button */}
        <div className="h-9 bg-muted rounded"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;