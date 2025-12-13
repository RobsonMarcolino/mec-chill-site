import React from 'react';
import { Settings, Phone, CheckCircle, ArrowRight, Zap, PenTool, Star } from 'lucide-react';
import '../styles/Hero.css';
import heroBg from '../assets/FundoRefrige.png';
import AnimatedCount from './AnimatedCount'; // Import

const Hero = ({ onOpenQuoteModal }) => {
    return (
        <div className="hero-wrapper">
            <section id="home" className="construction-hero">
                <div className="hero-bg-layer" style={{ backgroundImage: `url(${heroBg})` }}></div>
                <div className="hero-overlay-gradient"></div>

                <div className="container hero-container-construct">
                    <div className="hero-content-construct fade-in-up">
                        <span className="hero-pretitle">Manutenção | Projetos | Instalação</span>
                        <h1 className="hero-title-construct">
                            Soluções Fortes em <br />
                            <span className="text-accent">Refrigeração</span>
                        </h1>
                        <p className="hero-desc-construct">
                            Garantimos a eficiência do seu negócio com serviços especializados em câmaras frias, chillers e ar condicionado.
                        </p>
                        <div className="hero-btns">
                            <button onClick={onOpenQuoteModal} className="btn-construct-primary">
                                Solicitar Orçamento <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Floating Features Strip */}
            <section className="features-strip">
                <div className="container">
                    <div className="features-grid">

                        {/* Feature 1 */}
                        <div className="feature-card-construct">
                            <div className="feature-icon-box">
                                <Settings size={32} color="#F7931E" />
                            </div>
                            <h3>Estratégia Eficiente</h3>
                            <p>Planos de manutenção preditiva para zerar paradas inesperadas.</p>
                        </div>

                        {/* Feature 2 - Active */}
                        <div className="feature-card-construct active">
                            <div className="feature-icon-box white">
                                <Zap size={32} color="#fff" />
                            </div>
                            <h3>Serviços Flexíveis</h3>
                            <p>Atendimento todos os dias de 07h às 19h para sua indústria.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="feature-card-construct">
                            <div className="feature-icon-box">
                                <PenTool size={32} color="#F7931E" />
                            </div>
                            <h3>Rápido e Confiável</h3>
                            <p>Equipe técnica qualificada. <AnimatedCount to={2000} suffix="+" /> clientes aprovam.</p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
