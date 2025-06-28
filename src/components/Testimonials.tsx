
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Bride",
    content: "The wedding invitations were absolutely perfect! The attention to detail and craftsmanship exceeded our expectations. Our guests couldn't stop talking about how beautiful they were.",
    rating: 5,
    image: "photo-1618160702438-9b02ab6515c9"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Event Planner",
    content: "I've worked with many paper craftsmen, but this level of artistry is unmatched. The decorative boxes added such elegance to our corporate events.",
    rating: 5,
    image: "photo-1721322800607-8c38375eef04"
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Art Collector",
    content: "Each piece tells a story. The handmade quality and unique designs make these paper creations true works of art that I treasure.",
    rating: 5,
    image: "photo-1465146344425-f00d5f5c8f07"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stories from those who have experienced the magic of handcrafted paper artistry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl border-0 bg-white/80 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
