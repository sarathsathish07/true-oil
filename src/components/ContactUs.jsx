import React, { useRef,useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import MyNavbar from './Navbar';
import Footer from './Footer';
import emailjs from '@emailjs/browser';
import bannerImage from "../assets/images/banner.jpg";



function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_14hled5',       // Replace with your EmailJS service ID
      'template_odsksf6',      // Replace with your EmailJS template ID
      form.current,
      'uTo-SIxpBnBxZBnBV'        // Replace with your EmailJS public key
    ).then(
      (result) => {
        form.current.reset();
      },
      (error) => {
        console.error(error.text);
      }
    );
  };
    const [scrolled, setScrolled] = useState(false);
  
    const isMobile = window.innerWidth < 768;

  return (
    <>
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
            <h2 className="large-title header-white"><b>Contact Us</b></h2>
          </header>
        )}
      </div>

      <Container className="my-5 p-5"   style={{
          maxWidth: '900px',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }}>
        <Form ref={form} onSubmit={sendEmail}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" name="name" required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" name="email" required />
              </Form.Group>
            </Col>
          </Row>

          {/* <Form.Group className="mb-3" controlId="formSubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Subject" name="subject" required />
          </Form.Group> */}

          <Form.Group className="mb-4" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="Type your message here..." name="message" required />
          </Form.Group>

          <Button variant="primary" type="submit">Send Message</Button>
        </Form>
      </Container>

      <Footer />
    </>
  );
}

export default ContactUs;
