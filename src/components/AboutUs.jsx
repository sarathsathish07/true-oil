import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MyNavbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import bannerImage from "../assets/images/08.webp";
import companyImage from "../assets/images/03.webp";
import visionImage from "../assets/images/09.webp";
import member1 from "../assets/images/manni.webp";
import member2 from "../assets/images/peter-removebg-preview.webp";
import member3 from "../assets/images/boardmember1.webp";
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutPage() {
  const [companyRef, companyInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [visionRef, visionInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [scrolled, setScrolled] = useState(false);

  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
      <div 
        className='aboutus-banner' 
        style={{ 
          backgroundImage: `url(${bannerImage})`, 
          height: isMobile ? '200px' : '400px' 
        }}
      >
        <div className={`navbarmain ${scrolled ? 'navbarmain-scrolled' : ''}`}  style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
          <MyNavbar />
        </div>
        {!isMobile && (
          <header className="aboutUsHeader">
            <h2 className="large-title header-white"><b>About Us</b></h2>
          </header>
        )}
      </div>

      <div className='company-wrap'>
        <Container className="about-content" style={{ marginBottom: "40px", paddingTop: "20px", paddingBottom: "30px" }} ref={companyRef}>
          
          {isMobile && (
            <h2 className="mt-3"><b>About Us</b></h2>
          )}

          {!isMobile ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={companyInView ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              <Row className="company-section align-items-center fade-in">
                <Col lg={5}>
                  <img 
                    src={companyImage} 
                    alt="Company" 
                    className="img-fluid rounded shadow-lg" 
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Col>
                <Col lg={6}>
                  <h2><b>Our Company</b></h2>
                  <p style={{ fontFamily: "Roboto", lineHeight: "30px" }}>
                  In these times of increasingly complex and dynamic international energy trade, our company stands out as an innovative and customer-centric leader. We pride ourselves on our highly skilled professionals and innovative approaches that enable us to provide high quality agency services to our clients around the world in the international energy supply industry.

                
The True commodities Oil Trading team is an international agent for the organisation of coolie transactions in the energy sector. We provide the link between refineries around the world and end consumers. 


True commodities Oil Trading has historically traded oil and petroleum products worldwide. But our interests and capabilities extend to all energy markets, including coal, biofuels, natural gas, renewables and more.

                  </p>
                </Col>
              </Row>
            </motion.div>
          ) : (
            <Row className="align-items-center fade-in">
              <Col md={12}>
                <p style={{ fontFamily: "Roboto", lineHeight: "30px" }}>
                In these times of increasingly complex and dynamic international energy trade, our company stands out as an innovative and customer-centric leader.
                </p>
              </Col>
              <Col md={5}>
                <img 
                  src={companyImage} 
                  alt="Company" 
                  className="img-fluid rounded shadow-lg" 
                  style={{ width: '100%', height: 'auto' }}
                />
              </Col>
              <Col md={12} className="mt-3">
                <p style={{ fontFamily: "Roboto", lineHeight: "30px" }}>
                We pride ourselves on our highly skilled professionals and innovative approaches that enable us to provide high quality agency services to our clients around the world in the international energy supply industry.

                
The True commodities Oil Trading team is an international agent for the organisation of coolie transactions in the energy sector. We provide the link between refineries around the world and end consumers. 


True commodities Oil Trading has historically traded oil and petroleum products worldwide. But our interests and capabilities extend to all energy markets, including coal, biofuels, natural gas, renewables and more.

                </p>
              </Col>
            </Row>
          )}
        </Container>
      </div>

      <div className="vision-wrap" style={{ paddingTop: "40px", paddingBottom: "30px" }} ref={visionRef}>
        <Container>
          {!isMobile && (  
            <motion.div
              initial={{ opacity: 0 }}
              animate={visionInView ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              <Row className="fade-in">
                <Col md={5} className="order-md-2">
                  <img 
                    src={visionImage} 
                    alt="Our Vision" 
                    className="img-fluid rounded shadow-lg" 
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Col>
                <Col md={6} className="order-md-1">
                  <h2><b>Our Vision</b></h2>
                  <p style={{ fontFamily: "Roboto", lineHeight: "30px" }}>
                  Our company’s mission is to provide our clients with the most efficient and transparent transactions in international energy trading.
                
                We are constantly improving and adopting the latest technologies and working methods to provide our clients with the best service and results.
               
                We strive to be a reliable partner for our clients and to offer innovative solutions that meet their needs and expectations.
                Our emphasis is on Lowest Prices, Customer Commitment, and Marine Environmental Commitment.
                If you are looking for a reliable partner for energy sales and purchases, you have come to the right place. Entrust your transactions to professionals and you will not regret your choice. With us, your business will be in safe hands.
                  </p>
                </Col>
              </Row>
            </motion.div>
          )}
          {isMobile && (
            <Row className="fade-in">
              <Col md={5} className="order-md-2">
                <img 
                  src={visionImage} 
                  alt="Our Vision" 
                  className="img-fluid rounded shadow-lg" 
                  style={{ width: '100%', height: 'auto' }}
                />
              </Col>
              <Col md={6} className="order-md-1">
                <h2 className='mt-3'><b>Our Vision</b></h2>
                <p style={{ fontFamily: "Roboto", lineHeight: "30px" }}>
                Our company’s mission is to provide our clients with the most efficient and transparent transactions in international energy trading.
                
                We are constantly improving and adopting the latest technologies and working methods to provide our clients with the best service and results.
               
                We strive to be a reliable partner for our clients and to offer innovative solutions that meet their needs and expectations.
                Our emphasis is on Lowest Prices, Customer Commitment, and Marine Environmental Commitment.
                If you are looking for a reliable partner for energy sales and purchases, you have come to the right place. Entrust your transactions to professionals and you will not regret your choice. With us, your business will be in safe hands.
                </p>
              </Col>
            </Row>
          )}
        </Container>
      </div>

      <Container className="board-members mt-5">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-center mb-4"><b>Board Members</b></h2>
          <Row className="fade-in">
            <Col md={4}>
              <div className="card text-center border-0 shadow-lg " style={{ width: '80%', margin: '0 auto' }}>
                <img src={member1} alt="Member 1" className="card-img-top mx-auto mt-3 board-member-img" style={{ width: '40%' }} />
                <div className="card-body">
                  <h5 className="card-title">Manny</h5>
                  <p className="card-text">Chairman of the Board</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="card text-center border-0 shadow-lg " style={{ width: '80%', margin: '0 auto' }}>
              <img src={member2} alt="Member 1" className="card-img-top mx-auto mt-3 board-member-img" style={{ width: '40%' }} />
              <div className="card-body">
                  <h5 className="card-title">Peter</h5>
                  <p className="card-text">Chief Executive Officer</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="card text-center border-0 shadow-lg " style={{ width: '80%', margin: '0 auto' }}>
                <img src={member3} alt="Member 3" className="card-img-top mx-auto mt-3" style={{ width: '50%' }} />
                <div className="card-body">
                  <h5 className="card-title">Moatz</h5>
                  <p className="card-text">Chief Operating Officer</p>
                </div>
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>

      <Footer />
    </div>
  );
}

export default AboutPage;
