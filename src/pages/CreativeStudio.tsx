
import React from "react";
import Navbar from "@/components/Navbar";
import { Play, Award, Zap, CheckCircle, Clock } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import VideoCard from "@/components/VideoCard";
import ContactPopup from "@/components/ContactPopup";

// Placeholder video data - sen bunları kendi verilerinle değiştireceksin
const videoData = [
  {
    id: "1",
    title: "Gaming App Campaign #1",
    description: "High-engaging vertical video ad that increased downloads by 250%",
    thumbnailUrl: "/placeholder-thumbnail-1.jpg", // Sen kendi thumbnail'lerini ekleyeceksin
    videoUrl: "/placeholder-video-1.mp4", // Sen kendi video URL'lerini ekleyeceksin
    duration: "0:15s",
    views: "3.2M Views",
    downloads: "+250% Downloads"
  },
  {
    id: "2",
    title: "Fitness App Campaign #2",
    description: "Motivational content that drove massive user engagement",
    thumbnailUrl: "/placeholder-thumbnail-2.jpg",
    videoUrl: "/placeholder-video-2.mp4",
    duration: "0:18s",
    views: "4.1M Views",
    downloads: "+320% Downloads"
  },
  {
    id: "3",
    title: "E-commerce App Campaign #3",
    description: "Product showcase video with exceptional conversion rates",
    thumbnailUrl: "/placeholder-thumbnail-3.jpg",
    videoUrl: "/placeholder-video-3.mp4",
    duration: "0:22s",
    views: "2.8M Views",
    downloads: "+180% Downloads"
  },
  {
    id: "4",
    title: "Social Media App Campaign #4",
    description: "Viral content that exploded across all platforms",
    thumbnailUrl: "/placeholder-thumbnail-4.jpg",
    videoUrl: "/placeholder-video-4.mp4",
    duration: "0:16s",
    views: "5.7M Views",
    downloads: "+420% Downloads"
  },
  {
    id: "5",
    title: "Food Delivery App Campaign #5",
    description: "Appetite-inducing visuals with strong call-to-action",
    thumbnailUrl: "/placeholder-thumbnail-5.jpg",
    videoUrl: "/placeholder-video-5.mp4",
    duration: "0:20s",
    views: "3.9M Views",
    downloads: "+290% Downloads"
  },
  {
    id: "6",
    title: "Travel App Campaign #6",
    description: "Adventure-packed content inspiring wanderlust",
    thumbnailUrl: "/placeholder-thumbnail-6.jpg",
    videoUrl: "/placeholder-video-6.mp4",
    duration: "0:25s",
    views: "4.6M Views",
    downloads: "+350% Downloads"
  }
];

