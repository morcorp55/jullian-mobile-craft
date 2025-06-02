
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

const CreativeStudio: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 via-black to-blue-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Julian </span>
            <span className="moving-gradient-text">Creative</span> <span className="moving-gradient-text">Studio</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            High-engaging video ad creatives for B2C app companies. We transform your app into viral-worthy content that drives downloads and engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
              View Our Portfolio
            </button>
            <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-300">
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Creatives Produced</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">150+</div>
              <div className="text-gray-300">Apps Promoted</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">300%</div>
              <div className="text-gray-300">Avg. Engagement Boost</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Our Creative Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
              <Play className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Video Ad Production</h3>
              <p className="text-gray-300">High-quality video ads optimized for social media platforms with proven conversion rates.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300">
              <Zap className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Viral Content Creation</h3>
              <p className="text-gray-300">Trend-aware content that captures attention and drives organic reach.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300">
              <Award className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Creative Strategy</h3>
              <p className="text-gray-300">Comprehensive creative direction tailored to your app's unique value proposition.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            How We Work
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <span className="text-7xl font-bold bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-transparent">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-blue-400">App & Audience Analysis</h3>
                    <p className="text-gray-300">We thoroughly understand your app and its target audience, analyzing user behavior patterns and market positioning to create the perfect creative strategy.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <span className="text-7xl font-bold bg-gradient-to-br from-purple-400 to-purple-600 bg-clip-text text-transparent">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-purple-400">Competitor Research</h3>
                    <p className="text-gray-300">We analyze the ad creatives of your competitors to identify market trends, successful strategies, and opportunities for differentiation.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/30 hover:border-pink-500/50 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <span className="text-7xl font-bold bg-gradient-to-br from-pink-400 to-pink-600 bg-clip-text text-transparent">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-pink-400">Target Audience Deep Dive</h3>
                    <p className="text-gray-300">We conduct detailed analysis of your target audiences, understanding their pain points, motivations, and preferred content formats.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/30 hover:border-green-500/50 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <span className="text-7xl font-bold bg-gradient-to-br from-green-400 to-green-600 bg-clip-text text-transparent">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-green-400">Creative Production & Delivery</h3>
                    <p className="text-gray-300">We create compelling creatives based on key themes that hook users to download your app and drive in-app purchases, delivered in your desired formats.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Promise */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 backdrop-blur-xl p-8 rounded-2xl border border-yellow-500/30 inline-block">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <Clock className="w-8 h-8 text-yellow-400" />
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                48-Hour Delivery Guarantee
              </h3>
              <p className="text-gray-300 text-lg">
                Your creatives will be ready within maximum 48 hours after order confirmation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
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
                {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-300 group">
                      {/* Vertical Video Container */}
                      <div className="aspect-[9/16] bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center relative">
                        <Play className="w-20 h-20 text-white/80 group-hover:text-blue-400 transition-colors duration-300" />
                        <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                          0:{index + 14}s
                        </div>
                        {/* Video overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-lg font-semibold mb-2">Gaming App Campaign #{index}</h3>
                        <p className="text-gray-400 text-sm mb-4">High-engaging vertical video ad that increased downloads by 250%</p>
                        <div className="flex justify-between items-center">
                          <span className="text-blue-400 font-semibold">+250% Downloads</span>
                          <span className="text-purple-400 font-semibold">{(index * 0.8 + 3.2).toFixed(1)}M Views</span>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-black/50 border-gray-600 hover:bg-black/70 text-white" />
              <CarouselNext className="right-4 bg-black/50 border-gray-600 hover:bg-black/70 text-white" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Ready to Create Viral Content?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our creative team transform your app into the next viral sensation with high-converting video ads.
          </p>
          <a href="mailto:creative@jullian.io" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-block">
            Start Your Creative Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default CreativeStudio;
