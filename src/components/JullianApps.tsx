
import React, { useEffect, useRef } from "react";

const JullianApps: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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
    if (contentRef.current) observer.observe(contentRef.current);
    if (gridRef.current) observer.observe(gridRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="jullian-apps" className="py-24 px-4 bg-jullian-black relative">
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-5xl font-semibold mb-8 text-center transition-all duration-700 opacity-0 translate-y-10"
        >
          Jullian Apps
        </h2>
        
        <div 
          ref={contentRef}
          className="max-w-3xl mx-auto text-lg text-gray-300 mb-16 space-y-6 transition-all duration-700 delay-100 opacity-0 translate-y-10"
        >
          <p>
            We don't just support – we build. Jullian's internal team ships high-retention, profit-first mobile apps across multiple categories. Every launch we do feeds into a tighter feedback loop between growth and product. We don't publish what we don't believe in.
          </p>
          <p className="italic">
            From concept to cashflow: our success stories speak through numbers, not pitch decks.
          </p>
        </div>
        
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-200 opacity-0 translate-y-10"
        >
          {[...Array(6)].map((_, index) => (
            <div 
              key={index}
              className="relative aspect-square rounded-3xl overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-blue-900/30 to-violet-900/40 group-hover:opacity-70 transition-all duration-300"></div>
              <div className="absolute inset-0 backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 mb-4 flex items-center justify-center text-white font-bold text-xl">
                  {index + 1}
                </div>
                <div className="h-2 w-24 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mb-2"></div>
                <div className="h-2 w-16 bg-gray-700 rounded-full"></div>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                  <div className="h-2 w-12 bg-gray-700 rounded-full"></div>
                  <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-xs text-gray-400">+</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JullianApps;
