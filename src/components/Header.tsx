// components/Header.jsx
import React, { useState } from 'react';

const Header = ({ onBookNow }: { onBookNow: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <span className="text-yellow-500 font-bold text-xl">P</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">PolishedbyNami</h1>
              <p className="text-xs text-gray-500">Professional Nail Artistry</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-yellow-500 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            {/* Book Now Button */}
            <button
  onClick={onBookNow}
  className="
    relative
    w-full
    max-w-xs
    bg-gradient-to-r
    from-gray-900
    to-gray-800
    hover:from-gray-800
    hover:to-gray-700
    text-yellow-400
    px-8
    py-4
    rounded-full
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
  "
>
  {/* Button shine effect */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
  
  {/* Button text */}
  <span className="relative flex items-center justify-center gap-2">
    Book Now
    {/* <svg 
      className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg> */}
  </span>
</button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-yellow-500 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  onBookNow();
                  setIsMenuOpen(false);
                }}
                className="bg-black hover:bg-gray-600 text-yellow-500  px-6 py-2 rounded-full font-semibold mt-2"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;