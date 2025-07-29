import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const InspiredCTA = ({ isVisible, onClose }) => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact', { state: { inquiryType: 'Gallery Inquiry' } });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-40 md:left-auto md:right-6 md:w-80">
      <div className="glassmorphic elevation-floating rounded-lg p-6 bg-background/95 border border-border">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
              Inspired by what you see?
            </h3>
            <p className="font-body text-sm text-muted-foreground">
              Let's create something beautiful together for your special day.
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground -mt-2 -mr-2"
          >
            <Icon name="X" size={20} />
          </Button>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="default"
            onClick={handleContactClick}
            className="flex-1"
            iconName="MessageSquare"
            iconPosition="left"
          >
            Get in Touch
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate('/services')}
            className="flex-1"
          >
            View Services
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InspiredCTA;