import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ImageGrid = ({ images, onImageClick, favorites, onToggleFavorite }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {images.map((image, index) => (
        <div
          key={image.id}
          className="group relative overflow-hidden rounded-lg elevation-card hover:elevation-floating transition-smooth cursor-pointer"
          style={{ aspectRatio: image.aspectRatio || '4/3' }}
          onClick={() => onImageClick(index)}
        >
          <Image
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
          
          {/* Desktop Hover Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-smooth hidden md:flex items-center justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite(image.id);
              }}
              className={`p-3 rounded-full glassmorphic transition-smooth hover-scale ${
                favorites.includes(image.id) 
                  ? 'text-accent bg-accent/20' :'text-white bg-white/20'
              }`}
            >
              <Icon 
                name={favorites.includes(image.id) ? "Heart" : "Heart"} 
                size={20}
                className={favorites.includes(image.id) ? "fill-current" : ""}
              />
            </button>
          </div>

          {/* Mobile Favorite Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(image.id);
            }}
            className={`absolute top-3 right-3 p-2 rounded-full glassmorphic md:hidden transition-smooth ${
              favorites.includes(image.id) 
                ? 'text-accent bg-accent/20' :'text-white bg-white/20'
            }`}
          >
            <Icon 
              name="Heart" 
              size={16}
              className={favorites.includes(image.id) ? "fill-current" : ""}
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;