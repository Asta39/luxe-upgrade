import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: 'Phone',
      label: 'Phone Numbers',
      items: [
        { text: '0727937010', href: 'tel:0727937010' },
        { text: '0721320787', href: 'tel:0721320787' }
      ]
    },
    {
      icon: 'MapPin',
      label: 'Business Address',
      items: [
        { text: '123 Wedding Avenue, Luxury District\nNairobi, Kenya 00100', href: null }
      ]
    },
    {
      icon: 'Clock',
      label: 'Operating Hours',
      items: [
        { text: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: By Appointment Only', href: null }
      ]
    },
    {
      icon: 'Mail',
      label: 'Email Address',
      items: [
        { text: 'hello@luxeallure.com', href: 'mailto:hello@luxeallure.com' }
      ]
    }
  ];

  return (
    <div className="bg-card rounded-xl p-6 lg:p-8 elevation-card">
      <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
        Get In Touch
      </h2>
      
      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name={detail.icon} size={20} className="text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-body font-semibold text-foreground mb-2">
                {detail.label}
              </h3>
              <div className="space-y-1">
                {detail.items.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-body text-muted-foreground hover:text-primary transition-smooth block"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <p className="font-body text-muted-foreground whitespace-pre-line">
                        {item.text}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-border">
        <h3 className="font-body font-semibold text-foreground mb-4">
          Follow Us
        </h3>
        <div className="flex items-center space-x-3">
          {[
            { name: 'Facebook', icon: 'Facebook', url: 'https://facebook.com/luxeallurewedding' },
            { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com/luxeallurewedding' },
            { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com/luxeallurewedding' },
            { name: 'MessageCircle', icon: 'MessageCircle', url: 'https://wa.me/0727937010' }
          ].map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-smooth hover-scale"
              aria-label={`Follow us on ${social.name}`}
            >
              <Icon name={social.icon} size={18} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;