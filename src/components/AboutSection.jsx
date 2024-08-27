import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutImage from '../assets/images/1775.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; 

function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.5,  
  });

  return (
    <Container className="about-section" ref={ref}>
      <Row>
        <Col md={6} className="col-text">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}  
            transition={{ duration: 1 }}
          >
            <h2 className="heading">True Commodities Oil Trading L.L.C</h2>
            <p className="text">
              True Oil LLC is a leading provider of sustainable energy solutions, 
              empowering industries around the globe. With a commitment to innovation 
              and environmental responsibility, we strive to provide reliable energy 
              while reducing our carbon footprint. Our team of experts is dedicated 
              to driving the energy revolution and ensuring a brighter, cleaner future 
              for all. Join us on our journey to fuel the world with sustainable energy.
            </p>
          </motion.div>
        </Col>
        <Col md={4}>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <img src={aboutImage} alt="About True Oil" className="image" />
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutSection;
