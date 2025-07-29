import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  return (
    <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center my-12">
      <div className="max-w-2xl mx-auto">
        <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="Sparkles" size={32} className="text-white" />
        </div>
        
        <h2 className="font-heading font-bold text-2xl lg:text-3xl text-primary-foreground mb-4">
          Ready to Start Planning?
        </h2>
        
        <p className="text-primary-foreground/90 text-lg mb-8 leading-relaxed">
          Let's discuss your vision and create an unforgettable experience together. Contact us today for a personalized consultation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="secondary"
            size="lg"
            iconName="MessageSquare"
            iconPosition="left"
            className="min-w-[180px] glassmorphic text-white border-white/20 hover:bg-white/10"
          >
            Get Free Quote
          </Button>
          
          <Button
            variant="secondary"
            size="lg"
            iconName="Phone"
            iconPosition="left"
            className="min-w-[180px] glassmorphic text-white border-white/20 hover:bg-white/10"
          >
            Call (072) 793-7010
          </Button>
        </div>
        
        <div className="flex items-center justify-center space-x-6 mt-8 text-sm text-primary-foreground/80">
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircle" size={16} className="text-accent" />
            <span>Free Consultation</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={16} className="text-accent" />
            <span>Quick Response</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Award" size={16} className="text-accent" />
            <span>Expert Planning</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;