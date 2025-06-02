
import React from 'react';
import { Play } from 'lucide-react';

interface VideoCardProps {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  views: string;
  downloads: string;
  onVideoClick: (videoUrl: string, title: string) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  description,
  thumbnailUrl,
  videoUrl,
  duration,
  views,
  downloads,
  onVideoClick,
}) => {
  return (
    <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-300 group cursor-pointer">
      {/* Video Thumbnail Container */}
      <div 
        className="aspect-[9/16] bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center relative overflow-hidden"
        onClick={() => onVideoClick(videoUrl, title)}
      >
        {/* Placeholder for video thumbnail */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${thumbnailUrl})` }}
        />
        
        {/* Play button overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-all duration-300">
          <Play className="w-20 h-20 text-white/80 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
        </div>
        
        {/* Duration badge */}
        <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
          {duration}
        </div>
        
        {/* Video overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
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
