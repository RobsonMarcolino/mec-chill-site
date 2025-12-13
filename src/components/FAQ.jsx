import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import '../styles/FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Qual o horário de atendimento?",
            answer: "Funcionamos todos os dias, de 07:00 às 19:00, para garantir suporte contínuo à sua operação."
        },
        {
            question: "Atendem quais cidades?",
            answer: "Nossa base é em Santa Luzia e atendemos toda a Grande Belo Horizonte, Contagem, Betim e Nova Lima."
        },
        {
            question: "Fazem contrato de manutenção preventiva?",
            answer: "Sim. Nossos contratos mensais incluem visitas periódicas, limpeza quimica e relatórios técnicos para garantir a eficiência dos equipamentos."
        },
        {
            question: "Trabalham com quais tipos de equipamentos?",
            answer: "Especialistas em Câmaras Frias, Chillers, Balcões Frigoríficos, Ilhas de Congelados e Sistemas Centrais (Rack)."
        },
        {
            question: "Emitem nota fiscal e garantia?",
            answer: "Com certeza. Todos os serviços possuem garantia de 3 a 12 meses (dependendo do serviço) e emissão de nota fiscal."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section reveal">
            <div className="container">
                <div className="faq-header text-center">
                    <span className="section-subtitle-dark" style={{ color: '#F7931E' }}>Tira-Dúvidas</span>
                    <h2 className="section-title-dark" style={{ color: '#111' }}>
                        Perguntas <span className="text-accent">Frequentes</span>
                    </h2>
                </div>

                <div className="faq-grid">
                    {/* Image/Decoration - Optional, keeping simple for now */}

                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                <div className="faq-question">
                                    <h3>{faq.question}</h3>
                                    <span className="faq-icon">
                                        {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                    </span>
                                </div>
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
