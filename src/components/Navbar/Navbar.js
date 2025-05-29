import React, { useState, useEffect } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import './Navbar.scss';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BootstrapNavbar
        expand="lg"
        fixed="top"
        className={`custom-navbar ${scrolled ? 'scrolled' : ''} ${isDarkMode ? 'dark' : 'light'}`}
      >
        <Container>
          <BootstrapNavbar.Brand 
            href="#home" 
            className="brand-logo"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            <span className="text-gradient">Portfolio</span>
          </BootstrapNavbar.Brand>
          
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
          
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {[
                { id: 'home', label: 'Ana Sayfa' },
                { id: 'about', label: 'Hakkımda' },
                { id: 'skills', label: 'Yetenekler' },
                { id: 'projects', label: 'Projeler' },
                { id: 'experience', label: 'Deneyim' },
                { id: 'contact', label: 'İletişim' }
              ].map((item) => (
                <Nav.Link
                  key={item.id}
                  href={`#${item.id}`}
                  className={`nav-link-custom ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </Nav.Link>
              ))}
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </motion.div>
  );
};

export default Navbar; 