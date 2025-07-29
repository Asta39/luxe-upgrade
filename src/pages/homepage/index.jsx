import React from 'react';
import Header from '../../components/ui/Header';
import ContactWidget from '../../components/ui/ContactWidget';
import Breadcrumb from '../../components/ui/Breadcrumb';
import HeroSection from './components/HeroSection';
import ServicesOverview from './components/ServicesOverview';
import FeaturedPortfolio from './components/FeaturedPortfolio';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import NewsletterSubscription from './components/NewsletterSubscription';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ContactWidget />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 lg:px-8 pt-6">
          <Breadcrumb />
        </div>
        
        <HeroSection />
        <ServicesOverview />
        <FeaturedPortfolio />
        <TestimonialsCarousel />
        <NewsletterSubscription />
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">L</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg">Luxe Allure</h3>
                  <p className="font-caption text-xs text-secondary-foreground/70">Wedding</p>
                </div>
              </div>
              <p className="font-body text-sm text-secondary-foreground/80 leading-relaxed">
                Creating unforgettable wedding moments and premium event experiences with attention to every detail.
              </p>
              <div className="space-y-2">
                <a href="tel:0727937010" className="flex items-center space-x-2 text-sm hover:text-accent transition-smooth">
                  <span>📞</span>
                  <span>0727 937 010</span>
                </a>
                <a href="tel:0721320787" className="flex items-center space-x-2 text-sm hover:text-accent transition-smooth">
                  <span>📞</span>
                  <span>0721 320 787</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-heading font-bold text-lg">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { label: 'Home', path: '/homepage' },
                  { label: 'Services', path: '/services' },
                  { label: 'Portfolio', path: '/portfolio' },
                  { label: 'Gallery', path: '/gallery' },
                  { label: 'Testimonials', path: '/testimonials' },
                  { label: 'Contact', path: '/contact' }
                ].map((link) => (
                  <li key={link.path}>
                    <a
                      href={link.path}
                      className="font-body text-sm text-secondary-foreground/80 hover:text-accent transition-smooth"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div className="space-y-4">
              <h4 className="font-heading font-bold text-lg">Our Services</h4>
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

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="font-heading font-bold text-lg">Follow Us</h4>
              <div className="flex space-x-3">
                {[
                  { name: 'Facebook', url: 'https://facebook.com' },
                  { name: 'Instagram', url: 'https://instagram.com' },
                  { name: 'Twitter', url: 'https://twitter.com' },
                  { name: 'WhatsApp', url: 'https://wa.me/0727937010' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth"
                  >
                    <span className="text-sm font-bold">
                      {social.name.charAt(0)}
                    </span>
                  </a>
                ))}
              </div>
              <p className="font-body text-sm text-secondary-foreground/80">
                Stay connected for wedding inspiration and updates.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="font-body text-sm text-secondary-foreground/70">
              © {new Date().getFullYear()} Luxe Allure Wedding. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="font-body text-sm text-secondary-foreground/70 hover:text-accent transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="font-body text-sm text-secondary-foreground/70 hover:text-accent transition-smooth">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;