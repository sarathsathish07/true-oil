import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className='mx-4'>
            <h5 className="footerTitle">Address</h5>
            <p className="footerText">
            Suite 1007, <br/>
            AL Jaddaf Rotana
            P.O. Box - 122382<br/>
            Dubai, UAE
            </p>
          </Col>
          <Col className='mx-5'>
            <h5 className="footerTitle">Contact</h5>
            <p className="footerText">
              Email: info@true-oil.com<br />
              Phone: +971 56 287 8335
            </p>
          </Col>
          <Col className='mw-4'>
            <h5 className="footerTitle">Follow Us</h5>
            <div className="socialIcons">
              <a href="#" className="iconLink">
                <FaLinkedin size={30} />
              </a>
              <a href="#" className="iconLink">
                <FaTwitter size={30} />
              </a>
              <a href="#" className="iconLink">
                <FaFacebook size={30} />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="copyright">
              &copy; 2024 True Oil LLC. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
