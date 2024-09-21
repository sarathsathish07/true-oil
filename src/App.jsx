import React, { useState, useEffect } from 'react';
import MyNavbar from './components/Navbar'; 
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import bgimage1 from "../src/assets/images/bg-1.jpg";
import bgimage2 from "../src/assets/images/bg-2.jpg";
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [backgroundImage, setBackgroundImage] = useState(bgimage1);
  const [headerText, setHeaderText] = useState({
    title: "Powering Progress",
    subtitle: "Fueling the Future",
    color: "black",
    size: { title: "large-title", subtitle: "large-subtitle" },
    marginTop: '2%',
    marginLeft: '5%',
  });

  const [scrolled, setScrolled] = useState(false);


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

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImage((prevImage) => (prevImage === bgimage1 ? bgimage2 : bgimage1));
      setHeaderText((prevText) => {
        if (prevText.title === "Powering Progress") {
          return {
            title: "Empowering Industry",
            subtitle: "Energizing the World",
            color: "white",
            size: { title: "medium-title", subtitle: "medium-subtitle" },
            marginTop: '10%', 
            marginLeft: '5%',
          };
        } else {
          return {
            title: "Powering Progress",
            subtitle: "Fueling the Future",
            color: "black",
            size: { title: "medium-title", subtitle: "medium-subtitle" },
            marginTop: '2%',
            marginLeft: '5%',
          };
        }
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className='app-banner' style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className={`navbarmain ${scrolled ? 'navbarmain-scrolled' : ''}`}  style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
        <MyNavbar />
      </div>
        <header 
          className="header" 
          style={{ marginTop: headerText.marginTop, marginLeft: headerText.marginLeft }}
        >
          <h2 className={`${headerText.size.title} header-${headerText.color}`}>
            {headerText.title}
          </h2>
          <h2 className={`${headerText.size.subtitle} header-${headerText.color}`}>
            {headerText.subtitle}
          </h2>
        </header>
      </div>
      <AboutSection />
      <ProductsSection />
      <Footer />
    </div>
  );
}

export default App;
