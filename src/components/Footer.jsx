import React from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import logo from '../assets/LogoNome.png'; // Updated asset
import '../styles/Footer.css';

const Footer = ({ onOpenQuoteModal }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contato" className="footer-ref">
            <div className="container">
                <div className="footer-grid">

                    {/* Brand Col */}
                    <div className="footer-col">
                        <a href="#home" className="footer-logo-link">
                            <img src={logo} alt="MEC CHILL" className="footer-logo-img" />
                        </a>
                        <p className="footer-desc">
                            A melhor solução para o seu projeto de refrigeração comercial.
                        </p>
                    </div>

                    {/* Navigation Col */}
                    <div className="footer-col">
                        <h4>Navegação</h4>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#sobre">Sobre</a></li>
                            <li><a href="#servicos">Serviços</a></li>
                            <li><a href="#contato">Contato</a></li>
                        </ul>
                    </div>

                    {/* Contact Col */}
                    <div className="footer-col">
                        <h4>Fale Conosco</h4>
                        <p><strong>Telefone:</strong> (31) 9 9500-1193</p>
                        <p className="mt-1"><strong>Horário:</strong> 08h às 18h</p>
                        <p className="mt-3 footer-address">
                            Atendimento Santa Luzia, <br /> Belo Horizonte e região.
                        </p>
                    </div>

                    {/* Social/CTA Col */}
                    <div className="footer-col">
                        <h4>Solicite Agora</h4>
                        <button
                            onClick={onOpenQuoteModal}
                            className="btn-footer-cta"
                            style={{ marginTop: '0' }}
                        >
                            Peça seu Orçamento
                        </button>
                    </div>

                </div>

                <div className="footer-copyright">
                    &copy; {currentYear} MEC CHILL - Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
