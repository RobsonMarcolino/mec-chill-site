import React, { useState } from 'react';
import { Menu, X, Home, Info, Zap, Phone } from 'lucide-react';
import iconLogo from '../assets/IconeLogo.png'; // Updated asset
import '../styles/Navbar.css';

const Navbar = ({ onOpenQuoteModal }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home', icon: Home },
        { name: 'Sobre', href: '#sobre', icon: Info },
        { name: 'Serviços', href: '#servicos', icon: Zap },
        { name: 'Contato', href: '#contato', icon: Phone },
    ];

    return (
        <header className="navbar-ref">
            <div className="container navbar-container-ref">
                {/* LOGO AREA - Icon + Text */}
                <a href="#home" className="navbar-brand">
                    <img src={iconLogo} alt="MEC CHILL Icon" className="navbar-icon" />
                    <div className="brand-text">
                        <span className="brand-mec">MEC</span>
                        <span className="brand-chill">CHILL</span>
                    </div>
                </a>

                {/* DESKTOP NAV */}
                <nav className="navbar-desktop">
                    {navLinks.map(link => (
                        <a key={link.name} href={link.href} className="nav-link-ref">
                            {link.name}
                        </a>
                    ))}
                    <button onClick={onOpenQuoteModal} className="btn-nav-cta">
                        Orçamento
                    </button>
                </nav>

                {/* MOBILE TOGGLE */}
                <button
                    className="navbar-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} color="#fff" /> : <Menu size={24} color="#fff" />}
                </button>
            </div>

            {/* MOBILE MENU */}
            <div className={`mobile-menu-ref ${isOpen ? 'open' : ''}`}>
                <div className="mobile-menu-content">
                    {navLinks.map(link => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="mobile-nav-link"
                            onClick={() => setIsOpen(false)}
                        >
                            <link.icon size={20} color="#F7931E" style={{ marginRight: '12px' }} />
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={() => { setIsOpen(false); onOpenQuoteModal(); }}
                        className="btn-mobile-cta"
                    >
                        Orçamento
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
