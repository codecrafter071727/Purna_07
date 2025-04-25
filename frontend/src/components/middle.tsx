import React, { useEffect, useRef, useState } from 'react';
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
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Reduced animation timing for subtler effect
    const timer = setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current.classList.add('animate-fade-in');
      }
    }, 200);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.2, rootMargin: "40px" } // Adjusted threshold for smoother reveal
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
  
  const additionalContent = [
    {
      title: "Architectural Marvel",
      text: "The Bhojeshwar Temple stands as a testament to the architectural brilliance of medieval India. Its massive shikhara (spire) would have reached a height of 40 meters if completed. The temple's construction techniques showcase advanced mathematical and engineering principles that were ahead of their time."
    },
    {
      title: "Cultural Significance",
      text: "Beyond its architectural importance, the temple represents the cultural and spiritual aspirations of the Paramara dynasty. The intricate carvings and sculptures that adorn its walls tell stories of devotion, mythology, and the artistic excellence of ancient Indian craftsmen."
    },
    {
      title: "Modern Day Relevance",
      text: "Today, the temple serves as both a historical monument and an active place of worship. Its incomplete state offers unique insights into ancient construction methods and presents an opportunity for modern conservation efforts to preserve and potentially complete this architectural masterpiece."
    }
  ];

  return (
    <div 
      id="mission" 
      ref={sectionRef}
      className={`flex flex-col md:flex-row ${darkMode ? 'bg-stone-800' : 'bg-[#ECE4DA]'} p-6 sm:p-8 md:p-10 w-full opacity-0 transition-opacity duration-1000 relative before:absolute before:inset-x-0 before:top-0 before:h-16 before:bg-gradient-to-b ${darkMode ? 'before:from-stone-900/70 before:to-stone-800' : 'before:from-black/20 before:to-[#ECE4DA]'} before:-translate-y-full`}
    >
      {/* Left side - Image with conditional sticky positioning */}
      <div className={`w-full md:w-1/2 mb-6 md:mb-0 p-4 ${isExpanded ? 'md:sticky md:top-20 h-fit' : ''} transition-all duration-200`}>
        <div className={`relative ${darkMode ? 'shadow-lg' : ''} rounded-lg transition-all duration-300`}>
          <img
            src={imageUrl}
            alt="Bhojpur landscape"
            className={`w-full h-auto object-cover rounded-lg transform hover:scale-102 transition-all duration-500 ease-in-out ${
              darkMode 
                ? 'shadow-md' 
                : 'shadow-md'
            }`}
          />
          {darkMode && (
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#ECE4DA]/10 via-[#ECE4DA]/5 to-[#ECE4DA]/10 blur-sm -z-10"></div>
          )}
        </div>
      </div>

      {/* Right side - Scrollable Content */}
      <div className="w-full md:w-1/2 p-4 sm:p-5 md:p-8 flex flex-col">
        <h2 className={`text-2xl sm:text-3xl font-serif mb-6 md:mb-8 ${darkMode ? 'text-[#ECE4DA]' : 'text-stone-800'} text-center md:text-left transform transition-all duration-500 hover:translate-x-1`}>
          {title}
        </h2>
        
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 lg:space-x-8 mb-6 md:mb-8">
          <div className="w-full md:w-1/2 text-center md:text-left transform transition-all duration-500 hover:translate-y-[-3px]">
            <h3 className={`text-lg sm:text-xl font-serif mb-2 md:mb-3 ${darkMode ? 'text-[#ECE4DA]' : 'text-stone-800'}`}>
              {subtitle1}
            </h3>
            <p className={`${darkMode ? 'text-[#ECE4DA]/90' : 'text-stone-700'} text-sm sm:text-base text-center md:text-left`}>
              {description1}
            </p>
          </div>
          
          <div className="w-full md:w-1/2 text-center md:text-left transform transition-all duration-500 hover:translate-y-[-3px]">
            <h3 className={`text-lg sm:text-xl font-serif mb-2 md:mb-3 ${darkMode ? 'text-[#ECE4DA]' : 'text-stone-800'}`}>
              {subtitle2}
            </h3>
            <p className={`${darkMode ? 'text-[#ECE4DA]/90' : 'text-stone-700'} text-sm sm:text-base text-center md:text-right`}>
              {description2}
            </p>
          </div>
        </div>
        
        {/* Updated button with reduced animation intensity */}
        <div className="mt-5 md:mt-auto flex justify-center w-full">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className={`${
              darkMode ? 'bg-[#ECE4DA]/90 text-stone-800 hover:bg-[#D8CFC5]' : 'bg-stone-700 text-white hover:bg-stone-600'
            } px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base font-serif tracking-wide uppercase 
            hover:scale-102 transition-all duration-300 shadow-md hover:shadow-lg 
            flex items-center space-x-2`}
          >
            <span>{isExpanded ? 'Show Less' : buttonText}</span>
            <svg 
              className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Expandable Content with gentler transitions */}
        <div className={`mt-6 transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          {additionalContent.map((content, index) => (
            <div 
              key={index} 
              className={`mb-6 transform transition-all duration-300 delay-${index * 100} ${
                isExpanded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
            >
              <h3 className={`text-lg sm:text-xl font-serif mb-3 ${darkMode ? 'text-[#ECE4DA]' : 'text-stone-800'}`}>
                {content.title}
              </h3>
              <p className={`${darkMode ? 'text-[#ECE4DA]/80' : 'text-stone-600'} text-sm sm:text-base leading-relaxed`}>
                {content.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BhojpurLegacyComponent;