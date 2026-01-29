import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">&copy; {new Date().getFullYear()} Midhun T. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
