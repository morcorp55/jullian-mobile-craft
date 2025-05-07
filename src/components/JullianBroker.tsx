
import React, { useEffect, useRef } from "react";

const JullianBroker: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const pointsRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef<HTMLParagraphElement>(null);

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
    if (pointsRef.current) observer.observe(pointsRef.current);
    if (closingRef.current) observer.observe(closingRef.current);

    return () => observer.disconnect();
  }, []);

  const keyPoints = [
    {
      title: "Pre-qualified Connections",
      description: "We pre-qualify both sides – you only talk when there's a real deal"
    },
    {
      title: "Fair Valuations",
      description: "Valuation is based on actual traction, not inflated multipliers"
    },
    {
      title: "Market Knowledge",
      description: "Paid traffic or organic, we know what sells"
    }
  ];

  return (
    <section className="py-24 px-4 bg-jullian-dark">
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-5xl font-semibold mb-8 text-center transition-all duration-700 opacity-0 translate-y-10"
        >
          Jullian Broker
        </h2>
        
        <div 
          ref={contentRef}
          className="max-w-3xl mx-auto text-lg text-gray-300 mb-16 space-y-6 transition-all duration-700 delay-100 opacity-0 translate-y-10"
        >
          <p className="text-xl font-medium">
            Apps with meaningful MRR deserve meaningful exits.
          </p>
          <p>
            Jullian Broker connects ready-to-sell app founders with serious buyers. Discreetly, quickly, and at the highest fair value.
          </p>
        </div>
        
        <div 
          ref={pointsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-700 delay-200 opacity-0 translate-y-10"
        >
          {keyPoints.map((point, index) => (
            <div 
              key={index}
              className="px-6 py-10 rounded-3xl bg-gradient-to-br from-secondary to-secondary/50 group hover:shadow-[0_0_20px_rgba(99,102,241,0.1)] transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-jullian-indigo/30 to-jullian-violet/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-lg font-medium text-white">{index + 1}</span>
              </div>
              <h3 className="text-xl font-medium mb-3">{point.title}</h3>
              <p className="text-gray-400">{point.description}</p>
            </div>
          ))}
        </div>
        
        <p 
          ref={closingRef}
          className="text-xl text-center max-w-3xl mx-auto font-medium text-gradient transition-all duration-700 delay-300 opacity-0 translate-y-10"
        >
          If you're considering a full acquisition, we make sure your upside is protected and maximized.
        </p>
      </div>
    </section>
  );
};

export default JullianBroker;
