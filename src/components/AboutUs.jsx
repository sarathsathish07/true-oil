import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MyNavbar from './Navbar';
import Footer from './Footer';
import bannerImage from "../assets/images/08.jpg"; 
import companyImage from "../assets/images/banner.jpg"; 
import visionImage from "../assets/images/09.jpg"; 
import member1 from "../assets/images/boardmember1.jpg";
import member2 from "../assets/images/boardmember1.jpg";
import member3 from "../assets/images/boardmember1.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutPage() {
  const [headerText, setHeaderText] = useState({
    title: "About Us",
    subtitle: "Learn more about our company",
    color: "white",
    size: { title: "large-title", subtitle: "large-subtitle" },
    marginTop: '10%',
    marginLeft: '42%',
  });

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="AboutPage">
      <div className='aboutus-banner' style={{ backgroundImage: `url(${bannerImage})`}}>
        <div className={`navbarmain ${scrolled ? 'navbarmain-scrolled' : ''}`} style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
          <MyNavbar />
        </div>
        <header 
          className="header" 
          style={{ marginTop: headerText.marginTop, marginLeft: headerText.marginLeft }}
        >
          <h2 className={`${headerText.size.title} header-${headerText.color}`}>
            {headerText.title}
          </h2>
        </header>
      </div>
      
      <div className='company-wrap'>
        <Container className="about-content" style={{ marginBottom: "80px", paddingTop: "90px", paddingBottom: "50px" }}>
          <Row className="align-items-center fade-in">
            <Col md={5}>
              <img 
                src={companyImage} 
                alt="Company" 
                className="img-fluid rounded shadow-lg" 
                style={{ width: '100%', height: 'auto' }}
              />
            </Col>
            <Col md={6}>
              <h3>Our Company</h3>
              <p>
                Welcome to True Oil! We are a leading provider of innovative solutions in the energy sector. Our mission is to empower industries with sustainable and reliable energy solutions, helping to build a better future for all.
              </p>
              <p>
                With years of experience and a team of dedicated professionals, we are committed to delivering high-quality products and services that meet the evolving needs of our customers. Our values are rooted in integrity, innovation, and excellence.
              </p>
              <p>
                We believe in the power of collaboration and are constantly working to forge strong partnerships that drive mutual growth and success. Join us on our journey as we continue to lead the way in the energy industry.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="vision-wrap" style={{ paddingTop: "80px", paddingBottom: "50px" }}>
        <Container>
          <Row className="align-items-center fade-in">
            <Col md={5} className="order-md-2">
              <img 
                src={visionImage} 
                alt="Our Vision" 
                className="img-fluid rounded shadow-lg" 
                style={{ width: '100%', height: 'auto' }}
              />
            </Col>
            <Col md={6} className="order-md-1">
              <h3>Our Vision</h3>
              <p>
                At True Oil, our vision is to be at the forefront of energy innovation. We strive to revolutionize the industry by creating solutions that not only meet today's needs but also anticipate future challenges.
              </p>
              <p>
                Our commitment is to lead with sustainability, efficiency, and a focus on enhancing the quality of life for communities around the world. Through continuous research and development, we aim to pioneer advancements that will shape the future of energy.
              </p>
              <p>
                We believe in a future where energy is accessible, clean, and affordable for everyone, and we are dedicated to turning this vision into reality.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="board-members mt-5">
        <h3 className="text-center mb-4">Board Members</h3>
        <Row className="fade-in">
          <Col md={4}>
            <div className="card text-center border-0 shadow-lg hover-card" style={{ width: '80%', margin: '0 auto' }}>
              <img src={member1} alt="Member 1" className="card-img-top mx-auto mt-3" style={{ width: '50%' }} />
              <div className="card-body">
                <h5 className="card-title">Manny</h5>
                <p className="card-text">Chairman of the Board</p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="card text-center border-0 shadow-lg hover-card" style={{ width: '80%', margin: '0 auto' }}>
              <img src={member2} alt="Member 2" className="card-img-top mx-auto mt-3" style={{ width: '50%' }} />
              <div className="card-body">
                <h5 className="card-title">Peter</h5>
                <p className="card-text">Chief Executive Officer</p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="card text-center border-0 shadow-lg hover-card" style={{ width: '80%', margin: '0 auto' }}>
              <img src={member3} alt="Member 3" className="card-img-top mx-auto mt-3" style={{ width: '50%' }} />
              <div className="card-body">
                <h5 className="card-title">Moatz</h5>
                <p className="card-text">Chief Operating Officer</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
      <Footer />
    </div>
  );
}

export default AboutPage;
