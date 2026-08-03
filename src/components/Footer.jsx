import React from 'react';
import { 
  TreePine, 
  Instagram, 
  MessageCircle, 
  MapPin, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { INSTAGRAM_URL, WHATSAPP_CATALOG_URL, INSTAGRAM_HANDLE } from '../data/products';

export default function Footer({ onOpenCustomQuote }) {
  return (
    <footer className="bg-wood-950 text-wood-100 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-wood-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-wood-800 border border-wood-700 text-amber-400 flex items-center justify-center">
                <TreePine className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-serif font-extrabold text-white tracking-wider block">
                  AL HASAN
                </span>
                <span className="text-[9px] tracking-[0.25em] text-wood-400 font-bold uppercase block">
                  Handicrafts Official
                </span>
              </div>
            </a>

            <p className="text-xs text-wood-300 font-medium leading-relaxed max-w-sm">
              Direct manufacturer & wholesaler of authentic Sheesham wooden masala boxes, Neem spatulas, belans, jewellery chests, chess sets, and handcrafted woodenware.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-wood-900 border border-pink-900/40 text-pink-400 hover:border-pink-500 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP_CATALOG_URL}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-wood-900 border border-emerald-800/40 text-emerald-400 hover:border-emerald-500 transition-colors"
                title="WhatsApp Catalog"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 text-xs">
            <h4 className="font-serif font-bold text-amber-400 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-wood-300 font-medium">
              <li><a href="#catalog" className="hover:text-white transition-colors">Products Catalog</a></li>
              <li><a href="#craftsmanship" className="hover:text-white transition-colors">Wood Artisan Heritage</a></li>
              <li><a href="#instagram" className="hover:text-white transition-colors">Instagram Feed</a></li>
              <li>
                <button onClick={onOpenCustomQuote} className="hover:text-white transition-colors text-left">
                  Request Wholesale Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-3 text-xs">
            <h4 className="font-serif font-bold text-amber-400 text-sm uppercase tracking-wider">
              Woodenware
            </h4>
            <ul className="space-y-2 text-wood-300 font-medium">
              <li>Hexa & 9-Container Masala Boxes</li>
              <li>Neem Wooden Spatulas & Ladles</li>
              <li>Sheesham Chapati & Roti Boxes</li>
              <li>Bangles & Jewellery Chests</li>
              <li>Wooden Chess Sets & Board Games</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3 text-xs">
            <h4 className="font-serif font-bold text-amber-400 text-sm uppercase tracking-wider">
              Contact Store
            </h4>
            <ul className="space-y-2.5 text-wood-300 font-medium">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Moradabad, Uttar Pradesh, 244001, India</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={WHATSAPP_CATALOG_URL} 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:underline text-emerald-400 font-bold"
                >
                  WhatsApp Catalog Store
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                <a 
                  href={INSTAGRAM_URL} 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:underline text-pink-400 font-bold"
                >
                  @{INSTAGRAM_HANDLE}
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-wood-400 gap-4 font-medium">
          <p>© {new Date().getFullYear()} Al Hasan Handicrafts Official. All rights reserved.</p>
          <span className="flex items-center gap-1.5 text-wood-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Solid Sheesham & Neem Wood Quality Guaranteed
          </span>
        </div>

      </div>
    </footer>
  );
}
