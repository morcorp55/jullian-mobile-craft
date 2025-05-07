
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-xl md:text-2xl font-bold">
              <span className="text-blue-600">Jullian.io</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("jullian-apps")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Jullian Apps
              </button>
              <button
                onClick={() => scrollToSection("jullian-publishing")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Publishing
              </button>
              <button
                onClick={() => scrollToSection("jullian-broker")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Broker
              </button>
              <a
                href="mailto:partners@jullian.io"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-lg flex flex-col">
          <div className="flex justify-end p-6">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 space-y-8 text-xl">
            <button
              onClick={() => scrollToSection("jullian-apps")}
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              Jullian Apps
            </button>
            <button
              onClick={() => scrollToSection("jullian-publishing")}
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              Publishing
            </button>
            <button
              onClick={() => scrollToSection("jullian-broker")}
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              Broker
            </button>
            <a
              href="mailto:partners@jullian.io"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
