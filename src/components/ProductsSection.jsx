import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Container, Card } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import dieselen590Image from '../assets/images/dieselen590.webp';
import dieseld2Image from '../assets/images/dieseld2.jpg';
import jetFuelImage from '../assets/images/jetfuel.jpg';
import vlsfo from '../assets/images/vlsfo.webp';
import vlmgo from '../assets/images/VLMGO.webp';
import naphtha from '../assets/images/naphtha.webp'
import lng from '../assets/images/lng.webp'
import 'bootstrap-icons/font/bootstrap-icons.css';

function ProductsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on initial load
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const products = [
    { 
      name: 'Diesel EN590', 
      image: dieselen590Image, 
      details: 'Diesel EN590 is the standard diesel fuel specification in Europe, designed to meet environmental standards and engine requirements. It includes low levels of sulfur, contributing to reduced emissions of harmful pollutants. Used in diesel engines in vehicles, machinery, and equipment, particularly in regions that adhere to stringent emissions standards.', 
    },
    { 
      name: 'Diesel D2', 
      image: dieseld2Image, 
      details: 'Diesel D2 is a standard grade of diesel fuel, also known as Gasoil. It has a higher sulfur content compared to EN590 diesel, making it more commonly used in regions with less strict environmental regulations. Widely used in industrial engines, power generation, and older diesel vehicles, especially in regions with less stringent environmental standards.', 
    },
    { 
      name: 'Jet Fuel', 
      image: jetFuelImage, 
      details: 'Jet fuel, primarily Jet A-1, is a type of aviation fuel used in aircraft powered by gas-turbine engines. It is a high-grade kerosene-based fuel with additives to prevent freezing and corrosion at high altitudes. Used as the primary fuel for commercial and military aircraft worldwide.', 
    },
    { 
      name: 'VLSFO', 
      image: vlsfo, 
      details: `VLSFO (Very Low Sulfur Fuel Oil) is a marine fuel with a maximum sulfur content of 0.5%, developed in response to the International Maritime Organization's (IMO) 2020 regulations aimed at reducing sulfur emissions from ships. Used in marine vessels to meet the sulfur emission regulations in international waters.`, 
    },
    { 
      name: 'VLMGO', 
      image: vlmgo, 
      details: 'VLMGO (Very Low Sulfur Marine Gas Oil) is a type of marine gas oil with a very low sulfur content, similar to VLSFO, designed to comply with IMO 2020 regulations. It is a distillate fuel, cleaner than residual fuels.Primarily used in marine engines and boilers that require lower sulfur content fuels, suitable for ships operating in Emission Control Areas (ECAs).', 
    },
    { 
      name: 'Naphtha', 
      image: naphtha, 
      details: 'Naphtha is a volatile, flammable liquid hydrocarbon mixture obtained from petroleum distillation. It is a key feedstock in the petrochemical industry and is also used as a blending component in gasoline.Used in the production of high-octane gasoline, chemicals, and as a feedstock for ethylene production in steam crackers.', 
    },
    { 
      name: 'LNG', 
      image: lng, 
      details: 'Liquefied natural gas (LNG) is natural gas that has been cooled down to liquid form for ease of storage or transport. It occupies about 1/600th of the volume of natural gas in its gaseous state, making it economical to transport over long distances.It is used primarily for heating, electricity generation, and as a fuel for heavy-duty vehicles.', 
    },
    { 
      name: 'Crude Oil', 
      image: dieselen590Image, 
      details: 'Crude oil is a naturally occurring, unrefined petroleum product composed of hydrocarbon deposits and other organic materials. It is the raw material from which various refined products like gasoline, diesel, and petrochemicals are derived.Refined into a wide range of products including fuels, lubricants, and feedstocks for the petrochemical industry.', 
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 4,  
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: isMobile ? 1 : 3, 
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 768,  
        settings: {
          slidesToShow: 1,  
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 600,  
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 480,  
        settings: {
          slidesToShow: 1,  
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <Container className="products-section mt-5">
      <h2 className="text-center mb-4"><b>Our Products</b></h2>
      <p className="text-center" style={{fontSize:"17px"}}>
        We offer a wide range of high-quality petroleum products to meet the energy needs of various industries.
      </p>
      {isMobile ? (
        <div className="mobile-product-list">
          {products.map((product, index) => (
            <Card key={index} className="product-card mb-3">
              <div className="card-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="overlay">
                  <div className="product-text">{product.name}</div>
                </div>
                <div className="hover-details">
                  <h5>{product.name}</h5>
                  <p className="px-2">{product.details}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className="p-3">
              <Card className="product-card">
                <div className="card-image-container">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="overlay">
                    <div className="product-text">{product.name}</div>
                  </div>
                  <div className="hover-details">
                    <h5>{product.name}</h5>
                    <p className="px-2">{product.details}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </Slider>
      )}
    </Container>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        right: '-30px',
        color: "black",
        zIndex: 2,
      }}
      onClick={onClick}
    >
      <i className="bi bi-chevron-right" style={{ fontSize: '24px' }}></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        left: '-30px',
        color: "black",
        zIndex: 2,
      }}
      onClick={onClick}
    >
      <i className="bi bi-chevron-left" style={{ fontSize: '24px' }}></i>
    </div>
  );
}

export default ProductsSection;
