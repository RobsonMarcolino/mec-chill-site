import React from 'react';
import '../styles/HeroCarousel.css';

// Import local images directly
import img1 from '../assets/CamaraFrias2.jpg';
import img2 from '../assets/CamarasFrias.jpg';
import img3 from '../assets/Geladeiras.jpg';
import img4 from '../assets/Ilhas.jpg';
import img5 from '../assets/RefrigeracaoComercial.png';
import img6 from '../assets/balcoes.jpg';

const HeroCarousel = () => {
    const images = [
        { src: img1, label: 'Câmaras Frias' },
        { src: img5, label: 'Refrigeração Comercial' },
        { src: img3, label: 'Geladeiras' },
        { src: img4, label: 'Ilhas' },
        { src: img6, label: 'Balcões' },
        { src: img2, label: 'Projetos' },
    ];

    // Duplicate list for infinite scroll effect
    const carouselItems = [...images, ...images];

    return (
        <div className="hero-carousel-container fade-in-up delay-300">
            <div className="hero-carousel-track">
                {carouselItems.map((item, index) => (
                    <div className="carousel-item" key={index}>
                        <img src={item.src} alt={item.label} />
                        <div className="carousel-label">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;
