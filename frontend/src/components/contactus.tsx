import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface ContactUsProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export const ContactUs: React.FC<ContactUsProps> = ({
  title = "Contact Us",
  subtitle = "Interested in working together? Fill out some info and we will be in touch shortly. We can't wait to hear from you!",
  buttonText = "Send",
}) => {
  const { darkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Add the missing handleChange function
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Add the missing handleSubmit function
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };
  
  useEffect(() => {
    setIsVisible(true);
    if (sectionRef.current) {
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, []);
  
  return (
    <div 
      id="contact" 
      ref={sectionRef}
      className={`w-full p-6 sm:p-8 md:p-16 ${darkMode ? 'bg-stone-800 text-[#ECE4DA]' : 'bg-[#ECE4DA] text-stone-800'} 
      transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="flex flex-col md:flex-row md:space-x-8 lg:space-x-16 items-start">
        {/* Left side with floating animation */}
        <div className="w-full md:w-1/3 mb-10 md:mb-0 md:sticky md:top-16 transform transition-all duration-700 hover:translate-x-2 animate-float">
          <h2 className={`text-3xl sm:text-4xl font-serif mb-6 md:mb-8 ${darkMode ? 'text-[#ECE4DA]' : 'text-stone-800'} relative`}>
            {title}
            <span className={`block w-16 h-1 ${darkMode ? 'bg-[#ECE4DA]' : 'bg-stone-600'} mt-4 transition-all duration-500 hover:w-24`}></span>
          </h2>
          <p className={`${darkMode ? 'text-[#ECE4DA]' : 'text-stone-800'} leading-relaxed text-base sm:text-lg`}>
            {subtitle}
          </p>
        </div>
        
        {/* Right side - Enhanced form with modern effects */}
        <div className={`w-full md:w-2/3 ${
          darkMode 
            ? 'bg-stone-700 shadow-[0_0_30px_rgba(236,228,218,0.1)]' 
            : 'bg-[#E5DED5] shadow-[4px_4px_20px_rgba(236,228,218,0.8)]'
          } p-6 sm:p-8 rounded-xl transition-all duration-500 hover:shadow-[0_10px_40px_rgba(236,228,218,0.3)] transform hover:-translate-y-1 relative overflow-hidden`}>
          
          {/* Add a subtle background animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
          
          <form onSubmit={handleSubmit} className="relative z-10">
            {/* Input fields with enhanced animations */}
            <div className="mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <label className={`block text-base sm:text-lg font-serif mb-2 ${darkMode ? 'text-[#ECE4DA]' : 'text-stone-800'}`}>
                Name <span className="text-sm ml-1">(required)</span>
              </label>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2 transition-all duration-300 hover:translate-y-[-2px]">
                  <label className={`block text-sm sm:text-base mb-1 font-serif ${darkMode ? 'text-[#ECE4DA]' : 'text-stone-800'}`}>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 ${darkMode ? 'bg-stone-600 text-[#ECE4DA] border-stone-500' : 'bg-transparent border-stone-500'} border rounded-full transition-all duration-300 focus:ring-2 ${darkMode ? 'focus:ring-[#ECE4DA]/30' : 'focus:ring-stone-500/30'} focus:outline-none`}
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 mt-4 md:mt-0 transition-all duration-300 hover:translate-y-[-2px]">
                  <label className={`block text-sm sm:text-base mb-1 font-serif ${darkMode ? 'text-[#ECE4DA]' : 'text-stone-800'}`}>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 ${darkMode ? 'bg-stone-600 text-[#ECE4DA] border-stone-500' : 'bg-transparent border-stone-500'} border rounded-full transition-all duration-300 focus:ring-2 ${darkMode ? 'focus:ring-[#ECE4DA]/30' : 'focus:ring-stone-500/30'} focus:outline-none`}
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <label className={`block text-lg font-serif mb-2 ${darkMode ? 'text-[#ECE4DA]' : 'text-stone-800'}`}>
                Email <span className="text-sm ml-1">(required)</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 ${darkMode ? 'bg-stone-600 text-[#ECE4DA] border-stone-500' : 'bg-transparent border-stone-500'} border rounded-full transition-all duration-300 focus:ring-2 ${darkMode ? 'focus:ring-[#ECE4DA]/30' : 'focus:ring-stone-500/30'} focus:outline-none`}
                required
              />
            </div>
            
            <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <label className={`block text-lg font-serif mb-2 ${darkMode ? 'text-[#ECE4DA]' : 'text-stone-800'}`}>
                Message <span className="text-sm ml-1">(required)</span>
              </label>
              <textarea
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 ${darkMode ? 'bg-stone-600 text-[#ECE4DA] border-stone-500' : 'bg-transparent border-stone-500'} border rounded-3xl transition-all duration-300 focus:ring-2 ${darkMode ? 'focus:ring-[#ECE4DA]/30' : 'focus:ring-stone-500/30'} focus:outline-none`}
                required
              />
            </div>
            
            {/* Enhanced submit button */}
            <div className="flex justify-center sm:justify-start mt-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <button
                type="submit"
                className={`${darkMode ? 'bg-[#ECE4DA] text-stone-800 hover:bg-[#D8CFC5]' : 'bg-stone-800 text-white hover:bg-stone-700'} 
                px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg 
                transition-all duration-500 hover:scale-105 hover:shadow-xl 
                hover:tracking-wider transform hover:translate-y-[-3px] active:translate-y-[1px]
                relative overflow-hidden group animate-glow`}
              >
                <span className="relative z-10">{buttonText}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shimmer"></div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
