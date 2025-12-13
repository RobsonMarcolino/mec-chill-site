import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ServiceTimeline from './components/ServiceTimeline'; // New
import ProjectGallery from './components/ProjectGallery';
import CoverageMap from './components/CoverageMap';
import QuoteModal from './components/QuoteModal';
import ServiceDetailModal from './components/ServiceDetailModal';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import Brands from './components/Brands';
import FAQ from './components/FAQ';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTop from './components/BackToTop'; // New

function App() {
  // Modal States
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Handlers
  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  const openServiceModal = (service) => {
    setSelectedService(service);
    setIsServiceModalOpen(true);
  };
  const closeServiceModal = () => {
    setIsServiceModalOpen(false);
    setSelectedService(null);
  };

  // Scroll Reveal Observer
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => observer.observe(el));

    return () => reveals.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <div className="App">
      <Navbar onOpenQuoteModal={openQuoteModal} />

      <main>
        <Hero onOpenQuoteModal={openQuoteModal} />
        <Brands /> {/* Trust Strip */}
        <About />
        <Services onOpenServiceModal={openServiceModal} onOpenQuoteModal={openQuoteModal} />

        {/* Timeline Process */}
        <ServiceTimeline onOpenQuoteModal={openQuoteModal} />

        <ProjectGallery onOpenQuoteModal={openQuoteModal} />
        <CoverageMap />
        <FAQ />
      </main>

      <Footer onOpenQuoteModal={openQuoteModal} />

      <MobileStickyBar />
      <FloatingWhatsApp /> {/* Desktop Only */}
      <BackToTop />

      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
      <ServiceDetailModal isOpen={isServiceModalOpen} onClose={closeServiceModal} service={selectedService} />
    </div>
  );
}

export default App;
