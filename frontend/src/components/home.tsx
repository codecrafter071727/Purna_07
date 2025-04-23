import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ProjectPurna() {
  const { darkMode, toggleDarkMode } = useTheme();
  
  return (
    <div className="min-h-screen w-full relative bg-cover bg-center" 
         style={{ backgroundImage: "url('https://res.cloudinary.com/dub7qyv8e/image/upload/v1745351111/ChatGPT_Image_Apr_21_2025_12_07_41_AM_w0ojn6.png')" }}>
      {/* Navigation - Optimized for mobile */}
      <nav className="flex flex-col sm:flex-row justify-between items-center p-3 sm:p-4 md:p-6 lg:px-12 relative z-10">
        <div className="text-white text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-0">Project Purna</div>
        <div className="flex items-center space-x-4 md:space-x-8 text-white">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-stone-700/50 hover:bg-stone-600/70 transition-colors"
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
          <a href="#mission" className="hover:underline text-sm sm:text-base md:text-lg">Our Mission</a>
          <a href="#team" className="hover:underline text-sm sm:text-base md:text-lg">Meet Our Team</a>
          <a href="#contact" className="hover:underline text-sm sm:text-base md:text-lg">Contact</a>
        </div>
      </nav>

      {/* Main Hero Content - Adjusted spacing for mobile and desktop */}
      <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 h-[85vh] sm:min-h-[80vh] pt-20 pb-8 sm:pt-24 md:pt-28 md:pb-16">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white font-dark mb-6 sm:mb-8 md:mb-12 tracking-widest uppercase font-serif mt-0 sm:mt-4 md:mt-0">
          THE MISSION TO<br className="block sm:hidden" />COMPLETE<br className="hidden sm:block" />
          <span className="block mt-2 sm:mt-3">THE UNFINISHED</span>
        </h1>
        
        <div className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto mb-4 sm:mb-3">
          <p className="text-white text-sm sm:text-base md:text-lg px-4 sm:p-4 leading-relaxed font-serif line-clamp-4 sm:line-clamp-none">
            We are a collective of historians, architects, artisans, spiritual leaders, and 
            cultural conservationists working toward completing the unfinished Bhojeshwar 
            Temple. Guided by ancient blueprints, historical texts, and cutting-edge 
            restoration methods, we aim to bring King Bhoja's forgotten vision to life.
          </p>
        </div>

        <button className="mt-4 sm:mt-4 md:mt-8 bg-stone-300 hover:bg-stone-400 text-stone-800 font-serif tracking-wider uppercase py-2 sm:py-3 px-6 sm:px-8 md:px-12 rounded-full transition-colors text-xs sm:text-sm md:text-base">
          Learn more
        </button>
      </div>

      {/* Dark overlay - slightly increased opacity for better readability */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
    </div>
  );
}