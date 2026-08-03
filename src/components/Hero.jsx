import React from 'react';
import { 
  Sparkles, 
  MessageCircle, 
  Instagram, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  TreePine,
  Award,
  BadgeCheck
} from 'lucide-react';
import { INSTAGRAM_URL, WHATSAPP_CATALOG_URL } from '../data/products';

export default function Hero({ onOpenCustomQuote }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-cream-100 via-cream-200 to-cream-100 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-wood-100">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Heritage Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wood-100 border border-wood-300 text-wood-900 text-xs font-bold tracking-wide shadow-sm">
              <TreePine className="w-4 h-4 text-amber-700" />
              <span>Authentic Sheesham & Neem Wood Artisan Direct Store</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-wood-950 tracking-tight leading-[1.15]">
              Handcrafted Sheesham Woodenware <br />
              <span className="text-amber-800 font-normal italic">& Artisanal Kitchen Craft</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-wood-700 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Explore our official catalog of pure <strong>Sheesham wood masala boxes (Hexa, 9 & 12 container)</strong>, <strong>Neem wooden spatulas</strong>, <strong>chapati boxes</strong>, <strong>jewellery chests</strong>, <strong>chess sets</strong>, and <strong>foldable fruit baskets</strong>.
            </p>

            {/* Metric Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-2 max-w-md mx-auto lg:mx-0 border-y border-wood-200 py-4">
              <div>
                <span className="block text-2xl font-serif font-bold text-wood-900">35+</span>
                <span className="text-xs text-wood-600 font-semibold">Catalog Items</span>
              </div>
              <div>
                <span className="block text-2xl font-serif font-bold text-wood-900">₹120</span>
                <span className="text-xs text-wood-600 font-semibold">Starting Factory Price</span>
              </div>
              <div>
                <span className="block text-2xl font-serif font-bold text-wood-900">100%</span>
                <span className="text-xs text-wood-600 font-semibold">Solid Seasoned Wood</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              {/* WhatsApp Catalog Link */}
              <a
                href={WHATSAPP_CATALOG_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-waGreen-600 hover:bg-waGreen-700 text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-waGreen-600/30 transition-all transform hover:-translate-y-0.5 text-sm tracking-wide"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Open WhatsApp Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Instagram Profile */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-white hover:bg-cream-100 text-pink-700 border border-pink-200 hover:border-pink-300 font-bold px-6 py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm text-sm"
              >
                <Instagram className="w-5 h-5 text-pink-600" />
                <span>@alhasanhandicraftsofficial</span>
              </a>
            </div>

            {/* Trust Markers */}
            <div className="flex items-center justify-center lg:justify-start gap-6 text-xs font-semibold text-wood-700 pt-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-waGreen-600" /> Food-Safe Natural Polish
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-700" /> Direct Wholesale Manufacturing
              </span>
            </div>

          </div>

          {/* Right Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="rounded-3xl bg-white border border-wood-200 overflow-hidden shadow-2xl p-3">
                <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-wood-50">
                  <img
                    src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80"
                    alt="Hexa Masala Box Sheesham Wood"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Overlay Details */}
                  <div className="absolute inset-0 bg-gradient-to-t from-wood-950 via-wood-950/30 to-transparent flex flex-col justify-end p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-amber-300 uppercase tracking-widest font-bold block">Featured Catalog Item</span>
                        <h3 className="text-xl font-serif font-bold text-white">Hexa Masala Box Sheesham Wood</h3>
                      </div>
                      <span className="bg-amber-500 text-wood-950 text-xs font-extrabold px-3 py-1 rounded-full shadow-md">
                        ₹890
                      </span>
                    </div>
                    <p className="text-xs text-cream-200 mt-2 line-clamp-2">
                      Hexagonal wooden spice dabba with 6 removable cups, clear glass lid & handmade wooden spoon.
                    </p>
                    
                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                      <span className="text-amber-200 font-bold text-sm">Solid Sheesham Wood</span>
                      <a
                        href={WHATSAPP_CATALOG_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs bg-waGreen-600 hover:bg-waGreen-700 text-white font-bold px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors shadow"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-white" /> Order on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md border border-wood-200 p-4 rounded-2xl shadow-xl flex items-center gap-3 max-w-xs">
                <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center shrink-0">
                  <BadgeCheck className="w-6 h-6 text-amber-800" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-wood-950">Direct Manufacturer Pricing</h4>
                  <p className="text-[11px] text-wood-600 font-medium">Spatulas from ₹120, Spice boxes from ₹850</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
