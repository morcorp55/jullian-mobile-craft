import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

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
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>();

  // Kontrolleri gizleme timer'ı
  useEffect(() => {
    if (isPlaying && showControls) {
      // 3 saniye sonra kontrolleri gizle
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }

    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [isPlaying, showControls]);

  const handlePlayToggle = async (e?: React.MouseEvent) => {
    // Event propagation'ı durduralım
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
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
        console.log('Attempting to play video...');
        
        // Mobile için muted olarak başlat
        videoRef.current.muted = isMuted;
        
        // Video oynatmayı dene
        const playPromise = videoRef.current.play();
        
        if (playPromise !== undefined) {
          await playPromise;
          console.log('Video play successful');
          setIsPlaying(true);
          setIsLoading(false);
          setShowControls(true); // Video başlayınca kontrolleri göster
        }
      } catch (error) {
        console.error('Video play failed:', error);
        setIsPlaying(false);
        setIsLoading(false);
        
        // Mobile'da ses açık halde dene
        try {
          if (videoRef.current) {
            videoRef.current.muted = false;
            await videoRef.current.play();
            setIsPlaying(true);
            console.log('Video play successful with sound');
          }
        } catch (secondError) {
          console.error('Second play attempt failed:', secondError);
          alert('Video oynatılamadı. Lütfen internet bağlantınızı kontrol edin.');
        }
      }
    } else {
      console.log('Pausing video...');
      videoRef.current.pause();
      setIsPlaying(false);
      setIsLoading(false);
      setShowControls(true);
    }
  };

  const handleVideoClick = (e: React.MouseEvent) => {
    // Direkt oynat/durdur
    handlePlayToggle(e);
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (videoRef.current) {
      const newMutedState = !isMuted;
      setIsMuted(newMutedState);
      videoRef.current.muted = newMutedState;
      
      // Mute/unmute sonrası kontrolleri tekrar göster ve 3 saniye sonra gizle
      setShowControls(true);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  };

  const handleVideoEnded = () => {
    console.log('Video ended');
    setIsPlaying(false);
    setIsLoading(false);
    setShowControls(true);
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
    <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-300 group h-full flex flex-col mx-2 md:mx-0">
      {/* Video Container - Fixed aspect ratio */}
      <div className="aspect-[9/16] bg-black flex items-center justify-center relative overflow-hidden">
        {/* Video Player - Her zaman render et */}
        <video
          ref={videoRef}
          src={videoUrl}
          controls={false}
          className={`h-full w-auto object-contain cursor-pointer ${isPlaying ? 'block' : 'hidden'}`}
          poster="/lovable-uploads/fa1b9433-137e-4259-a668-bd42d77d978b.png"
          onEnded={handleVideoEnded}
          onError={handleVideoError}
          onLoadStart={handleVideoLoadStart}
          onCanPlay={handleVideoCanPlay}
          onClick={handleVideoClick}
          playsInline
          preload="metadata"
          webkit-playsinline="true"
          x5-playsinline="true"
        >
          Your browser does not support the video tag.
        </video>

        {/* Custom Video Controls - Sadece mute/unmute butonu */}
        {isPlaying && showControls && (
          <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-3 transition-opacity duration-300">
            {/* Mute/Unmute Button */}
            <button 
              onClick={handleMuteToggle}
              className="text-white hover:text-blue-400 transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
            </button>
          </div>
        )}

        {/* Thumbnail View - Sadece video oynatılmadığında göster */}
        {!isPlaying && (
          <>
            <div 
              className="absolute inset-0 bg-black bg-cover bg-center flex items-center justify-center cursor-pointer"
              style={{ backgroundImage: `url(/lovable-uploads/fa1b9433-137e-4259-a668-bd42d77d978b.png)` }}
              onClick={handleVideoClick}
            >
              <img 
                src="/lovable-uploads/fa1b9433-137e-4259-a668-bd42d77d978b.png" 
                alt="Video thumbnail"
                className="h-full w-auto object-contain"
              />
            </div>
            
            {/* Play button overlay - Ana tıklama alanı */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-all duration-300">
              {/* Play button - Direkt tıklanabilir */}
              <button 
                onClick={handlePlayToggle}
                className="bg-white/20 backdrop-blur-sm rounded-full p-3 md:p-4 hover:bg-white/30 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 touch-manipulation"
                aria-label="Play video"
                disabled={isLoading}
                type="button"
              >
                {isLoading ? (
                  <div className="w-8 h-8 md:w-12 md:h-12 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <Play className="w-8 h-8 md:w-12 md:h-12 text-white fill-white" />
                )}
              </button>
            </div>
            
            {/* Duration badge */}
            <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-black/70 text-white px-2 py-1 rounded text-xs md:text-sm pointer-events-none">
              {duration}
            </div>
            
            {/* Video overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
          </>
        )}
      </div>
      
      {/* Video info - Fixed height with consistent spacing */}
      <div className="p-3 md:p-6 flex-1 flex flex-col justify-between min-h-[120px] md:min-h-[140px]">
        <div className="flex-1">
          <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2 text-white line-clamp-2 h-8 md:h-12 overflow-hidden">{title}</h3>
          <p className="text-gray-400 text-xs md:text-sm mb-2 md:mb-4 line-clamp-2 h-8 md:h-10 overflow-hidden">{description}</p>
        </div>
        <div className="flex justify-between items-center pt-2">
          <span className="text-blue-400 font-semibold text-xs md:text-sm truncate pr-2">{downloads}</span>
          <span className="text-purple-400 font-semibold text-xs md:text-sm truncate">{views}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
