// src/components/Projects.jsx
import React, { useState } from 'react';
import Modal from './Modal';
import irnSolarImage from '../assets/irnsolar.svg';
import orderManagementImage from '../assets/ordermanagement.svg';

// Placeholder data - we'll replace this with your actual projects
const projectData = [
  {
    title: "IRN Solar House",
    description: "A modern website for a solar energy company, built with React and Vite.",
    tech: "React, Firebase, Tailwind CSS",
    imageUrl: irnSolarImage,
    projectUrl: "https://irnsolar.com",
    githubUrl: "https://github.com/your-username/irn-solar-house"
  },
  {
    title: "Order Management App",
    description: "A web application for managing customer orders and production planning.",
    tech: "React, Vite, Firebase",
    imageUrl: orderManagementImage,
    projectUrl: "https://order-management-app.com",
    githubUrl: "https://github.com/your-username/order-management-app"
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center font-bold mb-12">My Portfolio</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {projectData.map((project, index) => (
            <div key={index} onClick={() => openModal(project)} className="bg-gray-900 rounded-lg p-6 transform hover:-translate-y-2 transition-transform duration-300 w-full md:w-1/2 lg:w-1/3 cursor-pointer">
              <h3 className="text-2xl font-bold mb-2 text-cyan-400">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <p className="text-sm font-semibold text-gray-500">{project.tech}</p>
            </div>
          ))}
        </div>
      </div>
      <Modal project={selectedProject} onClose={closeModal} />
    </section>
  );
};

export default Projects;