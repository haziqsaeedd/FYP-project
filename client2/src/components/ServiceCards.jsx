import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCog, FaBolt, FaHandsHelping, FaToolbox, FaWrench } from 'react-icons/fa';

const serviceCards = [
  { icon: <FaUserCog />, label: 'Home service' },
  { icon: <FaBolt />, label: 'Electricity' },
  { icon: <FaHandsHelping />, label: 'Handcraft' },
  { icon: <FaToolbox />, label: 'Plumber' },
  { icon: <FaWrench />, label: 'Mechanic' },
];

const slugify = (text) => text.toLowerCase().replace(/\s+/g, '-');

const ServiceCards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6 px-4">
      {serviceCards.map((card, idx) => (
        <Link to={`/services/${slugify(card.label)}`} key={idx}>
          <div className="bg-white shadow-md px-6 py-4 rounded-xl flex flex-col items-center gap-2 w-32 hover:shadow-lg hover:bg-blue-50 cursor-pointer">
            <div className="text-blue-500 text-2xl">{card.icon}</div>
            <div className="text-sm text-gray-700 font-medium">{card.label}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ServiceCards;
