import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'E-posta',
      value: 'dtemel844@gmail.com',
      link: 'mailto:dtemel844@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Telefon',
      value: '+90 539 347 62 71',
      link: 'tel:+905393476271'
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      value: 'github.com/Delilt',
      link: 'https://github.com/Delilt'
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/delil-temel-17aa6a222',
      link: 'https://www.linkedin.com/in/delil-temel-17aa6a222/'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'dtemel844@gmail.com'
      };

      await emailjs.send(
        'YOUR_SERVICE_ID', // EmailJS service ID
        'YOUR_TEMPLATE_ID', // EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // EmailJS public key
      );

      setAlertType('success');
      setAlertMessage('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.');
      setShowAlert(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Email sending failed:', error);
      setAlertType('danger');
      setAlertMessage('Mesaj gönderilirken bir hata oluştu. Lütfen doğrudan e-posta adresime yazın.');
      setShowAlert(true);
    } finally {
      setIsLoading(false);
      setTimeout(() => setShowAlert(false), 5000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title">İletişime Geçin</h2>
            <p className="section-subtitle">
              Projeleriniz, iş fırsatları veya işbirliği önerileriniz için benimle iletişime geçebilirsiniz
            </p>
          </Col>
        </Row>

        <Row>
          {/* Contact Information */}
          <Col lg={4} className="mb-5">
            <div className="contact-info">
              <h3 className="contact-info-title mb-4">İletişim Bilgileri</h3>
              
              {contactInfo.map((info, index) => (
                <Card key={index} className="contact-info-card mb-3">
                  <Card.Body>
                    <div className="contact-info-item">
                      <div className="contact-icon">
                        {info.icon}
                      </div>
                      <div className="contact-details">
                        <h5 className="contact-title">{info.title}</h5>
                        <a 
                          href={info.link} 
                          className="contact-value"
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))}

              <div className="contact-note mt-4">
                <h5>Neden Benimle Çalışmalısınız?</h5>
                <ul>
                  <li>🤖 Yapay zeka ve makine öğrenmesi uzmanlığı</li>
                  <li>🏆 AI4TR Türkiye Yapay Zeka Ödülleri finalisti</li>
                  <li>💼 Freelance finansal analiz deneyimi</li>
                  <li>🎓 Sürekli öğrenme ve gelişim odaklı yaklaşım</li>
                  <li>🌐 İngilizce C1 seviyesi</li>
                  <li>⚡ Hızlı ve kaliteli çözüm üretme</li>
                </ul>
              </div>
            </div>
          </Col>

          {/* Contact Form */}
          <Col lg={8}>
            <Card className="contact-form-card">
              <Card.Body>
                <h3 className="form-title mb-4">Mesaj Gönderin</h3>
                
                {showAlert && (
                  <Alert variant={alertType} className="mb-4">
                    {alertMessage}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Adınız Soyadınız *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Adınızı ve soyadınızı girin"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>E-posta Adresiniz *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="E-posta adresinizi girin"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Konu *</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Mesajınızın konusunu girin"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Mesajınız *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Detaylı mesajınızı buraya yazın..."
                    />
                  </Form.Group>

                  <div className="form-footer">
                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="lg"
                      disabled={isLoading}
                      className="submit-btn"
                    >
                      {isLoading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Gönderiliyor...
                        </>
                      ) : (
                        <>
                          <FaEnvelope className="me-2" />
                          Mesajı Gönder
                        </>
                      )}
                    </Button>
                  </div>
                </Form>

                <div className="form-note mt-4">
                  <p className="text-muted">
                    * Zorunlu alanlar. Mesajınızı aldıktan sonra 24 saat içinde size dönüş yapacağım.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Call to Action */}
        <Row className="mt-5">
          <Col lg={12} className="text-center">
            <div className="contact-cta">
              <h3>Projelerinizi Hayata Geçirelim!</h3>
              <p>
                Yapay zeka, web otomasyonu, mobil uygulama geliştirme veya finansal analiz 
                konularında projeleriniz varsa, birlikte çalışabiliriz.
              </p>
              <div className="cta-buttons">
                <Button 
                  variant="primary" 
                  size="lg" 
                  href="mailto:dtemel844@gmail.com"
                  className="me-3"
                >
                  <FaEnvelope className="me-2" />
                  Doğrudan E-posta Gönder
                </Button>
                <Button 
                  variant="outline-primary" 
                  size="lg"
                  href="https://www.linkedin.com/in/delil-temel-17aa6a222/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="me-2" />
                  LinkedIn'de Bağlantı Kur
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact; 