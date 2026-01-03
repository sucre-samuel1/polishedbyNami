// components/Services.jsx
import React from 'react';

interface ServicesProps {
  onBookNow: () => void;
}

const Services = ({ onBookNow }: ServicesProps) => {
  const services = [
    {
      title: 'Plain Nails',
      description: 'Basic nail care with shaping, cuticle work, and polish application.',
      price: 'From 5000 NGN',
      features: ['Nail shaping', 'Cuticle care', 'Hand massage', 'Polish application'],
      color: 'bg-gradient-to-br from-pink-50 to-pink-100',
      borderColor: 'border-pink-300',
      shadowColor: 'shadow-pink-500/20',
      hoverColor: 'hover:shadow-pink-500/30',
    },
    {
      title: 'Design',
      description: 'Creative nail art and custom designs to express your style.',
      price: 'From 200 NGN/Finger',
      features: ['Gel application', 'UV curing', '3-week durability', 'Shine finish'],
      color: 'bg-gradient-to-br from-purple-50 to-purple-100',
      borderColor: 'border-purple-300',
      shadowColor: 'shadow-purple-500/20',
      hoverColor: 'hover:shadow-purple-500/30',
    },
    {
      title: 'Toe Nails',
      description: 'Professional pedicure services for healthy and beautiful feet.',
      price: 'From 3000 NGN',
      features: ['Custom length', 'Strength building', 'Shape customization', 'Full design'],
      color: 'bg-gradient-to-br from-blue-50 to-blue-100',
      borderColor: 'border-blue-300',
      shadowColor: 'shadow-blue-500/20',
      hoverColor: 'hover:shadow-blue-500/30',
    },
    {
      title: 'Pedicure',
      description: 'Complete foot care with exfoliation, massage, and polish.',
      price: 'From 8000 NGN',
      features: ['Hand-painted designs', '3D elements', 'Glitter & gems', 'Custom patterns'],
      color: 'bg-gradient-to-br from-yellow-50 to-yellow-100',
      borderColor: 'border-yellow-300',
      shadowColor: 'shadow-yellow-500/20',
      hoverColor: 'hover:shadow-yellow-500/30',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500">Exclusive</span> Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Experience luxury nail care with our comprehensive range of services using premium products and expert techniques.
          </p>
        </div>

        {/* Services Grid - All on one line */}
        <div className="flex justify-center gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group perspective-1000 cursor-pointer"
              onClick={onBookNow}
              style={{ perspective: '1000px' }}
            >
              <div className={`
                ${service.color}
                relative
                rounded-2xl
                p-8
                border-2
                ${service.borderColor}
                shadow-2xl
                ${service.shadowColor}
                ${service.hoverColor}
                transition-all
                duration-500
                ease-out
                hover:-translate-y-3
                hover:scale-105
                transform-gpu
                w-80
                h-full
                flex
                flex-col
                min-h-[500px]
                group-hover:shadow-3xl
                before:absolute
                before:inset-0
                before:rounded-2xl
                before:bg-gradient-to-br
                before:from-white/50
                before:to-transparent
                before:opacity-0
                before:group-hover:opacity-100
                before:transition-opacity
                before:duration-500
                overflow-hidden
              `}>
                
                {/* 3D Edge Effect */}
                <div className={`
                  absolute
                  inset-0
                  rounded-2xl
                  border-2
                  ${service.borderColor}
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-300
                  pointer-events-none
                `}></div>
                
                {/* Floating elements for depth */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-sm group-hover:scale-125 transition-transform duration-500"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-tr from-white/20 to-transparent rounded-full blur-sm group-hover:scale-125 transition-transform duration-500 delay-100"></div>

                {/* Content - Flex column to push button to bottom */}
                <div className="relative z-10 flex-1 flex flex-col">
                  {/* Top section */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <div className="mb-4">
                      <div className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                        {service.price}
                      </div>
                      <div className="h-1 w-12 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full mt-2 group-hover:w-16 transition-all duration-300"></div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Features List */}
                  <div className="mb-8 space-y-3 flex-1">
                    {service.features.map((feature, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300"
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r from-yellow-500 to-pink-500 flex-shrink-0`}></div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Book Now Button - Aligned at bottom */}
                  <div className="mt-auto pt-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onBookNow();
                      }}
                      className={`
                        relative
                        w-full
                        bg-gradient-to-r
                        from-gray-900
                        to-gray-800
                        hover:from-gray-800
                        hover:to-gray-700
                        text-yellow-400
                        px-6
                        py-4
                        rounded-xl
                        font-bold
                        text-lg
                        transition-all
                        duration-300
                        shadow-xl
                        hover:shadow-2xl
                        transform
                        hover:-translate-y-1
                        active:translate-y-0
                        overflow-hidden
                        group/btn
                      `}
                    >
                      {/* Button shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                      
                      {/* Button text */}
                      <span className="relative flex items-center justify-center gap-2">
                        Book This Service
                        <svg 
                          className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                
                {/* Hover shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/0 group-hover:via-white/10 group-hover:to-white/5 transition-all duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

       
      </div>


    </section>
  );
};

export default Services;