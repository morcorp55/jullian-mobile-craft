
import React, { useRef, useEffect } from "react";

const Stats: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);

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

    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      value: "150+",
      label: "Apps Published"
    },
    {
      value: "$25M+",
      label: "Revenue Generated"
    },
    {
      value: "45+",
      label: "Successful Exits"
    },
    {
      value: "92%",
      label: "Client Satisfaction"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div 
        ref={statsRef}
        className="max-w-7xl mx-auto transition-all duration-700 opacity-0 translate-y-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
