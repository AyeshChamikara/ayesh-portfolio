import React from 'react';
import SocialIcons from '../SocialIcons';

const Home: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 z-0" />
      
      {/* Abstract shapes */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-blue-200 dark:bg-blue-500/10 rounded-full opacity-20 -mr-20 -mt-20" />
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-indigo-200 dark:bg-indigo-500/10 rounded-full opacity-20 -ml-10 -mb-10" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div 
            className="flex flex-col space-y-6 animate-fadeIn text-center lg:text-left"
            style={{animationDelay: '0.2s'}}
          >
            <h2 className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              John Doe
            </h1>
            <h3 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300">
              <span className="animate-typing">Web Developer & Designer</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto lg:mx-0">
              I create beautiful, functional, and responsive websites with modern technologies
              that help businesses achieve their goals and stand out from the competition.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg font-medium 
                transition-all duration-300 hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                Get in Touch
              </a>
              <a
                href="#portfolio"
                className="px-6 py-3 bg-white dark:bg-dark-card text-blue-600 dark:text-blue-400 rounded-lg shadow-md font-medium border border-blue-200 dark:border-gray-700
                transition-all duration-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center"
              >
                View My Work
              </a>
            </div>
            
            <div className="pt-6">
              <div className="flex items-center space-x-4 justify-center lg:justify-start">
                <SocialIcons />
              </div>
            </div>
          </div>
          
          <div 
            className="flex justify-center items-center animate-fadeInRight order-first lg:order-last mb-8 lg:mb-0"
            style={{animationDelay: '0.5s'}}
          >
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full absolute blur-3xl opacity-20" />
              <img 
                src="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Profile" 
                className="w-40 h-40 md:w-56 md:h-56 lg:w-80 lg:h-80 object-cover rounded-full shadow-2xl border-8 border-white dark:border-gray-800 relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#services" 
          className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          aria-label="Scroll down"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Home;