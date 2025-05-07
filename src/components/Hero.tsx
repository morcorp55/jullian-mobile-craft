
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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

    return () => observer.disconnect();
  }, []);

  const scrollToSection = () => {
    const firstSection = document.getElementById("jullian-apps");
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-20 bg-jullian-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-jullian-indigo/5 to-transparent opacity-30"></div>
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center relative z-10">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 transition-all duration-700 delay-100 opacity-0 translate-y-5"
        >
          We Don't Build Hype.{" "}
          <span className="text-gradient">We Build Value.</span>
        </h1>
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 transition-all duration-700 delay-300 opacity-0 translate-y-5"
        >
          Publishing, scaling, or selling your mobile app? Jullian.io is your silent partner with sharp execution.
        </p>
        <div 
          ref={ctaRef}
          className="transition-all duration-700 delay-500 opacity-0 translate-y-5"
        >
          <Button 
            onClick={scrollToSection}
            className="ios-button group text-lg"
          >
            Explore Our Work
            <span className="ml-2 transform group-hover:translate-y-1 transition-transform">
              <ChevronDown size={16} />
            </span>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 w-full flex justify-center animate-bounce">
        <ChevronDown 
          size={24} 
          className="text-gray-500 cursor-pointer"
          onClick={scrollToSection}
        />
      </div>
    </section>
  );
};

export default Hero;
