import React from 'react';
import { X } from 'lucide-react';
import '../styles/Modals.css';

const ServiceDetailModal = ({ isOpen, onClose, service }) => {
    if (!isOpen || !service) return null;

    const handleContentClick = (e) => e.stopPropagation();

    // Determine which image to show: modalImage > imageSource > placeholder
    const displayImage = service.modalImage || service.imageSource;

    return (
        <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
            <div className="modal-container" onClick={handleContentClick}>

                <div className="modal-header">
                    <h3>Detalhes: {service.title}</h3>
                    <button className="close-btn" onClick={onClose}>
                        <X size={24} />
                    </button>
                </div>

                <div className="modal-body">
                    <div className="flex items-center space-x-3" style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'center' }}>
                        <service.icon size={32} color="#F7931E" />
                        <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#7F7F7F', margin: 0 }}>
                            {service.title}
                        </h4>
                    </div>

                    <div className="detail-image-wrapper">
                        {displayImage ? (
                            <img
                                src={displayImage}
                                alt={service.title}
                                className="detail-image"
                                style={{ width: '100%', borderRadius: '8px', marginBottom: '20px', maxHeight: '300px', objectFit: 'cover' }}
                            />
                        ) : service.imagePlaceholder && (
                            <img
                                src={`https://placehold.co/${service.imagePlaceholder}`}
                                alt={service.title}
                                className="detail-image"
                            />
                        )}
                    </div>

                    <p className="detail-desc">{service.description}</p>

                    <p className="detail-extra">
                        <strong style={{ color: '#7F7F7F' }}>Mais Informações:</strong> {service.details}
                    </p>

                    <div style={{ textAlign: 'right', marginTop: '1.5rem' }}>
                        <button
                            onClick={onClose}
                            className="action-btn"
                            style={{ width: 'auto', display: 'inline-block', padding: '0.5rem 1.5rem' }}
                        >
                            Fechar
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceDetailModal;
