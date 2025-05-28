
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Mail, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface LoginPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    // Login logic burada olacak
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

        {/* 16:9 Görsel Alanı with transparent frame */}
        <div className="relative mb-0 p-6">
          <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-2xl shadow-xl z-10 border border-white/20">
            <AspectRatio ratio={16 / 9}>
              <img 
                src="/lovable-uploads/b99a35a2-f24c-47f4-bdba-6dc78c2adf0d.png"
                alt="Login illustration"
                className="w-full h-full object-cover rounded-lg"
              />
            </AspectRatio>
          </div>
        </div>

        {/* Gradient Background Content Area */}
        <div className="bg-gradient-to-b from-gray-800 to-black p-8">
          {/* Başlık */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">App Studio Login</h2>
            <p className="text-gray-300">Sign in to your account</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300 font-medium">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  className="pl-10 h-12 bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-300 font-medium">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="pl-10 h-12 bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Giriş butonu */}
            <Button 
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Sign In
            </Button>
          </form>

          {/* Şifremi unuttum */}
          <div className="text-center mt-6">
            <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
              Forgot Password?
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Portal kullanarak popup'ı document.body'ye render et
  return createPortal(popupContent, document.body);
};

export default LoginPopup;
