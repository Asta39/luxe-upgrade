import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ContactWidget from '../../components/ui/ContactWidget';
import ProjectCard from './components/ProjectCard';
import FilterChips from './components/FilterChips';
import ProjectModal from './components/ProjectModal';
import CTASection from './components/CTASection';
import SkeletonCard from './components/SkeletonCard';
import Icon from '../../components/AppIcon';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Mock data for portfolio projects
  const portfolioProjects = [
    {
      id: 1,
      title: "Elegant Garden Wedding - Sarah & Michael",
      serviceType: "Wedding Planning",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
      description: "A romantic outdoor ceremony featuring cascading florals, string lights, and a reception under the stars with 150 guests.",
      eventDate: "June 15, 2024",
      guestCount: 150,
      keyServices: ["Full Wedding Planning", "Floral Design", "Venue Coordination", "Catering Management"],
      testimonial: {
        quote: "Luxe Allure made our dream wedding come true. Every detail was perfect, from the ceremony to the last dance.",
        client: "Sarah & Michael Thompson",
        role: "Bride & Groom"
      },
      challenge: `The couple wanted an outdoor garden wedding but were concerned about weather contingencies and creating an intimate atmosphere for 150 guests in a large venue space.`,
      solution: `We designed a stunning tent structure with transparent panels, created intimate seating clusters, and developed a comprehensive weather backup plan that maintained the garden aesthetic indoors if needed.`,
      gallery: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 2,
      title: "Corporate Annual Gala - TechCorp Industries",
      serviceType: "Corporate Events",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
      description: "A sophisticated black-tie gala celebrating company achievements with award ceremonies, networking, and entertainment.",
      eventDate: "March 22, 2024",
      guestCount: 300,
      keyServices: ["Event Planning", "AV Production", "Entertainment Booking", "Corporate Branding"],
      testimonial: {
        quote: "The gala exceeded all expectations. Professional execution and attention to detail made our company look exceptional.",
        client: "Jennifer Martinez",
        role: "CEO, TechCorp Industries"
      },
      challenge: `Creating a memorable corporate event that would engage 300 attendees while maintaining professional standards and incorporating complex AV requirements for presentations and entertainment.`,
      solution: `We designed a multi-zone venue layout with dedicated networking areas, integrated state-of-the-art AV systems, and curated entertainment that aligned with corporate values while ensuring guest engagement.`,
      gallery: [
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 3,
      title: "Golden Anniversary Celebration - The Johnsons",
      serviceType: "Private Celebrations",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop",
      description: "A heartwarming 50th anniversary celebration bringing together four generations of family with personalized touches.",
      eventDate: "August 10, 2024",
      guestCount: 80,
      keyServices: ["Event Design", "Family Coordination", "Memory Displays", "Catering"],
      testimonial: {
        quote: "They captured 50 years of love in one perfect evening. Our family will treasure these memories forever.",
        client: "Robert & Mary Johnson",
        role: "Anniversary Couple"
      },
      challenge: `Accommodating four generations with varying mobility needs while creating meaningful experiences that honored the couple's 50-year journey together.`,
      solution: `We designed accessible seating arrangements, created interactive memory stations with photos and videos from each decade, and planned activities that engaged all age groups while celebrating the couple's legacy.`,
      gallery: [
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 4,
      title: "Music Festival After-Party - SoundWave Events",
      serviceType: "Entertainment Planning",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
      description: "High-energy after-party featuring live DJs, interactive installations, and immersive lighting design.",
      eventDate: "July 28, 2024",
      guestCount: 500,
      keyServices: ["Entertainment Coordination", "Lighting Design", "Sound Engineering", "Crowd Management"],
      testimonial: {
        quote: "The after-party was legendary! Perfect sound, amazing visuals, and flawless execution kept the energy going all night.",
        client: "Alex Rivera",
        role: "Event Director, SoundWave"
      },
      challenge: `Managing a high-energy event for 500 guests with complex technical requirements while ensuring safety and maintaining the festival atmosphere indoors.`,
      solution: `We implemented advanced crowd flow management, created immersive lighting and sound zones, and coordinated with security teams to maintain the festival vibe while ensuring guest safety and comfort.`,
      gallery: [
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 5,
      title: "Charity Fundraising Dinner - Hope Foundation",
      serviceType: "Catering Coordination",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
      description: "Elegant fundraising dinner featuring a multi-course gourmet menu and silent auction to support local charities.",
      eventDate: "September 14, 2024",
      guestCount: 200,
      keyServices: ["Menu Planning", "Dietary Accommodations", "Service Coordination", "Venue Setup"],
      testimonial: {
        quote: "The dinner was exquisite. Every course was perfectly timed and beautifully presented. We exceeded our fundraising goals!",
        client: "Dr. Patricia Williams",
        role: "Director, Hope Foundation"
      },
      challenge: `Coordinating a formal dinner service for 200 guests with diverse dietary requirements while managing silent auction logistics and maintaining the fundraising focus.`,
      solution: `We developed a sophisticated menu with multiple dietary options, implemented seamless service timing, and integrated auction displays that enhanced rather than distracted from the dining experience.`,
      gallery: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 6,
      title: "Intimate Beach Wedding - Emma & James",
      serviceType: "Wedding Planning",
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&h=600&fit=crop",
      description: "A romantic beachside ceremony at sunset with bohemian decor and a reception featuring fresh seafood and coastal vibes.",
      eventDate: "May 20, 2024",
      guestCount: 60,
      keyServices: ["Beach Permits", "Weather Planning", "Coastal Catering", "Decor Design"],
      testimonial: {
        quote: "Our beach wedding was magical. They handled every detail so we could focus on each other and our guests.",
        client: "Emma & James Rodriguez",
        role: "Bride & Groom"
      },
      challenge: `Planning a beach wedding with unpredictable weather conditions while managing permits, logistics, and creating an elegant atmosphere in a natural setting.`,
      solution: `We secured all necessary permits, created weather contingency plans with elegant tent options, and designed decor that complemented the natural beach beauty while providing comfort for all guests.`,
      gallery: [
        "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop"
      ]
    }
  ];

  const categories = [
    { id: 'wedding', name: 'Wedding Planning' },
    { id: 'corporate', name: 'Corporate Events' },
    { id: 'private', name: 'Private Celebrations' },
    { id: 'entertainment', name: 'Entertainment Planning' },
    { id: 'catering', name: 'Catering Coordination' }
  ];

  // Filter projects based on active filter
  useEffect(() => {
    const filterProjects = () => {
      if (activeFilter === 'all') {
        setFilteredProjects(portfolioProjects);
      } else {
        const categoryMap = {
          'wedding': 'Wedding Planning',
          'corporate': 'Corporate Events',
          'private': 'Private Celebrations',
          'entertainment': 'Entertainment Planning',
          'catering': 'Catering Coordination'
        };
        
        const filtered = portfolioProjects.filter(
          project => project.serviceType === categoryMap[activeFilter]
        );
        setFilteredProjects(filtered);
      }
    };

    filterProjects();
  }, [activeFilter]);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const renderProjectGrid = () => {
    const projectsWithCTA = [];
    
    filteredProjects.forEach((project, index) => {
      projectsWithCTA.push(project);
      
      // Add CTA section after every 6 projects
      if ((index + 1) % 6 === 0 && index !== filteredProjects.length - 1) {
        projectsWithCTA.push({ type: 'cta', id: `cta-${index}` });
      }
    });

    return projectsWithCTA.map((item, index) => {
      if (item.type === 'cta') {
        return <div key={item.id} className="col-span-full"><CTASection /></div>;
      }
      
      return (
        <ProjectCard
          key={item.id}
          project={item}
          onViewDetails={handleViewDetails}
        />
      );
    });
  };

  return (
    <>
      <Helmet>
        <title>Portfolio - Luxe Allure Wedding | Our Completed Projects</title>
        <meta name="description" content="Explore our portfolio of stunning weddings, corporate events, and private celebrations. See how Luxe Allure brings dreams to life with expert planning and flawless execution." />
        <meta name="keywords" content="wedding portfolio, event planning portfolio, luxury weddings, corporate events, private celebrations" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          <div className="container mx-auto px-6 lg:px-8 py-12">
            <Breadcrumb />
            
            {/* Page Header */}
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="FolderOpen" size={32} className="text-white" />
              </div>
              
              <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-4">
                Our Portfolio
              </h1>
              
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Discover the magic we've created for our clients. Each event tells a unique story of love, celebration, and unforgettable moments brought to life through expert planning and flawless execution.
              </p>
            </div>

            {/* Filter Chips */}
            <FilterChips
              categories={categories}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />

            {/* Results Count */}
            {!isLoading && (
              <div className="mb-8">
                <p className="text-muted-foreground text-sm">
                  Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
                  {activeFilter !== 'all' && (
                    <span> in {categories.find(cat => cat.id === activeFilter)?.name}</span>
                  )}
                </p>
              </div>
            )}

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {isLoading ? (
                // Loading Skeletons
                Array.from({ length: 6 }).map((_, index) => (
                  <SkeletonCard key={index} />
                ))
              ) : filteredProjects.length > 0 ? (
                renderProjectGrid()
              ) : (
                // No Results
                <div className="col-span-full text-center py-16">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Search" size={32} className="text-muted-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                    No Projects Found
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We couldn't find any projects matching your current filter. Try selecting a different category.
                  </p>
                  <button
                    onClick={() => setActiveFilter('all')}
                    className="text-primary hover:text-accent transition-smooth"
                  >
                    View All Projects
                  </button>
                </div>
              )}
            </div>

            {/* Final CTA Section */}
            {!isLoading && filteredProjects.length > 0 && (
              <div className="mt-16">
                <CTASection />
              </div>
            )}
          </div>
        </main>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />

        <ContactWidget />
      </div>
    </>
  );
};

export default Portfolio;