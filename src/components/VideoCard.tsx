
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
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayToggle = async () => {
    console.log('=== Play button clicked ===');
    console.log('Current playing state:', isPlaying);
    console.log('Video URL:', videoUrl);
    console.log('Video element:', videoRef.current);
    
    if (!videoRef.current) {
      console.error('Video element not found!');
      return;
    }

    if (!isPlaying) {
      try {
        setIsLoading(true);
        setIsPlaying(true);
        
        console.log('Attempting to play video...');
        
        // Video'yu yüklemeyi bekle
        if (videoRef.current.readyState < 3) {
          console.log('Video not ready, waiting for loadeddata event...');
          await new Promise((resolve) => {
            const handleLoadedData = () => {
              console.log('Video loaded, ready to play');
              videoRef.current?.removeEventListener('loadeddata', handleLoadedData);
              resolve(void 0);
            };
            videoRef.current?.addEventListener('loadeddata', handleLoadedData);
          });
        }
        
        await videoRef.current.play();
        console.log('Video play successful');
        setIsLoading(false);
      } catch (error) {
        console.error('Video play failed:', error);
        setIsPlaying(false);
        setIsLoading(false);
        
        // Hata durumunda kullanıcıya bilgi ver
        alert('Video oynatılamadı. Lütfen internet bağlantınızı kontrol edin.');
      }
    } else {
      console.log('Pausing video...');
      videoRef.current.pause();
      setIsPlaying(false);
      setIsLoading(false);
    }
  };

  const handleVideoEnded = () => {
    console.log('Video ended');
    setIsPlaying(false);
    setIsLoading(false);
  };

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('Video error event:', e);
    console.error('Video error details:', (e.target as HTMLVideoElement).error);
    setIsPlaying(false);
    setIsLoading(false);
  };

  const handleVideoLoadStart = () => {
    console.log('Video load started');
  };

  const handleVideoCanPlay = () => {
    console.log('Video can play');
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
            className="w-full h-full object-cover"
            poster={thumbnailUrl}
            onEnded={handleVideoEnded}
            onError={handleVideoError}
            onLoadStart={handleVideoLoadStart}
            onCanPlay={handleVideoCanPlay}
            playsInline
            preload="metadata"
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
            
            {/* Play button overlay - Ana tıklama alanı */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-all duration-300">
              {/* Play button - Direkt tıklanabilir */}
              <button 
                onClick={handlePlayToggle}
                className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Play video"
              >
                {isLoading ? (
                  <div className="w-12 h-12 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <Play className="w-12 h-12 text-white fill-white" />
                )}
              </button>
            </div>
            
            {/* Duration badge */}
            <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm pointer-events-none">
              {duration}
            </div>
            
            {/* Video overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
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
