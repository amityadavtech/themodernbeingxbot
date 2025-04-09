// components/FloatingWhatsApp.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/917079490430', '_blank'); 
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-4 right-6 z-[9999] transition-all duration-300 transform group"
      aria-label="Chat on WhatsApp"
    >
      <div className="bg-[#1a1b25] backdrop-blur-lg border border-[#663BFF]/30  shadow-xl rounded-xl p-3 group-hover:scale-105 transition-all duration-300 relative">
        <div className="absolute inset-0 rounded-xl ring-2 ring-transparent group-hover:ring-[#663BFF]/50 transition-all duration-300" />
        <FaWhatsapp size={22} className="text-[#663BFF]" />
      </div>
    </button>
  );
};

export default FloatingWhatsApp;
