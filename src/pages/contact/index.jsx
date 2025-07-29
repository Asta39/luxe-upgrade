import React from 'react';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ContactWidget from '../../components/ui/ContactWidget';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import LocationMap from './components/LocationMap';
import UrgentInquiry from './components/UrgentInquiry';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ContactWidget />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <Breadcrumb />
            
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Let's Plan Your
                <span className="text-primary block">Perfect Event</span>
              </h1>
              <p className="font-body text-lg text-muted-foreground mb-8">
                Ready to create unforgettable memories? Get in touch with our expert team and let's bring your vision to life with elegance and precision.
              </p>
              
              {/* Quick Contact Numbers */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <a
                  href="tel:0727937010"
                  className="flex items-center space-x-3 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth hover-scale elevation-card"
                >
                  <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                    <span className="font-mono text-sm font-bold">1</span>
                  </div>
                  <span className="font-mono text-lg font-semibold">0727937010</span>
                </a>
                <a
                  href="tel:0721320787"
                  className="flex items-center space-x-3 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-smooth hover-scale elevation-card"
                >
                  <div className="w-8 h-8 bg-accent-foreground/20 rounded-full flex items-center justify-center">
                    <span className="font-mono text-sm font-bold">2</span>
                  </div>
                  <span className="font-mono text-lg font-semibold">0721320787</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Contact Form - Main Column */}
              <div className="lg:col-span-2 space-y-8">
                <ContactForm />
                
                {/* Urgent Inquiry */}
                <UrgentInquiry />
              </div>

              {/* Contact Information - Sidebar */}
              <div className="space-y-8">
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>

        {/* Location Map */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                Visit Our Studio
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                Schedule a consultation at our beautifully designed studio where we can discuss your event in detail and show you our portfolio.
              </p>
            </div>
            
            <LocationMap />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <FAQ />
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <Newsletter />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-secondary text-secondary-foreground py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                    <span className="text-white font-heading font-bold text-lg">L</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl">Luxe Allure</h3>
                    <p className="font-caption text-sm opacity-80">Wedding</p>
                  </div>
                </div>
                <p className="font-body text-secondary-foreground/80 mb-6 max-w-md">
                  Creating unforgettable moments with elegance and precision. Your dream event is our passion.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-sm">0727937010</span>
                    <span className="text-secondary-foreground/60">|</span>
                    <span className="font-mono text-sm">0721320787</span>
                  </div>
                  <p className="font-body text-sm text-secondary-foreground/80">
                    hello@luxeallure.com
                  </p>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-body font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {[
                    { label: 'Home', path: '/homepage' },
                    { label: 'Services', path: '/services' },
                    { label: 'Portfolio', path: '/portfolio' },
                    { label: 'Gallery', path: '/gallery' }
                  ].map((link) => (
                    <li key={link.path}>
                      <a
                        href={link.path}
                        className="font-body text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Services */}
              <div>
                <h4 className="font-body font-semibold mb-4">Our Services</h4>
                <ul className="space-y-2">
                  {[
                    'Wedding Planning',
                    'Corporate Events',
                    'Private Celebrations',
                    'Entertainment Planning',
                    'Catering Coordination'
                  ].map((service) => (
                    <li key={service}>
                      <span className="font-body text-sm text-secondary-foreground/80">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-secondary-foreground/20 mt-12 pt-8 text-center">
              <p className="font-body text-sm text-secondary-foreground/60">
                © {new Date().getFullYear()} Luxe Allure Wedding. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Contact;