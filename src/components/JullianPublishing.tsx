import React, { useEffect, useRef } from "react";
import { CheckCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const JullianPublishing: React.FC = () => {
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
  const points = ["We build your creatives, manage your funnel, and implement every event layer you're missing", "We handle TikTok, Meta, Search Ads & all major ad channels", "You stay focused on product. We cover growth. Revenue is shared, incentives aligned."];
  return <section id="jullian-publishing" className="py-24 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative p-6">
              {/* Glow effects */}
              <div className="absolute -top-12 -left-12 w-80 h-80 bg-gray-200/50 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-gray-300/40 rounded-full filter blur-3xl"></div>
              
              {/* Main image with expanded frame */}
              <div className="relative">
                {/* Outer glow frame - expanded */}
                <div className="absolute -inset-4 bg-gradient-to-r from-gray-300/70 via-gray-200/50 to-gray-300/70 rounded-3xl blur-md"></div>
                {/* Middle glow frame */}
                <div className="absolute -inset-3 bg-gradient-to-r from-gray-400/60 via-gray-300/40 to-gray-400/60 rounded-3xl blur-sm"></div>
                {/* Inner border frame */}
                <div className="absolute -inset-2 bg-gradient-to-r from-gray-500/80 via-gray-400/60 to-gray-500/80 rounded-2xl"></div>
                {/* Image */}
                <img 
                  alt="Publishing" 
                  className="rounded-2xl shadow-2xl relative z-10 object-cover w-full h-full max-h-[500px] border-3 border-white/60" 
                  src="/lovable-uploads/32041a53-7987-462a-b8b1-875ab72db9f5.jpg" 
                />
              </div>
            </div>
          </div>

          <div className="space-y-8 order-1 md:order-2 text-left">
            <div>
              <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-3 transition-all duration-700 opacity-0 translate-y-10">
                Jullian Publishing
              </h2>
              <Separator className="w-20 h-1 bg-blue-600 mb-6" />
            </div>
            
            <div ref={contentRef} className="text-lg text-gray-600 space-y-4 transition-all duration-700 delay-100 opacity-0 translate-y-10">
              <p className="text-xl font-medium">
                There are good apps lost in the noise. That's where we step in.
              </p>
              <p>
                If you already have an app live but lack the infrastructure to scale, we bring the stack.
              </p>
            </div>
            
            <div ref={pointsRef} className="space-y-5 transition-all duration-700 delay-200 opacity-0 translate-y-10">
              {points.map((point, index) => <div key={index} className="flex items-start gap-4 bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <p className="text-gray-700">{point}</p>
                </div>)}
            </div>
            
            <p ref={closingRef} className="text-xl font-medium text-blue-600 transition-all duration-700 delay-300 opacity-0 translate-y-10 mt-6 border-l-4 border-blue-600 pl-4">
              This isn't an agency model. We become partners.
            </p>
          </div>
        </div>
      </div>
    </section>;
};

export default JullianPublishing;
