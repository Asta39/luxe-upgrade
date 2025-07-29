import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ContactWidget from '../../components/ui/ContactWidget';
import FilterChips from './components/FilterChips';
import ImageGrid from './components/ImageGrid';
import LightboxViewer from './components/LightboxViewer';
import SkeletonLoader from './components/SkeletonLoader';
import InspiredCTA from './components/InspiredCTA';
import Icon from '../../components/AppIcon';


const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredImages, setFilteredImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [viewedCount, setViewedCount] = useState(0);
  const [showInspiredCTA, setShowInspiredCTA] = useState(false);
  const [loadedImages, setLoadedImages] = useState(20);

  const filters = [
    { id: 'all', label: 'All Events' },
    { id: 'weddings', label: 'Weddings' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'private', label: 'Private Celebrations' },
    { id: 'entertainment', label: 'Entertainment' },
    { id: 'catering', label: 'Catering' }
  ];

  const allImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
      alt: "Elegant wedding ceremony setup with white flowers",
      category: 'weddings',
      aspectRatio: '4/3'
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?w=800&h=1000&fit=crop",
      alt: "Beautiful bridal bouquet with roses",
      category: 'weddings',
      aspectRatio: '4/5'
    },
    {
      id: 3,
      src: "https://images.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg?w=800&h=600&fit=crop",
      alt: "Corporate event presentation setup",
      category: 'corporate',
      aspectRatio: '4/3'
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=900&fit=crop",
      alt: "Outdoor wedding reception under fairy lights",
      category: 'weddings',
      aspectRatio: '4/4.5'
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?w=800&h=600&fit=crop",
      alt: "Birthday party decoration with balloons",
      category: 'private',
      aspectRatio: '4/3'
    },
    {
      id: 6,
      src: "https://images.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1280.jpg?w=800&h=600&fit=crop",
      alt: "Live entertainment performance stage",
      category: 'entertainment',
      aspectRatio: '4/3'
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=600&fit=crop",
      alt: "Gourmet catering food presentation",
      category: 'catering',
      aspectRatio: '4/3'
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?w=800&h=1000&fit=crop",
      alt: "Wedding cake with floral decorations",
      category: 'weddings',
      aspectRatio: '4/5'
    },
    {
      id: 9,
      src: "https://images.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg?w=800&h=600&fit=crop",
      alt: "Business conference networking event",
      category: 'corporate',
      aspectRatio: '4/3'
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
      alt: "Anniversary celebration table setting",
      category: 'private',
      aspectRatio: '4/3'
    },
    {
      id: 11,
      src: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?w=800&h=900&fit=crop",
      alt: "Wedding ceremony aisle with petals",
      category: 'weddings',
      aspectRatio: '4/4.5'
    },
    {
      id: 12,
      src: "https://images.pixabay.com/photo/2017/08/03/21/48/drinks-2578446_1280.jpg?w=800&h=600&fit=crop",
      alt: "Cocktail catering service setup",
      category: 'catering',
      aspectRatio: '4/3'
    },
    {
      id: 13,
      src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
      alt: "Wedding reception dance floor",
      category: 'weddings',
      aspectRatio: '4/3'
    },
    {
      id: 14,
      src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?w=800&h=600&fit=crop",
      alt: "Corporate gala dinner event",
      category: 'corporate',
      aspectRatio: '4/3'
    },
    {
      id: 15,
      src: "https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg?w=800&h=1000&fit=crop",
      alt: "DJ entertainment setup with lights",
      category: 'entertainment',
      aspectRatio: '4/5'
    },
    {
      id: 16,
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop",
      alt: "Garden party private celebration",
      category: 'private',
      aspectRatio: '4/3'
    },
    {
      id: 17,
      src: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?w=800&h=900&fit=crop",
      alt: "Elegant wedding table centerpiece",
      category: 'weddings',
      aspectRatio: '4/4.5'
    },
    {
      id: 18,
      src: "https://images.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1280.jpg?w=800&h=600&fit=crop",
      alt: "Buffet catering arrangement",
      category: 'catering',
      aspectRatio: '4/3'
    },
    {
      id: 19,
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
      alt: "Corporate team building event",
      category: 'corporate',
      aspectRatio: '4/3'
    },
    {
      id: 20,
      src: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?w=800&h=600&fit=crop",
      alt: "Live band entertainment performance",
      category: 'entertainment',
      aspectRatio: '4/3'
    },
    {
      id: 21,
      src: "https://images.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg?w=800&h=1000&fit=crop",
      alt: "Wedding bridal party photos",
      category: 'weddings',
      aspectRatio: '4/5'
    },
    {
      id: 22,
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
      alt: "Family reunion celebration",
      category: 'private',
      aspectRatio: '4/3'
    },
    {
      id: 23,
      src: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?w=800&h=600&fit=crop",
      alt: "Fine dining catering presentation",
      category: 'catering',
      aspectRatio: '4/3'
    },
    {
      id: 24,
      src: "https://images.pixabay.com/photo/2017/08/03/21/48/drinks-2578446_1280.jpg?w=800&h=900&fit=crop",
      alt: "Wedding ceremony outdoor setup",
      category: 'weddings',
      aspectRatio: '4/4.5'
    }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const filtered = activeFilter === 'all' 
      ? allImages.slice(0, loadedImages)
      : allImages.filter(img => img.category === activeFilter).slice(0, loadedImages);
    setFilteredImages(filtered);
  }, [activeFilter, loadedImages]);

  useEffect(() => {
    if (viewedCount >= 10 && !showInspiredCTA) {
      setShowInspiredCTA(true);
    }
  }, [viewedCount, showInspiredCTA]);

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setLoadedImages(20);
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    setViewedCount(prev => prev + 1);
  };

  const handleNextImage = useCallback(() => {
    setCurrentImageIndex(prev => 
      prev < filteredImages.length - 1 ? prev + 1 : prev
    );
  }, [filteredImages.length]);

  const handlePreviousImage = useCallback(() => {
    setCurrentImageIndex(prev => prev > 0 ? prev - 1 : prev);
  }, []);

  const handleToggleFavorite = (imageId) => {
    setFavorites(prev => 
      prev.includes(imageId) 
        ? prev.filter(id => id !== imageId)
        : [...prev, imageId]
    );
  };

  const handleShare = async (image) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Luxe Allure Wedding Gallery',
          text: image.alt,
          url: window.location.href
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handleLoadMore = () => {
    setLoadedImages(prev => prev + 12);
  };

  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop 
        >= document.documentElement.offsetHeight - 1000) {
      handleLoadMore();
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      <Helmet>
        <title>Gallery - Luxe Allure Wedding | Event Photography Showcase</title>
        <meta name="description" content="Browse our stunning gallery of wedding and event photography. Get inspired by our premium event planning and coordination services." />
        <meta name="keywords" content="wedding gallery, event photography, wedding photos, corporate events, private celebrations" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
        <Header />
        
        <main className="pt-20">
          <div className="container mx-auto px-6 lg:px-8 py-8">
            <Breadcrumb />
            
            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
                Our Gallery
              </h1>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover the magic we create through our lens. Each image tells a story of love, celebration, and unforgettable moments.
              </p>
            </div>

            {/* Filter Chips */}
            <div className="flex justify-center mb-8">
              <FilterChips 
                filters={filters}
                activeFilter={activeFilter}
                onFilterChange={handleFilterChange}
              />
            </div>

            {/* Image Grid or Loading */}
            {loading ? (
              <SkeletonLoader count={12} />
            ) : (
              <>
                <ImageGrid 
                  images={filteredImages}
                  onImageClick={handleImageClick}
                  favorites={favorites}
                  onToggleFavorite={handleToggleFavorite}
                />
                
                {/* Load More Indicator */}
                {filteredImages.length < allImages.filter(img => 
                  activeFilter === 'all' || img.category === activeFilter
                ).length && (
                  <div className="text-center mt-12">
                    <div className="inline-flex items-center space-x-2 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <span className="font-body text-sm">Loading more images...</span>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Empty State */}
            {!loading && filteredImages.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Image" size={32} className="text-muted-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  No images found
                </h3>
                <p className="font-body text-muted-foreground">
                  Try selecting a different category to view more images.
                </p>
              </div>
            )}
          </div>
        </main>

        {/* Lightbox Viewer */}
        <LightboxViewer 
          images={filteredImages}
          currentIndex={currentImageIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNext={handleNextImage}
          onPrevious={handlePreviousImage}
          onShare={handleShare}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
        />

        {/* Inspired CTA */}
        <InspiredCTA 
          isVisible={showInspiredCTA}
          onClose={() => setShowInspiredCTA(false)}
        />

        <ContactWidget />
      </div>
    </>
  );
};

export default Gallery;