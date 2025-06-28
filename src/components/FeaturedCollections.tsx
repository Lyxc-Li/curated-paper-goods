
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const collections = [
  {
    id: 1,
    title: "Wedding Invitations",
    description: "Elegant cards for your special day",
    image: "photo-1618160702438-9b02ab6515c9",
    color: "from-rose-400 to-pink-500"
  },
  {
    id: 2,
    title: "Decorative Boxes",
    description: "Beautiful storage solutions",
    image: "photo-1721322800607-8c38375eef04",
    color: "from-amber-400 to-orange-500"
  },
  {
    id: 3,
    title: "Greeting Cards",
    description: "Express yourself with artistry",
    image: "photo-1465146344425-f00d5f5c8f07",
    color: "from-emerald-400 to-teal-500"
  }
];

const FeaturedCollections = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured Collections
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each piece is lovingly crafted by hand, bringing unique character and warmth to your special moments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Card 
              key={collection.id} 
              className="group hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl border-0 overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${collection.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <img 
                  src={`https://images.unsplash.com/${collection.image}?auto=format&fit=crop&w=500&q=80`}
                  alt={collection.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  {collection.title}
                </h3>
                <p className="text-gray-600 mb-4">{collection.description}</p>
                <div className="flex items-center text-orange-600 font-medium group-hover:text-orange-700 transition-colors duration-300">
                  Explore Collection
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
