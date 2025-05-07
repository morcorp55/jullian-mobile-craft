
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import JullianApps from "@/components/JullianApps";
import JullianPublishing from "@/components/JullianPublishing";
import JullianBroker from "@/components/JullianBroker";
import FeatureHighlights from "@/components/FeatureHighlights";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  // Add IDs to the sections for navigation
  useEffect(() => {
    const publishingSection = document.getElementById("jullian-publishing");
    if (!publishingSection) {
      const section = document.querySelector("section:nth-of-type(3)");
      if (section) section.id = "jullian-publishing";
    }

    const brokerSection = document.getElementById("jullian-broker");
    if (!brokerSection) {
      const section = document.querySelector("section:nth-of-type(4)");
      if (section) section.id = "jullian-broker";
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Stats />
      <JullianApps />
      <FeatureHighlights />
      <JullianPublishing />
      <Testimonials />
      <JullianBroker />
      <Footer />
    </div>
  );
};

export default Index;
