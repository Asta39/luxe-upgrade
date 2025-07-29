import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const TestimonialCTA = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-8 text-center my-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Icon name="Heart" size={48} className="text-primary-foreground mx-auto mb-4" />
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Join Our Happy Clients
          </h2>
          <p className="font-body text-primary-foreground/90 text-lg leading-relaxed">
            Ready to create your perfect celebration? Let us bring your vision to life with the same dedication and excellence our clients rave about.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="secondary"
            size="lg"
            onClick={handleContactClick}
            iconName="MessageSquare"
            iconPosition="left"
            className="bg-white text-primary hover:bg-white/90"
          >
            Start Planning Today
          </Button>
          <Button
            variant="outline"
            size="lg"
            iconName="Phone"
            iconPosition="left"
            className="border-white text-white hover:bg-white hover:text-primary"
            onClick={() => window.open('tel:0727937010')}
          >
            Call Now
          </Button>
        </div>
        
        <div className="mt-6 flex items-center justify-center space-x-6 text-primary-foreground/80">
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircle" size={16} />
            <span className="font-caption text-sm">Free Consultation</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={16} />
            <span className="font-caption text-sm">Quick Response</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Award" size={16} />
            <span className="font-caption text-sm">Expert Planning</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCTA;