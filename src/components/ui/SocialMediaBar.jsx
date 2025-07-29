import React from 'react';
import Icon from '../AppIcon';

const SocialMediaBar = ({ variant = 'header', className = '' }) => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: 'Facebook',
      url: 'https://facebook.com/luxeallurewedding',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      icon: 'Instagram',
      url: 'https://instagram.com/luxeallurewedding',
      color: 'hover:text-pink-600'
    },
    {
      name: 'Twitter',
      icon: 'Twitter',
      url: 'https://twitter.com/luxeallurewedding',
      color: 'hover:text-blue-400'
    },
    {
      name: 'WhatsApp',
      icon: 'MessageCircle',
      url: 'https://wa.me/1234567890',
      color: 'hover:text-green-600'
    }
  ];

  const baseClasses = 'transition-smooth hover-scale';
  
  const variantClasses = {
    header: 'p-2 text-muted-foreground hover:text-primary rounded-lg hover:bg-muted',
    footer: 'p-3 bg-muted rounded-lg text-muted-foreground hover:bg-primary hover:text-primary-foreground',
    inline: 'p-2 text-muted-foreground rounded-lg hover:bg-muted'
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseClasses} ${variantClasses[variant]} ${social.color}`}
          aria-label={`Follow us on ${social.name}`}
          title={`Follow us on ${social.name}`}
        >
          <Icon name={social.icon} size={variant === 'footer' ? 20 : 18} />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaBar;