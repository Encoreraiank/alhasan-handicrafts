import React from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppCartLink, WHATSAPP_CATALOG_URL } from '../data/products';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQty, onRemoveItem }) {
  if (!isOpen) return null;

  const totalAmount = cartItems.reduce((acc, item) => acc + (item.priceInr * item.qty), 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end animate-fadeIn">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-wood-100">
        
        {/* Cart Header */}
        <div className="p-5 border-b border-wood-100 flex items-center justify-between bg-cream-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-wood-800 text-white flex items-center justify-center font-bold">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-wood-950 text-lg">Your Order List</h3>
              <p className="text-xs text-wood-600 font-medium">
                {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} selected
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-wood-200/60 text-wood-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-wood-100">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="pt-4 first:pt-0 flex gap-4 items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-xl object-cover border border-wood-200 bg-wood-50 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif font-bold text-sm text-wood-950 truncate">
                    {item.name}
                  </h4>
                  <span className="text-xs text-wood-600 block">{item.material}</span>
                  <span className="text-sm font-bold text-wood-800 block mt-0.5">
                    ₹{item.priceInr.toLocaleString()}
                  </span>
                </div>

                {/* Qty controls */}
                <div className="flex items-center gap-2 bg-cream-200 px-2 py-1 rounded-lg border border-wood-200">
                  <button
                    onClick={() => onUpdateQty(item.id, item.qty - 1)}
                    className="p-1 text-wood-800 hover:text-black font-bold"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs font-bold text-wood-950 w-4 text-center">
                    {item.qty}
                  </span>
                  <button
                    onClick={() => onUpdateQty(item.id, item.qty + 1)}
                    className="p-1 text-wood-800 hover:text-black font-bold"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Remove button */}
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="text-gray-400 hover:text-red-600 p-1 transition-colors"
                  title="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-16 space-y-3">
              <ShoppingBag className="w-12 h-12 text-wood-300 mx-auto" />
              <p className="text-wood-700 text-sm font-medium">Your WhatsApp order list is empty.</p>
              <p className="text-xs text-wood-500 max-w-xs mx-auto">
                Browse our catalog and click "Add to Order" to send a multi-item inquiry directly on WhatsApp.
              </p>
            </div>
          )}
        </div>

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-wood-100 bg-cream-100 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-wood-700 font-medium">Total Estimated Price</span>
              <span className="text-2xl font-serif font-bold text-wood-950">
                ₹{totalAmount.toLocaleString()}
              </span>
            </div>

            <a
              href={getWhatsAppCartLink(cartItems)}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-waGreen-600 hover:bg-waGreen-700 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2.5 shadow-lg shadow-waGreen-600/30 transition-all text-sm"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Send Order List on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <p className="text-[11px] text-center text-wood-500">
              No immediate online payment needed. Connect directly with Al Hasan Handicrafts on WhatsApp for shipping details.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
