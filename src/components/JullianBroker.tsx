
import React, { useEffect, useRef } from "react";
import { Separator } from "@/components/ui/separator";

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
    <section id="jullian-broker" className="py-24 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="text-center">
              <h2 
                ref={titleRef}
                className="text-3xl md:text-4xl font-bold mb-3 transition-all duration-700 opacity-0 translate-y-10"
              >
                Jullian Broker
              </h2>
              <Separator className="w-20 h-1 bg-blue-600 mb-6 mx-auto" />
            </div>
            
            <div 
              ref={contentRef}
              className="text-lg text-gray-600 space-y-4 text-center transition-all duration-700 delay-100 opacity-0 translate-y-10"
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
              className="space-y-5 my-8 transition-all duration-700 delay-200 opacity-0 translate-y-10"
            >
              {keyPoints.map((point, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center text-center gap-4 bg-blue-50/50 p-4 rounded-lg border border-blue-100"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="font-semibold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{point.title}</h3>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <p 
              ref={closingRef}
              className="text-xl font-medium text-blue-600 text-center transition-all duration-700 delay-300 opacity-0 translate-y-10 border-l-4 border-blue-600 px-4"
            >
              If you're considering a full acquisition, we make sure your upside is protected and maximized.
            </p>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-blue-100/50 rounded-full filter blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Broker" 
                className="rounded-2xl shadow-xl relative z-10 object-cover w-full h-full max-h-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JullianBroker;
