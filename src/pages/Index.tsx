
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import JullianPublishing from "@/components/JullianPublishing";
import JullianBroker from "@/components/JullianBroker";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  // Add IDs to the sections for navigation
  useEffect(() => {
    const publishingSection = document.getElementById("jullian-publishing");
    if (!publishingSection) {
      const section = document.querySelector("section:nth-of-type(2)");
      if (section) section.id = "jullian-publishing";
    }

    const brokerSection = document.getElementById("jullian-broker");
    if (!brokerSection) {
      const section = document.querySelector("section:nth-of-type(3)");
      if (section) section.id = "jullian-broker";
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 via-black to-blue-900 text-foreground">
      <Navbar />
      <Hero />
      <JullianPublishing />
      <JullianBroker />
      <Footer />
    </div>
  );
};

export default Index;