const CreativeStudio: React.FC = () => {
  const [isContactPopupOpen, setIsContactPopupOpen] = React.useState(false);

  const scrollToShowcase = () => {
    const showcaseSection = document.getElementById('creative-showcase');
    if (showcaseSection) {
      showcaseSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const handleContactClick = () => {
    setIsContactPopupOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900/80 via-purple-900/60 via-gray-900/70 to-blue-900/80 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/15 to-pink-600/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-indigo-500/15 to-purple-500/10" style={{
          animation: 'float 8s ease-in-out infinite'
        }}></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-2xl">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">Julian </span>
              <span className="moving-gradient-text drop-shadow-lg">Creative</span> <span className="moving-gradient-text drop-shadow-lg">Studio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto drop-shadow-lg font-medium">
              High-engaging video ad creatives for B2C app companies. We transform your app into viral-worthy content that drives downloads and engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToShowcase}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 drop-shadow-xl"
              >
                View Our Portfolio
              </button>
              <button 
                onClick={handleContactClick}
                className="relative overflow-hidden border border-gray-500/50 bg-black/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800/30 transition-all duration-300 drop-shadow-xl before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-all before:duration-1000 hover:before:left-[100%]"
              >
                Accelerate Your Downloads 🚀
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
              Our Creative Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-900/70 to-blue-900/70 backdrop-blur-xl p-8 rounded-2xl border border-gray-600/40 hover:border-blue-500/60 transition-all duration-300 shadow-xl">
                <Play className="w-12 h-12 text-blue-400 mb-4 drop-shadow-lg" />
                <h3 className="text-xl font-bold mb-4 text-white drop-shadow-md">Video Ad Production</h3>
                <p className="text-gray-200 drop-shadow-sm">High-quality video ads optimized for social media platforms with proven conversion rates.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/70 to-blue-900/70 backdrop-blur-xl p-8 rounded-2xl border border-gray-600/40 hover:border-pink-500/60 transition-all duration-300 shadow-xl">
                <Zap className="w-12 h-12 text-pink-400 mb-4 drop-shadow-lg" />
                <h3 className="text-xl font-bold mb-4 text-white drop-shadow-md">Viral Content Creation</h3>
                <p className="text-gray-200 drop-shadow-sm">Trend-aware content that captures attention and drives organic reach.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/70 to-blue-900/70 backdrop-blur-xl p-8 rounded-2xl border border-gray-600/40 hover:border-green-500/60 transition-all duration-300 shadow-xl">
                <Award className="w-12 h-12 text-green-400 mb-4 drop-shadow-lg" />
                <h3 className="text-xl font-bold mb-4 text-white drop-shadow-md">Creative Strategy</h3>
                <p className="text-gray-200 drop-shadow-sm">Comprehensive creative direction tailored to your app's unique value proposition.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
              How We Work
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-8">
                <div className="bg-black/30 backdrop-blur-md p-8 rounded-2xl border border-gray-600/30 hover:border-blue-500/50 transition-all duration-300 shadow-xl">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <span className="text-7xl font-bold bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">1</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-blue-400 drop-shadow-md">App & Audience Analysis</h3>
                      <p className="text-gray-200 drop-shadow-sm">We thoroughly understand your app and its target audience, analyzing user behavior patterns and market positioning to create the perfect creative strategy.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 backdrop-blur-md p-8 rounded-2xl border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300 shadow-xl">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <span className="text-7xl font-bold bg-gradient-to-br from-purple-400 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">2</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-purple-400 drop-shadow-md">Competitor Research</h3>
                      <p className="text-gray-200 drop-shadow-sm">We analyze the ad creatives of your competitors to identify market trends, successful strategies, and opportunities for differentiation.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-black/30 backdrop-blur-md p-8 rounded-2xl border border-gray-600/30 hover:border-pink-500/50 transition-all duration-300 shadow-xl">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <span className="text-7xl font-bold bg-gradient-to-br from-pink-400 to-pink-600 bg-clip-text text-transparent drop-shadow-lg">3</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-pink-400 drop-shadow-md">Target Audience Deep Dive</h3>
                      <p className="text-gray-200 drop-shadow-sm">We conduct detailed analysis of your target audiences, understanding their pain points, motivations, and preferred content formats.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 backdrop-blur-md p-8 rounded-2xl border border-gray-600/30 hover:border-green-500/50 transition-all duration-300 shadow-xl">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <span className="text-7xl font-bold bg-gradient-to-br from-green-400 to-green-600 bg-clip-text text-transparent drop-shadow-lg">4</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-green-400 drop-shadow-md">Creative Production & Delivery</h3>
                      <p className="text-gray-200 drop-shadow-sm">We create compelling creatives based on key themes that hook users to download your app and drive in-app purchases, delivered in your desired formats.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Promise */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 backdrop-blur-xl p-8 rounded-2xl border border-yellow-500/40 inline-block shadow-xl">
                <div className="flex items-center justify-center space-x-3 mb-2">
                  <Clock className="w-8 h-8 text-yellow-400 drop-shadow-lg" />
                  <CheckCircle className="w-8 h-8 text-green-400 drop-shadow-lg" />
                </div>
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent drop-shadow-md">
                  48-Hour Delivery Guarantee
                </h3>
                <p className="text-gray-200 text-lg drop-shadow-sm">
                  Your creatives will be ready within maximum 48 hours after order confirmation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Showcase */}
        <section id="creative-showcase" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
              Creative Showcase
            </h2>
            
            <div className="relative max-w-6xl mx-auto">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {videoData.map((video) => (
                    <CarouselItem key={video.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <VideoCard
                        id={video.id}
                        title={video.title}
                        description={video.description}
                        thumbnailUrl={video.thumbnailUrl}
                        videoUrl={video.videoUrl}
                        duration={video.duration}
                        views={video.views}
                        downloads={video.downloads}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-black/70 border-gray-500 hover:bg-black/80 text-white shadow-xl" />
                <CarouselNext className="right-4 bg-black/70 border-gray-500 hover:bg-black/80 text-white shadow-xl" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
              Ready to Create Viral Content?
            </h2>
            <p className="text-xl text-gray-200 mb-8 drop-shadow-md font-medium">
              Let our creative team transform your app into the next viral sensation with high-converting video ads.
            </p>
            <button 
              onClick={handleContactClick}
              className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-block before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-all before:duration-1000 hover:before:left-[100%] drop-shadow-xl"
            >
              Accelerate Your Downloads 🚀
            </button>
          </div>
        </section>

        {/* Contact Popup */}
        <ContactPopup 
          isOpen={isContactPopupOpen} 
          onClose={() => setIsContactPopupOpen(false)} 
        />
      </div>
    </div>
  );
};

export default CreativeStudio;
