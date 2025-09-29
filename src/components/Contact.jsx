// src/components/Contact.jsx
import React from 'react';

const Contact = () => (
  <section id="contact" className="py-20 bg-gray-900 text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>
      {/* Contact content will go here */}
      <p className="text-gray-400 mb-8">Have a project in mind? I'd love to hear from you.</p>
      <a 
        href="mailto:your.email@example.com" 
        className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-transform transform hover:scale-105 duration-300"
      >
        Email Me
      </a>
    </div>
  </section>
);

export default Contact;