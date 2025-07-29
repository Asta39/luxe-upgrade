import React from 'react';
import Icon from '../../../components/AppIcon';

const RatingOverview = ({ overallRating, totalReviews, categoryBreakdown }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={20}
        className={index < Math.floor(rating) ? 'text-accent fill-current' : 'text-muted-foreground'}
      />
    ));
  };

  const renderRatingBar = (category) => {
    const percentage = (category.count / totalReviews) * 100;
    
    return (
      <div key={category.name} className="flex items-center space-x-3">
        <span className="font-caption text-sm text-muted-foreground w-24 text-right">
          {category.name}
        </span>
        <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <span className="font-mono text-sm text-muted-foreground w-8">
          {category.count}
        </span>
      </div>
    );
  };

  return (
    <div className="bg-card elevation-card rounded-lg p-6 mb-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Overall Rating */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
            <span className="font-heading text-4xl font-bold text-foreground">
              {overallRating.toFixed(1)}
            </span>
            <div className="flex items-center space-x-1">
              {renderStars(overallRating)}
            </div>
          </div>
          <p className="font-body text-muted-foreground mb-1">
            Based on {totalReviews} reviews
          </p>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <Icon name="CheckCircle" size={16} className="text-success" />
            <span className="font-caption text-sm text-success">
              Verified Reviews
            </span>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="space-y-3">
          <h3 className="font-body font-semibold text-foreground mb-4">
            Rating Breakdown
          </h3>
          {categoryBreakdown.map(renderRatingBar)}
        </div>
      </div>
    </div>
  );
};

export default RatingOverview;