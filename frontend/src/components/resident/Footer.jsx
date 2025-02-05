import React from 'react';
import { Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footercontainer">
       
        <div>
          <a 
            href="/about" 
            className="text-white hover:text-gray-300 transition-colors duration-300 fontweight-bold"
          >
            Know More
          </a>
        </div>

        <div className="flex space-x-4">
          
          <a 
            href="/about" 
            className="hover:text-gray-300 transition-colors duration-300"
            aria-label="Contact Email"
          >
            <Mail size={24} />
          </a>

          
          <a 
            href="/about" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors duration-300"
            aria-label="Instagram Profile"
          >
            <Instagram size={24} />
          </a>

        
          <a 
            href="/about"
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
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
