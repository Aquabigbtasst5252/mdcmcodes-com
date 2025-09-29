// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  const navLinks = ['Home', 'Projects', 'Services', 'About', 'Contact'];

  return (
    <nav className="bg-gray-900 bg-opacity-80 backdrop-blur-md fixed w-full top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-white text-2xl font-bold">mdcm<span className="text-cyan-400">codes</span></a>
          <div className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <a 
                key={link}
                href={`#${link.toLowerCase()}`} 
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;