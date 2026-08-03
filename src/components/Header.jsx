import React, { useState } from 'react';
import { 
  Sparkles, 
  MessageCircle, 
  Instagram, 
  Search, 
  Menu, 
  X, 
  ShoppingBag, 
  PhoneCall, 
  Award,
  Globe,
  TreePine
} from 'lucide-react';
import { INSTAGRAM_URL, WHATSAPP_CATALOG_URL } from '../data/products';

export default function Header({ onOpenCart, cartCount, onOpenCustomQuote, searchFilter, setSearchFilter }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-wood-100 shadow-sm transition-all duration-300">
      {/* Top Banner */}
      <div className="bg-wood-950 text-wood-100 py-1.5 px-4 text-xs text-center font-medium tracking-wide flex items-center justify-center gap-3">
        <span className="flex items-center gap-1.5">
          <TreePine className="w-3.5 h-3.5 text-amber-400" />
          Al Hasan Handicrafts • Direct Manufacturer Sheesham & Neem Wood Crafts
        </span>
        <span className="hidden md:inline text-wood-600">•</span>
        <a 
          href={WHATSAPP_CATALOG_URL} 
          target="_blank" 
          rel="noreferrer"
          className="font-bold text-amber-300 hover:text-white underline transition-colors"
        >
          View Full WhatsApp Catalog →
        </a>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-wood-900 text-amber-400 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <TreePine className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-serif font-extrabold text-wood-950 tracking-wide block leading-tight">
                AL HASAN
              </span>
              <span className="text-[10px] tracking-[0.25em] text-wood-600 font-bold uppercase block">
                Handicrafts Official
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-wood-800">
            <a href="#catalog" className="hover:text-wood-950 transition-colors">
              Products Catalog
            </a>
            <a href="#craftsmanship" className="hover:text-wood-950 transition-colors">
              Wood Artisan Heritage
            </a>
            <a href="#instagram" className="hover:text-wood-950 transition-colors flex items-center gap-1.5">
              <Instagram className="w-4 h-4 text-pink-600" />
              Instagram
            </a>
            <button 
              onClick={onOpenCustomQuote}
              className="hover:text-wood-950 transition-colors"
            >
              Bulk / Custom Orders
            </button>
          </nav>

          {/* Actions & Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Search Bar */}
            <div className="relative">
              {searchOpen ? (
                <div className="flex items-center bg-cream-100 border border-wood-300 rounded-full px-3 py-1.5 w-64 shadow-inner">
                  <Search className="w-4 h-4 text-wood-600 mr-2 shrink-0" />
                  <input
                    type="text"
                    placeholder="Search masala box, belan..."
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    className="bg-transparent text-xs text-wood-950 placeholder-wood-500 focus:outline-none w-full font-medium"
                    autoFocus
                  />
                  <button onClick={() => setSearchOpen(false)} className="text-wood-500 hover:text-wood-950 ml-1">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2.5 rounded-full text-wood-700 hover:text-wood-950 hover:bg-cream-200 transition-all"
                  title="Search Catalog"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Cart Drawer Trigger */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-cream-200 hover:bg-wood-200 text-wood-900 border border-wood-300 transition-all shadow-sm flex items-center justify-center"
              title="View WhatsApp Order List"
            >
              <ShoppingBag className="w-5 h-5 text-wood-900" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-waGreen-600 text-white text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Instagram Link */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full text-pink-600 hover:bg-pink-50 border border-pink-200 transition-all"
              title="Official Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>

            {/* WhatsApp Catalog CTA */}
            <a
              href={WHATSAPP_CATALOG_URL}
              target="_blank"
              rel="noreferrer"
              className="bg-waGreen-600 hover:bg-waGreen-700 text-white text-xs font-bold px-4 py-2.5 rounded-full flex items-center gap-2 shadow-md hover:shadow-waGreen-600/30 transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Catalog</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-full bg-cream-200 text-wood-900"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-waGreen-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-wood-800 hover:text-black"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-wood-100 px-4 pt-3 pb-6 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-wood-500 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full bg-cream-100 border border-wood-200 rounded-xl pl-9 pr-4 py-2 text-sm text-wood-950 placeholder-wood-500 focus:outline-none"
            />
          </div>

          <div className="space-y-2 font-semibold text-wood-900 text-sm">
            <a 
              href="#catalog" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-cream-100"
            >
              Products Catalog
            </a>
            <a 
              href="#craftsmanship" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-cream-100"
            >
              Wood Artisan Heritage
            </a>
            <a 
              href={INSTAGRAM_URL} 
              target="_blank" 
              rel="noreferrer"
              className="px-3 py-2 rounded-lg text-pink-600 flex items-center justify-between hover:bg-pink-50"
            >
              <span className="flex items-center gap-2">
                <Instagram className="w-4 h-4" /> Instagram Official
              </span>
            </a>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenCustomQuote(); }}
              className="w-full text-left px-3 py-2 rounded-lg text-wood-800 hover:bg-cream-100"
            >
              Request Custom / Bulk Quote
            </button>
          </div>

          <div className="pt-2 border-t border-wood-100">
            <a
              href={WHATSAPP_CATALOG_URL}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-waGreen-600 hover:bg-waGreen-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-md"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              Open WhatsApp Catalog
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
