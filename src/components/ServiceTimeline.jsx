import React from 'react';
import { PhoneCall, Search, FileText, CheckCircle2 } from 'lucide-react';
import '../styles/ServiceTimeline.css';

const ServiceTimeline = ({ onOpenQuoteModal }) => {
    const steps = [
        {
            id: 1,
            title: 'Contato Imediato',
            desc: 'Você entra em contato pelo WhatsApp e nossa equipe atende na hora.',
            icon: PhoneCall,
        },
        {
            id: 2,
            title: 'Visita Técnica',
            desc: 'Um especialista vai até sua empresa para um diagnóstico preciso.',
            icon: Search,
        },
        {
            id: 3,
            title: 'Orçamento Claro',
            desc: 'Apresentamos a solução ideal com custo-benefício transparente.',
            icon: FileText,
        },
        {
            id: 4,
            title: 'Execução Agil',
            desc: 'Resolvemos o problema com peças originais e garantia total.',
            icon: CheckCircle2,
        },
    ];

    return (
        <section className="timeline-section reveal">
            <div className="container">
                <div className="timeline-header text-center">
                    <span className="section-subtitle-dark" style={{ color: '#F7931E' }}>Como Trabalhamos</span>
                    <h2 className="section-title-dark" style={{ color: '#111' }}>
                        Processo de <span className="text-accent">Atendimento</span>
                    </h2>
                    <p className="timeline-desc-main">
                        Simplicidade e eficiência para seu comércio não parar.
                    </p>
                </div>

                <div className="timeline-flow">
                    {/* The Line (Desktop) */}
                    <div className="timeline-line-track"></div>

                    <div className="timeline-steps-container">
                        {steps.map((step, index) => (
                            <div key={step.id} className="timeline-step">
                                <div className="step-icon-circle">
                                    <step.icon size={28} />
                                    <div className="step-number">{step.id}</div>
                                </div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-desc">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="timeline-cta">
                    <button onClick={onOpenQuoteModal} className="btn-construct-primary">
                        Iniciar Atendimento Agora
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ServiceTimeline;
