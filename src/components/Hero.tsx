
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-100 via-orange-100 to-red-100">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, #f59e0b 2px, transparent 2px)`,
            backgroundSize: '60px 60px',
            animation: 'pulse 4s ease-in-out infinite'
          }}></div>
        </div>
      </div>
      
      {/* Floating paper elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-6 bg-orange-200 rounded-sm shadow-lg transform rotate-12 animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-amber-200 rounded-full shadow-lg animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-5 h-8 bg-red-200 rounded-sm shadow-lg transform -rotate-6 animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-8 h-4 bg-orange-300 rounded-sm shadow-lg transform rotate-45 animate-float"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 animate-fade-in">
          Handcrafted
          <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Paper Artistry
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed animate-fade-in-delayed">
          Discover unique decorative boxes, elegant invitation cards, and bespoke paper creations 
          that tell your story with timeless beauty.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-slow">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Explore Collections
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-orange-400 text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-full transition-all duration-300"
          >
            Learn Our Story
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
