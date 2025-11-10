import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { 
  FaPython, 
  FaHtml5, 
  FaCss3Alt, 
  FaDatabase,
  FaGitAlt
} from 'react-icons/fa';
import { 
  SiFlutter, 
  SiDart, 
  SiCsharp, 
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPostgresql,
  SiMysql,
  SiFastapi,
  SiJupyter,
  SiNumpy,
  SiPandas,
  SiOpencv
} from 'react-icons/si';
import './Skills.scss';

const Skills = () => {
  const programmingSkills = [
    { name: 'Python', level: 95, icon: <FaPython /> },
    { name: 'Dart (Flutter)', level: 85, icon: <SiDart /> },
    { name: 'C#', level: 80, icon: <SiCsharp /> },
    { name: 'HTML', level: 90, icon: <FaHtml5 /> },
    { name: 'CSS', level: 85, icon: <FaCss3Alt /> },
    { name: 'SQL', level: 85, icon: <FaDatabase /> }
  ];

  const aiMlSkills = [
    { name: 'Machine Learning', level: 90, icon: <SiScikitlearn /> },
    { name: 'TensorFlow', level: 85, icon: <SiTensorflow /> },
    { name: 'PyTorch', level: 80, icon: <SiPytorch /> },
    { name: 'Computer Vision', level: 85, icon: <SiOpencv /> },
    { name: 'Data Analysis', level: 90, icon: <SiPandas /> },
    { name: 'NumPy', level: 90, icon: <SiNumpy /> }
  ];

  const technicalSkills = [
    { name: 'Flutter Development', level: 85, icon: <SiFlutter /> },
    { name: 'FastAPI', level: 80, icon: <SiFastapi /> },
    { name: 'PostgreSQL', level: 80, icon: <SiPostgresql /> },
    { name: 'MySQL', level: 75, icon: <SiMysql /> },
    { name: 'Jupyter Notebook', level: 90, icon: <SiJupyter /> },
    { name: 'Git', level: 85, icon: <FaGitAlt /> }
  ];

  const specializations = [
    {
      title: 'Yapay Zeka & Makine Öğrenmesi',
      description: 'Tıbbi tanı sistemleri, duygu analizi, computer vision projeleri',
      technologies: ['TensorFlow ', 'PyTorch ', 'Scikit-learn ', 'OpenCV ', 'BERT ']
    },
    {
      title: 'Web Otomasyonu & Scraping',
      description: 'Veri kazıma araçları, web otomasyonu, API entegrasyonları',
      technologies: ['Python ', 'Selenium ', 'BeautifulSoup ', 'FastAPI ', 'Requests ']
    },
    {
      title: 'Mobil Uygulama Geliştirme',
      description: 'Flutter ile cross-platform mobil uygulamalar',
      technologies: ['Flutter ', 'Dart ', 'Firebase ', 'REST API ', 'State Management ']
    },
    {
      title: 'Finansal Analiz & Trading',
      description: 'Kripto para analizi, trading botları, teknik göstergeler',
      technologies: ['Python ', 'Binance API ', 'Pandas ', 'NumPy ', 'TA-Lib ']
    },
    {
      title: 'Chatbot & NLP',
      description: 'Doğal dil işleme, chatbot geliştirme, LLM entegrasyonu',
      technologies: ['Python ', 'Gemini API ', 'BERT ', 'Transformers ', 'NLTK ']
    },
    {
      title: 'Veri Bilimi & Analiz',
      description: 'Veri analizi, görselleştirme, istatistiksel modelleme',
      technologies: ['Python ', 'Pandas ', 'NumPy ', 'Matplotlib ', 'Seaborn ']
    }
  ];

  const SkillBar = ({ skill }) => (
    <div className="skill-item mb-4">
      <div className="skill-header d-flex justify-content-between align-items-center mb-2">
        <div className="skill-name d-flex align-items-center">
          <span className="skill-icon me-2">{skill.icon}</span>
          <span>{skill.name}</span>
        </div>
        <span className="skill-percentage">{skill.level}%</span>
      </div>
      <ProgressBar 
        now={skill.level} 
        className="skill-progress"
        variant="primary"
      />
    </div>
  );

  return (
    <section id="skills" className="skills-section">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title">Yetenekler & Teknolojiler</h2>
            <p className="section-subtitle">
              Yapay zeka, yazılım geliştirme ve veri bilimi alanlarındaki uzmanlıklarım
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={4} className="mb-4">
            <div className="skills-category">
              <h4 className="category-title">
                <FaPython className="me-2" />
                Programlama Dilleri
              </h4>
              {programmingSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </Col>

          <Col lg={4} className="mb-4">
            <div className="skills-category">
              <h4 className="category-title">
                <SiTensorflow className="me-2" />
                AI & Machine Learning
              </h4>
              {aiMlSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </Col>

          <Col lg={4} className="mb-4">
            <div className="skills-category">
              <h4 className="category-title">
                <SiFlutter className="me-2" />
                Teknik Beceriler
              </h4>
              {technicalSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <h3 className="specializations-title text-center mb-5">Uzmanlık Alanları</h3>
            <Row>
              {specializations.map((spec, index) => (
                <Col lg={4} md={6} className="mb-4" key={index}>
                  <div className="specialization-card">
                    <h5 className="spec-title">{spec.title}</h5>
                    <p className="spec-description">{spec.description}</p>
                    <div className="spec-technologies">
                      {spec.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg={12} className="text-center">
            <div className="languages-section">
              <h4 className="mb-4">Dil Becerileri</h4>
              <div className="language-skills">
                <div className="language-item">
                  <h5>Türkçe</h5>
                  <p>Ana Dil</p>
                </div>
                <div className="language-item">
                  <h5>İngilizce</h5>
                  <p>C1 Seviyesi (TopTalent Sertifikalı)</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills; 
