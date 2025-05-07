
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
    <section className="py-24 px-4 bg-gradient-to-b from-jullian-black to-jullian-dark">
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-5xl font-semibold mb-8 text-center transition-all duration-700 opacity-0 translate-y-10"
        >
          Jullian Publishing
        </h2>
        
        <div 
          ref={contentRef}
          className="max-w-3xl mx-auto text-lg text-gray-300 mb-16 space-y-6 transition-all duration-700 delay-100 opacity-0 translate-y-10"
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
          className="max-w-4xl mx-auto space-y-8 mb-16 transition-all duration-700 delay-200 opacity-0 translate-y-10"
        >
          {points.map((point, index) => (
            <div 
              key={index}
              className="flex items-start px-6 py-5 rounded-2xl bg-secondary"
            >
              <CheckCircle className="text-jullian-indigo mr-4 flex-shrink-0 mt-1" size={24} />
              <p className="text-lg text-gray-300">{point}</p>
            </div>
          ))}
        </div>
        
        <p 
          ref={closingRef}
          className="text-xl text-center max-w-3xl mx-auto font-medium text-gradient transition-all duration-700 delay-300 opacity-0 translate-y-10"
        >
          This isn't an agency model. We become partners.
        </p>
      </div>
    </section>
  );
};

export default JullianPublishing;
