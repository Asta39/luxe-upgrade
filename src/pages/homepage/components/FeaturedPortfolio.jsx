import React from 'react';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const FeaturedPortfolio = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Elegant Garden Wedding",
      description: "A romantic outdoor ceremony with 150 guests featuring cascading florals and ambient lighting in a historic garden venue.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
      category: "Wedding Planning",
      guests: 150,
      venue: "Historic Garden Estate"
    },
    {
      id: 2,
      title: "Corporate Product Launch",
      description: "High-profile tech product launch event with interactive displays, live demonstrations, and networking reception for 300 attendees.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
      category: "Corporate Events",
      guests: 300,
      venue: "Convention Center"
    },
    {
      id: 3,
      title: "Golden Anniversary Celebration",
      description: "Intimate 50th anniversary celebration with family and friends, featuring vintage decor and personalized touches honoring five decades of love.",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop",
      category: "Private Celebrations",
      guests: 80,
      venue: "Private Residence"
    },
    {
      id: 4,
      title: "Luxury Beach Wedding",
      description: "Sophisticated beachfront ceremony with modern tropical elements, sunset timing, and oceanview reception for an unforgettable celebration.",
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&h=400&fit=crop",
      category: "Wedding Planning",
      guests: 120,
      venue: "Beachfront Resort"
    }
  ];

  const handleViewProject = (projectId) => {
    window.location.href = `/portfolio?project=${projectId}`;
  };

  const handleViewAllPortfolio = () => {
    window.location.href = '/portfolio';
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Featured Portfolio
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our recent celebrations and see how we transform visions into unforgettable experiences. Each event is uniquely crafted with attention to every detail.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-background elevation-card rounded-lg overflow-hidden hover:elevation-floating transition-smooth hover-scale group"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Icon name="Users" size={16} className="text-accent" />
                      <span className="font-body text-sm text-muted-foreground">{project.guests} guests</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="MapPin" size={16} className="text-accent" />
                      <span className="font-body text-sm text-muted-foreground">{project.venue}</span>
                    </div>
                  </div>
                </div>

                {/* View Project Button */}
                <Button
                  variant="outline"
                  fullWidth
                  onClick={() => handleViewProject(project.id)}
                  className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-smooth"
                  iconName="Eye"
                  iconPosition="right"
                >
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Portfolio CTA */}
        <div className="text-center">
          <Button
            variant="default"
            size="lg"
            onClick={handleViewAllPortfolio}
            className="px-8"
            iconName="FolderOpen"
            iconPosition="left"
          >
            View Complete Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPortfolio;