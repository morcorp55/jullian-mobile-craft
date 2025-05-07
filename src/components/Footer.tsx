
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f3f4fc] py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center mr-2">
                <span className="text-white font-bold">J</span>
              </div>
              <span className="text-[#0d2146] font-bold text-xl">Jullian.io</span>
            </div>
            <p className="text-[#566184] mb-4 max-w-sm">
              No frills. No fluff. Just results. Talk to us when you're ready to scale or sell. Until then, keep building.
            </p>
            <a 
              href="mailto:partners@jullian.io" 
              className="inline-flex items-center text-indigo-600 font-medium"
            >
              partners@jullian.io
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>

          {/* Quick links columns */}
          <div>
            <h3 className="font-semibold text-[#0d2146] mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#566184] hover:text-indigo-600 transition-colors">App Development</a></li>
              <li><a href="#" className="text-[#566184] hover:text-indigo-600 transition-colors">App Publishing</a></li>
              <li><a href="#" className="text-[#566184] hover:text-indigo-600 transition-colors">App Scaling</a></li>
              <li><a href="#" className="text-[#566184] hover:text-indigo-600 transition-colors">App Broking</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#0d2146] mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#566184] hover:text-indigo-600 transition-colors">About Us</a></li>
              <li><a href="#" className="text-[#566184] hover:text-indigo-600 transition-colors">Careers</a></li>
              <li><a href="#" className="text-[#566184] hover:text-indigo-600 transition-colors">Blog</a></li>
              <li><a href="#" className="text-[#566184] hover:text-indigo-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#0d2146] mb-4">Newsletter</h3>
            <p className="text-[#566184] mb-4">Subscribe to get the latest news</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white rounded-l-full px-4 py-2 border border-r-0 border-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <Button className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-l-none rounded-r-full">
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#566184] text-sm">© 2025 Jullian.io. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-[#566184] hover:text-indigo-600 transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#566184] hover:text-indigo-600 transition-colors">Terms of Service</a>
            <a href="#" className="text-[#566184] hover:text-indigo-600 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
