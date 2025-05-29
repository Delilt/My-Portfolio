import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt, FaAward, FaMedal } from 'react-icons/fa';
import './Projects.scss';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Prostat Kanserinin Erken Teşhisi İçin Yapay Zeka',
      description: 'Radiomics ve yapay zeka teknikleri kullanarak prostat kanserinin erken teşhisi için geliştirilen sistem. AI4TR 1. Türkiye Yapay Zeka Ödülleri finalisti projesi.',
      image: '/images/bildiri setifikası.png',
      technologies: ['Python', 'TensorFlow', 'Radiomics', 'FastAPI', 'Uvicorn', 'Ngrok', 'HTML'],
      category: 'ai',
      featured: true,
      award: 'AI4TR Finalisti',
      github: 'https://github.com/Delilt',
      demo: '#',
      status: 'Tamamlandı'
    },
    {
      id: 2,
      title: 'Kripto Para Al-Sat Sinyalleri Üretici',
      description: 'Binance API kullanarak kripto para piyasalarında otomatik al-sat sinyalleri üreten Python uygulaması. Teknik analiz ve makine öğrenmesi algoritmaları içerir.',
      image: '/images/ındıkator.jpg',
      technologies: ['Python', 'Binance API', 'Pandas', 'NumPy', 'TA-Lib', 'Machine Learning'],
      category: 'trading',
      featured: true,
      github: 'https://github.com/Delilt',
      demo: '#',
      status: 'Aktif'
    },
    {
      id: 3,
      title: 'LLM Tabanlı Kripto Para Yorumlayıcısı',
      description: 'BERT modeli kullanarak duygu analizi yapan, kripto para grafiklerini ve teknik göstergeleri analiz eden LLM tabanlı sistem. %90+ başarı oranı.',
      image: '/images/yorumlama bert.jpg',
      technologies: ['Python', 'BERT', 'Transformers', 'Pandas', 'Matplotlib', 'LLM', 'NLP'],
      category: 'ai',
      featured: true,
      github: 'https://github.com/Delilt',
      demo: '#',
      status: 'Tamamlandı'
    },
    {
      id: 4,
      title: 'Gemini API ile Q&A Chatbot',
      description: 'Resimleri analiz edip soru-cevap yapabilen gelişmiş chatbot. Gemini API entegrasyonu ile görsel içerik analizi ve doğal dil işleme.',
      image: '/images/chatbot.jpg',
      technologies: ['Python', 'Gemini API', 'Computer Vision', 'NLP', 'FastAPI'],
      category: 'ai',
      github: 'https://github.com/Delilt',
      demo: '#',
      status: 'Tamamlandı'
    },
    {
      id: 5,
      title: 'IMDB Duygu Analizi',
      description: 'IMDB film yorumları üzerinde makine öğrenmesi teknikleri kullanarak duygu analizi yapan Python uygulaması.',
      image: '/images/imdb.jpg',
      technologies: ['Python', 'Scikit-learn', 'NLTK', 'Pandas', 'Matplotlib'],
      category: 'ai',
      github: 'https://github.com/Delilt',
      demo: '#',
      status: 'Tamamlandı'
    },
    {
      id: 6,
      title: 'Banka Otomasyonu Sistemi',
      description: 'C# ve PostgreSQL kullanarak geliştirilmiş kapsamlı banka yönetim sistemi. Müşteri işlemleri, hesap yönetimi ve raporlama modülleri.',
      image: '/images/bank.jpg',
      technologies: ['C#', 'PostgreSQL', 'Windows Forms', '.NET Framework'],
      category: 'desktop',
      github: 'https://github.com/Delilt',
      demo: '#',
      status: 'Tamamlandı'
    },
    {
      id: 7,
      title: 'Hastane Takip Otomasyonu',
      description: 'Hastane süreçlerini dijitalleştiren C# tabanlı masaüstü uygulaması. Hasta kayıtları, randevu sistemi ve doktor yönetimi.',
      image: '/images/hastane.png',
      technologies: ['C#', 'PostgreSQL', 'Windows Forms', 'Crystal Reports'],
      category: 'desktop',
      github: 'https://github.com/Delilt',
      demo: '#',
      status: 'Tamamlandı'
    },
    {
      id: 8,
      title: 'Öğrenci Bilgi Sistemi',
      description: 'Öğrenci bilgilerini yöneten kapsamlı eğitim yönetim sistemi. Not takibi, devam durumu ve akademik raporlama özellikleri.',
      image: '/images/ubys.png',
      technologies: ['C#', 'PostgreSQL', 'Windows Forms', 'Entity Framework'],
      category: 'desktop',
      github: 'https://github.com/Delilt',
      demo: '#',
      status: 'Tamamlandı'
    },
    {
      id: 9,
      title: 'Görme Engelliler İçin Uyarı Sistemli Gözlük',
      description: 'Arduino tabanlı IoT projesi. Ultrasonik sensörler kullanarak görme engelli bireylere ses ve titreşim uyarıları veren akıllı gözlük.',
      image: '/images/gozluk.jpg',
      technologies: ['Arduino', 'C++', 'Ultrasonik Sensör', 'Buzzer', 'Vibration Motor'],
      category: 'iot',
      github: 'https://github.com/Delilt',
      demo: '#',
      status: 'Tamamlandı'
    },
    {
      id: 10,
      title: 'Q-Learning ile Tic-Tac-Toe',
      description: 'Reinforcement Learning (Q-Learning) algoritması kullanarak öğrenen Tic-Tac-Toe oyunu. AI agent her oyunda performansını artırır.',
      image: '/images/ttt.jpg',
      technologies: ['Python', 'Q-Learning', 'NumPy', 'Matplotlib', 'Reinforcement Learning'],
      category: 'ai',
      github: 'https://github.com/Delilt',
      demo: '#',
      status: 'Tamamlandı'
    },
    {
      id: 11,
      title: 'RL Entegreli Dama Oyunu',
      description: 'Reinforcement Learning metodu ile her oyunda evrim geçiren AI agent. Adaptif öğrenme algoritmaları ile sürekli gelişen yapay zeka.',
      image: '/images/dama.jpg',
      technologies: ['Python', 'Reinforcement Learning', 'Neural Networks', 'PyGame'],
      category: 'ai',
      github: 'https://github.com/Delilt',
      demo: '#',
      status: 'Tamamlandı'
    },
    {
      id: 12,
      title: 'Açık Veri Portalı (CKAN)',
      description: 'Kamu kurumları için open source CKAN kullanılarak geliştirilen açık veri portalı. Python ve Flask ile özelleştirilmiş çözüm.',
      image: '/images/ulasav-haber.jpg',
      technologies: ['Python', 'Flask', 'CKAN', 'PostgreSQL', 'Solr', 'Redis'],
      category: 'web',
      github: 'https://github.com/Delilt',
      demo: '#',
      status: 'Tamamlandı'
    }
  ];

  const categories = [
    { key: 'all', label: 'Tümü', count: projects.length },
    { key: 'ai', label: 'Yapay Zeka', count: projects.filter(p => p.category === 'ai').length },
    { key: 'trading', label: 'Trading & Finans', count: projects.filter(p => p.category === 'trading').length },
    { key: 'desktop', label: 'Masaüstü Uygulamalar', count: projects.filter(p => p.category === 'desktop').length },
    { key: 'web', label: 'Web Uygulamaları', count: projects.filter(p => p.category === 'web').length },
    { key: 'iot', label: 'IoT & Hardware', count: projects.filter(p => p.category ===   'iot').length }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="projects-section">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title">Projelerim</h2>
            <p className="section-subtitle">
              Yapay zeka, otomasyon ve yazılım geliştirme alanlarında gerçekleştirdiğim projeler
            </p>
          </Col>
        </Row>

        {/* Featured Projects */}
        <Row className="mb-5">
          <Col lg={12}>
            <h3 className="featured-title mb-4">
              <FaAward className="me-2" />
              Öne Çıkan Projeler
            </h3>
            <Row>
              {featuredProjects.map((project) => (
                <Col lg={4} md={6} className="mb-4" key={project.id}>
                  <Card className="project-card featured-card h-100">
                    <div className="project-image">
                      <Card.Img variant="top" src={project.image} alt={project.title} />
                      <div className="project-overlay">
                        <div className="project-links">
                          <Button 
                            variant="outline-light" 
                            size="sm" 
                            href={project.github}
                            target="_blank"
                            className="me-2"
                          >
                            <FaGithub />
                          </Button>
                          <Button 
                            variant="outline-light" 
                            size="sm"
                            href={project.demo}
                            target="_blank"
                          >
                            <FaExternalLinkAlt />
                          </Button>
                        </div>
                      </div>
                      {project.award && (
                        <div className="award-badge">
                          <FaMedal className="me-1" />
                          {project.award}
                        </div>
                      )}
                    </div>
                    <Card.Body>
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Text>{project.description}</Card.Text>
                      <div className="project-technologies mb-3">
                        {project.technologies.slice(0, 4).map((tech, index) => (
                          <Badge key={index} bg="primary" className="me-1 mb-1">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge bg="secondary" className="me-1 mb-1">
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
                      </div>
                      <div className="project-status">
                        <Badge 
                          bg={project.status === 'Aktif' ? 'success' : 'info'}
                          className="status-badge"
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Filter Buttons */}
        <Row className="mb-4">
          <Col lg={12} className="text-center">
            <div className="filter-buttons">
              {categories.map((category) => (
                <Button
                  key={category.key}
                  variant={filter === category.key ? 'primary' : 'outline-primary'}
                  className="filter-btn me-2 mb-2"
                  onClick={() => setFilter(category.key)}
                >
                  {category.label} ({category.count})
                </Button>
              ))}
            </div>
          </Col>
        </Row>

        {/* All Projects */}
        <Row>
          {filteredProjects.map((project) => (
            <Col lg={4} md={6} className="mb-4" key={project.id}>
              <Card className="project-card h-100">
                <div className="project-image">
                  <Card.Img variant="top" src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <Button 
                        variant="outline-light" 
                        size="sm" 
                        href={project.github}
                        target="_blank"
                        className="me-2"
                      >
                        <FaGithub />
                      </Button>
                      <Button 
                        variant="outline-light" 
                        size="sm"
                        href={project.demo}
                        target="_blank"
                      >
                        <FaExternalLinkAlt />
                      </Button>
                    </div>
                  </div>
                  {project.award && (
                    <div className="award-badge">
                      <FaMedal className="me-1" />
                      {project.award}
                    </div>
                  )}
                </div>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="project-technologies mb-3">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} bg="primary" className="me-1 mb-1">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge bg="secondary" className="me-1 mb-1">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="project-status">
                    <Badge 
                      bg={project.status === 'Aktif' ? 'success' : 'info'}
                      className="status-badge"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {filteredProjects.length === 0 && (
          <Row>
            <Col lg={12} className="text-center">
              <p className="no-projects">Bu kategoride henüz proje bulunmuyor.</p>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
};

export default Projects; 