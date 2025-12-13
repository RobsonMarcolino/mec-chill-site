import React from 'react';
import { Target, CheckCircle, Users } from 'lucide-react';
import aboutImg from '../assets/IMAGEM_CARD1.jpeg';
import AnimatedCount from './AnimatedCount'; // Import
import '../styles/About.css';

const About = () => {
    return (
        <section id="sobre" className="about-construct">
            <div className="container">
                <div className="about-grid-construct">

                    {/* IMAGE COLUMN */}
                    <div className="about-img-col-construct">
                        <div className="about-img-wrapper-construct">
                            <img
                                src={aboutImg}
                                alt="Equipe MEC CHILL"
                                className="about-main-img"
                            />

                            {/* Floating Badge */}
                            <div className="experience-badge">
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <span className="years">
                                        <AnimatedCount to={10} suffix="+" />
                                    </span>
                                    <span className="text">Anos de <br /> Experiência</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* TEXT COLUMN */}
                    <div className="about-text-col-construct">
                        <span className="section-subtitle-construct">Sobre a MEC CHILL</span>
                        <h2 className="section-title-construct">
                            Líderes em Soluções de <br />
                            <span className="text-accent">Refrigeração Industrial</span>
                        </h2>

                        <p className="about-desc-construct">
                            Combinamos tecnologia de ponta e expertise técnica para garantir que sua operação nunca pare.
                            Nossa missão é oferecer eficiência energética e confiabilidade a cada projeto.
                        </p>

                        <div className="about-features-grid">
                            <div className="af-item">
                                <CheckCircle size={20} className="af-icon" />
                                <span>Manutenção Preventiva</span>
                            </div>
                            <div className="af-item">
                                <CheckCircle size={20} className="af-icon" />
                                <span>Contratos Flexíveis</span>
                            </div>
                            {/* ... other items (keeping unchanged for brevity if no new content) ... */}
                            <div className="af-item">
                                <CheckCircle size={20} className="af-icon" />
                                <span>Instalação Certificada</span>
                            </div>
                            <div className="af-item">
                                <CheckCircle size={20} className="af-icon" />
                                <span>Todos os dias: 7h às 19h</span>
                            </div>
                        </div>

                        <div className="about-stats-row">
                            <div className="stat-box">
                                <strong><AnimatedCount to={2000} suffix="+" /></strong>
                                <span>Projetos Entregues</span>
                            </div>
                            <div className="stat-box">
                                <strong><AnimatedCount to={100} suffix="%" /></strong>
                                <span>Satisfação</span>
                            </div>
                        </div>

                        <a href="#contato" className="btn-about-more">
                            Saiba Mais
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
