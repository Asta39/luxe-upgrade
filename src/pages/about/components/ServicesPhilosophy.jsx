import React from 'react';
import Icon from '../../../components/AppIcon';

const ServicesPhilosophy = () => {
  const services = [
    {
      icon: 'Heart',
      title: 'Wedding Planning',
      description: 'We believe every love story deserves a perfect celebration. Our approach combines traditional elegance with modern sophistication, ensuring your special day reflects your unique journey together.',
      philosophy: 'Love-centered planning with attention to cultural traditions and personal preferences.'
    },
    {
      icon: 'Building2',
      title: 'Corporate Events',
      description: 'Professional excellence meets creative innovation. We understand that corporate events represent your brand, so we craft experiences that enhance your reputation and achieve your business objectives.',
      philosophy: 'Strategic event planning that aligns with corporate goals and brand values.'
    },
    {
      icon: 'Users',
      title: 'Private Celebrations',
      description: 'Life\'s precious moments deserve extraordinary celebrations. From milestone birthdays to anniversary celebrations, we create intimate experiences that bring families and friends together.',
      philosophy: 'Personalized celebrations that honor relationships and create lasting memories.'
    },
    {
      icon: 'Music',
      title: 'Entertainment Planning',
      description: 'Great entertainment creates unforgettable experiences. We curate performers and activities that match your event\'s energy, ensuring guests are engaged and entertained throughout.',
      philosophy: 'Thoughtful entertainment curation that enhances the overall event experience.'
    },
    {
      icon: 'ChefHat',
      title: 'Catering Coordination',
      description: 'Exceptional cuisine is the heart of memorable gatherings. We work with premier culinary partners to deliver dining experiences that delight your guests and complement your event theme.',
      philosophy: 'Culinary excellence that reflects cultural preferences and dietary needs.'
    }
  ];

  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
          Our Services Philosophy
        </h2>
        <p className="text-foreground/80 text-lg max-w-3xl mx-auto font-body">
          Every service we offer is grounded in our core belief that celebrations should be authentic, memorable, and stress-free for our clients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="glassmorphic p-6 rounded-xl elevation-card hover:elevation-floating transition-smooth">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={service.icon} size={28} className="text-accent-foreground" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                {service.title}
              </h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-foreground/80 leading-relaxed font-body text-sm">
                {service.description}
              </p>
              
              <div className="pt-4 border-t border-foreground/10">
                <p className="text-accent font-body text-sm italic">
                  "{service.philosophy}"
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Approach Summary */}
      <div className="mt-16 glassmorphic p-8 rounded-2xl elevation-card text-center">
        <h3 className="font-heading font-bold text-2xl text-foreground mb-6">
          The Luxe & Allure Approach
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto">
              <Icon name="Lightbulb" size={24} className="text-accent-foreground" />
            </div>
            <h4 className="font-heading font-semibold text-lg text-foreground">Consultation</h4>
            <p className="text-foreground/70 text-sm font-body">
              Deep understanding of your vision, preferences, and requirements
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto">
              <Icon name="Palette" size={24} className="text-accent-foreground" />
            </div>
            <h4 className="font-heading font-semibold text-lg text-foreground">Creation</h4>
            <p className="text-foreground/70 text-sm font-body">
              Innovative design and meticulous planning tailored to your story
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto">
              <Icon name="CheckCircle" size={24} className="text-accent-foreground" />
            </div>
            <h4 className="font-heading font-semibold text-lg text-foreground">Celebration</h4>
            <p className="text-foreground/70 text-sm font-body">
              Flawless execution while you enjoy your special moment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPhilosophy;