import React, { useState } from 'react';
import { X, Send, Sparkles, MessageCircle, Building2, Package } from 'lucide-react';
import { WHATSAPP_PHONE } from '../data/products';

export default function CustomQuoteModal({ preselectedProduct, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    purpose: 'Wholesale / Export Inquiry',
    productName: preselectedProduct ? preselectedProduct.name : 'Custom Brass Design',
    quantity: '50-100 pcs',
    customNotes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Al Hasan Handicrafts Official! 🏛️\n\n*BULK / CUSTOM ORDER INQUIRY*\n` +
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-lg bg-royalCard border border-gold-600/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-white">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-royalDark text-gray-400 hover:text-white border border-royalBorder hover:border-gold-royal transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-950 border border-gold-600/30 text-gold-300 text-[11px] font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-royal" />
            Bulk & Custom Manufacturing
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Request Custom Quotation
          </h2>
          <p className="text-xs text-gray-400 font-light">
            Need customized dimensions, corporate branding, or bulk export pricing? Fill in your details to get an instant quote on WhatsApp.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          
          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1">Your Full Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Rahul Verma / Sarah Smith"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-royalDark border border-royalBorder focus:border-gold-royal rounded-xl px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">City / Country</label>
              <input
                type="text"
                required
                placeholder="e.g. Dubai, UAE / Delhi"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full bg-royalDark border border-royalBorder focus:border-gold-royal rounded-xl px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">Estimated Quantity</label>
              <select
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className="w-full bg-royalDark border border-royalBorder focus:border-gold-royal rounded-xl px-3 py-2.5 text-white focus:outline-none cursor-pointer"
              >
                <option value="10-25 pcs">10 - 25 pcs (Sample Order)</option>
                <option value="50-100 pcs">50 - 100 pcs</option>
                <option value="200-500 pcs">200 - 500 pcs (Wholesale)</option>
                <option value="1000+ pcs">1000+ pcs (Export Container)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1">Inquiry Purpose</label>
            <select
              value={formData.purpose}
              onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
              className="w-full bg-royalDark border border-royalBorder focus:border-gold-royal rounded-xl px-3 py-2.5 text-white focus:outline-none cursor-pointer"
            >
              <option value="Wholesale / Resale">Wholesale / Retail Resale</option>
              <option value="Hotel & Resort Decor">Hotel & Luxury Resort Decor</option>
              <option value="Wedding Return Gifts">Wedding & Event Gifting</option>
              <option value="Custom OEM Design">Custom OEM Design Manufacturing</option>
              <option value="International Export">International Export Shipment</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1">Target Product / Item Name</label>
            <input
              type="text"
              value={formData.productName}
              onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
              className="w-full bg-royalDark border border-royalBorder focus:border-gold-royal rounded-xl px-4 py-2.5 text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1">Custom Notes / Specifications</label>
            <textarea
              rows="3"
              placeholder="Specify dimensions, desired finish (Antique gold, polished brass, copper patina), logo engraving..."
              value={formData.customNotes}
              onChange={(e) => setFormData({ ...formData, customNotes: e.target.value })}
              className="w-full bg-royalDark border border-royalBorder focus:border-gold-royal rounded-xl p-3 text-white placeholder-gray-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg text-sm transition-all mt-4"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Send Quotation Request via WhatsApp</span>
          </button>
        </form>

      </div>
    </div>
  );
}
