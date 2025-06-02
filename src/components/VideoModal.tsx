
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl,
  title,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0 bg-black border-gray-700">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-white text-xl">{title}</DialogTitle>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-4 w-4 text-white" />
            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>
        
        <div className="aspect-video w-full">
          {/* Video player - sen kendi video URL'lerini buraya ekleyeceksin */}
          <video
            src={videoUrl}
            controls
            autoPlay
            className="w-full h-full object-cover"
            poster="/placeholder-thumbnail.jpg" // Sen kendi thumbnail'lerini ekleyeceksin
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
