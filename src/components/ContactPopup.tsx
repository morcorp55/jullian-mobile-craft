
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, MessageCircle, Calendar, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Preload the image when component mounts
  useEffect(() => {
    const img = new Image();
    img.src = "/lovable-uploads/b99a35a2-f24c-47f4-bdba-6dc78c2adf0d.png";
    console.log('Preloading contact popup image');
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

  const handleWhatsAppClick = () => {
    console.log('WhatsApp contact selected');
    const phoneNumber = '905335961294';
    const message = encodeURIComponent('I need creatives for my app promotion 🚀');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCalendarClick = () => {
    console.log('Calendar booking selected');
    // Google Calendar booking link burada olacak
    const calendarUrl = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1234567890'; // Gerçek booking linkinizi buraya ekleyin
    window.open(calendarUrl, '_blank');
  };

  const handleEmailClick = () => {
    console.log('Email contact selected');
    const emailUrl = 'mailto:creative@jullian.io?subject=Creative Services Inquiry&body=I need creatives for my app promotion 🚀';
    window.open(emailUrl, '_blank');
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

        {/* Resim Alanı */}
        <div className="relative">
          <AspectRatio ratio={16 / 9}>
            <img 
              src="/lovable-uploads/b99a35a2-f24c-47f4-bdba-6dc78c2adf0d.png"
              alt="Contact us illustration"
              className="w-full h-full object-cover rounded-t-2xl"
            />
          </AspectRatio>
        </div>

        {/* Gradient Background Content Area */}
        <div className="bg-gradient-to-b from-gray-800 to-black p-8">
          {/* Başlık */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Contact Us</h2>
            <p className="text-gray-300">Choose your preferred contact method</p>
          </div>

          {/* İletişim Butonları */}
          <div className="space-y-4">
            {/* WhatsApp */}
            <Button 
              onClick={handleWhatsAppClick}
              className="w-full h-16 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-start space-x-4 px-6"
            >
              <MessageCircle size={28} className="text-white flex-shrink-0" />
              <div className="text-left flex-grow">
                <div className="font-semibold">WhatsApp</div>
                <div className="text-sm text-green-200">+90 533 596 12 94</div>
              </div>
            </Button>

            {/* Google Calendar */}
            <Button 
              onClick={handleCalendarClick}
              className="w-full h-16 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-start space-x-4 px-6"
            >
              <Calendar size={28} className="text-white flex-shrink-0" />
              <div className="text-left flex-grow">
                <div className="font-semibold">Schedule a Meeting</div>
                <div className="text-sm text-blue-200">Book directly on Google Calendar</div>
              </div>
            </Button>

            {/* Email */}
            <Button 
              onClick={handleEmailClick}
              className="w-full h-16 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-start space-x-4 px-6"
            >
              <Mail size={28} className="text-white flex-shrink-0" />
              <div className="text-left flex-grow">
                <div className="font-semibold">Email Us</div>
                <div className="text-sm text-purple-200">creative@jullian.io</div>
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

export default ContactPopup;
