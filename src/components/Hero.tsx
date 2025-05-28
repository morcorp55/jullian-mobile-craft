import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = ["Building", "Coding", "Dreaming"];

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
          entry.target.classList.remove("opacity-0", "translate-y-5");
        }
      });
    }, {
      threshold: 0.1
    });
    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const typeSpeed = 150;
    const deleteSpeed = 100;
    const pauseTime = 2000;

    const timeout = setTimeout(() => {
      const currentWord = words[currentIndex];
      
      if (!isDeleting) {
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, words]);

  const scrollToSection = () => {
    const firstSection = document.getElementById("jullian-publishing");
    if (firstSection) {
      firstSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-4 md:px-6 bg-transparent">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left space-y-6">
          <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold transition-all duration-700 delay-100 opacity-0 translate-y-5 text-white" style={{lineHeight: '1.5'}}>
            We Grow Your App.
            <br />
            <span className="text-blue-400">You Focus</span>
            <br />
            <span className="text-blue-400">
              on <span className="italic">{currentText}</span>
              <span className="animate-pulse">|</span>
            </span>
            <span className="text-blue-400"> 🚀</span>
          </h1>
          <p ref={subtitleRef} className="text-lg md:text-xl text-gray-300 max-w-xl transition-all duration-700 delay-300 opacity-0 translate-y-5">
            We create your ad creatives, fund the marketing, and run the campaigns.
            <br />
            Turkey's #1 and only mobile app publisher.
          </p>
          <div ref={ctaRef} className="pt-4 transition-all duration-700 delay-500 opacity-0 translate-y-5">
            <Button onClick={scrollToSection} className="bg-blue-600 text-white px-8 py-6 text-lg rounded-xl font-medium hover:bg-blue-700 transition-colors">
              Explore Our Services
              <ChevronDown size={16} className="ml-2" />
            </Button>
          </div>
        </div>
        
        <div ref={imageRef} className="transition-all duration-700 delay-300 opacity-0 translate-y-5">
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-blue-200/30 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-purple-200/30 rounded-full filter blur-3xl"></div>
            <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-2xl shadow-xl z-10 border border-white/20">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-blue-50/20 to-indigo-50/20 overflow-hidden flex items-center justify-center">
                <img alt="Jullian Memoji" className="w-full h-auto object-fill" src="/lovable-uploads/10db7202-6321-407b-b7e1-403425e60104.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default Hero;
