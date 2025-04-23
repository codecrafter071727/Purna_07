import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#ECE4DA] py-8 sm:py-12 px-6 sm:px-12 flex flex-col md:flex-row justify-between gap-8">
      {/* Left Side */}
      <div className="flex flex-col items-center md:items-start">
        <p className="text-stone-800 text-lg sm:text-xl font-serif font-medium mb-2">ProjectPurna.com</p>
        <p className="text-stone-600 text-xs sm:text-sm mt-1">Made with Squarespace</p>
      </div>
      
      {/* Middle - Location */}
      <div className="flex flex-col items-center md:items-start">
        <p className="text-stone-800 text-base sm:text-lg font-serif font-medium mb-3 mr-0 md:mr-8">Location</p>
        <p className="text-stone-600 text-sm sm:text-base">Bennett University, Greater</p>
        <p className="text-stone-600 text-sm sm:text-base">Noida, India</p>
      </div>
      
      {/* Right Side - Contact */}
      <div className="flex flex-col items-center md:items-start">
        <p className="text-stone-800 text-base sm:text-lg font-serif font-medium mb-3">Contact</p>
        <p className="text-stone-600 text-sm sm:text-base">email@example.com</p>
        <p className="text-stone-600 text-sm sm:text-base">+91 (555) 555-5555</p>
      </div>
    </footer>
  );
}