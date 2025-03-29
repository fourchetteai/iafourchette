
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ImageCarousel from '../components/ImageCarousel';
import Services from '../components/Services';
import Technology from '../components/Technology';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ImageCarousel />
      <Services />
      <Technology />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
