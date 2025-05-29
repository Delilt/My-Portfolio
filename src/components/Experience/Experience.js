import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBriefcase, FaGraduationCap, FaCertificate, FaAward } from 'react-icons/fa';
import './Experience.scss';

const Experience = () => {
  const workExperience = [
    {
      id: 1,
      title: 'Stajyer Yazılım Geliştirici',
      company: 'Sampaş Bilişim ve İletişim Sistemleri A.Ş',
      period: '2024',
      type: 'Staj',
      description: 'Dağıtık sistemlerde paralel işleme yaparak yapay zeka optimizasyonu ve entegrasyonu üzerine projeler geliştirdim. Belediyeler tarafından kullanılacak olan Açık Veri Portalı web uygulaması projesinde çalıştım.',
      technologies: ['Python', 'Flask', 'CKAN', 'PostgreSQL', 'Distributed Systems', 'AI Optimization'],
      achievements: [
        'Açık Veri Portalı web uygulaması geliştirme',
        'Dağıtık sistemlerde AI optimizasyonu',
        'Paralel işleme algoritmaları implementasyonu'
      ]
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'Bilgisayar Mühendisliği',
      school: 'Üniversite',
      period: '2020 - 2024',
      description: 'C#, HTML/CSS, C ve SQL gibi temel teknolojilerde sağlam bir eğitim aldım. Python ile web otomasyonları, veri kazıma araçları, chatbot\'lar ve toplu e-posta gönderim sistemleri geliştirdim.',
      courses: [
        'Veri Yapıları ve Algoritmalar',
        'Veritabanı Yönetim Sistemleri',
        'Yazılım Mühendisliği',
        'Yapay Zeka ve Makine Öğrenmesi',
        'Web Programlama',
        'Mobil Uygulama Geliştirme'
      ]
    }
  ];

  const certifications = [
    {
      id: 1,
      title: 'Akbank Yapay Zeka Geliştirme Kursu',
      issuer: 'Akbank',
      year: '2024',
      type: 'AI/ML',
      description: 'Yapay zeka ve makine öğrenmesi teknolojileri üzerine kapsamlı eğitim'
    },
    {
      id: 2,
      title: 'Aygaz Makine Öğrenmesi ve Yapay Zeka Kursu',
      issuer: 'Aygaz',
      year: '2024',
      type: 'AI/ML',
      description: 'Makine öğrenmesi algoritmaları ve yapay zeka uygulamaları'
    },
    {
      id: 3,
      title: 'Global AI Hub Makine Öğrenmesi ve Yapay Zeka Kursu',
      issuer: 'Global AI Hub',
      year: '2024',
      type: 'AI/ML',
      description: 'Uluslararası standartlarda AI/ML eğitimi'
    },
    {
      id: 4,
      title: 'Harvard Üniversitesi Veri Bilimine Giriş Eğitimi',
      issuer: 'Harvard University',
      year: '2024',
      type: 'Data Science',
      description: 'Veri bilimi temellerini kapsayan prestijli eğitim programı'
    },
    {
      id: 5,
      title: 'AFAD Afet Bilinçlendirme ve Operasyonu',
      issuer: 'AFAD',
      year: '2024',
      type: 'Certification',
      description: 'Afet yönetimi ve acil durum operasyonları eğitimi'
    },
    {
      id: 6,
      title: 'TopTalent İngilizce Dil Seviye Sertifikası (C1)',
      issuer: 'TopTalent.co',
      year: '2024',
      type: 'Language',
      description: 'İleri seviye İngilizce yeterliliği belgesi'
    }
  ];

  const achievements = [
    {
      id: 1,
      title: 'AI4TR 1. Türkiye Yapay Zeka Ödülleri Finalisti',
      description: 'Prostat kanseri teşhis projesi ile Türkiye\'nin en prestijli yapay zeka yarışmasında finale kaldım',
      year: '2024',
      category: 'Yarışma',
      icon: <FaAward />
    },
    {
      id: 2,
      title: '4. Sağlıkta Yapay Zeka Kongresi Proje Bildirisi',
      description: 'Sağlık alanındaki yapay zeka çalışmalarımı ulusal kongrede sundum',
      year: '2024',
      category: 'Akademik',
      icon: <FaCertificate />
    },
    {
      id: 3,
      title: 'Finansal Piyasa Analizi Freelance Geliri',
      description: 'Geliştirdiğim stratejik indikatörler üzerinden kripto para piyasalarında başarılı analizler',
      year: '2023-2024',
      category: 'Freelance',
      icon: <FaBriefcase />
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title">Deneyim & Eğitim</h2>
            <p className="section-subtitle">
              Profesyonel deneyimim, eğitim geçmişim ve aldığım sertifikalar
            </p>
          </Col>
        </Row>

        {/* Work Experience */}
        <Row className="mb-5">
          <Col lg={12}>
            <h3 className="subsection-title mb-4">
              <FaBriefcase className="me-2" />
              İş Deneyimi
            </h3>
            <div className="timeline">
              {workExperience.map((exp) => (
                <div key={exp.id} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <Card className="experience-card">
                      <Card.Body>
                        <div className="experience-header">
                          <h4 className="experience-title">{exp.title}</h4>
                          <span className="experience-type">{exp.type}</span>
                        </div>
                        <h5 className="company-name">{exp.company}</h5>
                        <p className="experience-period">{exp.period}</p>
                        <p className="experience-description">{exp.description}</p>
                        
                        <div className="experience-technologies mb-3">
                          <h6>Kullanılan Teknolojiler:</h6>
                          <div className="tech-tags">
                            {exp.technologies.map((tech, index) => (
                              <span key={index} className="tech-tag">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="experience-achievements">
                          <h6>Başarılar:</h6>
                          <ul>
                            {exp.achievements.map((achievement, index) => (
                              <li key={index}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Education */}
        <Row className="mb-5">
          <Col lg={12}>
            <h3 className="subsection-title mb-4">
              <FaGraduationCap className="me-2" />
              Eğitim
            </h3>
            <div className="timeline">
              {education.map((edu) => (
                <div key={edu.id} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <Card className="education-card">
                      <Card.Body>
                        <h4 className="education-degree">{edu.degree}</h4>
                        <h5 className="education-school">{edu.school}</h5>
                        <p className="education-period">{edu.period}</p>
                        <p className="education-description">{edu.description}</p>
                        
                        <div className="education-courses">
                          <h6>Önemli Dersler:</h6>
                          <div className="course-tags">
                            {edu.courses.map((course, index) => (
                              <span key={index} className="course-tag">
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Achievements */}
        <Row className="mb-5">
          <Col lg={12}>
            <h3 className="subsection-title mb-4">
              <FaAward className="me-2" />
              Başarılar & Ödüller
            </h3>
            <Row>
              {achievements.map((achievement) => (
                <Col lg={4} md={6} className="mb-4" key={achievement.id}>
                  <Card className="achievement-card h-100">
                    <Card.Body className="text-center">
                      <div className="achievement-icon mb-3">
                        {achievement.icon}
                      </div>
                      <h5 className="achievement-title">{achievement.title}</h5>
                      <p className="achievement-description">{achievement.description}</p>
                      <div className="achievement-meta">
                        <span className="achievement-year">{achievement.year}</span>
                        <span className="achievement-category">{achievement.category}</span>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Certifications */}
        <Row>
          <Col lg={12}>
            <h3 className="subsection-title mb-4">
              <FaCertificate className="me-2" />
              Sertifikalar & Eğitimler
            </h3>
            <Row>
              {certifications.map((cert) => (
                <Col lg={6} className="mb-4" key={cert.id}>
                  <Card className="certification-card h-100">
                    <Card.Body>
                      <div className="certification-header">
                        <h5 className="certification-title">{cert.title}</h5>
                        <span className="certification-type">{cert.type}</span>
                      </div>
                      <h6 className="certification-issuer">{cert.issuer}</h6>
                      <p className="certification-year">{cert.year}</p>
                      <p className="certification-description">{cert.description}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience; 