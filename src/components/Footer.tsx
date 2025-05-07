
import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <footer className="py-24 px-4 bg-gradient-to-br from-jullian-indigo/20 via-jullian-blue/10 to-jullian-violet/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-5xl font-semibold mb-6 transition-all duration-700 opacity-0 translate-y-10"
        >
          No frills. No fluff. Just results.
        </h2>
        
        <p 
          ref={subtitleRef}
          className="text-xl text-gray-300 mb-12 transition-all duration-700 delay-100 opacity-0 translate-y-10"
        >
          Talk to us when you're ready to scale or sell. Until then, keep building.
        </p>
        
        <div 
          ref={ctaRef}
          className="transition-all duration-700 delay-200 opacity-0 translate-y-10"
        >
          <a 
            href="mailto:partners@jullian.io" 
            className="inline-flex items-center ios-button text-lg"
          >
            partners@jullian.io
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <div className="mt-16 text-sm text-gray-500">
            <p>© 2025 Jullian.io. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
