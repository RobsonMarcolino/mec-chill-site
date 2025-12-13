import React from 'react';
import '../styles/ProjectGallery.css';
import camaraMain from '../assets/CamarasFrias.jpg';
import camaraSec from '../assets/CamaraFrias2.jpg';
import geladeiras from '../assets/Geladeiras.jpg';
import balcoes from '../assets/balcoes.jpg';
import ilhas from '../assets/Ilhas.jpg';
import cervejeiras from '../assets/RefrigeracaoComercial.png'; // Using available asset as proxy
import { ArrowRight } from 'lucide-react';

const ProjectGallery = ({ onOpenQuoteModal }) => {
    return (
        <section className="gallery-section">
            <div className="container">
                <div className="gallery-header text-center">
                    <span className="section-subtitle-dark" style={{ color: '#F7931E' }}>Portfólio Completo</span>
                    <h2 className="section-title-dark" style={{ color: '#111' }}>
                        Atuação <span className="text-accent">Especializada</span>
                    </h2>
                </div>

                <div className="gallery-grid">

                    {/* 1. MAIN HIGHLIGHT - Camaras Frias */}
                    <div className="gallery-item highlight-item" onClick={onOpenQuoteModal}>
                        <img src={camaraMain} alt="Câmaras Frias Industriais" className="gallery-img" />
                        <div className="gallery-overlay">
                            <div className="gallery-content">
                                <h3>Câmaras Frias Industriais</h3>
                                <p>Projetos de grande porte e frigoríficos</p>
                                <span className="gallery-btn"><ArrowRight /></span>
                            </div>
                        </div>
                    </div>

                    {/* 2. Side Item - Camara 2 */}
                    <div className="gallery-item" onClick={onOpenQuoteModal}>
                        <img src={camaraSec} alt="Manutenção Técnica" className="gallery-img" />
                        <div className="gallery-overlay">
                            <div className="gallery-content">
                                <h3>Manutenção Técnica</h3>
                                <p>Preventiva e Corretiva</p>
                            </div>
                        </div>
                    </div>

                    {/* 3. Side Item - Geladeiras */}
                    <div className="gallery-item" onClick={onOpenQuoteModal}>
                        <img src={geladeiras} alt="Geladeiras Comerciais" className="gallery-img" />
                        <div className="gallery-overlay">
                            <div className="gallery-content">
                                <h3>Geladeiras</h3>
                                <p>Expositores e Verticais</p>
                            </div>
                        </div>
                    </div>

                    {/* 4. Bottom Item - Ilhas */}
                    <div className="gallery-item" onClick={onOpenQuoteModal}>
                        <img src={ilhas} alt="Ilhas de Congelados" className="gallery-img" />
                        <div className="gallery-overlay">
                            <div className="gallery-content">
                                <h3>Ilhas de Congelados</h3>
                                <p>Supermercados e Atacados</p>
                            </div>
                        </div>
                    </div>

                    {/* 5. Bottom Item - Balcões */}
                    <div className="gallery-item" onClick={onOpenQuoteModal}>
                        <img src={balcoes} alt="Balcões Refrigerados" className="gallery-img" />
                        <div className="gallery-overlay">
                            <div className="gallery-content">
                                <h3>Balcões</h3>
                                <p>Açougue e Padaria</p>
                            </div>
                        </div>
                    </div>

                    {/* 6. Bottom Item - Cervejeiras */}
                    <div className="gallery-item" onClick={onOpenQuoteModal}>
                        <img src={cervejeiras} alt="Cervejeiras e Bebidas" className="gallery-img" />
                        <div className="gallery-overlay">
                            <div className="gallery-content">
                                <h3>Cervejeiras</h3>
                                <p>Controle de temperatura ideal</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProjectGallery;
