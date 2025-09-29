// src/components/Projects.jsx
import React from 'react';

// Placeholder data - we'll replace this with your actual projects
const projectData = [
  { title: "IRN Solar House", description: "A modern website for a solar energy company, built with React and Vite.", tech: "React, Firebase, Tailwind CSS" },
  { title: "Order Management App", description: "A web application for managing customer orders and production planning.", tech: "React, Vite, Firebase" },
  ];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center font-bold mb-12">My Portfolio</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-2 text-cyan-400">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <p className="text-sm font-semibold text-gray-500">{project.tech}</p>
              {/* You can add links here later */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;