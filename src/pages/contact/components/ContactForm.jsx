import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    preferredDate: '',
    guestCount: '',
    budgetRange: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const eventTypeOptions = [
    { value: 'wedding', label: 'Wedding Ceremony' },
    { value: 'corporate', label: 'Corporate Event' },
    { value: 'private', label: 'Private Celebration' },
    { value: 'entertainment', label: 'Entertainment Planning' },
    { value: 'catering', label: 'Catering Coordination' }
  ];

  const budgetRangeOptions = [
    { value: 'under-50k', label: 'Under KSh 50,000' },
    { value: '50k-100k', label: 'KSh 50,000 - 100,000' },
    { value: '100k-250k', label: 'KSh 100,000 - 250,000' },
    { value: '250k-500k', label: 'KSh 250,000 - 500,000' },
    { value: 'above-500k', label: 'Above KSh 500,000' }
  ];

  const guestCountOptions = [
    { value: '1-50', label: '1-50 guests' },
    { value: '51-100', label: '51-100 guests' },
    { value: '101-200', label: '101-200 guests' },
    { value: '201-300', label: '201-300 guests' },
    { value: '300+', label: '300+ guests' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.eventType) {
      newErrors.eventType = 'Please select an event type';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        preferredDate: '',
        guestCount: '',
        budgetRange: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="glassmorphic rounded-xl p-6 lg:p-8 elevation-card text-center">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle" size={32} className="text-success" />
        </div>
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
          Thank You!
        </h2>
        <p className="font-body text-muted-foreground mb-6">
          Your inquiry has been received successfully. Our team will contact you within 24 hours to discuss your event requirements.
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSubmitted(false)}
          className="mx-auto"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="glassmorphic rounded-xl p-6 lg:p-8 elevation-card">
      <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
        Plan Your Perfect Event
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleInputChange}
            error={errors.name}
            required
          />
          
          <Input
            label="Email Address"
            type="email"
            name="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Phone Number"
            type="tel"
            name="phone"
            placeholder="0712345678"
            value={formData.phone}
            onChange={handleInputChange}
            error={errors.phone}
            required
          />
          
          <Select
            label="Event Type"
            placeholder="Select event type"
            options={eventTypeOptions}
            value={formData.eventType}
            onChange={(value) => handleSelectChange('eventType', value)}
            error={errors.eventType}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Input
            label="Preferred Date"
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleInputChange}
            min={new Date().toISOString().split('T')[0]}
          />
          
          <Select
            label="Estimated Guest Count"
            placeholder="Select guest count"
            options={guestCountOptions}
            value={formData.guestCount}
            onChange={(value) => handleSelectChange('guestCount', value)}
          />
          
          <Select
            label="Budget Range"
            placeholder="Select budget range"
            options={budgetRangeOptions}
            value={formData.budgetRange}
            onChange={(value) => handleSelectChange('budgetRange', value)}
          />
        </div>

        <div>
          <label className="block font-body font-medium text-foreground mb-2">
            Tell us about your event <span className="text-destructive">*</span>
          </label>
          <textarea
            name="message"
            rows={5}
            placeholder="Describe your vision, special requirements, or any questions you have..."
            value={formData.message}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg font-body text-foreground placeholder-muted-foreground bg-input focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-smooth resize-none ${
              errors.message ? 'border-destructive' : 'border-border'
            }`}
            required
          />
          {errors.message && (
            <p className="mt-1 text-sm text-destructive">{errors.message}</p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button
            type="submit"
            variant="default"
            loading={isSubmitting}
            iconName="Send"
            iconPosition="right"
            className="flex-1"
          >
            {isSubmitting ? 'Sending...' : 'Send Inquiry'}
          </Button>
          
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setFormData({
                name: '',
                email: '',
                phone: '',
                eventType: '',
                preferredDate: '',
                guestCount: '',
                budgetRange: '',
                message: ''
              });
              setErrors({});
            }}
            iconName="RotateCcw"
            iconPosition="left"
          >
            Reset Form
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;