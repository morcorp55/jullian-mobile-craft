
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-black">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Jullian Blog
          </span>
        </h1>
        
        <div className="text-center text-white/80 mb-16">
          <p className="text-lg">Our blog content will be coming soon!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog post placeholders will go here */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div 
              key={i} 
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm 
                        border border-gray-700/30 rounded-xl overflow-hidden transition-all 
                        hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              <div className="h-48 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Coming Soon: Blog Post {i}</h3>
                <p className="text-gray-400">We're working on bringing you valuable content. Stay tuned!</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;
