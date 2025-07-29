import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const UrgentInquiry = () => {
  const [urgentData, setUrgentData] = useState({
    name: '',
    phone: '',
    eventDate: '',
    callbackTime: '',
    urgentMessage: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const callbackTimeOptions = [
    { value: 'asap', label: 'As soon as possible' },
    { value: 'morning', label: 'Morning (9 AM - 12 PM)' },
    { value: 'afternoon', label: 'Afternoon (12 PM - 5 PM)' },
    { value: 'evening', label: 'Evening (5 PM - 8 PM)' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUrgentData(prev => ({
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

  const handleSelectChange = (name, value) => {
    setUrgentData(prev => ({
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

  const validateUrgentForm = () => {
    const newErrors = {};

    if (!urgentData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!urgentData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!urgentData.eventDate) {
      newErrors.eventDate = 'Event date is required';
    }

    if (!urgentData.callbackTime) {
      newErrors.callbackTime = 'Please select callback time';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUrgentSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateUrgentForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setUrgentData({
        name: '',
        phone: '',
        eventDate: '',
        callbackTime: '',
        urgentMessage: ''
      });
    } catch (error) {
      console.error('Urgent form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-warning/10 border border-warning/20 rounded-xl p-6 text-center">
        <div className="w-12 h-12 bg-warning/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Clock" size={24} className="text-warning" />
        </div>
        <h3 className="font-heading text-lg font-bold text-foreground mb-2">
          Urgent Request Received
        </h3>
        <p className="font-body text-sm text-muted-foreground mb-4">
          We'll call you back within the next 2 hours during business hours.
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsSubmitted(false)}
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-warning/5 border border-warning/20 rounded-xl p-6">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 bg-warning/20 rounded-lg flex items-center justify-center">
          <Icon name="Zap" size={20} className="text-warning" />
        </div>
        <div>
          <h3 className="font-heading text-lg font-bold text-foreground">
            Urgent Inquiry
          </h3>
          <p className="font-body text-sm text-muted-foreground">
            Need immediate assistance? We'll call you back ASAP.
          </p>
        </div>
      </div>

      <form onSubmit={handleUrgentSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Your Name"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={urgentData.name}
            onChange={handleInputChange}
            error={errors.name}
            required
          />
          
          <Input
            label="Phone Number"
            type="tel"
            name="phone"
            placeholder="0712345678"
            value={urgentData.phone}
            onChange={handleInputChange}
            error={errors.phone}
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Event Date"
            type="date"
            name="eventDate"
            value={urgentData.eventDate}
            onChange={handleInputChange}
            error={errors.eventDate}
            min={new Date().toISOString().split('T')[0]}
            required
          />
          
          <Select
            label="Preferred Callback Time"
            placeholder="When should we call?"
            options={callbackTimeOptions}
            value={urgentData.callbackTime}
            onChange={(value) => handleSelectChange('callbackTime', value)}
            error={errors.callbackTime}
            required
          />
        </div>

        <div>
          <label className="block font-body font-medium text-foreground mb-2">
            Brief Message (Optional)
          </label>
          <textarea
            name="urgentMessage"
            rows={3}
            placeholder="Briefly describe your urgent requirements..."
            value={urgentData.urgentMessage}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-border rounded-lg font-body text-foreground placeholder-muted-foreground bg-input focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-smooth resize-none"
          />
        </div>

        <Button
          type="submit"
          variant="warning"
          loading={isSubmitting}
          iconName="Phone"
          iconPosition="left"
          fullWidth
        >
          {isSubmitting ? 'Submitting...' : 'Request Urgent Callback'}
        </Button>
      </form>
    </div>
  );
};

export default UrgentInquiry;