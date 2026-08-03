import React from 'react';
import { 
  MessageCircle, 
  Instagram, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  TreePine,
  Sparkles
} from 'lucide-react';
import { INSTAGRAM_URL, WHATSAPP_CATALOG_URL } from '../data/products';

export default function Hero({ onOpenCustomQuote }) {
  return (
    <div className="relative overflow-hidden bg-[#0F141C] text-white pt-8 pb-12 border-b border-gray-800">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Heritage Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 text-xs font-bold tracking-wide mb-4">
          <TreePine className="w-4 h-4 text-emerald-400" />
          <span>Al Hasan Handicrafts Official Store</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          Handcrafted Sheesham & Neem Wood Crafts
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto mt-3 font-normal leading-relaxed">
          Browse our complete catalog of Sheesham wooden masala boxes, bangles chests, rolling pins, Neem spatulas, chess sets, and wooden items. Tap <strong className="text-emerald-400 font-bold">+</strong> to send your order on WhatsApp.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
          <a
            href={WHATSAPP_CATALOG_URL}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-3.5 rounded-xl flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-950/60 transition-all text-xs sm:text-sm"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Open Catalog in WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto bg-[#181E29] hover:bg-gray-800 text-pink-400 border border-gray-700 font-bold px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all text-xs sm:text-sm"
          >
            <Instagram className="w-4 h-4 text-pink-400" />
            <span>@alhasanhandicraftsofficial</span>
          </a>
        </div>

      </div>
    </div>
  );
}
