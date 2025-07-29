import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ContactWidget from '../../components/ui/ContactWidget';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';
import CompanyIntro from './components/CompanyIntro';
import CompanyHistory from './components/CompanyHistory';
import ServicesPhilosophy from './components/ServicesPhilosophy';
import ClientStats from './components/ClientStats';
import FAQ from './components/FAQ';
import QualityCommitment from './components/QualityCommitment';

const About = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>About Us - Luxe & Allure | Our Story & Values</title>
        <meta name="description" content="Discover Luxe & Allure's story, mission, and commitment to creating extraordinary wedding and event experiences. Learn about our values and approach to luxury event planning." />
        <meta name="keywords" content="about luxe allure, wedding planner story, event planning company, luxury weddings, company values" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          <div className="container mx-auto px-6 lg:px-8 py-12">
            <Breadcrumb />
            
            {/* Page Header */}
            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Heart" size={36} className="text-accent-foreground" />
              </div>
              
              <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">
                About Luxe & Allure
              </h1>
              
              <p className="text-foreground/80 text-lg max-w-3xl mx-auto leading-relaxed font-body">
                We are passionate storytellers and dream makers, dedicated to transforming your most precious moments into unforgettable celebrations. Discover our journey, values, and commitment to excellence.
              </p>
            </div>

            {/* Company Introduction */}
            <CompanyIntro />

            {/* Company History Timeline */}
            <CompanyHistory />

            {/* Services Philosophy */}
            <ServicesPhilosophy />

            {/* Client Success Statistics */}
            <ClientStats />

            {/* FAQ Section */}
            <FAQ expandedFaq={expandedFaq} toggleFaq={toggleFaq} />

            {/* Quality Commitment */}
            <QualityCommitment />

            {/* CTA Section */}
            <div className="text-center py-16 bg-card rounded-2xl glassmorphic elevation-card">
              <div className="max-w-2xl mx-auto">
                <h2 className="font-heading font-bold text-3xl text-card-foreground mb-6">
                  Ready to Start Your Journey?
                </h2>
                <p className="text-card-foreground/80 text-lg mb-8 font-body">
                  Let's create something extraordinary together. Contact us today to begin planning your perfect celebration.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Button
                    variant="default"
                    size="lg"
                    onClick={() => window.location.href = '/contact'}
                    className="glassmorphic elevation-floating hover:elevation-card px-8 py-4"
                    iconName="MessageSquare"
                    iconPosition="left"
                  >
                    Get In Touch
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.location.href = 'tel:0727937010'}
                    className="glassmorphic px-8 py-4"
                    iconName="Phone"
                    iconPosition="left"
                  >
                    Call Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>

        <ContactWidget />
      </div>
    </>
  );
};

export default About;