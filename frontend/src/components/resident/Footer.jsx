import React, { useState, useEffect } from 'react';
import { Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer 
      style={{ backgroundColor: '#3A3960' }}  
      className={`
        fixed bottom-0 left-0 right-0
        backdrop-blur-sm
        transition-transform duration-300 ease-in-out
        ${isVisible ? 'translate-y-0' : 'translate-y-full'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div>
          <a 
            href="/about" 
            className="text-white hover:text-gray-300 transition-colors duration-300 font-bold"
          >
            Know More
          </a>
        </div>

        <div className="flex space-x-4">
          <a 
            href="/about" 
            className="text-white hover:text-gray-300 transition-colors duration-300"
            aria-label="Contact Email"
          >
            <Mail size={24} />
          </a>

          <a 
            href="/about" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition-colors duration-300"
            aria-label="Instagram Profile"
          >
            <Instagram size={24} />
          </a>

          <a 
            href="/about"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors duration-300"
            aria-label="Twitter Profile"
          >
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
