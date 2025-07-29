import React from 'react';
import Button from '../../../components/ui/Button';

const FilterChips = ({ filters, activeFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {filters.map((filter) => (
        <Button
          key={filter.id}
          variant={activeFilter === filter.id ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange(filter.id)}
          className={`glassmorphic transition-smooth hover-scale ${
            activeFilter === filter.id 
              ? 'bg-primary text-primary-foreground border-primary' 
              : 'bg-background/80 text-foreground border-border hover:bg-muted'
          }`}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
};

export default FilterChips;