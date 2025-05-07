
import React, { useEffect, useRef } from "react";
import { CircleCheck } from "lucide-react";

const FeaturesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: "💾",
      title: "Data cleaning & preparation",
      description: "We handle TikTok, Meta, Search Ads & all major ad channels"
    },
    {
      icon: "🔄",
      title: "Key of machine learning",
      description: "We build your creatives, manage your funnel, and implement every event layer"
    }
  ];

  return (
    <section className="py-20 px-6 md:px-16 bg-[#f3f4fc]">
      <div 
        ref={sectionRef}
        className="max-w-7xl mx-auto transition-all duration-700 opacity-0 translate-y-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image/Chart */}
          <div 
            ref={imageRef} 
            className="bg-white p-6 rounded-3xl shadow-lg transition-all duration-700 delay-200 opacity-0 translate-y-10"
          >
            <div className="grid grid-cols-1 gap-6">
              {/* Chart component */}
              <div className="bg-[#f8f9fd] p-6 rounded-2xl">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-semibold text-[#0d2146]">App Performance</h4>
                  <span className="text-green-500 font-medium">+52%</span>
                </div>
                <div className="h-32 bg-gradient-to-b from-blue-100 to-transparent rounded-lg flex items-end p-2">
                  <div className="flex-1 h-1/3 rounded-md bg-blue-200"></div>
                  <div className="flex-1 h-1/2 rounded-md bg-blue-300 mx-1"></div>
                  <div className="flex-1 h-2/3 rounded-md bg-blue-400"></div>
                  <div className="flex-1 h-3/4 rounded-md bg-blue-500 mx-1"></div>
                  <div className="flex-1 h-full rounded-md bg-blue-600"></div>
                </div>
              </div>
              
              {/* Progress chart */}
              <div className="bg-[#f8f9fd] p-6 rounded-2xl">
                <h4 className="font-semibold text-[#0d2146] mb-4">Target Percent</h4>
                <div className="flex items-center justify-between">
                  {/* Circular progress SVG */}
                  <div className="w-24 h-24 relative">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#eee"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="3"
                        strokeDasharray="82, 100"
                        strokeLinecap="round"
                      />
                      <text x="18" y="21" textAnchor="middle" fontSize="8" fill="#0d2146" fontWeight="bold">
                        82%
                      </text>
                    </svg>
                  </div>
                  
                  {/* Legend */}
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-sm text-[#566184]">iOS</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm text-[#566184]">Android</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                      <span className="text-sm text-[#566184]">Web</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Text content */}
          <div 
            ref={contentRef} 
            className="transition-all duration-700 delay-300 opacity-0 translate-y-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0d2146]">
              Explore your AI project with our comprehensive experts
            </h2>
            
            <p className="text-[#566184] mb-10">
              Apps with meaningful MRR deserve meaningful exits. Jullian Broker connects ready-to-sell app founders with serious buyers. Discreetly, quickly, and at the highest fair value.
            </p>
            
            {/* Feature list */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f0f2fe] flex items-center justify-center text-xl flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1 text-[#0d2146]">{feature.title}</h3>
                    <p className="text-[#566184]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
