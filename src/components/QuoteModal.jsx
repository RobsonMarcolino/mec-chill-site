import React, { useState } from 'react';
import { X, User, Mail, MessageSquare, Zap, Phone } from 'lucide-react';
import logo from '../assets/LogoNome.png'; // Logo
import '../styles/Modals.css';

const QuoteModal = ({ isOpen, onClose }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        details: ''
    });

    const handleContentClick = (e) => e.stopPropagation();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const message = `*Solicitação de Orçamento - Site MEC CHILL*%0A%0A` +
            `*Nome:* ${formData.name}%0A` +
            `*Email:* ${formData.email}%0A` +
            `*Telefone:* ${formData.phone}%0A` +
            `*Detalhes:* ${formData.details}`;

        const whatsappUrl = `https://wa.me/5531995001193?text=${message}`;

        window.open(whatsappUrl, '_blank');

        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', phone: '', details: '' });
            onClose();
        }, 3000);
    };

    if (!isOpen) return null;

    return (
        <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
            <div className="modal-container" onClick={handleContentClick}>

                {/* LOGO HEADER - CENTERED */}
                <div style={{ textAlign: 'center', padding: '30px 20px 15px', borderBottom: '1px solid #f3f4f6', position: 'relative', background: 'linear-gradient(to bottom, #fff, #f9fafb)' }}>
                    <img
                        src={logo}
                        alt="MEC CHILL"
                        style={{
                            width: '280px',
                            height: 'auto',
                            maxWidth: '80%',
                            margin: '0 auto',
                            filter: 'drop-shadow(0 5px 8px rgba(0,0,0,0.3)) drop-shadow(0 2px 2px rgba(0,0,0,0.2))', // 3D Pop purpose
                            transform: 'perspective(500px) translateZa(0)' // Hardware accel hint
                        }}
                    />
                    <button
                        className="close-btn"
                        onClick={onClose}
                        style={{ position: 'absolute', right: '15px', top: '15px', color: '#9ca3af', backgroundColor: 'transparent' }}
                    >
                        <X size={24} />
                    </button>
                </div>

                {isSubmitted ? (
                    <div className="modal-body" style={{ textAlign: 'center', padding: '3rem' }}>
                        <Zap size={48} color="#F7931E" style={{ margin: '0 auto 1rem', animation: 'bounce 1s infinite' }} />
                        <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111', marginBottom: '0.5rem' }}>Solicitação Recebida!</h4>
                        <p style={{ color: '#4b5563' }}>Redirecionando para o WhatsApp...</p>
                    </div>
                ) : (
                    <div className="modal-body" style={{ paddingTop: '20px' }}>
                        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#111', marginBottom: '5px' }}>Iniciar Atendimento</h3>
                            <p style={{ color: '#666', fontSize: '0.9rem' }}>
                                Preencha para falar com nossa equipe técnica agora.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label">
                                    <User size={16} /> Nome Completo
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="form-input"
                                    style={{ backgroundColor: '#f9fafb' }}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    <Phone size={16} /> Telefone / WhatsApp
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="form-input"
                                    style={{ backgroundColor: '#f9fafb' }}
                                    placeholder="(31) 9...."
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    <MessageSquare size={16} /> Como podemos ajudar?
                                </label>
                                <textarea
                                    name="details"
                                    value={formData.details}
                                    onChange={handleChange}
                                    className="form-textarea"
                                    rows="3"
                                    style={{ backgroundColor: '#f9fafb' }}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn" style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px',
                                background: 'linear-gradient(to right, #F7931E, #ffad42)',
                                boxShadow: '0 4px 10px rgba(247, 147, 30, 0.3)'
                            }}>
                                <Zap size={18} fill="#1a202c" /> Iniciar Conversa
                            </button>
                        </form>
                    </div>
                )}

            </div>
        </div>
    );
};

export default QuoteModal;
