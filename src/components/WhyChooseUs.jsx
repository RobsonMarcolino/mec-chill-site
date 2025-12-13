import React from 'react';
import '../styles/WhyChooseUs.css';

const WhyChooseUs = () => {
    const features = [
        {
            id: 1,
            title: 'Técnicos Experientes',
            description: 'Equipe com formação técnica completa em Mecânica, Elétrica e Refrigeração.',
            icon: '👨‍🔧'
        },
        {
            id: 2,
            title: 'Conhecimento Atualizado',
            description: 'Especialistas em câmaras frias, sistemas comerciais e compressores inverter.',
            icon: '📚'
        },
        {
            id: 3,
            title: 'Atendimento Rápido',
            description: 'Agilidade em Santa Luzia, Belo Horizonte e toda região metropolitana.',
            icon: '🚀'
        },
        {
            id: 4,
            title: 'Diagnóstico Honesto',
            description: 'Transparência total e precisão no orçamento antes de iniciar qualquer serviço.',
            icon: '💎'
        }
    ];

    return (
        <section className="section why-choose-us">
            <div className="container">
                <div className="section-header text-center fade-in-up">
                    <span className="section-subtitle">Diferenciais MEC CHILL</span>
                    <h2 className="section-title">Por Que Contratar a Nossa Empresa?</h2>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div
                            className="feature-card glass-panel fade-in-up"
                            key={feature.id}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="icon-wrapper">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
