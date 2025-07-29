import React from 'react';
import Icon from '../../../components/AppIcon';

const ProcessTimeline = ({ steps, title = "Our Process" }) => {
  return (
    <div className="bg-card rounded-xl elevation-card p-6">
      <div className="text-center mb-8">
        <h3 className="font-heading font-bold text-2xl text-foreground mb-2">
          {title}
        </h3>
        <p className="font-body text-muted-foreground">
          From consultation to celebration, we guide you through every step
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block"></div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex items-start space-x-6">
              {/* Step Number */}
              <div className="flex-shrink-0 relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center elevation-card">
                  <span className="font-heading font-bold text-white text-lg">
                    {index + 1}
                  </span>
                </div>
                {/* Connector Line for Mobile */}
                {index < steps.length - 1 && (
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-border md:hidden"></div>
                )}
              </div>

              {/* Step Content */}
              <div className="flex-1 pb-8">
                <div className="bg-muted rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                        {step.title}
                      </h4>
                      <p className="font-body text-muted-foreground mb-4">
                        {step.description}
                      </p>
                    </div>
                    <div className="ml-4">
                      <Icon name={step.icon} size={24} className="text-primary" />
                    </div>
                  </div>

                  {/* Step Details */}
                  {step.details && (
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2">
                          <Icon name="ArrowRight" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                          <span className="font-body text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Duration */}
                  {step.duration && (
                    <div className="mt-4 flex items-center space-x-2">
                      <Icon name="Clock" size={16} className="text-muted-foreground" />
                      <span className="font-caption text-sm text-muted-foreground">
                        Duration: {step.duration}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline;