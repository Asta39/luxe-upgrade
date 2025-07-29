import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ContactWidget from '../../components/ui/ContactWidget';
import TestimonialCard from './components/TestimonialCard';
import VideoTestimonial from './components/VideoTestimonial';
import RatingOverview from './components/RatingOverview';
import TestimonialFilters from './components/TestimonialFilters';
import TestimonialCTA from './components/TestimonialCTA';
import ExternalReviewLinks from './components/ExternalReviewLinks';

const TestimonialsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeRating, setActiveRating] = useState('all');

  // Mock testimonials data
  const testimonials = [
    {
      id: 1,
      clientName: "Sarah & Michael Johnson",
      clientPhoto: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      eventType: "Wedding",
      eventDate: "June 15, 2024",
      location: "Nairobi, Kenya",
      serviceCategory: "wedding-planning",
      isVerified: true,
      content: `Luxe Allure made our dream wedding come true! From the initial consultation to the last dance, every detail was perfectly executed. The team's attention to detail and professionalism exceeded our expectations. Our guests are still talking about how beautiful everything was.`
    },
    {
      id: 2,
      clientName: "David Kimani",
      clientPhoto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      eventType: "Corporate Event",
      eventDate: "March 22, 2024",
      location: "Mombasa, Kenya",
      serviceCategory: "corporate-events",
      isVerified: true,
      content: `Outstanding service for our annual company retreat. The team handled everything seamlessly - from venue selection to catering coordination. The event was a huge success and our employees loved every moment. Highly recommend for corporate events.`
    },
    {
      id: 3,
      clientName: "Grace Wanjiku",
      clientPhoto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      eventType: "Birthday Celebration",
      eventDate: "January 10, 2024",
      location: "Kisumu, Kenya",
      serviceCategory: "private-celebrations",
      isVerified: true,
      content: `My 50th birthday party was absolutely magical thanks to Luxe Allure. They transformed the venue into something spectacular and managed every detail flawlessly. The entertainment was perfect and the catering was exceptional. Thank you for making my milestone birthday unforgettable!`
    },
    {
      id: 4,
      clientName: "James & Mary Ochieng",
      clientPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      eventType: "Wedding",
      eventDate: "September 8, 2024",
      location: "Nakuru, Kenya",
      serviceCategory: "wedding-planning",
      isVerified: true,
      content: `We cannot thank Luxe Allure enough for making our wedding day perfect. The coordination was flawless, the decorations were stunning, and every guest commented on how well-organized everything was. The team went above and beyond our expectations.`
    },
    {
      id: 5,
      clientName: "Patricia Muthoni",
      clientPhoto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 4,
      eventType: "Anniversary Party",
      eventDate: "November 20, 2024",
      location: "Eldoret, Kenya",
      serviceCategory: "private-celebrations",
      isVerified: true,
      content: `Luxe Allure helped us celebrate our 25th wedding anniversary in style. The team was professional, creative, and attentive to our needs. The venue decoration was beautiful and the entertainment was spot-on. A wonderful experience overall.`
    },
    {
      id: 6,
      clientName: "Robert Kiprotich",
      clientPhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      eventType: "Product Launch",
      eventDate: "August 14, 2024",
      location: "Nairobi, Kenya",
      serviceCategory: "corporate-events",
      isVerified: true,
      content: `Exceptional service for our product launch event. The team understood our brand vision perfectly and executed everything with precision. The event was a huge success and helped us make a great impression on our clients and partners.`
    },
    {
      id: 7,
      clientName: "Lucy & Peter Kamau",
      clientPhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      eventType: "Wedding",
      eventDate: "December 2, 2024",
      location: "Thika, Kenya",
      serviceCategory: "wedding-planning",
      isVerified: true,
      content: `Our wedding was absolutely perfect thanks to Luxe Allure. The team handled every detail with care and professionalism. From the beautiful decorations to the smooth coordination, everything exceeded our expectations. Our guests are still talking about it!`
    },
    {
      id: 8,
      clientName: "Elizabeth Nyong\'o",
      clientPhoto: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      rating: 4,
      eventType: "Graduation Party",
      eventDate: "July 28, 2024",
      location: "Machakos, Kenya",
      serviceCategory: "private-celebrations",
      isVerified: true,
      content: `Great experience with Luxe Allure for my daughter's graduation party. The team was responsive, creative, and delivered exactly what we envisioned. The catering was excellent and the entertainment kept everyone engaged throughout the event.`
    }
  ];

  // Mock video testimonials data
  const videoTestimonials = [
    {
      id: 1,
      clientName: "Jennifer & Mark Wilson",
      clientPhoto: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
      thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=225&fit=crop",
      duration: "2:34",
      eventType: "Wedding",
      eventDate: "October 15, 2024",
      description: "Jennifer and Mark share their amazing wedding experience with Luxe Allure and how the team made their special day unforgettable."
    },
    {
      id: 2,
      clientName: "Corporate Client - TechCorp",
      clientPhoto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=225&fit=crop",
      duration: "1:45",
      eventType: "Corporate Event",
      eventDate: "September 30, 2024",
      description: "TechCorp\'s CEO discusses how Luxe Allure delivered an exceptional corporate event that impressed clients and employees alike."
    }
  ];

  // Service categories for filtering
  const categories = [
    { value: 'all', label: 'All Services' },
    { value: 'wedding-planning', label: 'Wedding Planning' },
    { value: 'corporate-events', label: 'Corporate Events' },
    { value: 'private-celebrations', label: 'Private Celebrations' },
    { value: 'entertainment-planning', label: 'Entertainment Planning' }
  ];

  // Calculate testimonial counts by category
  const testimonialCounts = useMemo(() => {
    const counts = { all: testimonials.length };
    categories.forEach(category => {
      if (category.value !== 'all') {
        counts[category.value] = testimonials.filter(t => t.serviceCategory === category.value).length;
      }
    });
    return counts;
  }, [testimonials]);

  // Filter testimonials based on active filters
  const filteredTestimonials = useMemo(() => {
    return testimonials.filter(testimonial => {
      const categoryMatch = activeCategory === 'all' || testimonial.serviceCategory === activeCategory;
      const ratingMatch = activeRating === 'all' || 
        (activeRating === '5' && testimonial.rating === 5) ||
        (activeRating === '4' && testimonial.rating >= 4) ||
        (activeRating === '3' && testimonial.rating >= 3);
      
      return categoryMatch && ratingMatch;
    });
  }, [testimonials, activeCategory, activeRating]);

  // Calculate overall rating and breakdown
  const overallRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;
  const categoryBreakdown = [
    { name: '5 Stars', count: testimonials.filter(t => t.rating === 5).length },
    { name: '4 Stars', count: testimonials.filter(t => t.rating === 4).length },
    { name: '3 Stars', count: testimonials.filter(t => t.rating === 3).length },
    { name: '2 Stars', count: testimonials.filter(t => t.rating === 2).length },
    { name: '1 Star', count: testimonials.filter(t => t.rating === 1).length }
  ].filter(category => category.count > 0);

  return (
    <>
      <Helmet>
        <title>Client Testimonials - Luxe Allure Wedding</title>
        <meta name="description" content="Read authentic reviews from our satisfied clients. Discover why couples and event planners choose Luxe Allure for their special celebrations." />
        <meta name="keywords" content="wedding testimonials, client reviews, event planning reviews, Luxe Allure reviews, wedding planner testimonials" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          <div className="container mx-auto px-6 lg:px-8 py-12">
            <Breadcrumb />
            
            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                Client Testimonials
              </h1>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Discover what our clients say about their experience with Luxe Allure. 
                Every review represents a celebration made perfect and memories created to last a lifetime.
              </p>
            </div>

            {/* Rating Overview */}
            <RatingOverview 
              overallRating={overallRating}
              totalReviews={testimonials.length}
              categoryBreakdown={categoryBreakdown}
            />

            {/* External Review Links */}
            <ExternalReviewLinks />

            {/* Filters */}
            <TestimonialFilters
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              activeRating={activeRating}
              onRatingChange={setActiveRating}
              categories={categories}
              testimonialCounts={testimonialCounts}
            />

            {/* Video Testimonials Section */}
            {videoTestimonials.length > 0 && (
              <div className="mb-12">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Video Testimonials
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {videoTestimonials.map((video) => (
                    <VideoTestimonial key={video.id} video={video} />
                  ))}
                </div>
              </div>
            )}

            {/* Testimonials Grid */}
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Client Reviews ({filteredTestimonials.length})
                </h2>
              </div>

              {filteredTestimonials.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredTestimonials.map((testimonial, index) => (
                    <React.Fragment key={testimonial.id}>
                      <TestimonialCard testimonial={testimonial} />
                      
                      {/* Insert CTA every 5 testimonials */}
                      {(index + 1) % 5 === 0 && index < filteredTestimonials.length - 1 && (
                        <div className="md:col-span-2">
                          <TestimonialCTA />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="font-body text-muted-foreground">
                    No testimonials found matching your current filters.
                  </p>
                </div>
              )}
            </div>

            {/* Final CTA */}
            <TestimonialCTA />
          </div>
        </main>

        <ContactWidget />
      </div>
    </>
  );
};

export default TestimonialsPage;