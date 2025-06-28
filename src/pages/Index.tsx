
import React from 'react';
import Hero from '../components/Hero';
import FeaturedCollections from '../components/FeaturedCollections';
import NewArrivals from '../components/NewArrivals';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Hero />
      <FeaturedCollections />
      <NewArrivals />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Index;
