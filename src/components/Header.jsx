import React, { useState } from 'react';
import { 
  Sparkles, 
  MessageCircle, 
  Instagram, 
  Search, 
  Menu, 
  X, 
  ShoppingBag, 
  TreePine
} from 'lucide-react';
import { INSTAGRAM_URL, WHATSAPP_CATALOG_URL } from '../data/products';

export default function Header({ onOpenCart, cartCount, onOpenCustomQuote, searchFilter, setSearchFilter }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0F141C]/95 backdrop-blur-md border-b border-gray-800 transition-all duration-300">
      {/* Top Banner */}
      <div className="bg-emerald-950 text-emerald-300 py-1.5 px-4 text-xs text-center font-semibold tracking-wide flex items-center justify-center gap-3 border-b border-emerald-900/40">
        <span className="flex items-center gap-1.5">
          <TreePine className="w-3.5 h-3.5 text-emerald-400" />
          Al Hasan Handicrafts • Official WhatsApp Catalog Store
        </span>
        <span className="hidden md:inline text-emerald-700">•</span>
        <a 
          href={WHATSAPP_CATALOG_URL} 
          target="_blank" 
          rel="noreferrer"
          className="font-bold text-white hover:underline transition-colors"
        >
          Open WhatsApp App →
        </a>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-lg shadow-emerald-900/40">
              <MessageCircle className="w-5 h-5 fill-white" />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold text-white tracking-wide block leading-tight">
                AL HASAN
              </span>
              <span className="text-[9px] tracking-[0.2em] text-emerald-400 font-bold uppercase block">
                Handicrafts Official
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold text-gray-300">
            <a href="#catalog" className="hover:text-emerald-400 transition-colors">
              WhatsApp Store Catalog
            </a>
            <a href="#craftsmanship" className="hover:text-emerald-400 transition-colors">
              Artisan Heritage
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              Instagram (@alhasanhandicraftsofficial)
            </a>
          </nav>

          {/* Actions & Buttons */}
          <div className="flex items-center gap-3">
            {/* Cart Drawer Trigger */}
            <button
              onClick={onOpenCart}
              className="relative px-3.5 py-2 rounded-xl bg-[#181E29] hover:bg-gray-800 text-white border border-gray-700 transition-all flex items-center gap-2 text-xs font-bold"
              title="View WhatsApp Order List"
            >
              <ShoppingBag className="w-4 h-4 text-emerald-400" />
              <span className="hidden sm:inline">Order List</span>
              {cartCount > 0 && (
                <span className="bg-emerald-600 text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded-full shadow">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Direct WhatsApp Catalog */}
            <a
              href={WHATSAPP_CATALOG_URL}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-2 shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span className="hidden sm:inline">WhatsApp Catalog</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
