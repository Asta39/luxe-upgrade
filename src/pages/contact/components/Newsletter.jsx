import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (error) {
      setError('');
    }
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError('Email address is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate newsletter subscription
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubscribed(true);
      setEmail('');
    } catch (error) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className="bg-success/10 border border-success/20 rounded-xl p-6 text-center">
        <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle" size={24} className="text-success" />
        </div>
        <h3 className="font-heading text-lg font-bold text-foreground mb-2">
          Welcome to Our Newsletter!
        </h3>
        <p className="font-body text-sm text-muted-foreground mb-4">
          Thank you for subscribing. You'll receive our latest wedding trends, tips, and exclusive offers.
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsSubscribed(false)}
        >
          Subscribe Another Email
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 rounded-xl p-6">
      <div className="text-center mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Mail" size={24} className="text-primary" />
        </div>
        <h3 className="font-heading text-xl font-bold text-foreground mb-2">
          Stay Updated
        </h3>
        <p className="font-body text-muted-foreground">
          Get the latest wedding trends, planning tips, and exclusive offers delivered to your inbox.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Email Address"
          type="email"
          placeholder="your.email@example.com"
          value={email}
          onChange={handleEmailChange}
          error={error}
          required
        />

        <Button
          type="submit"
          variant="default"
          loading={isSubmitting}
          iconName="Send"
          iconPosition="right"
          fullWidth
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'}
        </Button>
      </form>

      <div className="mt-4 text-center">
        <p className="font-body text-xs text-muted-foreground">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div className="flex flex-col items-center space-y-2">
          <Icon name="TrendingUp" size={20} className="text-accent" />
          <span className="font-body text-xs text-muted-foreground">
            Latest Trends
          </span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <Icon name="Lightbulb" size={20} className="text-accent" />
          <span className="font-body text-xs text-muted-foreground">
            Planning Tips
          </span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <Icon name="Gift" size={20} className="text-accent" />
          <span className="font-body text-xs text-muted-foreground">
            Exclusive Offers
          </span>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;