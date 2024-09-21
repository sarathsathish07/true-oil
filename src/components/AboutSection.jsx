import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutImage from '../assets/images/1775.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; 

function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true, 
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
            True commodities Oil Trading is characterised not only by an experienced international team, but also by a high level of knowledge and expertise in the field. We are constantly improving and adopting the latest technologies and working methods to provide our clients with the best service and results. Our main goal is to fulfil our clients’ needs and achieve their business objectives.
            Since our foundation, we have successfully completed numerous transactions and won the trust of clients all over the world. We work with the world’s key oil traders, refineries and energy end-users, which confirms our reliability and professionalism. Our experience and reputation speak for themselves, and we are proud of our long-term relationships with our clients.
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
