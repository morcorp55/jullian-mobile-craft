
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Building2, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface JoinNetworkPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const JoinNetworkPopup: React.FC<JoinNetworkPopupProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Preload the image when component mounts
  useEffect(() => {
    const img = new Image();
    img.src = "/lovable-uploads/b99a35a2-f24c-47f4-bdba-6dc78c2adf0d.png";
    console.log('Preloading join network popup image');
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
      // Blur efekti için root element'e class ekle
      document.getElementById('root')?.classList.add('blur-background');
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
      // Blur efektini kaldır
      document.getElementById('root')?.classList.remove('blur-background');
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.getElementById('root')?.classList.remove('blur-background');
    };
  }, [isOpen]);

  const handleAppStudioClick = () => {
    console.log('App Studio selected');
    // Link burada bağlanacak
  };

  const handleIndieDeveloperClick = () => {
    console.log('Indie Developer selected');
    // Link burada bağlanacak
  };

  if (!isOpen) return null;

  const popupContent = (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      {/* Arka plan overlay */}
      <div 
        className="absolute inset-0 bg-black/30"
        onClick={onClose}
      />
      
      {/* Popup */}
      <div 
        className={`relative bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 overflow-hidden ${
          isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
        }`}
      >
        {/* Kapatma butonu */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
        >
          <X size={20} className="text-gray-500" />
        </button>

        {/* Resim Alanı - Kenarları olmadan tam kaplasın */}
        <div className="relative">
          <AspectRatio ratio={16 / 9}>
            <img 
              src="/lovable-uploads/b99a35a2-f24c-47f4-bdba-6dc78c2adf0d.png"
              alt="Join Network illustration"
              className="w-full h-full object-cover rounded-t-2xl"
            />
          </AspectRatio>
        </div>

        {/* Gradient Background Content Area */}
        <div className="bg-gradient-to-b from-gray-800 to-black p-8">
          {/* Başlık */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Join Jullian Network</h2>
            <p className="text-gray-300">Choose your developer type</p>
          </div>

          {/* Butonlar */}
          <div className="space-y-4">
            {/* App Development Company */}
            <Button 
              onClick={handleAppStudioClick}
              className="w-full h-16 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-start space-x-4 px-6"
            >
              <Building2 size={28} className="text-white flex-shrink-0" />
              <div className="text-left flex-grow">
                <div className="font-semibold">I'm a App Development Company</div>
                <div className="text-sm text-blue-200">App Studio</div>
              </div>
            </Button>

            {/* Solo Developer */}
            <Button 
              onClick={handleIndieDeveloperClick}
              className="w-full h-16 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-start space-x-4 px-6"
            >
              <User size={28} className="text-white flex-shrink-0" />
              <div className="text-left flex-grow">
                <div className="font-semibold">I'm a Solo-Developer</div>
                <div className="text-sm text-green-200">Indie Developer</div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  // Portal kullanarak popup'ı document.body'ye render et
  return createPortal(popupContent, document.body);
};

export default JoinNetworkPopup;
