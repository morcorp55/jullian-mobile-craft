import React, { useState, useRef, useEffect } from 'react';
import { Play, Volume2, VolumeX } from 'lucide-react';

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

// Global ses durumu için window object'i kullan
declare global {
  interface Window {
    globalVideoMuted?: boolean;
  }
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
  // Global ses durumunu kontrol et, ilk kez true (muted) olsun
  const [isMuted, setIsMuted] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.globalVideoMuted !== undefined ? window.globalVideoMuted : true;
    }
    return true;
  });
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>();

  // Global ses durumunu dinle
  useEffect(() => {
    const handleGlobalMuteChange = () => {
      if (typeof window !== 'undefined' && window.globalVideoMuted !== undefined) {
        setIsMuted(window.globalVideoMuted);
        if (videoRef.current) {
          videoRef.current.muted = window.globalVideoMuted;
        }
      }
    };

    // Custom event listener ekle
    window.addEventListener('globalMuteChange', handleGlobalMuteChange);
    
    return () => {
      window.removeEventListener('globalMuteChange', handleGlobalMuteChange);
    };
  }, []);

  // Carousel hareket algılama için window event listener - daha spesifik hale getirildi
  useEffect(() => {
    let carouselMoveTimeout: NodeJS.Timeout;
    
    const handleCarouselMove = (e: Event) => {
      // Eğer hedef ses butonu veya çocuklarıysa, carousel hareketi olarak algılama
      const target = e.target as HTMLElement;
      if (target && (target.closest('[aria-label="Mute"]') || target.closest('[aria-label="Unmute"]'))) {
        return;
      }

      // Carousel hareket ettiğinde videoyu durdur - debounce ile
      clearTimeout(carouselMoveTimeout);
      carouselMoveTimeout = setTimeout(() => {
        if (isPlaying && videoRef.current) {
          console.log('Carousel moved, pausing video');
          videoRef.current.pause();
          setIsPlaying(false);
          setIsLoading(false);
          setShowControls(true);
        }
      }, 100);
    };

    // Sadece carousel viewport'unu dinle
    const carouselElement = document.querySelector('[data-carousel-viewport]');
    if (carouselElement) {
      carouselElement.addEventListener('scroll', handleCarouselMove);
    }

    return () => {
      clearTimeout(carouselMoveTimeout);
      if (carouselElement) {
        carouselElement.removeEventListener('scroll', handleCarouselMove);
      }
    };
  }, [isPlaying]);

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

  const handleVideoClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('=== Video clicked ===');
    console.log('Current playing state:', isPlaying);
    console.log('Video URL:', videoUrl);
    
    // Diğer tüm videoları durdur
    const allVideos = document.querySelectorAll('video');
    allVideos.forEach((video) => {
      if (video !== videoRef.current && !video.paused) {
        video.pause();
        console.log('Paused other video');
      }
    });
    
    if (!videoRef.current) {
      console.error('Video element not found!');
      return;
    }

    if (!isPlaying) {
      try {
        setIsLoading(true);
        console.log('Attempting to play video...');
        
        // Global ses durumunu uygula
        videoRef.current.muted = isMuted;
        
        // Video oynatmayı dene
        const playPromise = videoRef.current.play();
        
        if (playPromise !== undefined) {
          await playPromise;
          console.log('Video play successful');
          setIsPlaying(true);
          setIsLoading(false);
          setShowControls(true);
        }
      } catch (error) {
        console.error('Video play failed:', error);
        setIsPlaying(false);
        setIsLoading(false);
      }
    } else {
      console.log('Pausing video...');
      videoRef.current.pause();
      setIsPlaying(false);
      setIsLoading(false);
      setShowControls(true);
    }
  };

  const handleMuteToggle = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('Mute toggle clicked/touched');
    
    if (videoRef.current) {
      const newMutedState = !isMuted;
      setIsMuted(newMutedState);
      videoRef.current.muted = newMutedState;
      
      // Global ses durumunu güncelle
      if (typeof window !== 'undefined') {
        window.globalVideoMuted = newMutedState;
        // Custom event dispatch et
        window.dispatchEvent(new Event('globalMuteChange'));
      }
      
      console.log('New muted state:', newMutedState);
      
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
        {/* Video Player - Sadece video içeriği için dokunma alanı */}
        <video
          ref={videoRef}
          src={videoUrl}
          controls={false}
          className={`h-full w-auto object-contain ${isPlaying ? 'block' : 'hidden'}`}
          poster={thumbnailUrl}
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

        {/* Custom Video Controls - Sadece mute/unmute butonu - dokunma alanından ayrı */}
        {isPlaying && showControls && (
          <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-3 transition-opacity duration-300 z-50">
            {/* Mute/Unmute Button - Mobil için optimize edilmiş */}
            <button 
              onClick={handleMuteToggle}
              onTouchStart={(e) => {
                e.stopPropagation();
                console.log('Touch start on mute button');
              }}
              onTouchEnd={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Touch end on mute button - triggering mute toggle');
                handleMuteToggle(e);
              }}
              className="text-white hover:text-blue-400 transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center touch-manipulation select-none relative z-10"
              aria-label={isMuted ? "Unmute" : "Mute"}
              style={{ 
                WebkitTapHighlightColor: 'transparent',
                touchAction: 'manipulation'
              }}
            >
              {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
            </button>
          </div>
        )}

        {/* Thumbnail View - Sadece video oynatılmadığında göster */}
        {!isPlaying && (
          <>
            {/* Video içeriği için dokunma alanı - sadece video alanı */}
            <div 
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
              style={{ backgroundImage: `url(${thumbnailUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              onClick={handleVideoClick}
            >
              <img 
                src={thumbnailUrl} 
                alt="Video thumbnail"
                className="h-full w-auto object-contain"
              />
              
              {/* Play button overlay - sadece video içeriği üzerinde */}
              <div 
                className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-all duration-300 cursor-pointer"
                onClick={handleVideoClick}
              >
                <button 
                  onClick={handleVideoClick}
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
      
      {/* Video info - Sadece başlık */}
      <div className="p-3 md:p-6 flex items-center justify-center">
        <h3 className="text-sm md:text-lg font-semibold text-white text-center">{title}</h3>
      </div>
    </div>
  );
};

export default VideoCard;
