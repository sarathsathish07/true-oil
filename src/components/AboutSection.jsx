import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutImage from '../assets/images/1775.webp';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };
    handleResize(); 
    window.addEventListener('resize', handleResize); 
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container className="about-section" ref={ref}>
      <Row>
        <Col lg={6} xs={12} className="col-text">
          {!isMobile ? (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
            >
              {/* <h2 className="heading mobile-heading">
                True Commodities Oil Trading L.L.C
              </h2> */}
              <p className="text mobile-padding">
                <span style={{fontSize:"25px"}}><strong>Taknia for oil and gas services L.L.C</strong></span> is characterised not only by an
                experienced international team, but also by a high level of
                knowledge and expertise in the field. We are constantly improving
                and adopting the latest technologies and working methods to provide
                our clients with the best service and results. Our main goal is to
                fulfil our clients’ needs and achieve their business objectives.
                Since our foundation, we have successfully completed numerous
                transactions and won the trust of clients all over the world. We
                work with the world’s key oil traders, refineries and energy
                end-users, which confirms our reliability and professionalism. Our
                experience and reputation speak for themselves, and we are proud of
                our long-term relationships with our clients.
              </p>
            </motion.div>
          ) : (
            <div>
              {/* <h2 className="heading mobile-heading">
                True Commodities Oil Trading L.L.C
              </h2> */}
               <p className="text mobile-padding">
                <span className='mobile-heading' ><strong>Taknia for oil and gas services L.L.C</strong></span> is characterised not only by an
                experienced international team, but also by a high level of
                knowledge and expertise in the field. We are constantly improving
                and adopting the latest technologies and working methods to provide
                our clients with the best service and results. Our main goal is to
                fulfil our clients’ needs and achieve their business objectives.
                Since our foundation, we have successfully completed numerous
                transactions and won the trust of clients all over the world. We
                work with the world’s key oil traders, refineries and energy
                end-users, which confirms our reliability and professionalism. Our
                experience and reputation speak for themselves, and we are proud of
                our long-term relationships with our clients.
              </p>
            </div>
          )}
        </Col>
        <Col lg={5} xs={12} className="d-flex justify-content-center">
          {!isMobile ? (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
            >
              <img
                src={aboutImage}
                alt="About True Oil"
                className="image"
                style={{ height: '340px', width: '500px' }}
              />
            </motion.div>
          ) : (
            <img
              src={aboutImage}
              alt="About True Oil"
              className="image"
              style={{ height: '350px', width: 'auto' }}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default AboutSection;
