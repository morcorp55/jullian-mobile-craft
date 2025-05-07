
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center mr-2">
              <span className="text-white font-bold">J</span>
            </div>
            <span className="text-[#0d2146] font-bold text-xl">Jullian.io</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-[#0d2146] font-medium hover:text-indigo-600 transition-colors">
              Home
            </a>
            <a href="#" className="text-[#566184] hover:text-indigo-600 transition-colors">
              About us
            </a>
            <a href="#" className="text-[#566184] hover:text-indigo-600 transition-colors">
              Services
            </a>
            <a href="#" className="text-[#566184] hover:text-indigo-600 transition-colors">
              Blog
            </a>
            <a href="#" className="text-[#566184] hover:text-indigo-600 transition-colors">
              Contact
            </a>
          </nav>

          {/* Sign Up Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-full px-6">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <a href="#" className="block text-[#0d2146] font-medium hover:text-indigo-600 transition-colors">
              Home
            </a>
            <a href="#" className="block text-[#566184] hover:text-indigo-600 transition-colors">
              About us
            </a>
            <a href="#" className="block text-[#566184] hover:text-indigo-600 transition-colors">
              Services
            </a>
            <a href="#" className="block text-[#566184] hover:text-indigo-600 transition-colors">
              Blog
            </a>
            <a href="#" className="block text-[#566184] hover:text-indigo-600 transition-colors">
              Contact
            </a>
            <Button className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-full w-full mt-4">
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
