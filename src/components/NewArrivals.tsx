
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Vintage Rose Box",
    price: "$45.00",
    image: "photo-1618160702438-9b02ab6515c9",
    isNew: true
  },
  {
    id: 2,
    name: "Golden Anniversary Card",
    price: "$12.00",
    image: "photo-1465146344425-f00d5f5c8f07",
    isNew: true
  },
  {
    id: 3,
    name: "Artisan Gift Set",
    price: "$85.00",
    image: "photo-1721322800607-8c38375eef04",
    isNew: false
  },
  {
    id: 4,
    name: "Handmade Journal",
    price: "$28.00",
    image: "photo-1618160702438-9b02ab6515c9",
    isNew: true
  }
];

const NewArrivals = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            New Arrivals
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fresh creations added to our collection, each one unique and made with love.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl border-0 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                {product.isNew && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      NEW
                    </span>
                  </div>
                )}
                <img 
                  src={`https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=400&q=80`}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-2xl font-bold text-orange-600 mb-4">{product.price}</p>
                <Button 
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-orange-400 text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-full transition-all duration-300"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
