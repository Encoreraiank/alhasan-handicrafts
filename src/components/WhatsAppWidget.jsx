import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight, Sparkles, ShoppingBag } from 'lucide-react';
import { WHATSAPP_CATALOG_URL, WHATSAPP_PHONE } from '../data/products';

export default function WhatsAppWidget({ onOpenCart, cartCount, onOpenCustomQuote }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Expanded Popup Menu */}
      {expanded && (
        <div className="mb-3 w-80 bg-white border border-wood-200 rounded-2xl p-4 shadow-2xl animate-fadeIn space-y-3 text-wood-950">
          <div className="flex items-center justify-between border-b border-wood-100 pb-2.5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-waGreen-600 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 fill-white text-waGreen-600" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-wood-950">Al Hasan Support</h4>
                <span className="text-[10px] text-waGreen-600 font-bold">● Online • Instant WhatsApp Reply</span>
              </div>
            </div>
            <button onClick={() => setExpanded(false)} className="text-wood-400 hover:text-black">
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-wood-700 font-medium">
            Namaste! Welcome to <strong>Al Hasan Handicrafts Official</strong>. How can we help you with our Sheesham woodenware catalog today?
          </p>

          <div className="space-y-2 pt-1">
            {/* View Order Cart */}
            {cartCount > 0 && (
              <button
                onClick={() => { setExpanded(false); onOpenCart(); }}
                className="w-full bg-wood-900 text-white text-xs font-bold p-2.5 rounded-xl flex items-center justify-between shadow-md"
              >
                <span className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4" /> View Selected Order ({cartCount})
                </span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}

            {/* Catalog Link */}
            <a
              href={WHATSAPP_CATALOG_URL}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-waGreen-600 hover:bg-waGreen-700 text-white text-xs font-bold p-2.5 rounded-xl flex items-center justify-between transition-colors shadow-md"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" /> Open Full WhatsApp Catalog
              </span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>

            {/* General Direct Chat */}
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent("Hello! I want to inquire about Al Hasan Handicrafts products.")}`}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-cream-100 hover:bg-cream-200 text-wood-900 border border-wood-200 text-xs font-bold p-2.5 rounded-xl flex items-center justify-between transition-colors"
            >
              <span>Chat with Artisan Team</span>
              <ChevronRight className="w-3.5 h-3.5 text-wood-500" />
            </a>

            {/* Custom Quote Request */}
            <button
              onClick={() => { setExpanded(false); onOpenCustomQuote(); }}
              className="w-full bg-cream-100 hover:bg-cream-200 text-amber-800 border border-amber-200 text-xs font-bold p-2.5 rounded-xl flex items-center justify-between transition-colors"
            >
              <span>Bulk / Export Inquiry</span>
              <ChevronRight className="w-3.5 h-3.5 text-amber-800" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="group relative bg-waGreen-600 hover:bg-waGreen-700 text-white p-4 rounded-full shadow-2xl shadow-waGreen-600/40 hover:scale-105 transition-all flex items-center gap-2 border border-waGreen-400"
        title="WhatsApp Assistant"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide pr-1">WhatsApp Store</span>
      </button>

    </div>
  );
}
