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
    <div id="mission" className="flex flex-col md:flex-row bg-stone-300 p-10 w-full">
      {/* Left side - Image */}
      <div className="md:w-1/2">
        <img
          src={imageUrl}
          alt="Bhojpur landscape"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Right side - Content */}
      <div className="md:w-1/2 p-8 md:p-12 flex flex-col">
        <h2 className="text-4xl font-serif mb-12 text-stone-800">{title}</h2>
        
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12 mb-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-serif mb-4 text-stone-800">{subtitle1}</h3>
            <p className="text-stone-800 text-center md:text-left">
              {description1}
            </p>
          </div>
          
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-serif mb-4 text-stone-800">{subtitle2}</h3>
            <p className="text-stone-800 text-center md:text-right">
              {description2}
            </p>
          </div>
        </div>
        
        <div className="mt-auto flex justify-end">
          <button className="bg-stone-800 text-white px-12 py-4 rounded-full text-lg hover:bg-stone-700 transition-colors">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BhojpurLegacyComponent;