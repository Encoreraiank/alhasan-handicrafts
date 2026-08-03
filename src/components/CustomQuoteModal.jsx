import React, { useState } from 'react';
import { X, MessageCircle, Sparkles } from 'lucide-react';
import { WHATSAPP_PHONE } from '../data/products';

export default function CustomQuoteModal({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    purpose: 'Wholesale Purchase',
    productName: 'Sheesham Woodenware Items',
    quantity: '50-100 pcs',
    customNotes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Al Hasan Handicrafts! 🪵\n\n*BULK / CUSTOM ORDER INQUIRY*\n` +
      `👤 *Name:* ${formData.name || 'Valued Customer'}\n` +
      `📍 *Location:* ${formData.city || 'Not specified'}\n` +
      `📦 *Purpose:* ${formData.purpose}\n` +
      `✨ *Product:* ${formData.productName}\n` +
      `🔢 *Est. Quantity:* ${formData.quantity}\n` +
      `📝 *Notes/Requirements:* ${formData.customNotes || 'None'}\n\n` +
      `Please connect with me regarding customized pricing and lead times.`
    );
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white border border-wood-200 rounded-3xl p-6 sm:p-8 shadow-2xl text-wood-950">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-cream-100 text-wood-600 hover:text-black transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2 mb-6">
          <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
            Wholesale & Custom Manufacturing
          </span>
          <h2 className="text-2xl font-serif font-extrabold text-wood-950">
            Bulk / Export Quotation
          </h2>
          <p className="text-xs text-wood-600 font-medium">
            Need bulk rates for Neem spatulas, masala boxes, chess sets, or custom woodenware? Send us your requirements directly on WhatsApp.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          <div>
            <label className="block text-xs font-bold text-wood-900 mb-1">Your Full Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Amit Sharma / Sarah"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-cream-100 border border-wood-200 focus:border-wood-800 rounded-xl px-4 py-2.5 text-wood-950 placeholder-wood-400 focus:outline-none font-medium"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-wood-900 mb-1">City / State</label>
              <input
                type="text"
                required
                placeholder="e.g. Delhi / Bangalore"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full bg-cream-100 border border-wood-200 focus:border-wood-800 rounded-xl px-4 py-2.5 text-wood-950 placeholder-wood-400 focus:outline-none font-medium"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-wood-900 mb-1">Quantity</label>
              <select
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className="w-full bg-cream-100 border border-wood-200 focus:border-wood-800 rounded-xl px-3 py-2.5 text-wood-950 font-bold focus:outline-none cursor-pointer"
              >
                <option value="10-25 pcs">10 - 25 pcs (Sample)</option>
                <option value="50-100 pcs">50 - 100 pcs</option>
                <option value="200-500 pcs">200 - 500 pcs (Wholesale)</option>
                <option value="1000+ pcs">1000+ pcs (Export Shipment)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-wood-900 mb-1">Product Category / Items</label>
            <input
              type="text"
              value={formData.productName}
              onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
              className="w-full bg-cream-100 border border-wood-200 focus:border-wood-800 rounded-xl px-4 py-2.5 text-wood-950 font-medium focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-wood-900 mb-1">Custom Notes / Specs</label>
            <textarea
              rows="3"
              placeholder="Specify custom sizes (e.g. 10 inch belan, 9 cup masala dabba), laser engraving..."
              value={formData.customNotes}
              onChange={(e) => setFormData({ ...formData, customNotes: e.target.value })}
              className="w-full bg-cream-100 border border-wood-200 focus:border-wood-800 rounded-xl p-3 text-wood-950 placeholder-wood-400 focus:outline-none font-medium"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-waGreen-600 hover:bg-waGreen-700 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-md text-xs transition-all mt-4"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Send Wholesale Request on WhatsApp</span>
          </button>
        </form>

      </div>
    </div>
  );
}
