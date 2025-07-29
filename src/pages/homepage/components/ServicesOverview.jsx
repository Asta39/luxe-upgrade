import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ServicesOverview = () => {
  const services = [
    {
      id: 1,
      title: "Wedding Planning",
      description: "Complete wedding coordination from venue selection to day-of management. We handle every detail so you can focus on celebrating your love.",
      icon: "Heart",
      features: ["Venue Selection", "Vendor Coordination", "Timeline Management", "Day-of Coordination"]
    },
    {
      id: 2,
      title: "Corporate Events",
      description: "Professional corporate event planning for conferences, product launches, and company celebrations with attention to brand representation.",
      icon: "Briefcase",
      features: ["Conference Planning", "Product Launches", "Team Building", "Brand Events"]
    },
    {
      id: 3,
      title: "Private Celebrations",
      description: "Intimate gatherings and milestone celebrations including birthdays, anniversaries, and family reunions tailored to your vision.",
      icon: "Gift",
      features: ["Birthday Parties", "Anniversaries", "Family Reunions", "Milestone Events"]
    },
    {
      id: 4,
      title: "Entertainment Planning",
      description: "Comprehensive entertainment coordination including live music, DJs, performers, and interactive experiences for memorable events.",
      icon: "Music",
      features: ["Live Music", "DJ Services", "Performers", "Interactive Entertainment"]
    },
    {
      id: 5,
      title: "Catering Coordination",
      description: "Expert catering management with diverse menu options, dietary accommodations, and seamless service execution.",
      icon: "ChefHat",
      features: ["Menu Planning", "Dietary Options", "Service Coordination", "Quality Assurance"]
    }
  ];

  const handleInquiry = (serviceTitle) => {
    // In a real app, this would navigate to a service-specific inquiry form
    window.location.href = `/contact?service=${encodeURIComponent(serviceTitle)}`;
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Our Premium Services
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            From intimate ceremonies to grand celebrations, we offer comprehensive event planning services tailored to your unique vision and requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-card elevation-card rounded-lg p-6 hover:elevation-floating transition-smooth hover-scale group"
            >
              {/* Service Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-105 transition-smooth">
                  <Icon name={service.icon} size={28} color="white" />
                </div>
              </div>

              {/* Service Content */}
              <div className="mb-6">
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-accent flex-shrink-0" />
                      <span className="font-body text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <Button
                variant="outline"
                fullWidth
                onClick={() => handleInquiry(service.title)}
                className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-smooth"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Get Quote
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button
            variant="default"
            size="lg"
            onClick={() => window.location.href = '/services'}
            className="px-8"
            iconName="Eye"
            iconPosition="left"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;