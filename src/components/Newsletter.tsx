
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-red-600">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Stay Inspired
          </h2>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest creations, crafting tips, and exclusive offers delivered to your inbox.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-6 py-4 rounded-full text-gray-800 border-0 focus:ring-4 focus:ring-orange-300"
            required
          />
          <Button 
            type="submit"
            size="lg"
            className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Subscribe
          </Button>
        </form>
        
        <div className={`mt-6 transition-all duration-500 ${isSubscribed ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
          <p className="text-white bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 inline-block">
            ✨ Thank you for subscribing! Welcome to our artisan community.
          </p>
        </div>
        
        <p className="text-orange-200 text-sm mt-6">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
