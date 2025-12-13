import React from 'react';
import { MessageCircle } from 'lucide-react';
import '../styles/MobileStickyBar.css';

const MobileStickyBar = () => {
    // Only show on mobile via CSS media queries
    return (
        <div className="mobile-sticky-bar">
            <a
                href="https://wa.me/5531995001193?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%21"
                target="_blank"
                rel="noopener noreferrer"
                className="msb-btn msb-whatsapp"
            >
                <MessageCircle size={20} />
                <span>Agendar no WhatsApp</span>
            </a>
        </div>
    );
};

export default MobileStickyBar;
