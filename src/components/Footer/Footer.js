import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaEnvelope />, url: 'mailto:delil@example.com', label: 'Email' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={6} className="text-center text-md-start">
            <div className="footer-content">
              <h5 className="footer-brand mb-2">
                <span className="text-gradient">Delil Temel</span>
              </h5>
              <p className="footer-text mb-3">
                Modern web teknolojileri ile yaratıcı çözümler geliştiren Full Stack Developer
              </p>
              <p className="copyright">
                © {currentYear} Tüm hakları saklıdır. 
                <FaHeart className="heart-icon mx-1" />
                ile kodlandı.
              </p>
            </div>
          </Col>
          
          <Col lg={6} md={6} className="text-center text-md-end">
            <div className="footer-social">
              <div className="social-links mb-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              
              <button 
                className="back-to-top"
                onClick={scrollToTop}
                aria-label="Yukarı çık"
              >
                ↑
              </button>
            </div>
          </Col>
        </Row>
        
        <Row className="mt-4">
          <Col lg={12}>
            <div className="footer-bottom text-center">
              <div className="footer-links">
                <a href="#home" className="footer-link">Ana Sayfa</a>
                <a href="#about" className="footer-link">Hakkımda</a>
                <a href="#skills" className="footer-link">Yetenekler</a>
                <a href="#projects" className="footer-link">Projeler</a>
                <a href="#contact" className="footer-link">İletişim</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 