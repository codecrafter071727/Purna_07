import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import teamData from '../data/team.json';

const TeamMember = ({ name, role, image, linkedin, description, index }) => {
  const { darkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div 
      className={`transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className={`relative overflow-hidden rounded-2xl ${
        darkMode ? 'bg-stone-700/50' : 'bg-white/90'
      } shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(236,228,218,0.3)] transition-all duration-500 group hover:-translate-y-2`}>
        <div className="relative overflow-hidden h-72">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          />
          <div className={`absolute inset-0 ${
            darkMode 
              ? 'bg-gradient-to-t from-stone-900 via-stone-900/50' 
              : 'bg-gradient-to-t from-stone-800/90 via-stone-800/30'
          } opacity-0 group-hover:opacity-100 transition-all duration-500`}>
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-[#ECE4DA] text-sm mb-4 leading-relaxed">
                {description}
              </p>
              <a 
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-5 py-2 text-sm font-medium rounded-full ${
                  darkMode 
                    ? 'bg-[#ECE4DA] text-stone-800 hover:bg-white' 
                    : 'bg-[#ECE4DA] text-stone-800 hover:bg-stone-800 hover:text-[#ECE4DA]'
                } transition-all duration-300 transform hover:scale-105`}
              >
                <span>Connect</span>
                <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="p-6 relative border-t border-stone-200/10">
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-16 h-0.5 ${
            darkMode ? 'bg-[#ECE4DA]/20' : 'bg-stone-200'
          } group-hover:w-32 transition-all duration-500`}></div>
          
          <h3 className={`text-2xl font-serif mb-2 text-center ${
            darkMode ? 'text-[#ECE4DA]' : 'text-stone-800'
          } group-hover:scale-105 transition-transform duration-500`}>
            {name}
          </h3>
          <p className={`text-sm font-medium text-center ${
            darkMode ? 'text-[#ECE4DA]/80' : 'text-stone-600'
          } group-hover:tracking-wider transition-all duration-500`}>
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Team() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className={`w-full ${
        darkMode ? 'bg-[#ECE4DA] text-stone-800' : 'bg-stone-800 text-[#ECE4DA]'
      } sticky top-0 z-50 shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3 group">
              <span className="text-2xl font-serif transform transition-transform duration-300 group-hover:scale-105">
                Project Purna
              </span>
            </Link>

            <nav className="flex space-x-8">
              <Link to="/" className="text-sm font-medium relative overflow-hidden group">
                <span className="relative z-10">Home</span>
                <span className={`absolute bottom-0 left-0 w-full h-0.5 ${
                  darkMode ? 'bg-stone-800' : 'bg-[#ECE4DA]'
                } transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100`}></span>
              </Link>

              <a href="#mission" className="text-sm font-medium relative overflow-hidden group">
                <span className="relative z-10">Our Mission</span>
                <span className={`absolute bottom-0 left-0 w-full h-0.5 ${
                  darkMode ? 'bg-stone-800' : 'bg-[#ECE4DA]'
                } transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100`}></span>
              </a>

              <a href="#contact" className="text-sm font-medium relative overflow-hidden group">
                <span className="relative z-10">Contact</span>
                <span className={`absolute bottom-0 left-0 w-full h-0.5 ${
                  darkMode ? 'bg-stone-800' : 'bg-[#ECE4DA]'
                } transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100`}></span>
              </a>

              <button 
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  darkMode 
                    ? 'bg-stone-800 text-[#ECE4DA]' 
                    : 'bg-[#ECE4DA] text-stone-800'
                }`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </nav>
          </div>
        </div>
      </header>
      
      <main className={`flex-grow ${darkMode ? 'bg-stone-800' : 'bg-[#ECE4DA]'} pt-16 pb-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title section moved to top */}
          <div className="text-center mb-16 relative">
            <div className="relative inline-block">
              <h1 className={`text-6xl font-serif mb-2 relative z-10 ${
                darkMode ? 'text-[#ECE4DA]' : 'text-stone-800'
              } tracking-tight`}>
                Our Team
                <span className={`absolute -bottom-2 left-0 w-full h-1 ${
                  darkMode ? 'bg-[#ECE4DA]/20' : 'bg-stone-400'
                } transform origin-left transition-transform duration-500`}></span>
              </h1>
              <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 text-8xl font-bold opacity-5 whitespace-nowrap ${
                darkMode ? 'text-[#ECE4DA]' : 'text-stone-800'
              }`}>
                MEET THE TEAM
              </div>
            </div>
            <p className={`max-w-2xl mx-auto text-lg mt-6 ${
              darkMode ? 'text-[#ECE4DA]/100' : 'text-stone-800'
            } font-dark tracking-wide`}>
              Meet the passionate individuals dedicated to preserving and showcasing Bhojpur's rich heritage
            </p>
          </div>

          {/* Team grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className={`absolute inset-0 bg-gradient-to-r ${
              darkMode 
                ? 'from-[#ECE4DA]/5 via-transparent to-[#ECE4DA]/5' 
                : 'from-stone-800/5 via-transparent to-stone-800/5'
            } pointer-events-none`}></div>
            {teamData.teamMembers.map((member, index) => (
              <TeamMember key={member.id} {...member} index={index} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}