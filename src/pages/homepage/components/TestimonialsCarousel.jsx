import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah & Michael Johnson",
      event: "Wedding Celebration",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content: `Luxe Allure made our wedding day absolutely perfect! From the initial consultation to the last dance, every detail was flawlessly executed. The team's attention to detail and professionalism exceeded our expectations. Our guests are still talking about how beautiful everything was.`,
      date: "June 2024"
    },
    {
      id: 2,
      name: "Jennifer Martinez",
      event: "Corporate Product Launch",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: `The team delivered an exceptional corporate event that perfectly represented our brand. The coordination was seamless, and the attention to detail was remarkable. Our product launch was a huge success, and we received countless compliments from attendees and stakeholders.`,
      date: "May 2024"
    },
    {
      id: 3,
      name: "Robert & Linda Thompson",
      event: "50th Anniversary Celebration",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: `Our golden anniversary celebration was everything we dreamed of and more. The team understood our vision perfectly and created such a warm, intimate atmosphere. All our family and friends felt the love and care that went into every aspect of the celebration.`,
      date: "April 2024"
    },
    {
      id: 4,
      name: "Amanda Chen",
      event: "Birthday Celebration",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      content: `My 30th birthday party was absolutely incredible! The team transformed the venue into a magical space that perfectly captured my personality. Every guest had an amazing time, and the entertainment was spot-on. Thank you for making my milestone birthday so special!`,
      date: "March 2024"
    },
    {
      id: 5,
      name: "David & Emma Wilson",
      event: "Garden Wedding",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: `Our outdoor wedding was a dream come true thanks to Luxe Allure. Despite some weather concerns, the team had everything perfectly planned with backup options. The floral arrangements were stunning, and the coordination on the day was flawless. Highly recommended!`,
      date: "July 2024"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? "text-accent fill-current" : "text-muted-foreground"}
      />
    ));
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our happy clients have to say about their experience with Luxe Allure Wedding.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-card elevation-card rounded-lg p-8 lg:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <Icon name="Quote" size={128} className="text-primary" />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              {/* Rating */}
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center space-x-1">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-center mb-8">
                <p className="font-body text-lg lg:text-xl text-foreground leading-relaxed italic">
                  "{testimonials[currentIndex].content}"
                </p>
              </blockquote>

              {/* Client Info */}
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 rounded-full overflow-hidden elevation-card">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h4 className="font-heading font-bold text-lg text-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="font-body text-muted-foreground">
                    {testimonials[currentIndex].event}
                  </p>
                  <p className="font-mono text-sm text-muted-foreground mt-1">
                    {testimonials[currentIndex].date}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 lg:-left-16">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full glassmorphic elevation-floating hover:elevation-card"
            >
              <Icon name="ChevronLeft" size={20} />
            </Button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4 lg:-right-16">
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="w-12 h-12 rounded-full glassmorphic elevation-floating hover:elevation-card"
            >
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-smooth ${
                  index === currentIndex
                    ? 'bg-primary' :'bg-muted-foreground hover:bg-primary/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Testimonials CTA */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.location.href = '/testimonials'}
            className="px-8"
            iconName="MessageSquare"
            iconPosition="left"
          >
            View All Reviews
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;