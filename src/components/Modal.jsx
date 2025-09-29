// src/components/Modal.jsx
import React from 'react';

const Modal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50" onClick={onClose}>
      <div className="relative bg-gray-900 rounded-lg p-8 max-w-2xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-3xl leading-none hover:text-gray-400">&times;</button>
        <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-6" />
        <h2 className="text-3xl font-bold text-cyan-400">{project.title}</h2>
        <p className="text-gray-400 mt-2">{project.description}</p>
        <p className="text-sm font-semibold text-gray-500 mt-4 mb-6">{project.tech}</p>
        <div className="flex justify-start gap-4">
          <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="bg-cyan-500 text-white py-2 px-4 rounded hover:bg-cyan-600 transition-colors">View Project</a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Modal;