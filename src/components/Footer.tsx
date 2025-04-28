import React from 'react';
import SocialIcons from './SocialIcons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <a href="#home" className="text-2xl font-bold">Ayesh's Portfolio</a>
          </div>
          
          <div className="mb-6">
            <SocialIcons variant="footer" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300">Home</a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300">Services</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors duration-300">Skills</a>
            <a href="#education" className="text-gray-300 hover:text-white transition-colors duration-300">Education</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
          </div>
          
          <div className="text-gray-400 text-sm text-center">
            <p>&copy; {currentYear} Ayesh's Portfolio. All rights reserved.</p>
            <p className="mt-2">Designed and built with ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;