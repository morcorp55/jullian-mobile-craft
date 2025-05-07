
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f3f4fc] text-[#0d2146]">
      <Navbar />
      <Hero />
      <StatsSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;
