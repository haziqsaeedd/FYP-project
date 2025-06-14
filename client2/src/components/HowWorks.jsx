import React from 'react';
import { FaSearch, FaEnvelopeOpenText, FaPhoneAlt, FaThumbsUp } from 'react-icons/fa';

const steps = [
  {
    icon: <FaSearch className="text-3xl text-blue-500" />,
    step: 'STEP 1',
    title: 'Search for Services',
    description:
      'Simply enter your location and select the type of service you’re looking for, from plumbing to home repairs and more.',
  },
  {
    icon: <FaEnvelopeOpenText className="text-3xl text-blue-500" />,
    step: 'STEP 2',
    title: 'Browse Local Experts',
    description:
      'Explore detailed profiles, read customer reviews, and compare ratings of trusted professionals near you.',
  },
  {
    icon: <FaPhoneAlt className="text-3xl text-blue-500" />,
    step: 'STEP 3',
    title: 'Book Your Service',
    description:
      'Choose the time that works best for you and easily book your preferred professional with a few clicks.',
  },
  {
    icon: <FaThumbsUp className="text-3xl text-blue-500" />,
    step: 'STEP 4',
    title: 'Enjoy your day',
    description:
      'Sit back and relax while a qualified expert arrives to complete the job efficiently and to your satisfaction.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-blue-100 rounded-full p-4 mb-4">{step.icon}</div>
              <p className="text-blue-500 text-sm font-semibold mb-1">{step.step}</p>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
