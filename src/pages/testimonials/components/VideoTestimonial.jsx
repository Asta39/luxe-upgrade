import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const VideoTestimonial = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsPlaying(false);
  };

  return (
    <>
      {/* Video Thumbnail */}
      <div className="relative bg-card elevation-card rounded-lg overflow-hidden hover-scale transition-smooth">
        <div className="relative aspect-video">
          <Image
            src={video.thumbnail}
            alt={`Video testimonial from ${video.clientName}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <Button
              variant="default"
              size="lg"
              onClick={handlePlayVideo}
              className="rounded-full w-16 h-16 p-0 elevation-floating"
            >
              <Icon name="Play" size={24} className="ml-1" />
            </Button>
          </div>
          <div className="absolute top-4 right-4">
            <span className="px-2 py-1 bg-black/50 text-white text-xs font-caption rounded">
              {video.duration}
            </span>
          </div>
        </div>
        
        {/* Video Info */}
        <div className="p-4">
          <div className="flex items-center space-x-3 mb-2">
            <Image
              src={video.clientPhoto}
              alt={video.clientName}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <h4 className="font-body font-semibold text-foreground text-sm">
                {video.clientName}
              </h4>
              <p className="font-caption text-xs text-muted-foreground">
                {video.eventType} • {video.eventDate}
              </p>
            </div>
          </div>
          <p className="font-body text-sm text-muted-foreground line-clamp-2">
            {video.description}
          </p>
        </div>
      </div>

      {/* Video Modal */}
      {isPlaying && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleCloseVideo}
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
            >
              <Icon name="X" size={24} />
            </Button>
            
            {/* Video Player Placeholder */}
            <div className="w-full h-full bg-black flex items-center justify-center">
              <div className="text-center text-white">
                <Icon name="Play" size={48} className="mx-auto mb-4 opacity-50" />
                <p className="font-body">Video Player</p>
                <p className="font-caption text-sm opacity-75 mt-2">
                  {video.clientName} - {video.eventType}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoTestimonial;