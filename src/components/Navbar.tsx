
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  onPublisherClick?: () => void;
  onBrokerClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onPublisherClick, onBrokerClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage first
      if (sectionId === 'jullian-publishing' && onPublisherClick) {
        onPublisherClick();
      } else if (sectionId === 'jullian-broker' && onBrokerClick) {
        onBrokerClick();
      }
    } else {
      // If on homepage, scroll directly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Jullian
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('jullian-publishing')}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Publisher
            </button>
            <button
              onClick={() => scrollToSection('jullian-broker')}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Broker
            </button>
            <Link
              to="/creative-studio"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Creative Studio
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/30 backdrop-blur-lg rounded-lg mt-2">
              <button
                onClick={() => scrollToSection('jullian-publishing')}
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors w-full text-left"
              >
                Publisher
              </button>
              <button
                onClick={() => scrollToSection('jullian-broker')}
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors w-full text-left"
              >
                Broker
              </button>
              <Link
                to="/creative-studio"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Creative Studio
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
