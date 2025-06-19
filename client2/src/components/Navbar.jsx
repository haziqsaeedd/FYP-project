import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-white shadow-md top-0 p-0 px-6 py-4 flex justify-between items-center">
      {/* Left - Logo */}
      <div className="text-xl font-semibold text-gray-900">
        <Link to="/">Homa</Link>
      </div>

      {/* Center - Navigation Links */}
      <div className="hidden md:flex space-x-6 text-gray-700 text-sm">
        <Link to="#">Explore</Link>
        <Link to="#">Support</Link>
        <Link to="#">FAQ</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </div>
 
      {/* Right - Auth Buttons */}
      <div className="flex space-x-4 text-sm">
        {user ? (
          <> 
            <Link to="/account" className="text-gray-700 hover:text-black">
              Account
            </Link>
            <button
              onClick={logout}
              className="px-4 py-1 border border-red-500 text-red-500 rounded-md hover:bg-red-50"
            >
              Sign Out
              
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-gray-700 hover:text-black">
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-1 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
