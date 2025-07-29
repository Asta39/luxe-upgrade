import React from 'react';
import Icon from '../../../components/AppIcon';

const LocationMap = () => {
  const businessLocation = {
    name: 'Luxe Allure Wedding',
    address: '123 Wedding Avenue, Luxury District, Nairobi, Kenya 00100',
    lat: -1.2921,
    lng: 36.8219
  };

  const handleDirections = () => {
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${businessLocation.lat},${businessLocation.lng}`;
    window.open(directionsUrl, '_blank');
  };

  return (
    <div className="bg-card rounded-xl overflow-hidden elevation-card">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">
              Visit Our Studio
            </h3>
            <p className="font-body text-muted-foreground">
              {businessLocation.address}
            </p>
          </div>
          <button
            onClick={handleDirections}
            className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth hover-scale"
            aria-label="Get directions to our location"
          >
            <Icon name="Navigation" size={18} />
            <span className="font-body font-medium">Directions</span>
          </button>
        </div>
      </div>
      
      <div className="relative h-64 lg:h-80">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title="Luxe Allure Wedding Location"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${businessLocation.lat},${businessLocation.lng}&z=15&output=embed`}
          className="border-0"
        />
        
        {/* Overlay with business info */}
        <div className="absolute bottom-4 left-4 right-4 glassmorphic rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="MapPin" size={20} className="text-primary-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-body font-semibold text-foreground">
                {businessLocation.name}
              </h4>
              <p className="font-body text-sm text-muted-foreground">
                Professional wedding planning studio
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 bg-muted/30">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <Icon name="Car" size={18} className="text-muted-foreground" />
            <span className="font-body text-sm text-muted-foreground">
              Free parking available
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="Clock" size={18} className="text-muted-foreground" />
            <span className="font-body text-sm text-muted-foreground">
              By appointment only
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;