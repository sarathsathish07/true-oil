import React, { useState, useEffect } from 'react';
import MyNavbar from './components/Navbar'; 
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import bgimage1 from "../src/assets/images/bg-1.webp";
import bgimage2 from "../src/assets/images/bg-2.webp";
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [showFirstImage, setShowFirstImage] = useState(true); 
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage((prevShowFirstImage) => !prevShowFirstImage); 
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    window.addEventListener('resize', checkMobile);
    checkMobile(); 

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="App">
      <div className="app-banner">
        <div className={`image1 ${showFirstImage ? 'show' : ''}`} style={{ backgroundImage: `url(${bgimage1})` }}></div>
        <div className={`image2 ${!showFirstImage ? 'show' : ''}`} style={{ backgroundImage: `url(${bgimage2})` }}></div>

        <div className={`navbarmain ${scrolled ? 'navbarmain-scrolled' : ''}`}  style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
          <MyNavbar />
        </div>

        <div className="text-container" style={{ position: 'relative', zIndex: 2 }}>
          <header className="header" 
            style={{ 
              marginTop: isMobile ? '50%' : '2%',  /* Move the text further down on mobile */
              marginLeft: isMobile ? '2%' : '5%'  /* Adjust left margin on mobile */
            }}
          >
            <h2 className="large-title header-black">Powering Progress</h2>
            <h2 className="large-subtitle header-black">Fueling the Future</h2>
          </header>
        </div>
      </div>

      <AboutSection />
      <ProductsSection />
      <Footer />
    </div>
  );
}

export default App;
