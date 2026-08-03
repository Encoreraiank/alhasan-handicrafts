import React from 'react';
import { 
  Sparkles, 
  Instagram, 
  MessageCircle, 
  MapPin, 
  Mail, 
  Phone, 
  Award, 
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { INSTAGRAM_URL, WHATSAPP_CATALOG_URL, INSTAGRAM_HANDLE } from '../data/products';

export default function Footer({ onOpenCustomQuote }) {
  return (
    <footer className="bg-royalCard border-t border-royalBorder text-royalText pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-royalBorder">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-700 p-0.5 shadow-gold-glow">
                <div className="w-full h-full bg-royalDark rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-gold-royal" />
                </div>
              </div>
              <div>
                <span className="text-xl font-serif font-bold text-gold-gradient tracking-wider block">
                  AL HASAN
                </span>
                <span className="text-[9px] tracking-[0.25em] text-gray-400 font-semibold uppercase block">
                  Handicrafts Official
                </span>
              </div>
            </a>

            <p className="text-xs text-gray-300 font-light leading-relaxed max-w-sm">
              Premier manufacturer, wholesaler, and exporter of authentic Moradabad brassware, royal urlis, Moroccan lanterns, Islamic calligraphy art, and fine metal table decor.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-royalDark border border-pink-900/40 text-pink-400 hover:border-pink-500 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP_CATALOG_URL}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-royalDark border border-emerald-800/40 text-emerald-400 hover:border-emerald-500 transition-colors"
                title="WhatsApp Catalog"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 text-xs">
            <h4 className="font-serif font-bold text-gold-300 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#catalog" className="hover:text-gold-royal transition-colors">Artisanal Catalog</a>
              </li>
              <li>
                <a href="#craftsmanship" className="hover:text-gold-royal transition-colors">Our Metal Craftsmanship</a>
              </li>
              <li>
                <a href="#instagram" className="hover:text-gold-royal transition-colors">Instagram Feed Showcase</a>
              </li>
              <li>
                <button onClick={onOpenCustomQuote} className="hover:text-gold-royal transition-colors text-left">
                  Request Custom Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-3 text-xs">
            <h4 className="font-serif font-bold text-gold-300 text-sm uppercase tracking-wider">
              Handicrafts
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>Royal Brass Urlis & Bowls</li>
              <li>Moroccan & Vintage Lanterns</li>
              <li>Islamic Calligraphy Wall Art</li>
              <li>Imperial Brass Cutlery Sets</li>
              <li>Mughal Etched Vases & Statues</li>
            </ul>
          </div>

          {/* Contact & Export Hub */}
          <div className="space-y-3 text-xs">
            <h4 className="font-serif font-bold text-gold-300 text-sm uppercase tracking-wider">
              Export Hub
            </h4>
            <ul className="space-y-2.5 text-gray-300 font-light">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-royal shrink-0 mt-0.5" />
                <span>Moradabad (Pital Nagri), Uttar Pradesh, 244001, India</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={WHATSAPP_CATALOG_URL} 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:underline text-emerald-400 font-medium"
                >
                  WhatsApp Catalog Link
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                <a 
                  href={INSTAGRAM_URL} 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:underline text-pink-400 font-medium"
                >
                  @{INSTAGRAM_HANDLE}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Al Hasan Handicrafts Official. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400" /> Authentic Brass Quality Guaranteed
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
