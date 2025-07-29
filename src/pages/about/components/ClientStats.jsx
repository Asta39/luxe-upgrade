import React from 'react';
import Icon from '../../../components/AppIcon';

const ClientStats = () => {
  const stats = [
    {
      icon: 'Heart',
      number: '500+',
      label: 'Happy Couples',
      description: 'Weddings planned with love and precision'
    },
    {
      icon: 'Calendar',
      number: '800+',
      label: 'Events Managed',
      description: 'Successful celebrations across all categories'
    },
    {
      icon: 'Star',
      number: '4.9/5',
      label: 'Client Rating',
      description: 'Average satisfaction score from reviews'
    },
    {
      icon: 'Clock',
      number: '5',
      label: 'Years Experience',
      description: 'Dedicated to excellence in event planning'
    },
    {
      icon: 'Award',
      number: '15+',
      label: 'Industry Awards',
      description: 'Recognition for outstanding service delivery'
    },
    {
      icon: 'MapPin',
      number: '50+',
      label: 'Venues Partnered',
      description: 'Premium locations across Kenya'
    }
  ];

  const awards = [
    {
      year: '2024',
      title: 'Best Wedding Planner of the Year',
      organization: 'Kenyan Wedding Association'
    },
    {
      year: '2023',
      title: 'Excellence in Corporate Events',
      organization: 'Events Industry Kenya'
    },
    {
      year: '2023',
      title: 'Customer Service Excellence',
      organization: 'Kenya Service Awards'
    },
    {
      year: '2022',
      title: 'Innovation in Event Design',
      organization: 'African Events Council'
    }
  ];

  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
          Our Success Story in Numbers
        </h2>
        <p className="text-foreground/80 text-lg max-w-2xl mx-auto font-body">
          These achievements reflect our commitment to excellence and the trust our clients place in us.
        </p>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="glassmorphic p-6 rounded-xl elevation-card text-center hover:elevation-floating transition-smooth">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name={stat.icon} size={24} className="text-accent-foreground" />
            </div>
            <div className="font-heading font-bold text-2xl text-foreground mb-2">
              {stat.number}
            </div>
            <div className="font-heading font-semibold text-sm text-foreground mb-2">
              {stat.label}
            </div>
            <div className="text-foreground/70 text-xs font-body">
              {stat.description}
            </div>
          </div>
        ))}
      </div>

      {/* Awards Section */}
      <div className="glassmorphic p-8 rounded-2xl elevation-card">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Trophy" size={32} className="text-accent-foreground" />
          </div>
          <h3 className="font-heading font-bold text-2xl text-foreground mb-2">
            Industry Recognition
          </h3>
          <p className="text-foreground/80 font-body">
            Our commitment to excellence has been recognized by leading industry organizations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 bg-background/10 rounded-lg">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="font-heading font-bold text-accent text-sm">{award.year}</span>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-1">
                  {award.title}
                </h4>
                <p className="text-foreground/70 text-sm font-body">
                  {award.organization}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientStats;