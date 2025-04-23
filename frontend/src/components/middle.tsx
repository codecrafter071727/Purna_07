import React from 'react';

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
  return (
    <div id="mission" className="flex flex-col md:flex-row bg-[#ECE4DA] p-6 sm:p-8 md:p-10 w-full">
      {/* Left side - Image */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src={imageUrl}
          alt="Bhojpur landscape"
          className="w-full h-auto md:h-full object-cover rounded-xl border-2 border-stone-500 transform hover:scale-102 transition-transform duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.19),_0_6px_6px_rgba(0,0,0,0.23),_0_16px_32px_rgba(0,0,0,0.15)]"
        />
      </div>
      
      {/* Right side - Content */}
      <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-12 flex flex-col">
        <h2 className="text-3xl sm:text-4xl font-serif mb-8 md:mb-12 text-stone-800 text-center md:text-left">{title}</h2>
        
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 lg:space-x-12 mb-8 md:mb-12">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-serif mb-3 md:mb-4 text-stone-800">{subtitle1}</h3>
            <p className="text-stone-800 text-sm sm:text-base text-center md:text-left">
              {description1}
            </p>
          </div>
          
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-serif mb-3 md:mb-4 text-stone-800">{subtitle2}</h3>
            <p className="text-stone-800 text-sm sm:text-base text-center md:text-right">
              {description2}
            </p>
          </div>
        </div>
        
        {/* Updated button with centered position and enhanced styling */}
        <div className="mt-6 md:mt-auto flex justify-center w-full">
          <button className="bg-stone-800 text-white px-10 sm:px-16 py-4 sm:py-5 rounded-full text-base sm:text-xl font-serif tracking-wider uppercase hover:bg-stone-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-stone-500/30 transform">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BhojpurLegacyComponent;