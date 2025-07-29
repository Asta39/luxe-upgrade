import React from 'react';
import Button from '../../../components/ui/Button';

const FilterChips = ({ categories, activeFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <Button
        variant={activeFilter === 'all' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onFilterChange('all')}
        className="transition-smooth"
      >
        All Projects
      </Button>
      
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={activeFilter === category.id ? 'default' : 'outline'}
          size="sm"
          onClick={() => onFilterChange(category.id)}
          className="transition-smooth"
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};

export default FilterChips;