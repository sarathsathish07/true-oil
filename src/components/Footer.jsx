import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer py-4">
      <Container>
        <Row className="text-center text-md-start">
          <Col md={5} xs={12} className="mb-4 mb-md-0">
            <h5 className="footerTitle">Address</h5>
            <p className="footerText">
              Citadines
              Suite 703, 
              Way 3709-building 631<br />
              Al Ghubrah<br />
              Muscat, Oman
            </p>
          </Col>
          <Col md={4} xs={12} className="mb-4 mb-md-0">
            <h5 className="footerTitle">Contact</h5>
            <p className="footerText">
              Email: info@taknia-oil.com<br />
              Phone: +968 77 228 026
            </p>
          </Col>
          <Col md={3} xs={12} className="mb-4 mb-md-0">
            <h5 className="footerTitle">Follow Us</h5>
            <div className="socialIcons d-flex justify-content-center justify-content-md-start">
              <a href="#" className="iconLink me-3">
                <FaLinkedin size={30} />
              </a>
              <a href="#" className="iconLink me-3">
                <FaTwitter size={30} />
              </a>
              <a href="#" className="iconLink">
                <FaFacebook size={30} />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p className="copyright">
              &copy; 2025 Taknia Oil LLC. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
