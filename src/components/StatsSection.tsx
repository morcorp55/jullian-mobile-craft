
import React, { useEffect, useRef } from "react";
import { Play } from "lucide-react";

const StatsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-6 md:px-16 bg-[#f3f4fc]">
      <div 
        ref={sectionRef}
        className="max-w-7xl mx-auto transition-all duration-700 opacity-0 translate-y-10"
      >
        {/* Success indicator with button */}
        <div className="flex items-center gap-4 mb-8">
          <button className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md">
            <Play size={20} className="text-indigo-600 ml-1" />
          </button>
          <span className="text-sm font-medium text-indigo-600">Our Success</span>
        </div>
        
        {/* Title and subtitle */}
        <div className="max-w-3xl mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-6 text-[#0d2146] transition-all duration-700 delay-200 opacity-0 translate-y-10"
          >
            25 Years of product development success proves our ability
          </h2>
          
          <p 
            ref={subtitleRef}
            className="text-[#566184] text-lg transition-all duration-700 delay-300 opacity-0 translate-y-10"
          >
            We don't just support – we build. Jullian's internal team ships high-retention, profit-first mobile apps across multiple categories.
          </p>
        </div>
        
        {/* Stats grid */}
        <div 
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 delay-400 opacity-0 translate-y-10"
        >
          {/* Stat 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h3 className="text-5xl font-bold mb-2 text-[#0d2146]">15m+</h3>
            <p className="text-[#566184]">Our users around the world</p>
          </div>
          
          {/* Stat 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h3 className="text-5xl font-bold mb-2 text-[#0d2146]">99%</h3>
            <p className="text-[#566184]">Our project success on time</p>
          </div>
          
          {/* Stat 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h3 className="text-5xl font-bold mb-2 text-[#0d2146]">9k+</h3>
            <p className="text-[#566184]">App install every month from beginning</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
