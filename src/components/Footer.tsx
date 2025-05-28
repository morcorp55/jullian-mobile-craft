
import React, { useEffect, useRef } from "react";
import { ArrowRight, Linkedin, Phone, Send } from "lucide-react";

const Footer: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="py-20 px-4 bg-gradient-to-br from-purple-900 via-gray-900 via-black to-blue-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-5xl font-bold mb-6 transition-all duration-700 opacity-0 translate-y-10"
        >
          No frills. No fluff. Just results.
        </h2>
        
        <p 
          ref={subtitleRef}
          className="text-xl text-white/80 mb-12 transition-all duration-700 delay-100 opacity-0 translate-y-10"
        >
          Talk to us when you're ready to scale or sell. Until then, keep building.
        </p>
        
        <div 
          ref={ctaRef}
          className="transition-all duration-700 delay-200 opacity-0 translate-y-10"
        >
          <a 
            href="mailto:partners@jullian.io" 
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-medium hover:bg-blue-50 transition-all mb-8"
          >
            partners@jullian.io
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <div className="flex justify-center space-x-6 mb-16">
            <a 
              href="https://wa.me/905000000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all hover:scale-110"
            >
              <Phone size={24} className="text-white" />
            </a>
            <a 
              href="https://t.me/jullianio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all hover:scale-110"
            >
              <Send size={24} className="text-white" />
            </a>
            <a 
              href="https://linkedin.com/company/jullianio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all hover:scale-110"
            >
              <Linkedin size={24} className="text-white" />
            </a>
          </div>
          
          <div className="text-sm text-white/70">
            <p>© 2025 Jullian.io. All rights reserved.</p>
            <p className="mt-2">Made with pride and love in Moda ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
