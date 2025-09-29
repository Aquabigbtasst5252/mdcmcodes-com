// src/components/About.jsx
import React from 'react';

const About = () => (
  <section id="about" className="py-20 bg-gray-800 text-white">
    <div className="container mx-auto px-4 text-center max-w-3xl">
      <h2 className="text-4xl font-bold mb-12">About Me</h2>
      {/* About Me content will go here */}
      <p className="text-gray-400 leading-relaxed">
        I am a passionate developer specializing in the MERN stack with a love for creating fast, responsive, and intuitive web applications. I thrive on solving complex problems and helping clients bring their ideas to life.
      </p>
    </div>
  </section>
);

export default About;