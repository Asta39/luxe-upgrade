import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { label: 'Home', path: '/homepage', icon: 'Home' },
    { label: 'Services', path: '/services', icon: 'Briefcase' },
    { label: 'About', path: '/about', icon: 'User' },
    { label: 'Gallery', path: '/gallery', icon: 'Image' },
    { label: 'Testimonials', path: '/testimonials', icon: 'MessageSquare' },
    { label: 'Contact', path: '/contact', icon: 'Phone' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook', url: 'https://facebook.com' },
    { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com' },
    { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? 'glassmorphic elevation-card' : 'bg-background/95'
      }`}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => handleNavigation('/homepage')}
                className="flex items-center space-x-3 group transition-smooth"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-105 transition-smooth">
                  <Icon name="Heart" size={24} color="white" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="font-heading font-bold text-xl text-foreground">
                    Luxe Allure
                  </h1>
                  <p className="font-caption text-xs text-muted-foreground -mt-1">
                    Wedding
                  </p>
                </div>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`font-body font-medium text-sm px-4 py-2 rounded-lg transition-smooth hover-scale ${
                    isActivePath(item.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:text-primary hover:bg-muted'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Social Links & Contact - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-primary transition-smooth hover-scale"
                    aria-label={social.name}
                  >
                    <Icon name={social.icon} size={18} />
                  </a>
                ))}
              </div>
              <div className="w-px h-6 bg-border mx-2"></div>
              <a
                href="tel:+1234567890"
                className="font-mono text-sm text-primary hover:text-accent transition-smooth"
              >
                (123) 456-7890
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-3">
              <a
                href="tel:+1234567890"
                className="font-mono text-sm text-primary"
              >
                <Icon name="Phone" size={20} />
              </a>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className="text-foreground"
              >
                <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={toggleMobileMenu}></div>
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background elevation-floating animate-slide-in">
            <div className="p-6 pt-24">
              <nav className="space-y-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleNavigation(item.path)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-smooth hover-scale ${
                      isActivePath(item.path)
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    <Icon name={item.icon} size={20} />
                    <span className="font-body font-medium">{item.label}</span>
                  </button>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-muted rounded-lg text-muted-foreground hover:text-primary hover:bg-accent/10 transition-smooth hover-scale"
                      aria-label={social.name}
                    >
                      <Icon name={social.icon} size={20} />
                    </a>
                  ))}
                </div>
                <div className="text-center">
                  <a
                    href="tel:+1234567890"
                    className="inline-flex items-center space-x-2 font-mono text-primary hover:text-accent transition-smooth"
                  >
                    <Icon name="Phone" size={18} />
                    <span>(123) 456-7890</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;