import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGraduationCap, FaAward, FaCode, FaRocket } from 'react-icons/fa';
import './About.scss';

const About = () => {
  const stats = [
    {
      icon: <FaCode />,
      number: '15+',
      label: 'Tamamlanan Proje'
    },
    {
      icon: <FaAward />,
      number: '8+',
      label: 'Sertifika & Eğitim'
    },
    {
      icon: <FaGraduationCap />,
      number: 'C1',
      label: 'İngilizce Seviyesi'
    },
    {
      icon: <FaRocket />,
      number: '1.',
      label: 'Türkiye AI Ödülleri Finalisti'
    }
  ];

  return (
    <section id="about" className="about-section">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title">Hakkımda</h2>
            <p className="section-subtitle">
              Yapay zeka ve yazılım geliştirme alanında tutkulu bir mühendis
            </p>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col lg={6} className="mb-4">
            <div className="about-content">
              <h3 className="about-title">
                Bilgisayar Mühendisliği & <span className="text-gradient">Yapay Zeka Uzmanı</span>
              </h3>
              
              <p className="about-text">
                Bilgisayar mühendisliği altyapımı Python odaklı geliştirme becerilerimle birleştirerek 
                yapay zeka, otomasyon ve mobil uygulama projelerinde katma değer yaratmayı hedefleyen 
                bir yazılım geliştiricisiyim.
              </p>

              <p className="about-text">
                Sürekli öğrenmeye ve yeni teknolojilere adapte olmaya önem veriyorum; ekip çalışması 
                içinde yenilikçi çözümler üretmek için hazır ve istekliyim. Özellikle yapay zeka 
                algoritmalarıyla tıbbi tanı çözümleri geliştirme konusunda tutkulu çalışmalar yürütüyorum.
              </p>

              <div className="about-highlights">
                <div className="highlight-item">
                  <h5>🏆 Başarılarım</h5>
                  <ul>
                    <li>AI4TR 1. Türkiye Yapay Zeka Ödülleri Finalisti</li>
                    <li>Prostat kanseri teşhis projesi ile sağlık alanında AI çözümü</li>
                    <li>4. Sağlıkta Yapay Zeka Kongresi proje bildirisi</li>
                    <li>Finansal piyasa analizi ile freelance gelir elde etme</li>
                  </ul>
                </div>

                <div className="highlight-item">
                  <h5>🎯 Uzmanlık Alanlarım</h5>
                  <ul>
                    <li>Yapay Zeka & Makine Öğrenmesi</li>
                    <li>Python ile Web Otomasyonu</li>
                    <li>Flutter ile Mobil Uygulama Geliştirme</li>
                    <li>Finansal Piyasa Analizi & Trading Botları</li>
                    <li>Tıbbi Tanı Sistemleri</li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6} className="mb-4">
            <Row>
              {stats.map((stat, index) => (
                <Col md={6} className="mb-4" key={index}>
                  <Card className="stat-card h-100">
                    <Card.Body className="text-center">
                      <div className="stat-icon">
                        {stat.icon}
                      </div>
                      <h3 className="stat-number">{stat.number}</h3>
                      <p className="stat-label">{stat.label}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg={12}>
            <div className="education-experience">
              <h4 className="mb-4">Eğitim & Deneyim</h4>
              
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h5>Sampaş Bilişim ve İletişim Sistemleri A.Ş</h5>
                    <p className="timeline-role">Stajyer Yazılım Geliştirici</p>
                    <p className="timeline-description">
                      Dağıtık sistemlerde paralel işleme yaparak yapay zeka optimizasyonu ve entegrasyonu 
                      üzerine projeler. Belediyeler için Açık Veri Portalı web uygulaması geliştirme.
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h5>Bilgisayar Mühendisliği</h5>
                    <p className="timeline-role">Üniversite Eğitimi</p>
                    <p className="timeline-description">
                      C#, HTML/CSS, C, SQL gibi temel teknolojilerde sağlam eğitim. 
                      Python, Flutter ve AI/ML konularında derinlemesine çalışmalar.
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h5>Sürekli Öğrenme & Sertifikalar</h5>
                    <p className="timeline-role">Profesyonel Gelişim</p>
                    <p className="timeline-description">
                      Akbank, Aygaz, Global AI Hub yapay zeka kursları. Harvard Üniversitesi 
                      Veri Bilimine Giriş eğitimi. TopTalent İngilizce C1 sertifikası.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About; 