import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

export default function ProjectPurna() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [text, setText] = useState('');
  const fullText = "THE MISSION TO COMPLETE THE UNFINISHED.";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setIsLoaded(true);
    let currentIndex = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const typeText = () => {
      if (isDeleting) {
        setText(prev => prev.slice(0, -1));
        if (text.length === 0) {
          isDeleting = false;
          timeoutId = setTimeout(typeText, 1000); // Pause before typing again
          return;
        }
      } else {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        if (currentIndex === fullText.length) {
          isDeleting = true;
          currentIndex = 0;
          timeoutId = setTimeout(typeText, 2000); // Pause before deleting
          return;
        }
      }
      
      timeoutId = setTimeout(typeText, isDeleting ? 50 : 150); // Type slower, delete faster
    };

    timeoutId = setTimeout(typeText, 500); // Initial delay

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="min-h-screen w-full relative bg-cover bg-center overflow-hidden" 
         style={{ backgroundImage: "url('https://res.cloudinary.com/dub7qyv8e/image/upload/v1745351111/ChatGPT_Image_Apr_21_2025_12_07_41_AM_w0ojn6.png')" }}>
      {/* Navigation - Optimized for mobile */}
      <nav className={`flex flex-col sm:flex-row justify-between items-center p-3 sm:p-4 md:p-6 lg:px-12 relative z-10 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <div className="text-white text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-0 hover:scale-105 transition-transform duration-300">Project Purna</div>
        
        {/* Mobile-optimized navigation links */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:space-x-8 text-white">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-stone-700/50 hover:bg-stone-600/70 transition-all duration-300 hover:scale-110 hover:rotate-12"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          <a href="#mission" className="hover:underline text-sm sm:text-base md:text-lg relative group px-2">
            <Link 
              to="/mission" 
              className={`text-lg font-medium ${
                darkMode ? 'text-stone-200 hover:text-white' : 'text-stone-800 hover:text-stone-600'
              } transition-colors duration-300`}
            >
              Our Mission
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          
          <Link to="/team" className="hover:underline text-sm sm:text-base md:text-lg relative group px-2">
            Meet Our Team
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          <Link to="/contact" className="hover:underline text-sm sm:text-base md:text-lg relative group px-2">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </nav>

      {/* Main Hero Content - Improved for mobile */}
      <div className={`flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 h-[85vh] sm:min-h-[80vh] pt-12 pb-4 sm:pt-20 md:pt-24 md:pb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} relative z-10`}>
        <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl text-white font-dark mb-2 sm:mb-4 md:mb-6 tracking-wider sm:tracking-widest uppercase font-serif transition-all duration-700 leading-relaxed">
          <span className="inline-block border-r-2 border-white">
            {text}
          </span>
        </h1>
        
        <div className={`max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto mb-4 sm:mb-3 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <p className="text-white text-sm sm:text-base md:text-lg px-2 sm:px-4 py-1 sm:py-2 leading-relaxed font-serif">
            We are a collective of historians, architects, artisans, spiritual leaders, and 
            cultural conservationists working toward completing the unfinished Bhojeshwar 
            Temple. Guided by ancient blueprints, historical texts, and cutting-edge 
            restoration methods, we aim to bring King Bhoja's forgotten vision to life.
          </p>
        </div>

        
        <Link to="/mission">
  <button
    className={`mt-4 sm:mt-4 md:mt-8 bg-stone-300 hover:bg-stone-400 text-stone-800 font-serif tracking-wider uppercase py-2 sm:py-3 px-6 sm:px-8 md:px-12 rounded-full transition-all duration-500 text-xs sm:text-sm md:text-base hover:scale-110 hover:shadow-lg hover:tracking-widest ${
      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}
  >
    Learn more
  </button>
</Link>
      </div>

      {/* Dark overlay with reduced opacity */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
    </div>
  );
}