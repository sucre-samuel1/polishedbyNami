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
    <section id="services" className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 md:mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500">Exclusive</span> Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg md:text-lg px-2">
            Experience luxury nail care with our comprehensive range of services using premium products and expert techniques.
          </p>
        </div>

        {/* Services Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group perspective-1000 cursor-pointer w-full max-w-sm sm:max-w-none"
              onClick={onBookNow}
              style={{ perspective: '1000px' }}
            >
              <div className={`
                ${service.color}
                relative
                rounded-2xl
                p-5 sm:p-6 md:p-8
                border-2
                ${service.borderColor}
                shadow-xl md:shadow-2xl
                ${service.shadowColor}
                ${service.hoverColor}
                transition-all
                duration-500
                ease-out
                hover:-translate-y-2 md:hover:-translate-y-3
                hover:scale-[1.02] md:hover:scale-105
                transform-gpu
                w-full
                h-full
                flex
                flex-col
                min-h-[420px] sm:min-h-[460px] md:min-h-[500px]
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
                
                {/* Floating elements for depth - Responsive sizing */}
                <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 md:-top-6 md:-right-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-sm group-hover:scale-125 transition-transform duration-500"></div>
                <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 md:-bottom-6 md:-left-6 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-tr from-white/20 to-transparent rounded-full blur-sm group-hover:scale-125 transition-transform duration-500 delay-100"></div>

                {/* Content - Flex column to push button to bottom */}
                <div className="relative z-10 flex-1 flex flex-col">
                  {/* Top section */}
                  <div className="mb-4 sm:mb-5 md:mb-6">
                    <h3 className="text-xl sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4 group-hover:text-gray-900 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <div className="mb-3 sm:mb-4 md:mb-4">
                      <div className="text-2xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                        {service.price}
                      </div>
                      <div className="h-1 w-10 sm:w-11 md:w-12 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full mt-1 sm:mt-1.5 md:mt-2 group-hover:w-14 sm:group-hover:w-15 md:group-hover:w-16 transition-all duration-300"></div>
                    </div>
                    
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Features List */}
                  <div className="mb-6 sm:mb-7 md:mb-8 space-y-2 sm:space-y-2.5 md:space-y-3 flex-1">
                    {service.features.map((feature, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-2 sm:gap-2.5 md:gap-3 group-hover:translate-x-1 sm:group-hover:translate-x-1.5 md:group-hover:translate-x-2 transition-transform duration-300"
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-yellow-500 to-pink-500 flex-shrink-0`}></div>
                        <span className="text-gray-700 font-medium text-sm sm:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Book Now Button - Aligned at bottom */}
                  <div className="mt-auto pt-3 sm:pt-4 md:pt-4">
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
                        px-4 sm:px-5 md:px-6
                        py-3 sm:py-3.5 md:py-4
                        rounded-xl
                        font-bold
                        text-base sm:text-base md:text-lg
                        transition-all
                        duration-300
                        shadow-lg sm:shadow-xl
                        hover:shadow-xl sm:hover:shadow-2xl
                        transform
                        hover:-translate-y-0.5 md:hover:-translate-y-1
                        active:translate-y-0
                        overflow-hidden
                        group/btn
                      `}
                    >
                      {/* Button shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                      
                      {/* Button text */}
                      <span className="relative flex items-center justify-center gap-1.5 sm:gap-2">
                        <span className="text-sm sm:text-base md:text-base">Book This Service</span>
                        <svg 
                          className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 transform group-hover/btn:translate-x-0.5 sm:group-hover/btn:translate-x-0.5 md:group-hover/btn:translate-x-1 transition-transform duration-300" 
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

        {/* Mobile scroll hint */}
        <div className="flex justify-center mt-8 sm:hidden">
          <div className="flex items-center gap-2 text-gray-500 text-sm animate-pulse">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
            <span>Swipe to see more</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Add custom CSS for 3D effects */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-gpu {
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }
        
        .shadow-3xl {
          box-shadow: 
            0 20px 40px -10px rgba(0, 0, 0, 0.25),
            0 0 10px rgba(255, 255, 255, 0.15) inset,
            0 0 20px var(--shadow-color, rgba(0, 0, 0, 0.1));
        }
        
        /* Mobile touch improvements */
        @media (max-width: 640px) {
          .grid-cols-1 > * {
            max-width: 320px;
            margin-left: auto;
            margin-right: auto;
          }
          
          /* Improve touch targets */
          button {
            min-height: 44px; /* Minimum touch target size */
          }
          
          /* Reduce floating animation on mobile for performance */
          .group > div {
            animation: float-mobile 8s ease-in-out infinite;
          }
          
          .group:nth-child(1) > div {
            animation-delay: 0s;
          }
          
          .group:nth-child(2) > div {
            animation-delay: 2s;
          }
          
          .group:nth-child(3) > div {
            animation-delay: 4s;
          }
          
          .group:nth-child(4) > div {
            animation-delay: 6s;
          }
          
          @keyframes float-mobile {
            0%, 100% { 
              transform: translateY(0px); 
            }
            50% { 
              transform: translateY(-8px); 
            }
          }
        }
        
        /* Desktop floating animation */
        @media (min-width: 1024px) {
          .group > div {
            animation: float 8s ease-in-out infinite;
          }
          
          .group:nth-child(1) > div {
            animation-delay: 0s;
          }
          
          .group:nth-child(2) > div {
            animation-delay: 2s;
          }
          
          .group:nth-child(3) > div {
            animation-delay: 4s;
          }
          
          .group:nth-child(4) > div {
            animation-delay: 6s;
          }
          
          @keyframes float {
            0%, 100% { 
              transform: translateY(0px); 
            }
            50% { 
              transform: translateY(-15px); 
            }
          }
        }
        
        /* Tablet specific adjustments */
        @media (min-width: 640px) and (max-width: 1023px) {
          .grid-cols-2 > * {
            max-width: 320px;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;