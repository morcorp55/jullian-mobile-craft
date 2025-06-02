
import React, { useState, useEffect } from "react";
import { X, Home, Sparkles, Mail, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import LoginPopup from "./LoginPopup";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  const handleLoginClick = () => {
    setIsLoginPopupOpen(true);
    setIsMobileMenuOpen(false);
  };

  return <>
      {/* Desktop Navbar */}
      <nav className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-xl py-4" : "bg-transparent py-6"}`}>
        {/* Gradient background with fade to transparent */}
        {isScrolled && (
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/30 via-purple-500/25 to-transparent"></div>
        )}
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl md:text-3xl lg:text-4xl font-bold">
              <span className="text-blue-400">Jullian</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="flex items-center space-x-8">
              <button onClick={() => scrollToSection("jullian-publishing")} className={`transition-colors ${isScrolled ? "text-white hover:text-blue-300" : "text-white hover:text-blue-400"}`}>
                Publishing
              </button>
              <button onClick={() => scrollToSection("jullian-broker")} className={`transition-colors ${isScrolled ? "text-white hover:text-blue-300" : "text-white hover:text-blue-400"}`}>
                Broker
              </button>
              <Link to="/creative-studio" className={`transition-colors ${isScrolled ? "text-white hover:text-blue-300" : "text-white hover:text-blue-400"}`}>
                Creative Studio
              </Link>
              <button className={`transition-colors ${isScrolled ? "text-white hover:text-blue-300" : "text-white hover:text-blue-400"}`}>
                Blog
              </button>
              <a href="mailto:partners@jullian.io" className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Submit your app
              </a>
              <button 
                onClick={handleLoginClick}
                className="relative overflow-hidden px-5 py-2 rounded-lg font-medium text-slate-50 bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 transform hover:scale-105 transition-all duration-300 border border-slate-600 before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-all before:duration-1000 hover:before:left-[100%]"
              >
                App Studio Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Top Navbar - Only Logo */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 via-black/60 to-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-center items-center">
            <Link to="/" className="text-2xl font-bold">
              <span className="text-blue-400">Jullian</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom App-Style Navbar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-t border-gray-800">
        <div className="px-2 py-2">
          <div className="flex items-center justify-around">
            {/* Home Button */}
            <Link to="/" className="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-gray-800/50 transition-colors">
              <Home size={22} className="text-blue-400 mb-1" />
              <span className="text-xs text-gray-300">Home</span>
            </Link>
            
            {/* Creative Studio Button */}
            <Link to="/creative-studio" className="flex flex-col items-center justify-center p-3 rounded-xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 hover:from-purple-800/60 hover:to-pink-800/60 transition-colors border border-purple-500/30">
              <Sparkles size={22} className="text-purple-400 mb-1" />
              <span className="text-xs text-gray-300">Creative</span>
            </Link>
            
            {/* Submit App Button */}
            <a href="mailto:partners@jullian.io" className="flex flex-col items-center justify-center p-3 rounded-xl bg-gradient-to-br from-blue-900/50 to-cyan-900/50 hover:from-blue-800/60 hover:to-cyan-800/60 transition-colors border border-blue-500/30">
              <Mail size={22} className="text-blue-400 mb-1" />
              <span className="text-xs text-gray-300">Submit</span>
            </a>
            
            {/* Login Button */}
            <button 
              onClick={handleLoginClick}
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-gradient-to-br from-gray-900/70 to-slate-900/70 hover:from-gray-800/80 hover:to-slate-800/80 transition-colors border border-slate-700/30"
            >
              <LogIn size={22} className="text-slate-400 mb-1" />
              <span className="text-xs text-gray-300">Login</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Login Popup */}
      <LoginPopup 
        isOpen={isLoginPopupOpen} 
        onClose={() => setIsLoginPopupOpen(false)} 
      />
    </>;
};
export default Navbar;
