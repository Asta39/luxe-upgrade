import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ContactWidget from '../../components/ui/ContactWidget';
import ServiceCard from './components/ServiceCard';
import ServiceComparison from './components/ServiceComparison';
import ProcessTimeline from './components/ProcessTimeline';
import QuoteForm from './components/QuoteForm';
import ClientLogos from './components/ClientLogos';

import Button from '../../components/ui/Button';

const Services = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const services = [
    {
      id: 'wedding-planning',
      title: 'Wedding Planning',
      subtitle: 'Complete wedding coordination from engagement to honeymoon',
      description: `Transform your dream wedding into reality with our comprehensive planning services. From intimate ceremonies to grand celebrations, we handle every detail with precision and care, ensuring your special day is flawless and memorable.`,
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop&crop=center',
      features: [
        'Full-service wedding coordination',
        'Vendor selection and management',
        'Timeline and budget planning',
        'Venue scouting and booking',
        'Day-of coordination services',
        'Bridal party coordination',
        'Emergency backup planning',
        'Post-wedding cleanup coordination'
      ],
      startingPrice: '$2,500',
      packageType: 'Customizable',
      testimonial: {
        text: 'Luxe Allure made our wedding absolutely perfect. Every detail was handled with such care and professionalism.',
        client: 'Sarah & Michael Johnson'
      }
    },
    {
      id: 'corporate-events',
      title: 'Corporate Events',
      subtitle: 'Professional business events that make lasting impressions',
      description: `Elevate your corporate image with professionally managed events that engage, inspire, and deliver results. From conferences to product launches, we create memorable experiences that align with your business objectives.`,
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&crop=center',
      features: [
        'Conference and seminar planning',
        'Product launch coordination',
        'Team building events',
        'Corporate gala dinners',
        'Award ceremonies',
        'Trade show management',
        'Executive retreats',
        'Networking events'
      ],
      startingPrice: '$1,800',
      packageType: 'Scalable',
      testimonial: {
        text: 'Our annual conference was flawlessly executed. The attention to detail and professionalism exceeded our expectations.',
        client: 'Tech Innovations Inc.'
      }
    },
    {
      id: 'private-celebrations',
      title: 'Private Celebrations',
      subtitle: 'Intimate gatherings that celebrate life\'s special moments',
      description: `Create unforgettable memories with personalized celebrations tailored to your unique style. Whether it's a milestone birthday, anniversary, or family reunion, we bring your vision to life with elegance and attention to detail.`,
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop&crop=center',
      features: [
        'Birthday and anniversary parties','Family reunion coordination','Graduation celebrations','Holiday parties','Retirement celebrations','Baby showers and gender reveals','Engagement parties','Memorial services'
      ],
      startingPrice: '$800',packageType: 'Flexible',
      testimonial: {
        text: 'They turned my 50th birthday into the most magical celebration. Every guest was amazed by the beautiful details.',client: 'Jennifer Martinez'
      }
    },
    {
      id: 'entertainment-planning',title: 'Entertainment Planning',subtitle: 'Spectacular entertainment that captivates and delights',description: `Bring excitement and energy to your events with carefully curated entertainment options. From live bands to interactive experiences, we ensure your guests are engaged and entertained throughout your celebration.`,image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&crop=center',
      features: [
        'Live music and DJ services','Professional performers and artists','Interactive entertainment','Audio-visual production','Lighting design and setup','Stage and sound management','Special effects coordination','Entertainment scheduling'
      ],
      startingPrice: '$1,200',packageType: 'Modular',
      testimonial: {
        text: 'The entertainment was absolutely phenomenal! Our guests are still talking about the amazing performances.',client: 'David & Lisa Chen'
      }
    },
    {
      id: 'catering-coordination',title: 'Catering Coordination',subtitle: 'Exquisite culinary experiences that delight every palate',description: `Satisfy your guests with exceptional culinary experiences tailored to your event and dietary preferences. We coordinate with top-tier caterers to deliver memorable dining that complements your celebration perfectly.`,image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&crop=center',
      features: [
        'Menu planning and customization','Dietary restriction accommodation','Vendor selection and coordination','Service staff management','Bar and beverage coordination','Kitchen and serving logistics','Food presentation styling','Quality control and timing'
      ],
      startingPrice: '$15/person',packageType: 'Per Guest',
      testimonial: {
        text: 'The food was absolutely incredible! Every dish was perfectly prepared and beautifully presented.',client: 'Robert & Amanda Wilson'
      }
    }
  ];

  const processSteps = [
    {
      title: 'Initial Consultation',
      description: 'We start with a detailed discussion about your vision, preferences, and requirements to understand your unique needs.',
      icon: 'MessageSquare',
      duration: '1-2 hours',
      details: [
        'Vision and theme discussion',
        'Budget planning and allocation',
        'Timeline establishment',
        'Initial vendor recommendations'
      ]
    },
    {
      title: 'Planning & Design',
      description: 'Our team creates a comprehensive plan with detailed timelines, vendor selections, and design concepts.',
      icon: 'PenTool',
      duration: '2-4 weeks',
      details: [
        'Detailed event timeline creation',
        'Vendor research and selection',
        'Design concept development',
        'Contract negotiations'
      ]
    },
    {
      title: 'Coordination & Setup',
      description: 'We handle all logistics, vendor coordination, and setup to ensure everything is perfect for your event.',
      icon: 'Settings',
      duration: '1-2 days',
      details: [
        'Vendor coordination and management',
        'Setup supervision and quality control',
        'Final walkthrough and adjustments',
        'Emergency contingency activation'
      ]
    },
    {
      title: 'Event Execution',
      description: 'On the day of your event, we manage every detail so you can relax and enjoy your special celebration.',
      icon: 'Star',
      duration: 'Event day',
      details: [
        'Real-time event management',
        'Guest assistance and coordination',
        'Vendor supervision and troubleshooting',
        'Timeline adherence and adjustments'
      ]
    }
  ];

  const filterOptions = [
    { value: 'all', label: 'All Services', icon: 'Grid3X3' },
    { value: 'wedding', label: 'Weddings', icon: 'Heart' },
    { value: 'corporate', label: 'Corporate', icon: 'Briefcase' },
    { value: 'private', label: 'Private', icon: 'Users' },
    { value: 'entertainment', label: 'Entertainment', icon: 'Music' }
  ];

  const filteredServices = services.filter(service => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'wedding') return service.id === 'wedding-planning';
    if (activeFilter === 'corporate') return service.id === 'corporate-events';
    if (activeFilter === 'private') return service.id === 'private-celebrations';
    if (activeFilter === 'entertainment') return service.id.includes('entertainment') || service.id.includes('catering');
    return true;
  });

  const handleGetQuote = (service) => {
    setSelectedService(service);
    setShowQuoteForm(true);
  };

  const handleQuoteSubmit = (formData) => {
    console.log('Quote request submitted:', formData);
    // Handle form submission logic here
  };

  const handleServiceComparison = (selectedServices) => {
    console.log('Comparing services:', selectedServices);
    // Handle service comparison logic here
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Services - Luxe Allure Wedding</title>
        <meta name="description" content="Discover our comprehensive wedding and event planning services. From intimate celebrations to grand corporate events, we create unforgettable experiences." />
        <meta name="keywords" content="wedding planning, corporate events, private celebrations, entertainment planning, catering coordination" />
      </Helmet>

      <Header />
      <ContactWidget />

      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-6 lg:px-8 py-12">
          <Breadcrumb />

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Our Premium Services
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              From intimate weddings to grand corporate events, we specialize in creating unforgettable experiences that exceed expectations. Discover our comprehensive range of services designed to bring your vision to life.
            </p>
            
            {/* Service Filters */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              {filterOptions.map((option) => (
                <Button
                  key={option.value}
                  variant={activeFilter === option.value ? 'default' : 'outline'}
                  onClick={() => setActiveFilter(option.value)}
                  iconName={option.icon}
                  iconPosition="left"
                  className="transition-smooth"
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onGetQuote={handleGetQuote}
              />
            ))}
          </div>

          {/* Service Comparison */}
          <div className="mb-16">
            <ServiceComparison
              services={services}
              onCompare={handleServiceComparison}
            />
          </div>

          {/* Process Timeline */}
          <div className="mb-16">
            <ProcessTimeline
              steps={processSteps}
              title="How We Work"
            />
          </div>

          {/* Client Logos & Stats */}
          <div className="mb-16">
            <ClientLogos />
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-8 lg:p-12 text-center">
            <h2 className="font-heading font-bold text-3xl text-white mb-4">
              Ready to Start Planning?
            </h2>
            <p className="font-body text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create an unforgettable experience together. Contact us today for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => setShowQuoteForm(true)}
                iconName="MessageSquare"
                iconPosition="left"
                className="glassmorphic"
              >
                Get Free Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Call (072) 793-7010
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Quote Form Modal */}
      {showQuoteForm && (
        <QuoteForm
          selectedService={selectedService}
          onClose={() => {
            setShowQuoteForm(false);
            setSelectedService(null);
          }}
          onSubmit={handleQuoteSubmit}
        />
      )}
    </>
  );
};

export default Services;