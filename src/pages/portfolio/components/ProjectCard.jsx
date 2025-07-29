import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-card rounded-xl overflow-hidden elevation-card hover:elevation-floating transition-smooth cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onViewDetails(project)}
    >
      {/* Project Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        
        {/* Overlay on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-smooth ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                {project.guestCount} Guests
              </span>
              <span className="text-sm font-medium bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                {project.eventDate}
              </span>
            </div>
            <p className="text-sm opacity-90 line-clamp-2">
              {project.keyServices.join(' • ')}
            </p>
          </div>
        </div>

        {/* Service Type Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
            {project.serviceType}
          </span>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6">
        <h3 className="font-heading font-semibold text-lg text-foreground mb-2 line-clamp-1">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Client Testimonial */}
        <div className="bg-muted rounded-lg p-4 mb-4">
          <div className="flex items-start space-x-3">
            <Icon name="Quote" size={16} className="text-accent mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm text-foreground italic line-clamp-2">
                "{project.testimonial.quote}"
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                - {project.testimonial.client}
              </p>
            </div>
          </div>
        </div>

        {/* View Details Button */}
        <Button
          variant="outline"
          size="sm"
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
          iconName="ArrowRight"
          iconPosition="right"
          iconSize={16}
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;