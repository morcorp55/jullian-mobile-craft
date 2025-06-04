import React, { useState, useEffect } from "react";
import { X, Home, Sparkles, Mail, LogIn, FileText, Briefcase, User, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import LoginPopup from "./LoginPopup";
import JoinNetworkPopup from "./JoinNetworkPopup";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isJoinNetworkPopupOpen, setIsJoinNetworkPopupOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    // Check if we're on Creative Studio page
    if (window.location.pathname === '/creative-studio') {
      // Navigate to homepage first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
      // We're already on homepage, just scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  };

  const handleLoginClick = () => {
    setIsLoginPopupOpen(true);
    setIsMobileMenuOpen(false);
  };

  const handleJoinNetworkClick = () => {
    setIsJoinNetworkPopupOpen(true);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-xl py-4" : "bg-transparent py-6"}`}>
        {/* Gradient background with fade to transparent */}
        {isScrolled && (
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/30 via-purple-500/25 to-transparent"></div>
        )}
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl md:text-3xl lg:text-4xl font-bold">
              <span className="text-white drop-shadow-lg shadow-black/50">Jullian</span>
            </Link>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-6 mr-4">
                <button onClick={() => scrollToSection("jullian-publishing")} className={`transition-colors font-medium text-white drop-shadow-md shadow-black/50 ${isScrolled ? "hover:text-blue-300" : "hover:text-blue-400"}`}>
                  Publishing
                </button>
                <button onClick={() => scrollToSection("jullian-broker")} className={`transition-colors font-medium text-white drop-shadow-md shadow-black/50 ${isScrolled ? "hover:text-blue-300" : "hover:text-blue-400"}`}>
                  Broker
                </button>
                <Link to="/creative-studio" className={`transition-colors font-medium ${isScrolled ? "text-white hover:text-blue-300" : "text-white hover:text-blue-400"}`}>
                  <span className="moving-gradient-text drop-shadow-md shadow-black/50">Creative</span> <span className="moving-gradient-text drop-shadow-md shadow-black/50">Studio</span>
                </Link>
                <Link to="/blog" className={`transition-colors font-medium text-white drop-shadow-md shadow-black/50 ${isScrolled ? "hover:text-blue-300" : "hover:text-blue-400"}`}>
                  Blog
                </Link>
              </div>

              <div className="flex items-center space-x-3">
                <button 
                  onClick={handleJoinNetworkClick}
                  className="flex items-center space-x-2 bg-gradient-to-br from-blue-900/70 to-cyan-900/70 hover:from-blue-800/80 hover:to-cyan-800/80 text-white px-4 py-2.5 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 border border-blue-500/30 backdrop-blur-sm"
                >
                  <Mail size={18} className="text-blue-400" />
                  <span>Join the Jullian Network</span>
                </button>
                
                <button 
                  onClick={handleLoginClick}
                  className="flex items-center space-x-2 bg-gradient-to-br from-gray-900/70 to-slate-900/70 hover:from-gray-800/80 hover:to-slate-800/80 text-white px-4 py-2.5 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 border border-slate-700/30 backdrop-blur-sm relative overflow-hidden before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-all before:duration-1000 hover:before:left-[100%]"
                >
                  <LogIn size={18} className="text-slate-400" />
                  <span>Jullian Dashboard</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Top Navbar - Only Logo */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 via-black/60 to-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-center items-center">
            <Link to="/" className="text-2xl font-bold">
              <span className="text-white drop-shadow-lg shadow-black/50">Jullian</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navbar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl rounded-3xl mx-4 mb-4">
        <div className="px-4 py-3">
          <div className="flex justify-between items-center">
            <Link to="/" className={`flex flex-col items-center justify-center p-3 rounded-2xl transition-all duration-300 ${
              location.pathname === '/' 
                ? 'bg-gradient-to-br from-blue-600 to-blue-500' 
                : ''
            }`}>
              <Home size={24} className={location.pathname === '/' ? "text-white mb-1" : "text-gray-400 mb-1"} />
              <span className={`text-xs font-medium ${location.pathname === '/' ? "text-white" : "text-gray-400"}`}>Home</span>
            </Link>
            
            <Link to="/creative-studio" className={`flex flex-col items-center justify-center p-3 rounded-2xl transition-all duration-300 ${
              location.pathname === '/creative-studio' 
                ? 'bg-gradient-to-br from-blue-600 to-blue-500' 
                : ''
            }`}>
              <Store size={24} className={location.pathname === '/creative-studio' ? "text-white mb-1" : "text-gray-400 mb-1"} />
              <span className={`text-xs ${location.pathname === '/creative-studio' ? "text-white" : "text-gray-400"}`}>Creative</span>
            </Link>
            
            <button 
              onClick={handleJoinNetworkClick}
              className="flex flex-col items-center justify-center p-3 rounded-2xl transition-all duration-300"
            >
              <Mail size={24} className="text-gray-400 mb-1" />
              <span className="text-xs text-gray-400">Join</span>
            </button>
            
            <button 
              onClick={handleLoginClick}
              className="flex flex-col items-center justify-center p-3 rounded-2xl transition-all duration-300"
            >
              <LogIn size={24} className="text-gray-400 mb-1" />
              <span className="text-xs text-gray-400">Dashboard</span>
            </button>
          </div>
        </div>
      </nav>

      <LoginPopup 
        isOpen={isLoginPopupOpen} 
        onClose={() => setIsLoginPopupOpen(false)} 
      />

      <JoinNetworkPopup 
        isOpen={isJoinNetworkPopupOpen} 
        onClose={() => setIsJoinNetworkPopupOpen(false)} 
      />
    </>
  );
};

export default Navbar;
