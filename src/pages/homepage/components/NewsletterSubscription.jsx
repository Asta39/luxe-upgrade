import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail('');
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <section className="py-16 lg:py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={32} className="text-primary" />
            </div>
            <h2 className="font-heading font-bold text-2xl lg:text-3xl text-white mb-4">
              Thank You for Subscribing!
            </h2>
            <p className="font-body text-lg text-white/90 mb-8">
              You'll receive our latest wedding inspiration, planning tips, and exclusive offers directly in your inbox.
            </p>
            <Button
              variant="outline"
              onClick={() => setIsSubscribed(false)}
              className="bg-white text-primary border-white hover:bg-white/90"
            >
              Subscribe Another Email
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl text-white mb-4">
              Stay Inspired with Wedding Ideas
            </h2>
            <p className="font-body text-lg text-white/90">
              Get exclusive wedding planning tips, latest trends, and special offers delivered to your inbox. Join our community of couples planning their perfect day.
            </p>
          </div>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={handleEmailChange}
                  error={error}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  required
                />
              </div>
              <Button
                type="submit"
                variant="secondary"
                loading={isLoading}
                className="bg-white text-primary hover:bg-white/90 px-8"
                iconName="Mail"
                iconPosition="left"
              >
                Subscribe
              </Button>
            </div>
          </form>

          {/* Benefits */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col items-center space-y-2">
              <Icon name="Lightbulb" size={24} className="text-white/80" />
              <span className="font-body text-sm text-white/80">Planning Tips</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Icon name="TrendingUp" size={24} className="text-white/80" />
              <span className="font-body text-sm text-white/80">Latest Trends</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Icon name="Gift" size={24} className="text-white/80" />
              <span className="font-body text-sm text-white/80">Exclusive Offers</span>
            </div>
          </div>

          {/* Privacy Note */}
          <p className="font-body text-xs text-white/70 mt-6">
            We respect your privacy. Unsubscribe at any time. No spam, just valuable wedding content.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;