import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';
import CustomCursor from './components/CustomCursor/CustomCursor'; // Ensure this import is correct
import './App.css';

function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <Navbar />
      <main className="content">
        <CustomCursor /> {/* Ensure this is present */}
        <div id="home">
          <Home />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
