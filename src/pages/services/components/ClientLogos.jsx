import React from 'react';
import Image from '../../../components/AppImage';

const ClientLogos = () => {
  const clientLogos = [
    {
      id: 1,
      name: 'Elegant Venues',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center',
      category: 'Venue Partner'
    },
    {
      id: 2,
      name: 'Luxury Hotels Group',
      logo: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&h=100&fit=crop&crop=center',
      category: 'Hotel Partner'
    },
    {
      id: 3,
      name: 'Premium Catering Co.',
      logo: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&h=100&fit=crop&crop=center',
      category: 'Catering Partner'
    },
    {
      id: 4,
      name: 'Elite Photography',
      logo: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=200&h=100&fit=crop&crop=center',
      category: 'Photography Partner'
    },
    {
      id: 5,
      name: 'Floral Artistry',
      logo: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=200&h=100&fit=crop&crop=center',
      category: 'Floral Partner'
    },
    {
      id: 6,
      name: 'Sound & Vision',
      logo: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=100&fit=crop&crop=center',
      category: 'AV Partner'
    }
  ];

  return (
    <div className="bg-card rounded-xl elevation-card p-6">
      <div className="text-center mb-8">
        <h3 className="font-heading font-bold text-2xl text-foreground mb-2">
          Trusted Partners
        </h3>
        <p className="font-body text-muted-foreground">
          We collaborate with industry-leading vendors to deliver exceptional experiences
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {clientLogos.map((client) => (
          <div
            key={client.id}
            className="group flex flex-col items-center p-4 rounded-lg hover:bg-muted transition-smooth"
          >
            <div className="w-full h-16 mb-3 overflow-hidden rounded-lg bg-background">
              <Image
                src={client.logo}
                alt={client.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-smooth"
              />
            </div>
            <h4 className="font-body font-medium text-sm text-foreground text-center mb-1">
              {client.name}
            </h4>
            <p className="font-caption text-xs text-muted-foreground text-center">
              {client.category}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="font-body text-sm text-muted-foreground mb-4">
          Join over 500+ satisfied clients who trusted us with their special moments
        </p>
        <div className="flex items-center justify-center space-x-8">
          <div className="text-center">
            <p className="font-heading font-bold text-2xl text-primary">500+</p>
            <p className="font-caption text-xs text-muted-foreground">Events Planned</p>
          </div>
          <div className="text-center">
            <p className="font-heading font-bold text-2xl text-accent">98%</p>
            <p className="font-caption text-xs text-muted-foreground">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <p className="font-heading font-bold text-2xl text-success">5★</p>
            <p className="font-caption text-xs text-muted-foreground">Average Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;