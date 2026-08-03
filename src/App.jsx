import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import ProductModal from './components/ProductModal';
import CustomQuoteModal from './components/CustomQuoteModal';
import CartDrawer from './components/CartDrawer';
import Craftsmanship from './components/Craftsmanship';
import InstagramSection from './components/InstagramSection';
import WhatsAppWidget from './components/WhatsAppWidget';
import Footer from './components/Footer';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');

  // Cart Handlers
  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQty = (productId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, qty: newQty } : item))
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const cartItemIds = cartItems.map((item) => item.id);

  return (
    <div className="min-h-screen bg-cream-100 text-wood-950 flex flex-col font-sans">
      {/* Navbar Header */}
      <Header 
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={totalCartCount}
        onOpenCustomQuote={() => setIsQuoteModalOpen(true)}
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero 
          onOpenCustomQuote={() => setIsQuoteModalOpen(true)} 
        />

        {/* Product Catalog Grid */}
        <Catalog
          onSelectProduct={(product) => setSelectedProduct(product)}
          onAddToCart={handleAddToCart}
          cartItemIds={cartItemIds}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />

        {/* Wood Artisan Heritage */}
        <Craftsmanship />

        {/* Official Instagram Integration Showcase */}
        <InstagramSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenCustomQuote={() => setIsQuoteModalOpen(true)}
      />

      {/* Floating WhatsApp Action Hub */}
      <WhatsAppWidget 
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={totalCartCount}
        onOpenCustomQuote={() => setIsQuoteModalOpen(true)}
      />

      {/* Slide-over WhatsApp Order List Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
      />

      {/* Product Quick View Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          inCart={cartItemIds.includes(selectedProduct.id)}
        />
      )}

      {/* Custom Wholesale Quote Modal */}
      {isQuoteModalOpen && (
        <CustomQuoteModal
          onClose={() => setIsQuoteModalOpen(false)}
        />
      )}
    </div>
  );
}
