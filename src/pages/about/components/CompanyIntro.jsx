import React from 'react';
import Icon from '../../../components/AppIcon';

const CompanyIntro = () => {
  return (
    <section className="mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8">
          <div>
            <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
              Our Mission & Vision
            </h2>
            <div className="space-y-6">
              <div className="glassmorphic p-6 rounded-xl elevation-card">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Target" size={24} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-3">Mission</h3>
                    <p className="text-foreground/80 leading-relaxed font-body">
                      To create extraordinary celebrations that reflect each client's unique story, delivering flawless execution with personalized attention to every detail that matters most.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glassmorphic p-6 rounded-xl elevation-card">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Eye" size={24} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-3">Vision</h3>
                    <p className="text-foreground/80 leading-relaxed font-body">
                      To be the premier luxury event planning company, recognized for transforming dreams into reality through innovative design and exceptional service excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <h3 className="font-heading font-bold text-2xl text-foreground mb-6">Our Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: 'Heart', title: 'Passion', desc: 'We pour our heart into every celebration' },
                { icon: 'Shield', title: 'Excellence', desc: 'Unwavering commitment to quality' },
                { icon: 'Users', title: 'Partnership', desc: 'Building lasting relationships with clients' },
                { icon: 'Sparkles', title: 'Innovation', desc: 'Creative solutions for unique experiences' }
              ].map((value, index) => (
                <div key={index} className="glassmorphic p-4 rounded-lg elevation-card">
                  <div className="flex items-center space-x-3 mb-2">
                    <Icon name={value.icon} size={20} className="text-accent" />
                    <h4 className="font-heading font-semibold text-foreground">{value.title}</h4>
                  </div>
                  <p className="text-foreground/70 text-sm font-body">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="glassmorphic p-8 rounded-2xl elevation-floating">
            <img
              src="/assets/images/image-1753788086695.png"
              alt="Luxe & Allure Brand"
              className="w-full h-auto rounded-xl"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center elevation-floating">
            <Icon name="Award" size={36} className="text-accent-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;