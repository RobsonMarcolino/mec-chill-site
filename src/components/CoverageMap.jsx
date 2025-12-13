import React from 'react';
import { MapPin } from 'lucide-react';
import '../styles/CoverageMap.css';

const CoverageMap = () => {
    const cities = [
        'Belo Horizonte', 'Contagem', 'Betim', 'Nova Lima',
        'Santa Luzia', 'Lagoa Santa', 'Sete Lagoas', 'Pedro Leopoldo'
    ];

    return (
        <section className="coverage-section">
            <div className="container">
                <div className="coverage-content">
                    <h2 className="section-title-dark">
                        Área de <span className="text-accent">Cobertura</span>
                    </h2>
                    <p className="coverage-text">
                        Atendimento rápido e eficiente nas principais cidades da região metropolitana.
                    </p>

                    <div className="cities-grid">
                        {cities.map(city => (
                            <div key={city} className="city-badge">
                                <MapPin size={16} color="#F7931E" />
                                {city}
                            </div>
                        ))}
                    </div>
                </div>
                {/* Decorative map background is handled in CSS */}
            </div>
        </section>
    );
};

export default CoverageMap;
