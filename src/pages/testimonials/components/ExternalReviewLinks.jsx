import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ExternalReviewLinks = () => {
  const reviewPlatforms = [
    {
      name: 'Google Reviews',
      icon: 'Star',
      rating: '4.9',
      reviewCount: '127',
      url: 'https://google.com/reviews',
      color: 'text-blue-600'
    },
    {
      name: 'Facebook',
      icon: 'Facebook',
      rating: '4.8',
      reviewCount: '89',
      url: 'https://facebook.com/reviews',
      color: 'text-blue-700'
    },
    {
      name: 'WeddingWire',
      icon: 'Heart',
      rating: '4.9',
      reviewCount: '156',
      url: 'https://weddingwire.com/reviews',
      color: 'text-pink-600'
    }
  ];

  return (
    <div className="bg-card elevation-card rounded-lg p-6 mb-8">
      <div className="text-center mb-6">
        <h3 className="font-heading text-xl font-bold text-foreground mb-2">
          See More Reviews
        </h3>
        <p className="font-body text-muted-foreground">
          Check out what our clients are saying on other platforms
        </p>
      </div>
      
      <div className="grid sm:grid-cols-3 gap-4">
        {reviewPlatforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-muted rounded-lg p-4 hover-scale transition-smooth hover:bg-muted/80">
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-background mb-3 ${platform.color}`}>
                  <Icon name={platform.icon} size={24} />
                </div>
                <h4 className="font-body font-semibold text-foreground mb-1">
                  {platform.name}
                </h4>
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <Icon name="Star" size={14} className="text-accent fill-current" />
                  <span className="font-mono text-sm font-semibold text-foreground">
                    {platform.rating}
                  </span>
                </div>
                <p className="font-caption text-xs text-muted-foreground">
                  {platform.reviewCount} reviews
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
      
      <div className="text-center mt-6">
        <Button
          variant="outline"
          size="sm"
          iconName="ExternalLink"
          iconPosition="right"
          onClick={() => window.open('https://google.com/reviews', '_blank')}
        >
          View All External Reviews
        </Button>
      </div>
    </div>
  );
};

export default ExternalReviewLinks;