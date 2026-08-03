import React, { useState } from 'react';
import { 
  Sparkles, 
  MessageCircle, 
  Instagram, 
  Search, 
  Menu, 
  X, 
  ChevronRight, 
  PhoneCall, 
  ShoppingBag,
  Award,
  Globe
} from 'lucide-react';
import { INSTAGRAM_URL, WHATSAPP_CATALOG_URL } from '../data/products';

export default function Header({ onOpenCustomQuote, searchFilter, setSearchFilter }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-royalDark/90 backdrop-blur-xl border-b border-royalBorder transition-all duration-300">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-gold-900 via-gold-700 to-gold-900 text-gold-100 py-1.5 px-4 text-xs text-center font-medium tracking-wide flex items-center justify-center gap-3">
        <span className="flex items-center gap-1">
          <Award className="w-3.5 h-3.5 text-gold- bright" />
          Moradabad Heritage Handicrafts • Export Quality Brassware
        </span>
        <span className="hidden md:inline text-gold-400">•</span>
        <span className="hidden md:flex items-center gap-1">
          <Globe className="w-3.5 h-3.5 text-gold-bright" />
          Worldwide Shipping Available
        </span>
        <a 
          href={WHATSAPP_CATALOG_URL} 
          target="_blank" 
          rel="noreferrer"
          className="ml-2 font-bold underline hover:text-white transition-colors"
        >
          View Full Catalog →
        </a>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold-400 via-gold-600 to-gold-800 p-0.5 shadow-gold-glow group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-royalDark rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-gold-royal animate-pulse-slow" />
              </div>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-serif font-bold text-gold-gradient tracking-wider block leading-tight">
                AL HASAN
              </span>
              <span className="text-[10px] tracking-[0.25em] text-gray-400 font-semibold uppercase block">
                Handicrafts Official
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <a href="#catalog" className="text-gray-300 hover:text-gold-royal transition-colors">
              Collection
            </a>
            <a href="#craftsmanship" className="text-gray-300 hover:text-gold-royal transition-colors">
              Artisan Heritage
            </a>
            <a href="#instagram" className="text-gray-300 hover:text-gold-royal transition-colors flex items-center gap-1.5">
              <Instagram className="w-4 h-4 text-pink-400" />
              Instagram
            </a>
            <button 
              onClick={onOpenCustomQuote}
              className="text-gray-300 hover:text-gold-royal transition-colors"
            >
              Bulk / Custom Orders
            </button>
          </nav>

          {/* Actions & Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Search Toggle */}
            <div className="relative">
              {searchOpen ? (
                <div className="flex items-center bg-royalCard border border-gold-600/40 rounded-full px-3 py-1.5 w-64 shadow-gold-glow">
                  <Search className="w-4 h-4 text-gold-400 mr-2 shrink-0" />
                  <input
                    type="text"
                    placeholder="Search urli, lanterns..."
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    className="bg-transparent text-xs text-white placeholder-gray-400 focus:outline-none w-full"
                    autoFocus
                  />
                  <button onClick={() => setSearchOpen(false)} className="text-gray-400 hover:text-white ml-1">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2 rounded-full text-gray-300 hover:text-gold-royal hover:bg-royalCard border border-transparent hover:border-royalBorder transition-all"
                  title="Search Catalog"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Instagram Link */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full text-pink-400 hover:text-pink-300 hover:bg-pink-950/30 border border-pink-900/30 transition-all"
              title="Official Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>

            {/* WhatsApp Catalog CTA */}
            <a
              href={WHATSAPP_CATALOG_URL}
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-semibold px-4 py-2.5 rounded-full flex items-center gap-2 shadow-lg shadow-emerald-950/50 hover:shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Catalog</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={WHATSAPP_CATALOG_URL}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-emerald-600/20 border border-emerald-500/40 text-emerald-400"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-royalCard border-b border-royalBorder px-4 pt-3 pb-6 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-gold-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full bg-royalDark border border-royalBorder rounded-xl pl-9 pr-4 py-2 text-sm text-white focus:border-gold-royal focus:outline-none"
            />
          </div>

          <div className="space-y-2 font-medium">
            <a 
              href="#catalog" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-gray-200 hover:bg-royalBorder"
            >
              Catalog Collection
            </a>
            <a 
              href="#craftsmanship" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-gray-200 hover:bg-royalBorder"
            >
              Artisan Heritage
            </a>
            <a 
              href={INSTAGRAM_URL} 
              target="_blank" 
              rel="noreferrer"
              className="px-3 py-2 rounded-lg text-pink-400 flex items-center justify-between hover:bg-royalBorder"
            >
              <span className="flex items-center gap-2">
                <Instagram className="w-4 h-4" /> Instagram Official
              </span>
              <ChevronRight className="w-4 h-4" />
            </a>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenCustomQuote(); }}
              className="w-full text-left px-3 py-2 rounded-lg text-gold-400 hover:bg-royalBorder"
            >
              Request Custom / Bulk Quote
            </button>
          </div>

          <div className="pt-2 border-t border-royalBorder">
            <a
              href={WHATSAPP_CATALOG_URL}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg"
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
