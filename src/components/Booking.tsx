// components/Booking.jsx
import React, { useState } from 'react';

interface BookingProps {
  isOpen: boolean;
  onClose: () => void;
}

// Service data structure with Acrylic and Gel as subtypes of Plain Nails
const nailServices = {
  'Plain Nails': {
    description: 'Basic nail care with shaping, cuticle work, and polish application.',
    subtypes: {
      'Acrylic': {
        categories: [
          {
            name: 'Short',
            options: [
              { name: '1 magnet', price: 8000 },
              { name: '2 magnet', price: 9000 }
            ]
          },
          {
            name: 'Medium',
            options: [
              { name: '3 magnet', price: 10000 },
              { name: '4 magnet', price: 11000 }
            ]
          },
          {
            name: 'Long',
            options: [
              { name: '5 magnet', price: 12000 },
              { name: '6 magnet', price: 13000 }
            ]
          },
          {
            name: 'X-Long',
            options: [
              { name: '7 magnet', price: 14000 },
              { name: '8 magnet', price: 15000 }
            ]
          }
        ]
      },
      'Gel': {
        categories: [
          {
            name: 'Short',
            options: [
              { name: '1 magnet', price: 5000 },
              { name: '2 magnet', price: 6000 }
            ]
          },
          {
            name: 'Medium',
            options: [
              { name: '3 magnet', price: 7000 },
              { name: '4 magnet', price: 8000 }
            ]
          },
          {
            name: 'Long',
            options: [
              { name: '5 magnet', price: 9000 },
              { name: '6 magnet', price: 10000 }
            ]
          },
          {
            name: 'X-Long',
            options: [
              { name: '7 magnet', price: 11000 },
              { name: '8 magnet', price: 12000 }
            ]
          }
        ]
      }
    }
  },
  'Design': {
    categories: [
      {
        name: 'Per Finger',
        options: [
          { name: 'French tip', price: 200, perFinger: true },
          { name: 'Air brush', price: 250, perFinger: true },
          { name: 'Chrome', price: 250, perFinger: true },
          { name: '3D', price: 260, perFinger: true },
          { name: 'Cat eye', price: 400, perFinger: true },
          { name: 'Blooming gel', price: 250, perFinger: true }
        ]
      }
    ],
    description: 'Creative nail art and custom designs to express your style.'
  },
  'Toe Nails': {
    categories: [
      {
        name: 'Toe Services',
        options: [
          { name: 'Plain set', price: 2000 },
          { name: 'Facing big toe', price: 2100 },
          { name: 'Facing all', price: 3000 }
        ]
      }
    ],
    description: 'Professional pedicure services for healthy and beautiful feet.'
  },
  'Pedicure': {
    categories: [
      {
        name: 'Pedicure Prices',
        options: [
          { name: 'Male', price: 10000 },
          { name: 'Female', price: 8000 }
        ]
      }
    ],
    description: 'Complete foot care with exfoliation, massage, and polish.'
  }
};

interface SelectedService {
  service: string;
  subtype?: string;
  option: string;
  basePrice: number;
  isPerFinger: boolean;
  totalPrice: number;
}

