import React from 'react';
import { 
  X, 
  Star, 
  MessageCircle, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Plus, 
  Check,
  TreePine
} from 'lucide-react';
import { getWhatsAppLink } from '../data/products';

export default function ProductModal({ product, onClose, onAddToCart, inCart }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white border border-wood-200 rounded-3xl overflow-hidden shadow-2xl text-wood-950">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-cream-100 text-wood-700 hover:text-black border border-wood-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
          
          {/* Left Column: Image */}
          <div className="space-y-4">
            <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-cream-100 border border-wood-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 bg-wood-900 text-white text-xs font-extrabold px-3 py-1 rounded-md shadow uppercase tracking-wider">
                {product.tag}
              </span>
            </div>

            <div className="bg-cream-100 border border-wood-200 rounded-xl p-3.5 text-xs text-wood-800 flex items-center gap-3 font-semibold">
              <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0" />
              <span>100% Authentic Seasoned Sheesham / Neem Wood Craft.</span>
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <span className="text-xs text-amber-800 font-extrabold uppercase tracking-wider block">
                {product.category}
              </span>

              <h2 className="text-2xl font-serif font-extrabold text-wood-950 leading-tight">
                {product.name}
              </h2>

              <div className="flex items-center gap-2 text-xs font-bold text-amber-600">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span>{product.rating}</span>
                <span className="text-wood-500 font-normal">({product.reviewsCount} customer reviews)</span>
              </div>

              {/* Price */}
              <div className="p-3.5 rounded-xl bg-cream-100 border border-wood-200 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-wood-600 font-bold block uppercase">Direct Manufacturer Price</span>
                  <span className="text-2xl font-serif font-extrabold text-wood-950">
                    ₹{product.priceInr.toLocaleString()}
                  </span>
                </div>
                <span className="text-xs bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold px-2.5 py-1 rounded-md">
                  In Stock
                </span>
              </div>

              {/* Specifications */}
              <div className="space-y-1.5 text-xs font-medium text-wood-800">
                <div><strong>Material:</strong> {product.material}</div>
                <div><strong>Craftsmanship:</strong> Hand-carved Moradabad Artisans</div>
                <div><strong>Care:</strong> Easy hand wash with damp cloth</div>
              </div>

              <p className="text-xs text-wood-700 font-medium leading-relaxed pt-1">
                {product.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-3 border-t border-wood-100">
              <div className="flex gap-3">
                <button
                  onClick={() => onAddToCart(product)}
                  className={`flex-1 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs transition-all ${
                    inCart
                      ? 'bg-wood-200 text-wood-950 border border-wood-300'
                      : 'bg-cream-100 hover:bg-wood-100 text-wood-900 border border-wood-300'
                  }`}
                >
                  {inCart ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-waGreen-600" /> Added to Order List
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" /> Add to Order List
                    </>
                  )}
                </button>
              </div>

              <a
                href={getWhatsAppLink(product.name, product.id, product.priceInr)}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-waGreen-600 hover:bg-waGreen-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Buy / Inquire Single Item on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
