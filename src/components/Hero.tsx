
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imagesSectionRef = useRef<HTMLDivElement>(null);
  const ratingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-5");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    if (imagesSectionRef.current) observer.observe(imagesSectionRef.current);
    if (ratingRef.current) observer.observe(ratingRef.current);

    return () => observer.disconnect();
  }, []);

  // Avatar images for the testimonial section
  const avatars = [
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&auto=format&fit=crop&q=80",
  ];

  return (
    <section className="min-h-screen w-full pt-20 pb-28 px-6 md:px-16 bg-[#f3f4fc] relative overflow-hidden">
      {/* Main content container with max width */}
      <div className="max-w-7xl mx-auto">
        {/* Upper section with two columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left column - Text content */}
          <div className="order-2 lg:order-1">
            <h1 
              ref={titleRef}
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#0d2146] transition-all duration-700 opacity-0 translate-y-5"
            >
              We Don't Build Hype. We Build Value.
            </h1>
            
            <p 
              ref={subtitleRef}
              className="text-lg md:text-xl text-[#566184] mb-8 max-w-xl transition-all duration-700 delay-300 opacity-0 translate-y-5"
            >
              Publishing, scaling, or selling your mobile app? Jullian.io is your silent partner with sharp execution.
            </p>
            
            <div 
              ref={ratingRef} 
              className="flex items-center gap-3 mb-8 transition-all duration-700 delay-500 opacity-0 translate-y-5"
            >
              <div className="flex -space-x-2">
                {avatars.map((avatar, index) => (
                  <img 
                    key={index} 
                    src={avatar} 
                    alt="Customer" 
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="text-lg font-semibold text-[#0d2146]">4.7</span>
                  <div className="flex ml-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <span className="text-sm text-[#566184]">(126+ client reviews)</span>
              </div>
            </div>
            
            <div 
              ref={ctaRef}
              className="flex flex-wrap gap-4 items-center transition-all duration-700 delay-700 opacity-0 translate-y-5"
            >
              <Button 
                className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-full px-8 py-6 text-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                Explore Our Work
              </Button>
              
              <button className="flex items-center gap-3 text-[#0d2146] font-medium">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                  <Play size={18} className="text-indigo-600 ml-1" />
                </div>
                <span>Our Success</span>
              </button>
            </div>
          </div>
          
          {/* Right column - Images */}
          <div 
            ref={imagesSectionRef} 
            className="order-1 lg:order-2 transition-all duration-700 delay-300 opacity-0 translate-y-5"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Left image - Analytics */}
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-4 rounded-2xl shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
                  alt="Analytics Dashboard" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              
              {/* Right image - People */}
              <div className="bg-gradient-to-br from-orange-400 to-red-500 p-4 rounded-2xl shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop&q=80"
                  alt="Team collaboration" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
