import React from 'react';

export default function ProjectPurna() {
  return (
    <div className="min-h-screen w-full relative bg-cover bg-center" 
         style={{ backgroundImage: "url('https://res.cloudinary.com/dub7qyv8e/image/upload/v1745351111/ChatGPT_Image_Apr_21_2025_12_07_41_AM_w0ojn6.png')" }}>
      {/* Navigation - Updated for better mobile responsiveness */}
      <nav className="flex flex-col sm:flex-row justify-between items-center p-4 md:p-6 lg:px-12 relative z-10">
        <div className="text-white text-xl md:text-2xl font-medium mb-4 sm:mb-0">Project Purna</div>
        <div className="flex space-x-6 md:space-x-8 text-white">
          <a href="#mission" className="hover:underline text-base md:text-lg">Our Mission</a>
          <a href="#team" className="hover:underline text-base md:text-lg">Meet Our Team</a>
          <a href="#contact" className="hover:underline text-base md:text-lg">Contact</a>
        </div>
      </nav>

      {/* Main Hero Content - Improved padding and sizing for mobile */}
      <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 min-h-[80vh] py-32">
        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-dark mb-8 md:mb-12 tracking-widest uppercase font-serif">
          THE MISSION TO COMPLETE<br className="hidden sm:block" />
          <span className="sm:hidden"> </span>THE UNFINISHED
        </h1>
        
        <div className="max-w-xs sm:max-w-md md:max-w-2xl  lg:max-w-3xl mx-auto mb-3 ">
          <p className="text-white text-lg sm:text-base md:text-lg p-4 md:mb-16 leading-relaxed font-serif">
            We are a collective of historians, architects, artisans, spiritual leaders, and 
            cultural conservationists working toward completing the unfinished Bhojeshwar 
            Temple. Guided by ancient blueprints, historical texts, and cutting-edge 
            restoration methods, we aim to bring King Bhoja's forgotten vision to life while 
            maintaining the integrity of its original form.
          </p>
        </div >

        <button className="mt-4 md:mt-8 bg-stone-300  hover:bg-stone-400 text-stone-800 font-serif tracking-wider uppercase py-3 px-8 sm:px-12 rounded-full transition-colors text-sm sm:text-base">
          Learn more
        </button>
      </div>

      {/* Dark overlay to make text more readable - lighter opacity */}
      <div className="absolute inset-0 bg-black opacity-25 z-0"></div>
    </div>
  );
}