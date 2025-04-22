import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-stone-300  py-10 px-12 flex justify-between">
      {/* Left Side */}
      <div className="flex flex-col">
        <p className="text-stone-800 font-medium">ProjectPurna.com</p>
        <p className="text-stone-600 text-sm mt-1">Made with Squarespace</p>
      </div>
      
      {/* Middle - Location */}
      <div className="flex flex-col">
        <p className="text-stone-800 font-medium mb-2">Location</p>
        <p className="text-stone-600">Bennett University, Greater</p>
        <p className="text-stone-600">Noida, India</p>
      </div>
      
      {/* Right Side - Contact */}
      <div className="flex flex-col">
        <p className="text-stone-800 font-medium mb-2">Contact</p>
        <p className="text-stone-600">email@example.com</p>
        <p className="text-stone-600">(555) 555-5555</p>
      </div>
    </footer>
  );
}