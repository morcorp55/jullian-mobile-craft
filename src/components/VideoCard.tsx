
import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

interface VideoCardProps {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  views: string;
  downloads: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  description,
  thumbnailUrl,
  videoUrl,
  duration,
  views,
  downloads,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayToggle = () => {
    console.log('Play button clicked, current state:', isPlaying);
    console.log('Video URL:', videoUrl);
    
    if (!isPlaying) {
      setIsPlaying(true);
      // Video element'i otomatik oynatma için biraz bekleyelim
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().catch((error) => {
            console.error('Video play error:', error);
          });
        }
      }, 100);
    } else {
      setIsPlaying(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  };

  const handleVideoEnded = () => {
    console.log('Video ended');
    setIsPlaying(false);
  };

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('Video error:', e);
    setIsPlaying(false);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-300 group">
      {/* Video Container */}
      <div className="aspect-[9/16] bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center relative overflow-hidden">
        {isPlaying ? (
          // Video Player
          <video
            ref={videoRef}
            src={videoUrl}
            controls
            autoPlay
            className="w-full h-full object-cover"
            poster={thumbnailUrl}
            onEnded={handleVideoEnded}
            onError={handleVideoError}
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          // Thumbnail View
          <>
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${thumbnailUrl})` }}
            />
            
            {/* Play button overlay */}
            <div 
              className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-all duration-300 cursor-pointer"
              onClick={handlePlayToggle}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-all duration-300">
                <Play className="w-12 h-12 text-white fill-white" />
              </div>
            </div>
            
            {/* Duration badge */}
            <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
              {duration}
            </div>
            
            {/* Video overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </>
        )}
      </div>
      
      {/* Video info */}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-blue-400 font-semibold">{downloads}</span>
          <span className="text-purple-400 font-semibold">{views}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
