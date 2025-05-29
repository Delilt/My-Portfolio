import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import { Analytics } from '@vercel/analytics/react';
import './App.scss';

// Context
import { ThemeProvider } from './contexts/ThemeContext';

// Components
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ThreeBackground from './components/ThreeBackground/ThreeBackground';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import InteractiveParticles from './components/ThreeAnimations/InteractiveParticles';
import FloatingGeometry from './components/ThreeAnimations/FloatingGeometry';
import WaveEffect from './components/ThreeAnimations/WaveEffect';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <ThemeToggle />
          <ThreeBackground />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <section className="animation-section">
                    <InteractiveParticles className="particles-about" />
                  </section>
                  <About />
                  <section className="animation-section">
                    <FloatingGeometry className="geometry-skills" />
                  </section>
                  <Skills />
                  <Projects />
                  <section className="animation-section">
                    <WaveEffect className="wave-experience" />
                  </section>
                  <Experience />
                  <Contact />
                </>
              } />
            </Routes>
          </main>
          <Footer />
          <Analytics />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; 