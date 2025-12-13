import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import '../styles/FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show button after scrolling down a bit (e.g., 300px)
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <a
            href="https://wa.me/5531995001193?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%21"
            target="_blank"
            rel="noopener noreferrer"
            className={`floating-whatsapp ${isVisible ? 'visible' : ''}`}
            aria-label="Falar no WhatsApp"
        >
            <div className="fw-tooltip">Falar com Especialista</div>
            <div className="fw-icon-box">
                <MessageCircle size={32} />
            </div>
        </a>
    );
};

export default FloatingWhatsApp;
