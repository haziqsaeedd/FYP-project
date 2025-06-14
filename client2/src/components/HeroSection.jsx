import React from 'react';
import { FaSearch, FaBolt, FaWrench, FaHandsHelping, FaToolbox, FaUserCog } from 'react-icons/fa';

const categories = ['Home care', 'Electrician', 'Mechanic', 'Plumber', 'Handcraft'];

const serviceCards = [
  { icon: <FaUserCog />, label: 'Home service' },
  { icon: <FaBolt />, label: 'Electricity' },
  { icon: <FaHandsHelping />, label: 'Handcraft' },
  { icon: <FaToolbox />, label: 'Plumber' },
  { icon: <FaWrench />, label: 'Mechanic' },
];

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#dbeafe] to-[#93c5fd] rounded-3xl p-6 md:p-12 text-center relative overflow-hidden">
      {/* Hero text */}
      <h1 className="text-3xl md:text-5xl font-semibold text-white mb-6">
        Connect with Reliable <br /> Professionals Home Service
      </h1>

      {/* Search bar */}
      <div className="flex justify-center items-center mb-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search service"
          className="flex-1 py-2 px-4 rounded-l-full border border-white focus:outline-none"
        />
        <button className="bg-white p-3 rounded-r-full">
          <FaSearch className="text-blue-500" />
        </button>
      </div>

      {/* Category tags */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat, index) => (
          <span
            key={index}
            className="bg-white text-sm text-blue-600 px-3 py-1 rounded-full shadow-sm hover:bg-blue-100 cursor-pointer"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Example user avatars (You can replace with real <img> URLs) */}
      <div className="hidden md:block">
        <div className="absolute top-4 left-6 text-white text-xs bg-white/20 rounded-lg p-1">
          <div className="text-sm">Rebecca</div>
          <div>Electrician</div>
        </div>

        <div className="absolute top-20 left-2">
          <img
            src="https://randomuser.me/api/portraits/women/1.jpg"
            alt="Rebecca"
            className="w-16 h-16 rounded-full border-2 border-white shadow-lg"
          />
        </div>

        <div className="absolute top-10 right-10 text-white text-xs bg-white/20 rounded-lg p-1">
          <div className="text-sm">Uncle Musa</div>
          <div>Mechanic</div>
        </div>
 
        <div className="absolute top-24 right-4">
          <img
            src="https://randomuser.me/api/portraits/men/3.jpg"
            alt="Uncle Musa"
            className="w-16 h-16 rounded-full border-2 border-white shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
