import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import ProductModal from './components/ProductModal';
import CustomQuoteModal from './components/CustomQuoteModal';
import Craftsmanship from './components/Craftsmanship';
import InstagramSection from './components/InstagramSection';
import Testimonials from './components/Testimonials';
import WhatsAppWidget from './components/WhatsAppWidget';
import Footer from './components/Footer';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState(null);
  const [searchFilter, setSearchFilter] = useState('');

  const handleOpenCustomQuote = (product = null) => {
    setQuoteProduct(product);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-royalDark text-royalText flex flex-col font-sans">
      {/* Navbar Header */}
      <Header 
        onOpenCustomQuote={() => handleOpenCustomQuote(null)}
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero 
          onOpenCustomQuote={() => handleOpenCustomQuote(null)} 
        />

        {/* Product Catalog Grid */}
        <Catalog
          onSelectProduct={(product) => setSelectedProduct(product)}
          onOpenCustomQuote={(product) => handleOpenCustomQuote(product)}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />

        {/* Heritage & Craftsmanship */}
        <Craftsmanship />

        {/* Official Instagram Integration Showcase */}
        <InstagramSection />

        {/* Testimonials */}
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer 
        onOpenCustomQuote={() => handleOpenCustomQuote(null)}
      />

      {/* Floating WhatsApp Action Hub */}
      <WhatsAppWidget 
        onOpenCustomQuote={() => handleOpenCustomQuote(null)}
      />

      {/* Product Quick View Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onOpenCustomQuote={(p) => handleOpenCustomQuote(p)}
        />
      )}

      {/* Custom Quote Request Modal */}
      {isQuoteModalOpen && (
        <CustomQuoteModal
          preselectedProduct={quoteProduct}
          onClose={() => setIsQuoteModalOpen(false)}
        />
      )}
    </div>
  );
}
