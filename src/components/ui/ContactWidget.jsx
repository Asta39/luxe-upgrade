import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const ContactWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactOptions = [
    {
      type: 'phone',
      label: 'Call Us',
      value: '+1234567890',
      href: 'tel:+1234567890',
      icon: 'Phone',
      color: 'text-primary'
    },
    {
      type: 'whatsapp',
      label: 'WhatsApp',
      value: '+1234567890',
      href: 'https://wa.me/1234567890',
      icon: 'MessageCircle',
      color: 'text-success'
    },
    {
      type: 'email',
      label: 'Email',
      value: 'hello@luxeallure.com',
      href: 'mailto:hello@luxeallure.com',
      icon: 'Mail',
      color: 'text-accent'
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Expanded Contact Options */}
      {isExpanded && (
        <div className="mb-4 space-y-2 animate-fade-in">
          {contactOptions.map((option) => (
            <a
              key={option.type}
              href={option.href}
              target={option.type === 'whatsapp' ? '_blank' : undefined}
              rel={option.type === 'whatsapp' ? 'noopener noreferrer' : undefined}
              className="flex items-center space-x-3 bg-background elevation-floating rounded-lg px-4 py-3 hover-scale transition-smooth group"
            >
              <div className={`p-2 rounded-lg bg-muted ${option.color}`}>
                <Icon name={option.icon} size={18} />
              </div>
              <div className="min-w-0">
                <p className="font-body font-medium text-sm text-foreground">
                  {option.label}
                </p>
                <p className="font-mono text-xs text-muted-foreground truncate">
                  {option.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Main Contact Button */}
      <Button
        variant="default"
        size="lg"
        onClick={() => setIsExpanded(!isExpanded)}
        className="elevation-floating hover:elevation-card transition-smooth rounded-full w-14 h-14 p-0"
      >
        <Icon 
          name={isExpanded ? "X" : "MessageSquare"} 
          size={24} 
          className="transition-smooth"
        />
      </Button>

      {/* Mobile Bottom Bar Alternative */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 lg:hidden z-30">
        <div className="flex items-center justify-around max-w-md mx-auto">
          {contactOptions.map((option) => (
            <a
              key={option.type}
              href={option.href}
              target={option.type === 'whatsapp' ? '_blank' : undefined}
              rel={option.type === 'whatsapp' ? 'noopener noreferrer' : undefined}
              className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-muted transition-smooth group"
            >
              <div className={`p-2 rounded-lg ${option.color}`}>
                <Icon name={option.icon} size={20} />
              </div>
              <span className="font-caption text-xs text-muted-foreground group-hover:text-foreground">
                {option.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactWidget;