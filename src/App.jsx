import React, { useState, useEffect } from 'react';
import MyNavbar from './components/Navbar'; 
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import bgimage1 from "../src/assets/images/bg-1.webp";
import bgimage2 from "../src/assets/images/bg-2.webp";
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [showFirstImage, setShowFirstImage] = useState(true); // Controls which image to show
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle images at an interval
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage((prevShowFirstImage) => !prevShowFirstImage); // Toggle between images
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="app-banner">
        {/* Background Image Layers */}
        <div className={`image1 ${showFirstImage ? 'show' : ''}`} style={{ backgroundImage: `url(${bgimage1})` }}></div>
        <div className={`image2 ${!showFirstImage ? 'show' : ''}`} style={{ backgroundImage: `url(${bgimage2})` }}></div>

        {/* Navbar */}
        <div className={`navbarmain ${scrolled ? 'navbarmain-scrolled' : ''}`} style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
          <MyNavbar />
        </div>

        {/* Text Container (unchanged) */}
        <div className="text-container" style={{ position: 'relative', zIndex: 2 }}>
          <header className="header" style={{ marginTop: '2%', marginLeft: '5%' }}>
            <h2 className="large-title header-black">Powering Progress</h2>
            <h2 className="large-subtitle header-black">Fueling the Future</h2>
          </header>
        </div>
      </div>

      {/* Other Sections */}
      <AboutSection />
      <ProductsSection />
      <Footer />
    </div>
  );
}

export default App;
