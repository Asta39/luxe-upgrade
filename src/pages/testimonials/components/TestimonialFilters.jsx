import React from 'react';
import Button from '../../../components/ui/Button';

const TestimonialFilters = ({ 
  activeCategory, 
  onCategoryChange, 
  activeRating, 
  onRatingChange,
  categories,
  testimonialCounts 
}) => {
  const ratingFilters = [
    { value: 'all', label: 'All Ratings' },
    { value: '5', label: '5 Stars' },
    { value: '4', label: '4+ Stars' },
    { value: '3', label: '3+ Stars' }
  ];

  return (
    <div className="bg-card elevation-card rounded-lg p-6 mb-8">
      <div className="space-y-6">
        {/* Service Category Filters */}
        <div>
          <h3 className="font-body font-semibold text-foreground mb-4">
            Filter by Service
          </h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={activeCategory === category.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => onCategoryChange(category.value)}
                className="transition-smooth"
              >
                {category.label}
                {testimonialCounts[category.value] && (
                  <span className="ml-2 px-1.5 py-0.5 bg-muted rounded-full text-xs">
                    {testimonialCounts[category.value]}
                  </span>
                )}
              </Button>
            ))}
          </div>
        </div>

        {/* Rating Filters */}
        <div>
          <h3 className="font-body font-semibold text-foreground mb-4">
            Filter by Rating
          </h3>
          <div className="flex flex-wrap gap-2">
            {ratingFilters.map((filter) => (
              <Button
                key={filter.value}
                variant={activeRating === filter.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => onRatingChange(filter.value)}
                className="transition-smooth"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialFilters;