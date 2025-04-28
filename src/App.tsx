import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/sections/Home';
import Services from './components/sections/Services';
import Skills from './components/sections/Skills';
import Portfolio from './components/sections/Portfolio';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';
import './styles/animations.css';

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    document.title = 'Ayesh Chamikara | Web Developer & Designer';
    
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
          section.classList.add('animate-fadeInUp');
        }
      });

      setShowBackToTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="overflow-hidden bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text transition-colors duration-200">
      <Navbar />
      
      <main>
        <Home />
        <Services />
        <Skills />
        <Portfolio />
        <Education />
        <Contact />
      </main>
      
      <Footer />

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg 
          transition-all duration-300 hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-1 
          animate-fadeIn z-50"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App