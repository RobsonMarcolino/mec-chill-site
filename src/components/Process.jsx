import React from 'react';
import '../styles/Process.css';

const Process = () => {
    const steps = [
        {
            id: 1,
            title: 'Agendamento Rápido',
            description: 'Entre em contato por telefone ou WhatsApp. Informe o modelo do equipamento e descreva o problema.',
            icon: '📞'
        },
        {
            id: 2,
            title: 'Visita Técnica Especializada',
            description: 'Iremos até o local com os equipamentos adequados para realizar o diagnóstico com total transparência.',
            icon: '✅'
        },
        {
            id: 3,
            title: 'Diagnóstico e Aprovação',
            description: 'Apresentamos o diagnóstico técnico detalhado e o valor. Só iniciamos o reparo com sua aprovação.',
            icon: '⚙️'
        },
        {
            id: 4,
            title: 'Reparo e Garantia',
            description: 'Executamos o conserto com peças de alta qualidade. Você recebe orientações e garantia do serviço.',
            icon: '🛡️'
        }
    ];

    return (
        <section className="section process">
            <div className="container">
                <div className="process-header">
                    <span className="process-badge">VEJA COMO É SIMPLES SOLICITAR NOSSOS SERVIÇOS</span>
                    <h2 className="section-title">Como Funciona o Nosso Atendimento</h2>
                </div>

                <div className="process-grid">
                    {steps.map((step, index) => (
                        <div className="process-card" key={step.id}>
                            <div className="step-badge">PASSO {step.id}</div>
                            <div className="card-content">
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                            <div className="step-icon">
                                {step.icon}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