const Booking = ({ isOpen, onClose }: BookingProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);
  const [currentService, setCurrentService] = useState('');
  const [currentSubtype, setCurrentSubtype] = useState('');
  const [currentOption, setCurrentOption] = useState('');
  const [selectedServiceDetails, setSelectedServiceDetails] = useState<any>(null);
  const [selectedSubtypeDetails, setSelectedSubtypeDetails] = useState<any>(null);
  const [isWhatsAppRedirecting, setIsWhatsAppRedirecting] = useState(false);

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  // WhatsApp phone number (replace with actual business WhatsApp number)
  const whatsappNumber = '2348114554741'; // Example: Nigerian number with country code
  const businessName = 'Polished by Nami';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'name' || name === 'email' || name === 'phone' || name === 'date' || name === 'time' || name === 'message') {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setCurrentService(value);

    if (value) {
      const serviceData = nailServices[value as keyof typeof nailServices];
      setSelectedServiceDetails(serviceData);
      setSelectedSubtypeDetails(null);
      setCurrentSubtype('');
      setCurrentOption('');
    } else {
      setSelectedServiceDetails(null);
      setSelectedSubtypeDetails(null);
      setCurrentSubtype('');
      setCurrentOption('');
    }
  };

  const handleSubtypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setCurrentSubtype(value);

    if (currentService === 'Plain Nails') {
      const subtypeData = nailServices['Plain Nails'].subtypes[value as keyof typeof nailServices['Plain Nails']['subtypes']];
      setSelectedSubtypeDetails(subtypeData);
      setCurrentOption('');
    }
  };

  const handleOptionChange = (optionName: string, optionPrice: number, isPerFinger: boolean = false) => {
    setCurrentOption(optionName);
  };

  const addServiceToCart = () => {
    if (!currentService || !currentOption) return;

    let basePrice = 0;
    let isPerFinger = false;

    // Find the selected option price
    if (currentService === 'Plain Nails' && currentSubtype) {
      const subtypeData = nailServices['Plain Nails'].subtypes[currentSubtype as keyof typeof nailServices['Plain Nails']['subtypes']];
      if (subtypeData) {
        for (const category of subtypeData.categories) {
          const option = category.options.find(opt => opt.name === currentOption);
          if (option) {
            basePrice = option.price;
            isPerFinger = option.perFinger || false;
            break;
          }
        }
      }
    } else {
      const serviceData = nailServices[currentService as keyof typeof nailServices];
      if (serviceData && 'categories' in serviceData) {
        for (const category of serviceData.categories) {
          const option = category.options.find(opt => opt.name === currentOption);
          if (option) {
            basePrice = option.price;
            isPerFinger = option.perFinger || false;
            break;
          }
        }
      }
    }

    const totalPrice = isPerFinger ? basePrice * 10 : basePrice;

    const newService: SelectedService = {
      service: currentService,
      subtype: currentService === 'Plain Nails' ? currentSubtype : undefined,
      option: currentOption,
      basePrice,
      isPerFinger,
      totalPrice
    };

    setSelectedServices(prev => [...prev, newService]);

    // Reset current selection
    setCurrentService('');
    setCurrentSubtype('');
    setCurrentOption('');
    setSelectedServiceDetails(null);
    setSelectedSubtypeDetails(null);
  };

  const removeServiceFromCart = (index: number) => {
    setSelectedServices(prev => prev.filter((_, i) => i !== index));
  };

  const calculateTotalPrice = () => {
    return selectedServices.reduce((total, service) => total + service.totalPrice, 0);
  };

  const formatBookingForWhatsApp = () => {
    const totalPrice = calculateTotalPrice();

    let message = `*NEW BOOKING REQUEST*%0A%0A`;
    message += `*Customer Details:*%0A`;
    message += `👤 Name: ${formData.name}%0A`;
    message += `📧 Email: ${formData.email || 'Not provided'}%0A`;
    message += `📱 Phone: ${formData.phone}%0A`;
    message += `📅 Date: ${formData.date}%0A`;
    message += `⏰ Time: ${formData.time}%0A%0A`;

    message += `*Services Requested:*%0A`;
    selectedServices.forEach((service, index) => {
      message += `${index + 1}. *${service.service}*`;
      if (service.subtype) message += ` (${service.subtype})`;
      message += ` - ${service.option}%0A`;
      if (service.isPerFinger) {
        message += `   💰 ₦${service.basePrice.toLocaleString()}/finger × 10 = ₦${service.totalPrice.toLocaleString()}%0A`;
      } else {
        message += `   💰 ₦${service.totalPrice.toLocaleString()}%0A`;
      }
    });

    message += `%0A*Total Amount:* ₦${totalPrice.toLocaleString()}%0A%0A`;

    if (formData.message) {
      message += `*Additional Notes:*%0A${formData.message}%0A%0A`;
    }

    message += `_This booking was submitted via ${businessName} website_`;

    return message;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedServices.length === 0) {
      alert('Please add at least one service to your booking.');
      return;
    }

    // Validate required fields
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      alert('Please fill in all required fields (Name, Phone, Date, and Time).');
      return;
    }

    // Show confirmation before redirecting to WhatsApp
    const confirmRedirect = window.confirm(
      'You will be redirected to WhatsApp to confirm your booking. Continue?'
    );

    if (!confirmRedirect) {
      return;
    }

    setIsWhatsAppRedirecting(true);

    // Format WhatsApp message
    const whatsappMessage = formatBookingForWhatsApp();

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');

    // Show success message
    setTimeout(() => {
      alert('✅ Redirecting to WhatsApp... Please send the pre-filled message to confirm your booking.');

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        message: ''
      });
      setSelectedServices([]);
      setCurrentService('');
      setCurrentSubtype('');
      setCurrentOption('');
      setSelectedServiceDetails(null);
      setSelectedSubtypeDetails(null);
      setIsWhatsAppRedirecting(false);
      onClose();
    }, 500);
  };

  if (!isOpen) return null;

  const totalPrice = calculateTotalPrice();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b px-8 py-6 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Book an Appointment</h2>
                <p className="text-gray-600">Schedule your nail service with Vanessa</p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="0810 123 4567"
                />
              </div>

              {/* Date */}
              <div>
                <label className="block text-gray-700 mb-2">Preferred Date *</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>

              {/* Time */}
              <div>
                <label className="block text-gray-700 mb-2">Preferred Time *</label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="">Select time slot</option>
                  {timeSlots.map((time, index) => (
                    <option key={index} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Services Selection Section */}
            <div className="mt-8 border-t pt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Add Services</h3>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {/* Service Selection */}
                <div>
                  <label className="block text-gray-700 mb-2">Select Service</label>
                  <select
                    value={currentService}
                    onChange={handleServiceChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="">Choose a service</option>
                    {Object.keys(nailServices).map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                {/* Service Subtype (for Plain Nails) */}
                {currentService === 'Plain Nails' && selectedServiceDetails && (
                  <div>
                    <label className="block text-gray-700 mb-2">Select Type</label>
                    <select
                      value={currentSubtype}
                      onChange={handleSubtypeChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    >
                      <option value="">Choose a type</option>
                      {Object.keys(selectedServiceDetails.subtypes).map((subtype) => (
                        <option key={subtype} value={subtype}>{subtype}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              {/* Service Options */}
              {(selectedSubtypeDetails ||
                (selectedServiceDetails && currentService !== 'Plain Nails')) && (
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Select Option</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {(currentService === 'Plain Nails' ?
                        selectedSubtypeDetails?.categories :
                        selectedServiceDetails?.categories)?.map((category: any, catIndex: number) => (
                          <div key={catIndex} className="mb-4">
                            <h4 className="font-semibold text-gray-800 mb-2">{category.name}</h4>
                            <div className="space-y-2">
                              {category.options.map((option: any, optIndex: number) => (
                                <label
                                  key={optIndex}
                                  className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50 ${currentOption === option.name ? 'border-yellow-500 bg-pink-50' : 'border-gray-200'}`}
                                >
                                  <div className="flex items-center">
                                    <input
                                      type="radio"
                                      name="serviceOption"
                                      checked={currentOption === option.name}
                                      onChange={() => handleOptionChange(option.name, option.price, option.perFinger)}
                                      className="mr-3 text-yellow-500 focus:ring-pink-500"
                                    />
                                    <span className="text-gray-700">{option.name}</span>
                                  </div>
                                  <span className="font-semibold text-gray-800">
                                    ₦{option.price.toLocaleString()}
                                    {option.perFinger && <span className="text-sm text-gray-500"> × 10 fingers</span>}
                                  </span>
                                </label>
                              ))}
                            </div>
                          </div>
                        ))}
                    </div>
                    {selectedServiceDetails?.description && (
                      <p className="text-gray-600 text-sm mt-2">{selectedServiceDetails.description}</p>
                    )}
                  </div>
                )}

              {/* Add Service Button */}
              {currentService && currentOption && (
                <div className="mb-8">
                  <button
                    type="button"
                    onClick={addServiceToCart}
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add This Service
                  </button>
                </div>
              )}
            </div>

            {/* Selected Services Cart */}
            {selectedServices.length > 0 && (
              <div className="mt-6 border-t pt-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Selected Services</h3>
                <div className="space-y-3 mb-6">
                  {selectedServices.map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-800">
                          {service.service}
                          {service.subtype && <span className="text-gray-600"> - {service.subtype}</span>}
                          <span className="text-gray-600"> - {service.option}</span>
                        </div>
                        {service.isPerFinger ? (
                          <div className="text-sm text-gray-600">
                            ₦{service.basePrice.toLocaleString()} per finger × 10 = ₦{service.totalPrice.toLocaleString()}
                          </div>
                        ) : (
                          <div className="text-sm text-gray-600">
                            ₦{service.totalPrice.toLocaleString()}
                          </div>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => removeServiceFromCart(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Message */}
            <div className="mt-6">
              <label className="block text-gray-700 mb-2">Additional Notes</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="Any special requests, design preferences, or allergies we should know about?"
              ></textarea>
            </div>

            {/* Price Summary */}
            {selectedServices.length > 0 && (
              <div className="mt-6 p-4 bg-pink-50 rounded-lg border border-pink-200">
                <h3 className="font-semibold text-gray-800 mb-4">Booking Summary</h3>
                <div className="space-y-3">
                  {selectedServices.map((service, index) => (
                    <div key={index} className="flex justify-between items-center pb-2 border-b border-pink-200">
                      <div className="text-gray-700">
                        <div className="font-medium">
                          {service.service}
                          {service.subtype && ` - ${service.subtype}`}
                          {` - ${service.option}`}
                        </div>
                        <div className="text-sm text-gray-600">
                          {service.isPerFinger ? 'Price per finger (10 fingers total)' : 'Full service price'}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-pink-600">
                          ₦{service.totalPrice.toLocaleString()}
                        </div>
                        {service.isPerFinger && (
                          <div className="text-sm text-gray-600">
                            ₦{service.basePrice.toLocaleString()}/finger
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  <div className="pt-2">
                    <div className="flex justify-between items-center">
                      <div className="text-lg font-bold text-gray-800">Total Price</div>
                      <div className="text-2xl font-bold text-pink-600">
                        ₦{totalPrice.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WhatsApp Information */}
            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.507 14.307l-.009.075c-2.199-1.096-2.429-1.242-2.713-.816-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.293-.506.32-.578.878-1.634.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.576-.05-.997-.05-1.368.344-1.614 1.774-1.207 3.604.174 5.55 2.714 3.552 4.16 4.206 6.804 5.114.714.227 1.365.195 1.88.121.574-.091 1.754-.721 2-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z" />
                    <path d="M20.52 3.449C15.725-1.438 8.317-1.2 3.62 3.807 1.225 6.06.144 9.206.03 12.4c-.114 3.184.688 6.362 2.29 9.075L0 24l6.335-1.652c2.53 1.46 5.467 2.214 8.418 2.198h.007c3.423 0 6.754-1.072 9.546-3.048 5.186-3.857 6.877-10.65 3.91-16.237zm-1.705 13.988c-1.36 2.212-3.86 3.865-6.73 4.026h-.004c-2.65.028-5.338-.804-7.466-2.516l-.537-.319-3.74.975.997-3.648-.239-.375c-1.453-2.336-2.172-5.13-1.924-7.978.284-3.17 1.714-6.123 4.026-8.137C7.795 1.845 11.292.834 14.68 1.666c3.225.99 5.83 3.317 7.116 6.43 1.285 3.108.742 6.598-1.427 9.396l.009-.055z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">WhatsApp Confirmation</h4>
                  <p className="text-gray-600 text-sm">
                    After clicking "Book Appointment", you'll be redirected to WhatsApp with your booking details.
                    Please send the pre-filled message to confirm your appointment.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-4 sm:mb-0">
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Confirmation within 24 hours
                </div>
              </div>
              <button
                type="submit"
                disabled={selectedServices.length === 0 || isWhatsAppRedirecting}
                className={`
                  relative
                 bg-gradient-to-r
                        from-gray-900
                        to-gray-800
                        hover:from-gray-800
                        hover:to-gray-700
                        text-yellow-400
                  px-8 py-3 
                  rounded-full 
                  font-semibold 
                  transition-colors 
                  shadow-lg 
                  disabled:opacity-50 
                  disabled:cursor-not-allowed
                  flex items-center gap-2
                  ${isWhatsAppRedirecting ? 'animate-pulse' : ''}
                `}
              >
                {isWhatsAppRedirecting ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Redirecting to WhatsApp...
                  </>
                ) : (
                  <>
                    Book Appointment (₦{totalPrice.toLocaleString()})
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;