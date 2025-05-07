
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  const scrollToSection = () => {
    const firstSection = document.getElementById("jullian-apps");
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-4 md:px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left space-y-6">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-700 delay-100 opacity-0 translate-y-5"
          >
            We Don't Build Hype.{" "}
            <span className="text-blue-600">We Build Value.</span>
          </h1>
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl text-gray-600 max-w-xl transition-all duration-700 delay-300 opacity-0 translate-y-5"
          >
            Publishing, scaling, or selling your mobile app? Jullian.io is your silent partner with sharp execution.
          </p>
          <div 
            ref={ctaRef}
            className="pt-4 transition-all duration-700 delay-500 opacity-0 translate-y-5"
          >
            <Button 
              onClick={scrollToSection}
              className="bg-blue-600 text-white px-8 py-6 text-lg rounded-xl font-medium hover:bg-blue-700 transition-colors"
            >
              Explore Our Work
              <ChevronDown size={16} className="ml-2" />
            </Button>
          </div>
        </div>
        
        <div 
          ref={imageRef} 
          className="transition-all duration-700 delay-300 opacity-0 translate-y-5"
        >
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-blue-200/50 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-indigo-200/50 rounded-full filter blur-3xl"></div>
            <div className="relative bg-white p-4 rounded-2xl shadow-xl z-10">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden flex items-center justify-center">
                <div className="p-8">
                  <svg className="w-full h-auto text-blue-600" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 58.6667C46.7276 58.6667 58.6667 46.7276 58.6667 32C58.6667 17.2724 46.7276 5.33334 32 5.33334C17.2724 5.33334 5.33334 17.2724 5.33334 32C5.33334 46.7276 17.2724 58.6667 32 58.6667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M32 42.6667C37.891 42.6667 42.6667 37.891 42.6667 32C42.6667 26.109 37.891 21.3333 32 21.3333C26.109 21.3333 21.3334 26.109 21.3334 32C21.3334 37.891 26.109 42.6667 32 42.6667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M32 32V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M44 32H48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 32H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M32 48V44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
