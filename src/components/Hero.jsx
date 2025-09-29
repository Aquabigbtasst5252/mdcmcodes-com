// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Modern Web Apps with <span className="text-cyan-400">React & Firebase</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          M.D.C.Madushanke, Full-Stack Developer
        </p>
        <a 
          href="#projects" 
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-transform transform hover:scale-105 duration-300"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;