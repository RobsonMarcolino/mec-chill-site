import React, { useState } from 'react';
import '../styles/BeforeAfterSlider.css';
import beforeImg from '../assets/IMAGEM_CARD3.jpeg'; // Use dirty looking one
import afterImg from '../assets/Geladeiras.jpg'; // Use clean looking one

const BeforeAfterSlider = () => {
    const [sliderPosition, setSliderPosition] = useState(50);

    const handleSliderChange = (e) => {
        setSliderPosition(e.target.value);
    };

    return (
        <section className="ba-section">
            <div className="container">
                <div className="ba-header text-center mb-12">
                    <h2 className="section-title-dark" style={{ color: '#111' }}>
                        Resultados <span className="text-accent">Reais</span>
                    </h2>
                    <p className="section-desc" style={{ color: '#666' }}>
                        Veja a diferença que uma manutenção especializada faz no seu equipamento.
                    </p>
                </div>

                <div className="ba-container">
                    <div
                        className="ba-img-background"
                        style={{ backgroundImage: `url(${afterImg})` }}
                    ></div>

                    <div
                        className="ba-img-foreground"
                        style={{ width: `${sliderPosition}%`, backgroundImage: `url(${beforeImg})` }}
                    >
                        <div className="ba-label ba-label-before">Antes</div>
                    </div>

                    <div className="ba-label ba-label-after">Depois</div>

                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={sliderPosition}
                        onChange={handleSliderChange}
                        className="ba-slider"
                    />

                    <div
                        className="ba-slider-button"
                        style={{ left: `${sliderPosition}%` }}
                    >
                        <div className="ba-arrow-left"></div>
                        <div className="ba-arrow-right"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeforeAfterSlider;
