import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? 'text-accent fill-current' : 'text-muted-foreground'}
      />
    ));
  };

  return (
    <div className="bg-card elevation-card rounded-lg p-6 hover-scale transition-smooth">
      {/* Client Info Header */}
      <div className="flex items-start space-x-4 mb-4">
        <div className="flex-shrink-0">
          <Image
            src={testimonial.clientPhoto}
            alt={testimonial.clientName}
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-body font-semibold text-foreground truncate">
              {testimonial.clientName}
            </h3>
            {testimonial.isVerified && (
              <div className="flex-shrink-0 ml-2">
                <Icon name="CheckCircle" size={16} className="text-success" />
              </div>
            )}
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <div className="flex items-center space-x-1">
              {renderStars(testimonial.rating)}
            </div>
            <span className="font-mono text-sm text-muted-foreground">
              {testimonial.rating}/5
            </span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="Calendar" size={14} />
            <span className="font-caption">{testimonial.eventDate}</span>
            <span>•</span>
            <span className="font-caption">{testimonial.eventType}</span>
          </div>
        </div>
      </div>

      {/* Testimonial Content */}
      <blockquote className="mb-4">
        <p className="font-body text-foreground leading-relaxed italic">
          "{testimonial.content}"
        </p>
      </blockquote>

      {/* Event Details */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center space-x-2 text-muted-foreground">
          <Icon name="MapPin" size={14} />
          <span className="font-caption">{testimonial.location}</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="px-2 py-1 bg-muted rounded-full text-xs font-caption text-muted-foreground">
            {testimonial.serviceCategory}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;