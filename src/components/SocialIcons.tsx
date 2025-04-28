import React from 'react';
import { Github, Linkedin, Facebook } from 'lucide-react';

interface SocialIconProps {
  variant?: 'footer' | 'header';
}

const SocialIcons: React.FC<SocialIconProps> = ({ variant = 'header' }) => {
  const iconSize = variant === 'footer' ? 20 : 24;
  
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ayesh-chamikara/',
      icon: <Linkedin size={iconSize} />,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/AyeshChamikara',
      icon: <Github size={iconSize} />,
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      icon: <Facebook size={iconSize} />,
    },
  ];

  return (
    <div className={`flex items-center space-x-4 ${variant === 'footer' ? 'justify-center' : ''}`}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            transition-all duration-300 ease-in-out transform hover:scale-110
            ${
              variant === 'footer'
                ? 'text-gray-300 hover:text-white'
                : 'text-gray-600 hover:text-blue-600'
            }
          `}
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;