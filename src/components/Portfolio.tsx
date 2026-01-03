// components/Portfolio.jsx
import React, { useState } from 'react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'gel', label: 'Gel Nails' },
    { id: 'acrylic', label: 'Acrylics' },
    { id: 'nailart', label: 'Nail Art' },
    { id: 'natural', label: 'Natural Look' }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'French Tip Elegance',
      category: 'gel',
      description: 'Classic french tips with a modern twist',
      imageColor: 'bg-gradient-to-br from-pink-200 to-pink-100'
    },
    {
      id: 2,
      title: 'Marble Magic',
      category: 'nailart',
      description: 'Hand-painted marble design with gold foil',
      imageColor: 'bg-gradient-to-br from-blue-200 to-purple-200'
    },
    {
      id: 3,
      title: 'Sparkle & Shine',
      category: 'acrylic',
      description: 'Coffin shape with glitter ombre effect',
      imageColor: 'bg-gradient-to-br from-purple-200 to-pink-200'
    },
    {
      id: 4,
      title: 'Natural Beauty',
      category: 'natural',
      description: 'Clean, healthy nails with sheer polish',
      imageColor: 'bg-gradient-to-br from-yellow-100 to-pink-100'
    },
    {
      id: 5,
      title: 'Geometric Art',
      category: 'nailart',
      description: 'Precise geometric patterns in bold colors',
      imageColor: 'bg-gradient-to-br from-green-200 to-blue-200'
    },
    {
      id: 6,
      title: 'Bridal Glam',
      category: 'gel',
      description: 'Elegant bridal set with pearl accents',
      imageColor: 'bg-gradient-to-br from-pink-100 to-white'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-yellow-500">Portfolio</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our gallery of stunning nail designs and transformations.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-black text-yellow-500 '
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              {/* Image Container */}
              <div className={`h-64 ${item.imageColor} relative overflow-hidden`}>
                {/* Nail design placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-8 h-16 md:w-10 md:h-20 bg-gradient-to-b from-white to-pink-100 rounded-full shadow-inner transform group-hover:scale-110 transition-transform"
                        style={{ transitionDelay: `${i * 100}ms` }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent text-yellow-500  transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-pink-200 text-sm">{item.description}</p>
              </div>

              {/* View Button */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white text-gray-800 px-6 py-2 rounded-full font-semibold shadow-lg">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Link */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">See more of our work on Instagram</p>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-500 text-yellow-500  px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @PolishedbyNami
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;