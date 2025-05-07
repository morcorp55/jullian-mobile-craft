
import React, { useEffect, useRef } from "react";
import { CheckCircle } from "lucide-react";

const JullianPublishing: React.FC = () => {
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

  const points = [
    "We handle TikTok, Meta, Search Ads & all major ad channels",
    "We build your creatives, manage your funnel, and implement every event layer you're missing",
    "You stay focused on product. We cover growth. Revenue is shared, incentives aligned.",
  ];

  return (
    <section id="jullian-publishing" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-blue-100/50 rounded-full filter blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Publishing" 
                className="rounded-2xl shadow-xl relative z-10 object-cover w-full"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 
              ref={titleRef}
              className="text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 opacity-0 translate-y-10"
            >
              Jullian Publishing
            </h2>
            
            <div 
              ref={contentRef}
              className="text-lg text-gray-600 space-y-6 transition-all duration-700 delay-100 opacity-0 translate-y-10"
            >
              <p className="text-xl">
                There are good apps lost in the noise. That's where we step in.
              </p>
              <p>
                If you already have an app live but lack the infrastructure to scale, we bring the stack.
              </p>
            </div>
            
            <div 
              ref={pointsRef}
              className="space-y-4 mb-6 transition-all duration-700 delay-200 opacity-0 translate-y-10"
            >
              {points.map((point, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
            
            <p 
              ref={closingRef}
              className="text-xl font-medium text-blue-600 transition-all duration-700 delay-300 opacity-0 translate-y-10"
            >
              This isn't an agency model. We become partners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JullianPublishing;
