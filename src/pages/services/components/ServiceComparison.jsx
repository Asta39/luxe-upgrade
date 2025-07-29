import React, { useState } from 'react';

import { Checkbox } from '../../../components/ui/Checkbox';
import Button from '../../../components/ui/Button';

const ServiceComparison = ({ services, onCompare }) => {
  const [selectedServices, setSelectedServices] = useState([]);

  const handleServiceToggle = (serviceId) => {
    setSelectedServices(prev => 
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleCompare = () => {
    const selected = services.filter(service => selectedServices.includes(service.id));
    onCompare(selected);
  };

  return (
    <div className="bg-card rounded-xl elevation-card p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-heading font-bold text-xl text-foreground mb-2">
            Compare Services
          </h3>
          <p className="font-body text-muted-foreground text-sm">
            Select services to compare features and pricing
          </p>
        </div>
        <div className="text-right">
          <p className="font-caption text-xs text-muted-foreground">
            Selected: {selectedServices.length}/3
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {services.map((service) => (
          <div
            key={service.id}
            className={`p-4 rounded-lg border-2 transition-smooth cursor-pointer ${
              selectedServices.includes(service.id)
                ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
            }`}
            onClick={() => handleServiceToggle(service.id)}
          >
            <div className="flex items-start space-x-3">
              <Checkbox
                checked={selectedServices.includes(service.id)}
                onChange={() => handleServiceToggle(service.id)}
                className="mt-1"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-heading font-semibold text-foreground mb-1">
                  {service.title}
                </h4>
                <p className="font-body text-sm text-muted-foreground mb-2">
                  {service.subtitle}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-body font-medium text-primary text-sm">
                    {service.startingPrice}
                  </span>
                  <span className="font-caption text-xs text-muted-foreground">
                    {service.packageType}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedServices.length > 0 && (
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="default"
            onClick={handleCompare}
            disabled={selectedServices.length < 2}
            className="flex-1"
            iconName="BarChart3"
            iconPosition="left"
          >
            Compare Selected ({selectedServices.length})
          </Button>
          <Button
            variant="outline"
            onClick={() => setSelectedServices([])}
            className="sm:w-auto"
            iconName="X"
          >
            Clear All
          </Button>
        </div>
      )}
    </div>
  );
};

export default ServiceComparison;