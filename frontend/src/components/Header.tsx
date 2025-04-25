import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className={`w-full sticky top-0 z-50 ${darkMode ? 'bg-[#ECE4DA]' : 'bg-stone-800'} shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl sm:text-2xl font-serif transition-transform duration-300 hover:scale-105">
            Project Purna
          </Link>

          <nav className="flex items-center space-x-6">
            <Link to="/mission" className="hover:text-stone-600 transition-colors duration-300">Our Mission</Link>
            <Link to="/team" className="hover:text-stone-600 transition-colors duration-300">Meet Our Team</Link>
            <Link to="/contact" className="hover:text-stone-600 transition-colors duration-300">Contact Us</Link>
            <button onClick={toggleDarkMode} className="p-2 transition-all duration-300 hover:scale-110" aria-label="Toggle dark mode">
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
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;