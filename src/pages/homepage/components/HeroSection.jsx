import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const handleContactClick = () => {
    window.location.href = 'tel:0727937010';
  };

  const handleInquiryClick = () => {
    window.location.href = '/contact';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-accent rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-accent rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-accent rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-accent rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 leading-tight">
              Creating Unforgettable
              <span className="block text-accent">Wedding Moments</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Transform your special day into a magical celebration with our premium wedding planning services. From intimate ceremonies to grand celebrations, we bring your vision to life.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a 
              href="tel:0727937010"
              className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-smooth"
            >
              <Icon name="Phone" size={20} />
              <span className="font-mono text-lg">0727 937 010</span>
            </a>
            <div className="hidden sm:block w-px h-6 bg-foreground/20"></div>
            <a 
              href="tel:0721320787"
              className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-smooth"
            >
              <Icon name="Phone" size={20} />
              <span className="font-mono text-lg">0721 320 787</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              variant="default"
              size="lg"
              onClick={handleContactClick}
              className="glassmorphic elevation-floating hover:elevation-card px-8 py-4 text-lg font-medium"
              iconName="Phone"
              iconPosition="left"
            >
              Call Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleInquiryClick}
              className="glassmorphic px-8 py-4 text-lg font-medium"
              iconName="MessageSquare"
              iconPosition="left"
            >
              Get Quote
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-foreground/20">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={24} className="text-accent" />
                <span className="font-body text-foreground/80">Premium Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={24} className="text-accent" />
                <span className="font-body text-foreground/80">500+ Happy Couples</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Star" size={24} className="text-accent" />
                <span className="font-body text-foreground/80">5-Star Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-foreground/60" />
      </div>
    </section>
  );
};

export default HeroSection;