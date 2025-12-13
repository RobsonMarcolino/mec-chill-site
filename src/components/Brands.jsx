import React from 'react';
import '../styles/Brands.css';

// Import Logos
import ccc from '../assets/CCC.png.webp';
import dddd from '../assets/DDDD.png.webp';
import eltro from '../assets/ELTRO.png.webp';
import kkk from '../assets/kkk.png.webp';
import sss1 from '../assets/SSS-1.png.webp';
import sss from '../assets/sss.png.webp';
import imbera from '../assets/IMBERA.png.webp'; // Found in list, adding for variety if desired, else can remove

const Brands = () => {
    const brandLogos = [
        ccc,
        dddd,
        eltro,
        kkk,
        sss1,
        sss,
        imbera // Optional
    ];

    return (
        <section className="brands-section">
            <div className="container">
                <p className="brands-title">Trabalhamos com os principais fabricantes</p>

                <div className="brands-slider">
                    <div className="brands-track">
                        {/* Double the list for infinite scroll effect */}
                        {brandLogos.concat(brandLogos).map((logo, index) => (
                            <div key={index} className="brand-item">
                                <img src={logo} alt="Brand Logo" className="brand-img" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brands;
