import React, { useState } from 'react';
import { 
  X, 
  Star, 
  MessageCircle, 
  CheckCircle, 
  Truck, 
  Shield, 
  Sparkles, 
  Ruler, 
  Scale, 
  PackageCheck
} from 'lucide-react';
import { getWhatsAppLink, WHATSAPP_CATALOG_URL } from '../data/products';

export default function ProductModal({ product, onClose, onOpenCustomQuote }) {
  if (!product) return null;
  const [selectedImg, setSelectedImg] = useState(product.image);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-royalCard border border-gold-600/40 rounded-3xl overflow-hidden shadow-2xl text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-royalDark/80 text-gray-300 hover:text-white border border-royalBorder hover:border-gold-royal transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8">
          
          {/* Left Column: Image Gallery */}
          <div className="space-y-4">
            <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-royalDark border border-royalBorder">
              <img
                src={selectedImg}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 bg-gold-royal text-royalDark text-xs font-bold px-3 py-1 rounded-md shadow-md uppercase tracking-wider">
                {product.tag}
              </span>
            </div>

            {/* Gallery Thumbnails */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="flex gap-3">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImg(img)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImg === img ? 'border-gold-royal scale-105' : 'border-royalBorder opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Artisan Assurance Note */}
            <div className="bg-royalDark/60 border border-royalBorder rounded-xl p-3.5 text-xs text-gray-300 flex items-center gap-3">
              <Shield className="w-5 h-5 text-gold-royal shrink-0" />
              <span>100% Moradabad Certified Authentic Brass Handcrafted Product.</span>
            </div>
          </div>

          {/* Right Column: Product Details & WhatsApp Actions */}
          <div className="flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div>
                <span className="text-xs text-gold-400 font-semibold tracking-wider uppercase block">
                  {product.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                  {product.name}
                </h2>
              </div>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-3 text-xs">
                <div className="flex items-center gap-1 text-amber-400 font-bold">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>{product.rating}</span>
                </div>
                <span className="text-gray-400">({product.reviewsCount} customer reviews)</span>
                <span className="text-gray-600">•</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> In Stock & Ready to Dispatch
                </span>
              </div>

              {/* Price Display */}
              <div className="p-4 rounded-xl bg-royalDark border border-royalBorder flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-400 block">Direct Wholesale Price</span>
                  <span className="text-2xl font-bold text-gold-gradient">
                    ₹{product.priceInr.toLocaleString()}
                  </span>
                  <span className="text-xs text-gray-400 ml-2 font-mono">(${product.priceUsd} USD)</span>
                </div>
                <span className="text-[11px] bg-emerald-950/60 text-emerald-300 border border-emerald-800/40 px-2.5 py-1 rounded-md">
                  No Middlemen
                </span>
              </div>

              {/* Material & Specs */}
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-gray-300">
                  <Sparkles className="w-4 h-4 text-gold-royal" />
                  <strong className="text-white">Material:</strong> {product.material}
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Ruler className="w-4 h-4 text-gold-royal" />
                  <strong className="text-white">Dimensions:</strong> {product.dimensions}
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Scale className="w-4 h-4 text-gold-royal" />
                  <strong className="text-white">Approx. Weight:</strong> {product.weight}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                {product.description}
              </p>

              {/* Key Features Bullet list */}
              <div className="space-y-1.5 pt-2">
                <h4 className="text-xs font-semibold text-gold-300 uppercase tracking-wider">Product Highlights</h4>
                <ul className="grid grid-cols-1 gap-1 text-xs text-gray-300">
                  {product.features?.map((ft, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <PackageCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{ft}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-royalBorder">
              {/* WhatsApp Order Button */}
              <a
                href={getWhatsAppLink(product.name, product.id)}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-950/60 text-sm transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Order / Inquire via WhatsApp</span>
              </a>

              {/* Custom Quote Link */}
              <button
                onClick={() => {
                  onClose();
                  onOpenCustomQuote(product);
                }}
                className="w-full bg-royalDark hover:bg-royalBorder text-gold-royal border border-gold-600/40 py-2.5 px-4 rounded-xl text-xs font-semibold transition-colors"
              >
                Need Custom Dimensions or Bulk Wholesale Quantity?
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
