import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  '/1.png',
  '/2.png',
  '/3.png',
];

export default function Carrossel() {
  const settings = {
    // Configurações do carrossel...
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="mx-auto" style={{ maxWidth: '1246px', maxHeight: '100vh' }}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="flex justify-center items-center h-full">
              <img src={image} alt={`Carousel Image ${index + 1}`} className="max-w-full max-h-full" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
