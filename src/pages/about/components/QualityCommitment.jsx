import React from 'react';
import Icon from '../../../components/AppIcon';

const QualityCommitment = () => {
  const commitments = [
    {
      icon: 'Shield',
      title: 'Quality Assurance',
      description: 'Every aspect of your event is carefully planned and executed to our highest standards. We conduct thorough quality checks at every stage of the planning process.',
      features: ['Detailed planning checklists', 'Vendor quality verification', 'Regular progress reviews', 'Backup contingency plans']
    },
    {
      icon: 'Leaf',
      title: 'Sustainability Focus',
      description: 'We are committed to environmentally responsible event planning, partnering with eco-conscious vendors and implementing sustainable practices wherever possible.',
      features: ['Eco-friendly vendor selection', 'Waste reduction strategies', 'Sustainable decoration options', 'Digital planning tools']
    },
    {
      icon: 'Heart',
      title: 'Client Satisfaction',
      description: 'Your happiness is our priority. We maintain open communication, provide regular updates, and ensure you feel supported throughout the entire planning journey.',
      features: ['24/7 communication support', 'Regular planning meetings', 'Transparent progress tracking', 'Post-event follow-up']
    }
  ];

  const guarantees = [
    'Transparent pricing with no hidden costs',
    'Dedicated planning team for your event',
    'Comprehensive insurance coverage',
    'Emergency response protocols',
    'Post-event satisfaction survey',
    'Complimentary follow-up consultation'
  ];

  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
          Our Commitment to Excellence
        </h2>
        <p className="text-foreground/80 text-lg max-w-3xl mx-auto font-body">
          We stand behind our work with comprehensive quality commitments that ensure your complete satisfaction and peace of mind.
        </p>
      </div>

      {/* Main Commitments */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {commitments.map((commitment, index) => (
          <div key={index} className="glassmorphic p-8 rounded-xl elevation-card">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={commitment.icon} size={32} className="text-accent-foreground" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                {commitment.title}
              </h3>
            </div>
            
            <p className="text-foreground/80 leading-relaxed mb-6 font-body">
              {commitment.description}
            </p>

            <div className="space-y-3">
              {commitment.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-accent flex-shrink-0" />
                  <span className="text-foreground/70 text-sm font-body">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Service Guarantees */}
      <div className="glassmorphic p-8 rounded-2xl elevation-card">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="BadgeCheck" size={32} className="text-accent-foreground" />
          </div>
          <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
            Our Service Guarantees
          </h3>
          <p className="text-foreground/80 font-body max-w-2xl mx-auto">
            These commitments represent our promise to you and reflect the standards we maintain for every event we plan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="flex items-center space-x-3 p-4 bg-background/10 rounded-lg">
              <Icon name="Shield" size={20} className="text-accent flex-shrink-0" />
              <span className="text-foreground font-body">{guarantee}</span>
            </div>
          ))}
        </div>

        {/* Contact for More Info */}
        <div className="mt-8 pt-8 border-t border-foreground/10 text-center">
          <p className="text-foreground/80 mb-4 font-body">
            Want to learn more about our quality standards and processes?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-smooth font-body"
          >
            <Icon name="ExternalLink" size={20} />
            <span>Contact us for detailed information</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default QualityCommitment;