import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface BhojpurLegacyComponentProps {
  imageUrl?: string;
  title?: string;
  subtitle1?: string;
  subtitle2?: string;
  description1?: string;
  description2?: string;
  buttonText?: string;
}

const BhojpurLegacyComponent: React.FC<BhojpurLegacyComponentProps> = ({
  imageUrl = "https://res.cloudinary.com/dub7qyv8e/image/upload/v1745352577/ChatGPT_Image_Apr_21_2025_12_17_17_AM_drcemq.png",
  title = "WHERE LEGACY MEETS LAND",
  subtitle1 = "Bhojpur and Beyond",
  subtitle2 = "Historical Context",
  description1 = "Located just 28 kilometers from Bhopal, the capital of Madhya Pradesh, Bhojpur is a serene town surrounded by verdant hills and the Betwa River. Known for its quiet charm and historical relevance, Bhojpur houses one of India's most enigmatic monuments — the incomplete Bhojeshwar Temple.",
  description2 = "Built during the reign of King Bhoja (1010–1055 CE) of the Paramara dynasty, the temple was envisioned as a towering tribute to Lord Shiva. Its construction, however, was abruptly halted, possibly due to war, natural calamities, or the death of the king himself.",
  buttonText = "Learn more",
}) => {
  const { darkMode } = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Immediately add the animation class after a short delay
    // This ensures the section is visible even if IntersectionObserver fails
    const timer = setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current.classList.add('animate-fade-in');
      }
    }, 100);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      clearTimeout(timer);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      id="mission" 
      ref={sectionRef}
      className={`flex flex-col md:flex-row ${darkMode ? 'bg-stone-800' : 'bg-[#ECE4DA]'} p-6 sm:p-8 md:p-10 w-full opacity-0 transition-opacity duration-1000`}
    >
      {/* Left side - Image with enhanced animation */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 overflow-hidden rounded-xl transform transition-all duration-700 hover:translate-y-[-8px]">
        <div className={`relative ${darkMode ? 'shadow-[0_10px_30px_rgba(236,228,218,0.2)]' : ''} rounded-xl transition-all duration-500`}>
          <img
            src={imageUrl}
            alt="Bhojpur landscape"
            className={`w-full h-auto md:h-full object-cover rounded-xl border-2 ${
              darkMode ? 'border-[#ECE4DA]/30' : 'border-stone-500'
            } transform hover:scale-105 transition-all duration-700 ease-in-out ${
              darkMode 
                ? 'shadow-[0_15px_30px_rgba(236,228,218,0.2)]' 
                : 'shadow-[0_10px_20px_rgba(0,0,0,0.19),_0_6px_6px_rgba(0,0,0,0.23)]'
            }`}
          />
          {darkMode && (
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#ECE4DA]/20 via-[#ECE4DA]/10 to-[#ECE4DA]/20 blur-sm -z-10 animate-pulse"></div>
          )}
        </div>
      </div>
      
      {/* Right side - Content with staggered animations */}
      <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-12 flex flex-col">
        <h2 className={`text-3xl sm:text-4xl font-serif mb-8 md:mb-12 ${darkMode ? 'text-[#ECE4DA]' : 'text-stone-800'} text-center md:text-left transform transition-all duration-700 hover:translate-x-2`}>
          {title}
        </h2>
        
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 lg:space-x-12 mb-8 md:mb-12">
          <div className="w-full md:w-1/2 text-center md:text-left transform transition-all duration-700 hover:translate-y-[-5px]">
            <h3 className={`text-xl sm:text-2xl font-serif mb-3 md:mb-4 ${darkMode ? 'text-[#ECE4DA]' : 'text-stone-800'}`}>
              {subtitle1}
            </h3>
            <p className={`${darkMode ? 'text-[#ECE4DA]' : 'text-stone-800'} text-sm sm:text-base text-center md:text-left`}>
              {description1}
            </p>
          </div>
          
          <div className="w-full md:w-1/2 text-center md:text-left transform transition-all duration-700 hover:translate-y-[-5px]">
            <h3 className={`text-xl sm:text-2xl font-serif mb-3 md:mb-4 ${darkMode ? 'text-[#ECE4DA]' : 'text-stone-800'}`}>
              {subtitle2}
            </h3>
            <p className={`${darkMode ? 'text-[#ECE4DA]' : 'text-stone-800'} text-sm sm:text-base text-center md:text-right`}>
              {description2}
            </p>
          </div>
        </div>
        
        {/* Updated button with enhanced animation */}
        <div className="mt-6 md:mt-auto flex justify-center w-full">
          <button 
            className={`${
              darkMode ? 'bg-[#ECE4DA] text-stone-800 hover:bg-[#D8CFC5]' : 'bg-stone-800 text-white hover:bg-stone-700'
            } px-10 sm:px-16 py-4 sm:py-5 rounded-full text-base sm:text-xl font-serif tracking-wider uppercase 
            hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl 
            ${darkMode ? 'hover:shadow-[#ECE4DA]/30' : 'hover:shadow-stone-500/30'} 
            transform hover:translate-y-[-3px] active:translate-y-[1px]`}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BhojpurLegacyComponent;