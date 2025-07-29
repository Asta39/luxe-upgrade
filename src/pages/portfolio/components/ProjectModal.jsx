import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.gallery.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto elevation-floating">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm"
        >
          <Icon name="X" size={20} />
        </Button>

        {/* Image Gallery */}
        <div className="relative aspect-[16/10] bg-muted">
          <Image
            src={project.gallery[currentImageIndex]}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
          
          {/* Navigation Arrows */}
          {project.gallery.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
              >
                <Icon name="ChevronLeft" size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
              >
                <Icon name="ChevronRight" size={20} />
              </Button>
            </>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {project.gallery.length}
          </div>
        </div>

        {/* Project Details */}
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-2">
                {project.title}
              </h2>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span className="flex items-center space-x-1">
                  <Icon name="Calendar" size={16} />
                  <span>{project.eventDate}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon name="Users" size={16} />
                  <span>{project.guestCount} Guests</span>
                </span>
                <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs">
                  {project.serviceType}
                </span>
              </div>
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-heading font-semibold text-lg mb-3 flex items-center space-x-2">
                <Icon name="Target" size={20} className="text-accent" />
                <span>Challenge</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-3 flex items-center space-x-2">
                <Icon name="CheckCircle" size={20} className="text-success" />
                <span>Solution</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Services */}
          <div className="mb-8">
            <h3 className="font-heading font-semibold text-lg mb-4">Key Services Provided</h3>
            <div className="flex flex-wrap gap-2">
              {project.keyServices.map((service, index) => (
                <span
                  key={index}
                  className="bg-muted text-foreground px-3 py-1 rounded-full text-sm"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Client Testimonial */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6 mb-8">
            <div className="flex items-start space-x-4">
              <Icon name="Quote" size={24} className="text-accent flex-shrink-0 mt-1" />
              <div>
                <p className="text-foreground italic text-lg leading-relaxed mb-4">
                  "{project.testimonial.quote}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <Icon name="User" size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{project.testimonial.client}</p>
                    <p className="text-sm text-muted-foreground">{project.testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="font-heading font-semibold text-xl mb-4">
              Ready to Create Your Perfect Event?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let us bring your vision to life with the same attention to detail and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="MessageSquare"
                iconPosition="left"
              >
                Start Planning
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
              >
                Call Us Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;