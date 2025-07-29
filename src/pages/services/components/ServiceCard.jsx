import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, onGetQuote }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-card rounded-xl elevation-card overflow-hidden transition-smooth hover-scale">
      {/* Service Header */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-heading font-bold text-2xl text-white mb-2">
            {service.title}
          </h3>
          <p className="font-body text-white/90 text-sm">
            {service.subtitle}
          </p>
        </div>
      </div>

      {/* Service Content */}
      <div className="p-6">
        {/* Brief Description */}
        <p className="font-body text-muted-foreground mb-4 leading-relaxed">
          {service.description}
        </p>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="font-heading font-semibold text-foreground mb-3 flex items-center">
            <Icon name="CheckCircle" size={18} className="text-accent mr-2" />
            Key Features
          </h4>
          <ul className="space-y-2">
            {service.features.slice(0, isExpanded ? service.features.length : 3).map((feature, index) => (
              <li key={index} className="flex items-start space-x-2">
                <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
          {service.features.length > 3 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 font-body text-sm text-primary hover:text-accent transition-smooth flex items-center"
            >
              {isExpanded ? 'Show Less' : `Show ${service.features.length - 3} More`}
              <Icon 
                name={isExpanded ? "ChevronUp" : "ChevronDown"} 
                size={16} 
                className="ml-1" 
              />
            </button>
          )}
        </div>

        {/* Pricing Indicator */}
        <div className="mb-6 p-4 bg-muted rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-body text-sm text-muted-foreground">Starting from</p>
              <p className="font-heading font-bold text-xl text-foreground">{service.startingPrice}</p>
            </div>
            <div className="text-right">
              <p className="font-body text-sm text-muted-foreground">Package type</p>
              <p className="font-body font-medium text-foreground">{service.packageType}</p>
            </div>
          </div>
        </div>

        {/* Client Testimonial Snippet */}
        {service.testimonial && (
          <div className="mb-6 p-4 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg border-l-4 border-accent">
            <p className="font-body text-sm text-foreground italic mb-2">
              "{service.testimonial.text}"
            </p>
            <p className="font-caption text-xs text-muted-foreground">
              - {service.testimonial.client}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="default"
            onClick={() => onGetQuote(service)}
            className="flex-1 glassmorphic"
            iconName="MessageSquare"
            iconPosition="left"
          >
            Get Quote
          </Button>
          <Button
            variant="outline"
            className="flex-1"
            iconName="Eye"
            iconPosition="left"
          >
            View Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;