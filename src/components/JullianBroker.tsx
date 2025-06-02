

import React, { useEffect, useRef } from "react";
import { Separator } from "@/components/ui/separator";
const JullianBroker: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const pointsRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      });
    }, {
      threshold: 0.1
    });
    if (titleRef.current) observer.observe(titleRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (pointsRef.current) observer.observe(pointsRef.current);
    if (closingRef.current) observer.observe(closingRef.current);
    return () => observer.disconnect();
  }, []);
  const keyPoints = [{
    title: "Pre-qualified Connections",
    description: "We pre-qualify both sides – you only talk when there's a real deal"
  }, {
    title: "Fair Valuations",
    description: "Valuation is based on actual traction, not inflated multipliers"
  }, {
    title: "Market Knowledge",
    description: "Paid traffic or organic, we know what sells"
  }];
  return <section id="jullian-broker" className="py-24 px-4 bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="text-center">
              <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-3 transition-all duration-700 opacity-0 translate-y-10">
                Jullian Broker
              </h2>
              <Separator className="w-20 h-1 bg-blue-600 mb-6 mx-auto" />
            </div>
            
            {/* Image for mobile - below the title */}
            <div className="md:hidden relative p-12 mb-8">
              {/* Background glow effects */}
              <div className="absolute -top-12 -left-12 w-80 h-80 bg-gray-200/50 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-gray-300/40 rounded-full filter blur-3xl"></div>
              
              {/* Main image with expanded frame and white glow - matching Publishing section */}
              <div className="relative">
                {/* White outer glow - most expanded */}
                <div className="absolute -inset-8 bg-gradient-to-r from-white/80 via-white/60 to-white/80 rounded-3xl blur-xl"></div>
                {/* Outer glow frame - expanded further */}
                <div className="absolute -inset-6 bg-gradient-to-r from-gray-300/70 via-gray-200/50 to-gray-300/70 rounded-3xl blur-md"></div>
                {/* Middle glow frame */}
                <div className="absolute -inset-4 bg-gradient-to-r from-gray-400/60 via-gray-300/40 to-gray-400/60 rounded-3xl blur-sm"></div>
                {/* Inner border frame with elegant gray gradient */}
                <div className="absolute -inset-2 bg-gradient-to-br from-gray-600 via-gray-400 to-gray-600 rounded-2xl"></div>
                {/* Image */}
                <img alt="Broker" src="/lovable-uploads/4713a65d-3698-4059-b410-803d6c0996f1.jpg" className="rounded-2xl shadow-xl relative z-10 w-full h-full max-h-[500px] object-fill border-3 border-white/60" />
              </div>
            </div>
            
            <div ref={contentRef} className="text-lg text-gray-600 space-y-4 text-center transition-all duration-700 delay-100 opacity-0 translate-y-10">
              <p className="text-xl font-medium">
                Apps with meaningful MRR deserve meaningful exits.
              </p>
              <p>
                Jullian Broker connects ready-to-sell app founders with serious buyers. Discreetly, quickly, and at the highest fair value.
              </p>
            </div>
            
            <div ref={pointsRef} className="space-y-5 my-8 transition-all duration-700 delay-200 opacity-0 translate-y-10">
              {keyPoints.map((point, index) => <div key={index} className="flex flex-col items-center text-center gap-4 bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="font-semibold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{point.title}</h3>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                </div>)}
            </div>
            
            <p ref={closingRef} className="text-xl font-medium text-blue-600 text-center transition-all duration-700 delay-300 opacity-0 translate-y-10 border-l-4 border-blue-600 px-4">
              If you're considering a full acquisition, we make sure your upside is protected and maximized.
            </p>
          </div>
          
          {/* Desktop image - original position */}
          <div className="order-1 md:order-2 hidden md:block">
            <div className="relative p-12">
              {/* Background glow effects */}
              <div className="absolute -top-12 -left-12 w-80 h-80 bg-gray-200/50 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-gray-300/40 rounded-full filter blur-3xl"></div>
              
              {/* Main image with expanded frame and white glow - matching Publishing section */}
              <div className="relative">
                {/* White outer glow - most expanded */}
                <div className="absolute -inset-8 bg-gradient-to-r from-white/80 via-white/60 to-white/80 rounded-3xl blur-xl"></div>
                {/* Outer glow frame - expanded further */}
                <div className="absolute -inset-6 bg-gradient-to-r from-gray-300/70 via-gray-200/50 to-gray-300/70 rounded-3xl blur-md"></div>
                {/* Middle glow frame */}
                <div className="absolute -inset-4 bg-gradient-to-r from-gray-400/60 via-gray-300/40 to-gray-400/60 rounded-3xl blur-sm"></div>
                {/* Inner border frame with elegant gray gradient */}
                <div className="absolute -inset-2 bg-gradient-to-br from-gray-600 via-gray-400 to-gray-600 rounded-2xl"></div>
                {/* Image */}
                <img alt="Broker" src="/lovable-uploads/4713a65d-3698-4059-b410-803d6c0996f1.jpg" className="rounded-2xl shadow-xl relative z-10 w-full h-full max-h-[500px] object-fill border-3 border-white/60" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default JullianBroker;

