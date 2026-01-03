// components/Footer.jsx
import React from 'react';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Book Now', href: '#booking' },
    { label: 'Contact', href: '#contact' }
  ];

  const servicesLinks = [
    'Manicures',
    'Pedicures',
    'Nail Extensions',
    'Nail Art',
    'Nail Repair',
    'Custom Designs'
  ];

  return (
    <footer className="bg-gray-900 text-yellow-500  pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          {/* <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <span className="text-yellow-500  font-bold text-xl">P</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">PolishedbyNami</h3>
                <p className="text-gray-400 text-sm">Professional Nail Artistry</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Creating beautiful nails with precision and creativity since 2018.
            </p>
            <div className="flex space-x-4">
              {['Instagram', 'Facebook', 'TikTok', 'Pinterest'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <span className="text-sm font-semibold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div> */}

          {/* Quick Links */}
          {/* <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Services */}
          {/* <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {servicesLinks.map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Newsletter */}
          {/* <div>
            <h4 className="text-lg font-bold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Subscribe for nail trends and special offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-800 text-yellow-500  rounded-l-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button className="bg-black hover:bg-gray-600 px-4 py-2 rounded-r-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div> */}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} PolishedbyNami. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-yellow-500  transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500  transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500  transition-colors">
                Cancellation Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;