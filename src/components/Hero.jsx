import React from 'react';
import { 
  Sparkles, 
  MessageCircle, 
  Instagram, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  TreePine,
  Award
} from 'lucide-react';
import { INSTAGRAM_URL, WHATSAPP_CATALOG_URL } from '../data/products';

export default function Hero({ onOpenCustomQuote }) {
  return (
    <div className="relative overflow-hidden bg-royalDark pt-8 pb-16 lg:pt-16 lg:pb-28">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-gold-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Heritage Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-950/80 border border-gold-600/40 text-gold-300 text-xs font-semibold tracking-wider uppercase shadow-gold-glow">
              <TreePine className="w-3.5 h-3.5 text-amber-400" />
              <span>Authentic Sheesham & Neem Wood Artisans</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15]">
              Handcrafted Woodenware & <br />
              <span className="text-gold-gradient font-normal italic">Moradabad Artisan Heritage</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Explore our official catalog of pure Sheesham wood spice boxes, antibacterial Neem wooden kitchen spatulas, carved bangles & jewellery chests, foldable fruit baskets, and chess sets.
            </p>

            {/* Metric Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-2 max-w-md mx-auto lg:mx-0 border-y border-royalBorder py-4">
              <div>
                <span className="block text-2xl font-serif font-bold text-gold-royal">40+</span>
                <span className="text-xs text-gray-400">Live Catalog Items</span>
              </div>
              <div>
                <span className="block text-2xl font-serif font-bold text-gold-royal">100%</span>
                <span className="text-xs text-gray-400">Natural Seasoned Wood</span>
              </div>
              <div>
                <span className="block text-2xl font-serif font-bold text-gold-royal">Wholesale</span>
                <span className="text-xs text-gray-400">Direct Factory Rates</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              {/* WhatsApp Catalog Link */}
              <a
                href={WHATSAPP_CATALOG_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold px-8 py-4 rounded-xl flex items-center justify-center gap-3 shadow-xl shadow-emerald-950/60 transition-all transform hover:-translate-y-1 text-sm tracking-wide"
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
                className="w-full sm:w-auto bg-royalCard hover:bg-royalBorder text-pink-300 border border-pink-900/40 hover:border-pink-500/50 font-semibold px-6 py-4 rounded-xl flex items-center justify-center gap-2 transition-all text-sm"
              >
                <Instagram className="w-5 h-5 text-pink-400" />
                <span>@alhasanhandicraftsofficial</span>
              </a>
            </div>

            {/* Trust Markers */}
            <div className="flex items-center justify-center lg:justify-start gap-6 text-xs text-gray-400 pt-3">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Food-Safe Natural Oil Coating
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-gold-400" /> Bulk Export & Custom Sizes
              </span>
            </div>

          </div>

          {/* Right Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            
            {/* Glowing Image Card */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 via-gold-500 to-amber-700 rounded-3xl blur-lg opacity-40 animate-pulse-slow"></div>
              
              <div className="relative rounded-2xl bg-royalCard border border-gold-600/30 overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80"
                  alt="Hexa Masala Box Sheesham Wood"
                  className="w-full h-80 sm:h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-royalDark via-royalDark/40 to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gold-300 uppercase tracking-widest font-semibold block">Catalog Spotlight</span>
                      <h3 className="text-xl font-serif font-bold text-white">Hexa 6-Container Masala Box</h3>
                    </div>
                    <span className="bg-gold-royal text-royalDark text-xs font-bold px-3 py-1 rounded-full">
                      ₹890
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 mt-2 line-clamp-2">
                    Hexagonal Sheesham wood spice dabba with 6 removable cups, clear glass lid & handmade wooden spoon.
                  </p>
                  
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-gold-gradient font-bold text-lg">Pure Sheesham Wood</span>
                    <a
                      href={WHATSAPP_CATALOG_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs bg-emerald-600/90 hover:bg-emerald-500 text-white font-medium px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" /> Order on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-royalCard/90 backdrop-blur-md border border-gold-500/40 p-4 rounded-xl shadow-xl flex items-center gap-3 max-w-xs">
                <div className="w-10 h-10 rounded-lg bg-gold-900/50 border border-gold-600/50 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-gold-royal" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Direct Wholesale Rates</h4>
                  <p className="text-[11px] text-gray-400">Neem spatulas, belan, masala dabbas & wooden boxes</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
