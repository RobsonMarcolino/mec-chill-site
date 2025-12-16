import React from 'react';
import { Settings, Wrench, Thermometer, Info, ArrowRight } from 'lucide-react';
import img1 from '../assets/Fria1.webp';
import img7 from '../assets/ManutencaoPrev.jpg';
import img3 from '../assets/IMAGEM_CARD3.jpeg';
import img5 from '../assets/IMAGEM_CARD5.jpeg';
import camara2 from '../assets/CamaraFrias2.jpg'; // Specific for Modal 1
import cervejeiras from '../assets/RefrigeracaoComercial.png'; // Specific for Modal 2 (Cervejeiras proxy)
import '../styles/Services.css';

const Services = ({ onOpenServiceModal, onOpenQuoteModal }) => {
    const servicesData = [
        {
            title: 'Instalação Comercial',
            description: 'Montagem de câmaras frias e sistemas centrais de alta capacidade.',
            icon: Settings,
            imageSource: img1,
            modalImage: camara2, // Requested: Appears inside modal
            details: 'Garantia de fábrica e instalação seguindo rigorosas normas técnicas.',
        },
        {
            title: 'Manutenção Preventiva',
            description: 'Maximize a vida útil dos seus equipamentos e evite prejuízos.',
            icon: Wrench,
            imageSource: img7,
            modalImage: cervejeiras, // Requested: Appears inside modal
            details: 'Contratos mensais disponíveis para sua tranquilidade.',
        },
        {
            title: 'Reparos de Emergência',
            description: 'Atendimento de 8h às 18h em BH e região.',
            icon: Thermometer,
            imageSource: img3,
            // modalImage fallback to imageSource if undefined
            details: 'Equipe pronta para atender sua solicitação.',
        },
        {
            title: 'Projetos e Consultoria',
            description: 'Eficiência energética e dimensionamento personalizado.',
            icon: Info,
            imageSource: img5,
            // modalImage fallback to imageSource if undefined
            details: 'Reduza sua conta de energia com equipamentos otimizados.',
        },
    ];

    return (
        <section id="servicos" className="services-construct reveal">
            <div className="container">

                {/* Header */}
                <div className="section-header-construct text-center">
                    <span className="section-subtitle-dark">O Que Nós Fazemos</span>
                    <h2 className="section-title-dark">
                        Soluções Completas em <br /> <span className="text-accent">Refrigeração</span>
                    </h2>
                </div>

                <div className="services-grid-construct">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            onClick={() => onOpenServiceModal(service)}
                            className="service-card-construct"
                        >
                            <div className="card-img-holder">
                                <img
                                    src={service.imageSource}
                                    alt={service.title}
                                    className="sc-img"
                                />
                                <div className="card-icon-overlay">
                                    <service.icon size={24} color="#F7931E" />
                                </div>
                            </div>

                            <div className="card-body-construct">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <button className="link-read-more">
                                    Detalhes <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="service-cta-wrapper">
                    <button onClick={onOpenQuoteModal} className="btn-construct-outline">
                        Ver Todos os Serviços
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Services;
