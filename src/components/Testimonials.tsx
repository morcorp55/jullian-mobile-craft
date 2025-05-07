
import React, { useRef, useEffect } from "react";

const Testimonials: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

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
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      quote: "Working with Jullian.io transformed our app's performance. They delivered exactly what we needed with no fluff.",
      author: "Alex Chen",
      role: "CEO, AppNexus"
    },
    {
      quote: "Their data-driven approach to scaling our user acquisition yielded a 4x ROAS within just three months.",
      author: "Sarah Johnson",
      role: "Founder, MobileFirst"
    },
    {
      quote: "The broker service connected us with the perfect buyer. The deal was smooth and the valuation exceeded our expectations.",
      author: "Michael Reynolds",
      role: "Former CEO, PocketApps"
    }
  ];

  return (
    <section className="py-20 px-4 bg-blue-50">
      <div className="max-w-7xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold mb-16 text-center transition-all duration-700 opacity-0 translate-y-10"
        >
          What Our Clients Say
        </h2>
        
        <div 
          ref={testimonialsRef}
          className="grid md:grid-cols-3 gap-8 transition-all duration-700 delay-100 opacity-0 translate-y-10"
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-md">
              <div className="mb-6 text-blue-600">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11H6C6 7.5 7 6 11 6V8C9 8 9 9 9 11H10C10.5523 11 11 11.4477 11 12V16C11 16.5523 10.5523 17 10 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10ZM18 11H14C14 7.5 15 6 19 6V8C17 8 17 9 17 11H18C18.5523 11 19 11.4477 19 12V16C19 16.5523 18.5523 17 18 17H15C14.4477 17 14 16.5523 14 16V12C14 11.4477 14.4477 11 15 11H18Z" fill="currentColor"/>
                </svg>
              </div>
              <p className="text-gray-700 mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
