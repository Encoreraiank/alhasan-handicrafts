import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight, Sparkles, ExternalLink } from 'lucide-react';
import { WHATSAPP_CATALOG_URL, WHATSAPP_PHONE } from '../data/products';

export default function WhatsAppWidget({ onOpenCustomQuote }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Expanded Popup Menu */}
      {expanded && (
        <div className="mb-3 w-80 bg-royalCard border border-gold-600/40 rounded-2xl p-4 shadow-2xl animate-fadeIn space-y-3 text-white">
          <div className="flex items-center justify-between border-b border-royalBorder pb-2.5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Al Hasan Support</h4>
                <span className="text-[10px] text-emerald-400 font-medium">● Online • Instant Reply</span>
              </div>
            </div>
            <button onClick={() => setExpanded(false)} className="text-gray-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-gray-300 font-light">
            Welcome to <strong>Al Hasan Handicrafts Official</strong>! How can we assist your decor search today?
          </p>

          <div className="space-y-2 pt-1">
            {/* Catalog Link */}
            <a
              href={WHATSAPP_CATALOG_URL}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-emerald-600/90 hover:bg-emerald-500 text-white text-xs font-semibold p-2.5 rounded-xl flex items-center justify-between transition-colors shadow-md"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" /> Open WhatsApp Catalog
              </span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>

            {/* General Direct Chat */}
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent("Hello! I want to inquire about Al Hasan Handicrafts products.")}`}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-royalDark hover:bg-royalBorder text-gray-200 border border-royalBorder text-xs font-medium p-2.5 rounded-xl flex items-center justify-between transition-colors"
            >
              <span>Chat with Artisan Team</span>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            </a>

            {/* Custom Quote Request */}
            <button
              onClick={() => { setExpanded(false); onOpenCustomQuote(); }}
              className="w-full bg-royalDark hover:bg-royalBorder text-gold-400 border border-gold-600/30 text-xs font-medium p-2.5 rounded-xl flex items-center justify-between transition-colors"
            >
              <span>Bulk / Export Inquiry</span>
              <ChevronRight className="w-3.5 h-3.5 text-gold-400" />
            </button>
          </div>

          <div className="text-[10px] text-gray-500 text-center pt-1 font-mono">
            Catalog ID: 246784693674089
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="group relative bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white p-4 rounded-full shadow-2xl shadow-emerald-950/80 hover:scale-105 transition-all duration-300 flex items-center gap-2 border border-emerald-400/40"
        title="WhatsApp Assistant"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-royalDark" />
        
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide pr-1">WhatsApp Catalog</span>
      </button>

    </div>
  );
}
