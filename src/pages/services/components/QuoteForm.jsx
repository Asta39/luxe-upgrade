import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Button from '../../../components/ui/Button';

const QuoteForm = ({ selectedService, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: selectedService?.id || '',
    guestCount: '',
    budget: '',
    venue: '',
    additionalServices: [],
    message: '',
    contactPreference: 'phone'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    { value: 'wedding-planning', label: 'Wedding Planning' },
    { value: 'corporate-events', label: 'Corporate Events' },
    { value: 'private-celebrations', label: 'Private Celebrations' },
    { value: 'entertainment-planning', label: 'Entertainment Planning' },
    { value: 'catering-coordination', label: 'Catering Coordination' }
  ];

  const budgetOptions = [
    { value: 'under-10k', label: 'Under $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: 'over-100k', label: 'Over $100,000' }
  ];

  const guestCountOptions = [
    { value: 'under-50', label: 'Under 50 guests' },
    { value: '50-100', label: '50-100 guests' },
    { value: '100-200', label: '100-200 guests' },
    { value: '200-300', label: '200-300 guests' },
    { value: 'over-300', label: 'Over 300 guests' }
  ];

  const additionalServiceOptions = [
    { value: 'photography', label: 'Photography & Videography' },
    { value: 'flowers', label: 'Floral Arrangements' },
    { value: 'music', label: 'Music & Entertainment' },
    { value: 'transportation', label: 'Transportation' },
    { value: 'accommodation', label: 'Guest Accommodation' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleAdditionalServiceToggle = (service) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(service)
        ? prev.additionalServices.filter(s => s !== service)
        : [...prev.additionalServices, service]
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.eventDate) newErrors.eventDate = 'Event date is required';
    if (!formData.eventType) newErrors.eventType = 'Event type is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      onSubmit(formData);
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-background rounded-xl elevation-floating max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-background border-b border-border p-6 rounded-t-xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-heading font-bold text-2xl text-foreground">
                Request Quote
              </h2>
              <p className="font-body text-muted-foreground mt-1">
                {selectedService ? `For ${selectedService.title}` : 'Tell us about your event'}
              </p>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <Icon name="X" size={24} />
            </Button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Full Name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              error={errors.name}
              placeholder="Enter your full name"
            />
            <Input
              label="Email Address"
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              error={errors.email}
              placeholder="your@email.com"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Phone Number"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              error={errors.phone}
              placeholder="(123) 456-7890"
            />
            <Input
              label="Event Date"
              type="date"
              required
              value={formData.eventDate}
              onChange={(e) => handleInputChange('eventDate', e.target.value)}
              error={errors.eventDate}
            />
          </div>

          {/* Event Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              label="Event Type"
              required
              options={serviceOptions}
              value={formData.eventType}
              onChange={(value) => handleInputChange('eventType', value)}
              error={errors.eventType}
              placeholder="Select event type"
            />
            <Select
              label="Expected Guest Count"
              options={guestCountOptions}
              value={formData.guestCount}
              onChange={(value) => handleInputChange('guestCount', value)}
              placeholder="Select guest count"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              label="Budget Range"
              options={budgetOptions}
              value={formData.budget}
              onChange={(value) => handleInputChange('budget', value)}
              placeholder="Select budget range"
            />
            <Input
              label="Venue (if known)"
              type="text"
              value={formData.venue}
              onChange={(e) => handleInputChange('venue', e.target.value)}
              placeholder="Venue name or location"
            />
          </div>

          {/* Additional Services */}
          <div>
            <label className="font-body font-medium text-foreground mb-3 block">
              Additional Services Needed
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {additionalServiceOptions.map((service) => (
                <Checkbox
                  key={service.value}
                  label={service.label}
                  checked={formData.additionalServices.includes(service.value)}
                  onChange={() => handleAdditionalServiceToggle(service.value)}
                />
              ))}
            </div>
          </div>

          {/* Contact Preference */}
          <div>
            <label className="font-body font-medium text-foreground mb-3 block">
              Preferred Contact Method
            </label>
            <div className="flex space-x-6">
              <Checkbox
                label="Phone Call"
                checked={formData.contactPreference === 'phone'}
                onChange={() => handleInputChange('contactPreference', 'phone')}
              />
              <Checkbox
                label="Email"
                checked={formData.contactPreference === 'email'}
                onChange={() => handleInputChange('contactPreference', 'email')}
              />
              <Checkbox
                label="WhatsApp"
                checked={formData.contactPreference === 'whatsapp'}
                onChange={() => handleInputChange('contactPreference', 'whatsapp')}
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="font-body font-medium text-foreground mb-2 block">
              Additional Details
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Tell us more about your vision, special requirements, or any questions you have..."
              rows={4}
              className="w-full px-4 py-3 border border-border rounded-lg font-body text-foreground bg-input focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="submit"
              variant="default"
              loading={isSubmitting}
              className="flex-1 glassmorphic"
              iconName="Send"
              iconPosition="left"
            >
              {isSubmitting ? 'Sending Quote Request...' : 'Send Quote Request'}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
              className="sm:w-auto"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;