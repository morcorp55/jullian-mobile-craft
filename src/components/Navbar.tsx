
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold">
              <span className="text-blue-400">Jullian</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection("jullian-publishing")} className={`transition-colors ${isScrolled ? "text-black hover:text-blue-600" : "text-white hover:text-blue-400"}`}>
                Publishing
              </button>
              <button onClick={() => scrollToSection("jullian-broker")} className={`transition-colors ${isScrolled ? "text-black hover:text-blue-600" : "text-white hover:text-blue-400"}`}>
                Broker
              </button>
              <button className={`transition-colors ${isScrolled ? "text-black hover:text-blue-600" : "text-white hover:text-blue-400"}`}>
                Blog
              </button>
              <a href="mailto:partners@jullian.io" className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Submit your app
              </a>
              <button 
                onClick={handleLoginClick}
                className="relative overflow-hidden px-5 py-2 rounded-lg font-medium text-slate-50 bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-slate-600 before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-all before:duration-1000 hover:before:left-[100%]"
              >
                App Studio Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white hover:text-blue-400 focus:outline-none" onClick={() => setIsMobileMenuOpen(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex flex-col">
          <div className="flex justify-end p-6">
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-blue-400">
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 space-y-8 text-xl">
            <button onClick={() => scrollToSection("jullian-publishing")} className="text-white hover:text-blue-400 transition-colors py-2">
              Publishing
            </button>
            <button onClick={() => scrollToSection("jullian-broker")} className="text-white hover:text-blue-400 transition-colors py-2">
              Broker
            </button>
            <button className="text-white hover:text-blue-400 transition-colors py-2">
              Blog
            </button>
            <a href="mailto:partners@jullian.io" className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium">
              Submit your app
            </a>
            <button 
              onClick={handleLoginClick}
              className="relative overflow-hidden px-5 py-2 rounded-lg font-medium text-slate-50 bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-slate-600 before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-all before:duration-1000 hover:before:left-[100%]"
            >
              App Studio Login
            </button>
          </div>
        </div>}

      {/* Login Popup */}
      <LoginPopup 
        isOpen={isLoginPopupOpen} 
        onClose={() => setIsLoginPopupOpen(false)} 
      />
    </>;
};
export default Navbar;
