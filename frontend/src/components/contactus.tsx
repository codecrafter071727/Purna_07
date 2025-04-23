import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

interface ContactUsProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

const ContactUs: React.FC<ContactUsProps> = ({
  title = "Contact Us",
  subtitle = "Interested in working together? Fill out some info and we will be in touch shortly. We can't wait to hear from you!",
  buttonText = "Send",
}) => {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div id="contact" className={`w-full p-6 sm:p-8 md:p-16 ${darkMode ? 'bg-stone-800' : 'bg-[#ECE4DA]'}`}>
      <div className="flex flex-col md:flex-row md:space-x-8 lg:space-x-16 items-start">
        {/* Left side - Title and subtitle with enhanced styling */}
        <div className="w-full md:w-1/3 mb-10 md:mb-0 md:sticky md:top-16">
          <h2 className={`text-3xl sm:text-4xl font-serif mb-6 md:mb-8 ${darkMode ? 'text-[#ECE4DA]' : 'text-stone-800'} relative`}>
            {title}
            <span className={`block w-16 h-1 ${darkMode ? 'bg-[#ECE4DA]' : 'bg-stone-600'} mt-4`}></span>
          </h2>
          <p className={`${darkMode ? 'text-[#ECE4DA]' : 'text-stone-800'} leading-relaxed text-base sm:text-lg`}>
            {subtitle}
          </p>
        </div>
        
        {/* Right side - Form with enhanced styling */}
        <div className={`w-full md:w-2/3 ${darkMode ? 'bg-stone-700' : 'bg-[#E5DED5]'} p-6 sm:p-8 rounded-xl shadow-xl`}>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className={`block text-base sm:text-lg font-serif mb-2 ${darkMode ? 'text-[#ECE4DA]' : 'text-stone-800'}`}>
                Name <span className="text-sm ml-1">(required)</span>
              </label>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <label className={`block text-sm sm:text-base mb-1 font-serif ${darkMode ? 'text-[#ECE4DA]' : 'text-stone-800'}`}>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 ${darkMode ? 'bg-stone-600 text-[#ECE4DA] border-stone-500' : 'bg-transparent border-stone-500'} border rounded-full`}
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 mt-4 md:mt-0">
                  <label className={`block text-sm sm:text-base mb-1 font-serif ${darkMode ? 'text-[#ECE4DA]' : 'text-stone-800'}`}>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 ${darkMode ? 'bg-stone-600 text-[#ECE4DA] border-stone-500' : 'bg-transparent border-stone-500'} border rounded-full`}
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <label className={`block text-lg font-serif mb-2 ${darkMode ? 'text-[#ECE4DA]' : 'text-stone-800'}`}>
                Email <span className="text-sm ml-1">(required)</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 ${darkMode ? 'bg-stone-600 text-[#ECE4DA] border-stone-500' : 'bg-transparent border-stone-500'} border rounded-full`}
                required
              />
            </div>
            
            <div className="mb-8">
              <label className={`block text-lg font-serif mb-2 ${darkMode ? 'text-[#ECE4DA]' : 'text-stone-800'}`}>
                Message <span className="text-sm ml-1">(required)</span>
              </label>
              <textarea
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 ${darkMode ? 'bg-stone-600 text-[#ECE4DA] border-stone-500' : 'bg-transparent border-stone-500'} border rounded-3xl`}
                required
              />
            </div>
            
            <div className="flex justify-center sm:justify-start mt-8">
              <button
                type="submit"
                className={`${darkMode ? 'bg-[#ECE4DA] text-stone-800 hover:bg-[#D8CFC5]' : 'bg-stone-800 text-white hover:bg-stone-700'} px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl`}
              >
                {buttonText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;