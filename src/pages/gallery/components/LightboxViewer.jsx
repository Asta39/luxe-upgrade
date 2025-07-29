import React, { useEffect, useCallback } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LightboxViewer = ({ 
  images, 
  currentIndex, 
  isOpen, 
  onClose, 
  onNext, 
  onPrevious,
  onShare,
  favorites,
  onToggleFavorite 
}) => {
  const currentImage = images[currentIndex];

  const handleKeyPress = useCallback((e) => {
    if (!isOpen) return;
    
    switch (e.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowLeft':
        onPrevious();
        break;
      case 'ArrowRight':
        onNext();
        break;
      default:
        break;
    }
  }, [isOpen, onClose, onNext, onPrevious]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !currentImage) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
      {/* Header Controls */}
      <div className="absolute top-0 left-0 right-0 z-10 p-4 md:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-white">
            <span className="font-body text-sm">
              {currentIndex + 1} of {images.length}
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onToggleFavorite(currentImage.id)}
              className={`text-white hover:bg-white/20 ${
                favorites.includes(currentImage.id) ? 'text-accent' : ''
              }`}
            >
              <Icon 
                name="Heart" 
                size={20}
                className={favorites.includes(currentImage.id) ? "fill-current" : ""}
              />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onShare(currentImage)}
              className="text-white hover:bg-white/20"
            >
              <Icon name="Share2" size={20} />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/20"
            >
              <Icon name="X" size={24} />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Image Container */}
      <div className="flex items-center justify-center h-full p-4 md:p-16">
        <div className="relative max-w-full max-h-full">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>

      {/* Navigation Controls */}
      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            onClick={onPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 w-12 h-12"
            disabled={currentIndex === 0}
          >
            <Icon name="ChevronLeft" size={24} />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 w-12 h-12"
            disabled={currentIndex === images.length - 1}
          >
            <Icon name="ChevronRight" size={24} />
          </Button>
        </>
      )}

      {/* Bottom Thumbnails */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
        <div className="flex justify-center space-x-2 overflow-x-auto">
          {images.slice(Math.max(0, currentIndex - 2), currentIndex + 3).map((image, index) => {
            const actualIndex = Math.max(0, currentIndex - 2) + index;
            return (
              <button
                key={image.id}
                onClick={() => {
                  const diff = actualIndex - currentIndex;
                  if (diff > 0) {
                    for (let i = 0; i < diff; i++) onNext();
                  } else if (diff < 0) {
                    for (let i = 0; i < Math.abs(diff); i++) onPrevious();
                  }
                }}
                className={`flex-shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-smooth ${
                  actualIndex === currentIndex 
                    ? 'border-accent' :'border-white/30 hover:border-white/60'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LightboxViewer;