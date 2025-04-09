
import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const FloatingBackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-[80px] right-6 z-[9999] transition-all duration-300 transform ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'
      } group`}
      aria-label="Back to Top"
    >
      <div className="bg-[#1a1b25] backdrop-blur-lg border border-[#663BFF]/30 shadow-xl rounded-xl p-3 group-hover:scale-105 transition-all duration-300 relative">
        <div className="absolute inset-0 rounded-xl ring-2 ring-transparent group-hover:ring-[#663BFF]/50 transition-all duration-300" />
        <ArrowUp size={22} className="text-[#663BFF]" />
      </div>
    </button>
  );
};

export default FloatingBackToTop;
