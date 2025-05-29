import React, { useState, useEffect, useMemo } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.scss';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = useMemo(() => [
    'Yapay Zeka Geliştirici',
    'Python Developer',
    'Flutter Developer',
    'Bilgisayar Mühendisi',
    'AI/ML Uzmanı'
  ], []);

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % roles.length;
      const fullText = roles[current];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Merhaba, Ben <span className="text-gradient">Delil Temel</span>
              </h1>
              <h2 className="hero-subtitle">
                <span className="typing-text">{text}</span>
                <span className="cursor">|</span>
              </h2>
              <p className="hero-description">
                Bilgisayar mühendisliği altyapımı Python odaklı geliştirme becerilerimle birleştirerek 
                yapay zeka, otomasyon ve mobil uygulama projelerinde katma değer yaratmayı hedefleyen 
                bir yazılım geliştiricisiyim. Sürekli öğrenmeye ve yeni teknolojilere adapte olmaya 
                önem veriyorum.
              </p>
              <div className="hero-buttons">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="me-3 mb-3"
                  onClick={() => scrollToSection('contact')}
                >
                  <FaEnvelope className="me-2" />
                  İletişime Geç
                </Button>
                <Button 
                  variant="outline-primary" 
                  size="lg" 
                  className="mb-3"
                  href="/Delil-Temel-cv.pdf"
                  download
                >
                  <FaDownload className="me-2" />
                  CV İndir
                </Button>
              </div>
              <div className="hero-social">
                <a 
                  href="https://github.com/Delilt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://www.linkedin.com/in/delil-temel-17aa6a222/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="mailto:dtemel844@gmail.com" 
                  className="social-link"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} className="hero-image">
            <div className="hero-avatar">
              <div className="avatar-container">
                <div className="avatar-bg"></div>
                <div className="avatar-content">
                  <span className="avatar-text">DT</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero; 