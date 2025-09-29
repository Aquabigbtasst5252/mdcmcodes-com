// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
// --- UPDATE THIS PART ---
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
// -----------------------

function App() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Services />
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default App