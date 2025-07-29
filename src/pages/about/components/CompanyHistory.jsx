import React from 'react';
import Icon from '../../../components/AppIcon';

const CompanyHistory = () => {
  const milestones = [
    {
      year: '2020',
      title: 'Founded with a Dream',
      description: 'Luxe & Allure was established with a vision to transform wedding planning in Kenya, starting with intimate celebrations.',
      icon: 'Sparkles'
    },
    {
      year: '2021',
      title: 'First Major Corporate Event',
      description: 'Successfully planned our first large-scale corporate gala, expanding our services beyond weddings.',
      icon: 'Building'
    },
    {
      year: '2022',
      title: '100+ Successful Events',
      description: 'Reached the milestone of 100 successful events, establishing our reputation for excellence and reliability.',
      icon: 'Trophy'
    },
    {
      year: '2023',
      title: 'Award Recognition',
      description: 'Received "Best Wedding Planner" award from Kenyan Wedding Association for outstanding service delivery.',
      icon: 'Award'
    },
    {
      year: '2024',
      title: 'Luxury Service Expansion',
      description: 'Expanded our premium services to include entertainment planning and comprehensive catering coordination.',
      icon: 'Crown'
    }
  ];

  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
          Our Journey Through Time
        </h2>
        <p className="text-foreground/80 text-lg max-w-2xl mx-auto font-body">
          From humble beginnings to becoming a trusted name in luxury event planning, discover the milestones that shaped our story.
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-accent/30"></div>

        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className="glassmorphic p-6 rounded-xl elevation-card">
                  <div className="flex items-center space-x-3 mb-3">
                    {index % 2 === 0 ? (
                      <>
                        <span className="font-heading font-bold text-2xl text-accent">{milestone.year}</span>
                        <Icon name={milestone.icon} size={24} className="text-accent" />
                      </>
                    ) : (
                      <>
                        <Icon name={milestone.icon} size={24} className="text-accent" />
                        <span className="font-heading font-bold text-2xl text-accent">{milestone.year}</span>
                      </>
                    )}
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed font-body">
                    {milestone.description}
                  </p>
                </div>
              </div>

              {/* Timeline Node */}
              <div className="relative flex items-center justify-center w-2/12">
                <div className="w-6 h-6 bg-accent rounded-full border-4 border-background z-10"></div>
              </div>

              {/* Spacer */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;