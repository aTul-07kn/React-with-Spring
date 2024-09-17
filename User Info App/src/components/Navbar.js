import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <IoClose className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <GiHamburgerMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <NavLink to="/"><h1 className="text-2xl font-bold px-7">USER Animony</h1></NavLink>
            </div>
            <div className="hidden sm:flex sm:space-x-8">
              <NavLink to="/" className={({isActive})=>
                `text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-700 text-white' : ''}`
              }>
                Home
              </NavLink>
              <NavLink to="/dashboard" className={({isActive})=>
                `text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-700 text-white' : ''}`
              }>
                Dashboard
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLink to="/" className={({isActive})=>
                `text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-700 text-white' : ''}`
              }>Home</NavLink>
          <NavLink to="/dashboard" className={({isActive})=>
                `text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-700 text-white' : ''}`
              }>Dashboard</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
