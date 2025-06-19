import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#e0f2fe] to-white pt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-6 gap-8 text-sm text-gray-600">
        <div className="col-span-2">
          <h4 className="text-lg font-bold text-gray-800 mb-2">Homa</h4>
          <p>Connect with Reliable Professionals: Home Service</p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Service</h4>
          <ul className="space-y-1">
            <li>Plumbing</li>
            <li>Electrical Repairs</li>
            <li>Home Cleaning</li>
            <li>HVAC Services</li>
            <li>Handyman</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Get Support</h4>
          <ul className="space-y-1">
            <li>FAQ</li>
            <li>Contact Us</li>
            <li>How It Works</li>
            <li>Service Guarantee</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Company</h4>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Available on</h4>
          <div className="space-y-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Available_on_the_App_Store_%28black%29_SVG.svg"
              alt="App Store"
              className="w-28"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="w-28"
            />
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-200 py-4 px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <span>© 2024 Homa | All Rights Reserved</span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
