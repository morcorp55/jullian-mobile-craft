
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
    <section id="jullian-apps" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 opacity-0 translate-y-10"
          >
            Jullian Apps
          </h2>
          
          <div 
            ref={contentRef}
            className="text-lg text-gray-600 space-y-6 transition-all duration-700 delay-100 opacity-0 translate-y-10"
          >
            <p>
              We don't just support – we build. Jullian's internal team ships high-retention, profit-first mobile apps across multiple categories. Every launch we do feeds into a tighter feedback loop between growth and product. We don't publish what we don't believe in.
            </p>
            <p className="italic">
              From concept to cashflow: our success stories speak through numbers, not pitch decks.
            </p>
          </div>
        </div>
        
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 delay-200 opacity-0 translate-y-10"
        >
          {[...Array(6)].map((_, index) => (
            <div 
              key={index}
              className="rounded-2xl bg-white shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                <div className="w-16 h-16 rounded-xl bg-white shadow-md flex items-center justify-center">
                  <div className="text-blue-600 font-bold text-xl">
                    {index + 1}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">App Project {index + 1}</h3>
                <p className="text-gray-600">High-retention mobile application with seamless user experience and robust monetization strategy.</p>
                <div className="mt-4">
                  <button className="text-blue-600 font-medium flex items-center group-hover:underline">
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
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
