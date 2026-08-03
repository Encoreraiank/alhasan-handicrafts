import React, { useState, useMemo } from 'react';
import { 
  CATEGORIES, 
  PRODUCTS, 
  getWhatsAppLink, 
  WHATSAPP_CATALOG_URL 
} from '../data/products';
import { 
  Search, 
  Plus, 
  Check, 
  ChevronDown, 
  LayoutList, 
  LayoutGrid, 
  MessageCircle,
  ShoppingBag
} from 'lucide-react';

export default function Catalog({ onSelectProduct, onAddToCart, cartItemIds, searchFilter, setSearchFilter }) {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [viewMode, setViewMode] = useState("whatsappList"); // 'whatsappList' or 'grid'

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory = selectedCategory === "All Products" || p.category === selectedCategory;
      const matchesSearch = searchFilter === "" || 
        p.name.toLowerCase().includes(searchFilter.toLowerCase()) || 
        (p.subtitle && p.subtitle.toLowerCase().includes(searchFilter.toLowerCase())) ||
        p.material.toLowerCase().includes(searchFilter.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchFilter]);

  return (
    <section id="catalog" className="py-12 bg-[#0F141C] text-white relative min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Title Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950 border border-emerald-800/60 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <MessageCircle className="w-3.5 h-3.5 fill-emerald-400" />
            Official WhatsApp Catalog Store
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Al Hasan Handicrafts Official
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm">
            Select items below or tap <strong className="text-emerald-400 font-bold">+</strong> to add multiple items to your WhatsApp order list.
          </p>
        </div>

        {/* View Mode & Category Controls */}
        <div className="bg-[#181E29] border border-gray-800 rounded-2xl p-4 mb-6 shadow-xl space-y-3">
          
          {/* Top Bar: Search & View Toggle */}
          <div className="flex items-center justify-between gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Search catalog items (belan, masala box, spoon)..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="w-full bg-[#0F141C] border border-gray-750 focus:border-emerald-500 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none transition-colors"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-[#0F141C] border border-gray-800 rounded-xl p-1 shrink-0">
              <button
                onClick={() => setViewMode("whatsappList")}
                className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  viewMode === 'whatsappList'
                    ? 'bg-emerald-600 text-white shadow'
                    : 'text-gray-400 hover:text-white'
                }`}
                title="WhatsApp Catalog List View"
              >
                <LayoutList className="w-4 h-4" />
                <span className="hidden sm:inline">WhatsApp View</span>
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-emerald-600 text-white shadow'
                    : 'text-gray-400 hover:text-white'
                }`}
                title="Grid Showroom View"
              >
                <LayoutGrid className="w-4 h-4" />
                <span className="hidden sm:inline">Grid View</span>
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white font-bold'
                    : 'bg-[#0F141C] text-gray-400 hover:bg-gray-800 hover:text-white border border-gray-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Catalog List / Grid */}
        {filteredProducts.length > 0 ? (
          viewMode === 'whatsappList' ? (
            /* --- WHATSAPP CATALOG LIST VIEW (Matching User Screenshots) --- */
            <div className="bg-[#181E29] border border-gray-800 rounded-2xl divide-y divide-gray-800 overflow-hidden shadow-2xl">
              {filteredProducts.map((product) => {
                const inCart = cartItemIds.includes(product.id);
                return (
                  <div
                    key={product.id}
                    className="p-4 flex items-center justify-between gap-4 hover:bg-[#202735] transition-colors group"
                  >
                    {/* Left: Product Thumbnail */}
                    <div 
                      onClick={() => onSelectProduct(product)}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#0F141C] border border-gray-800 overflow-hidden shrink-0 cursor-pointer p-1 flex items-center justify-center"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>

                    {/* Middle: Title, Subtitle, Price */}
                    <div className="flex-1 min-w-0">
                      <h3 
                        onClick={() => onSelectProduct(product)}
                        className="font-bold text-sm sm:text-base text-white hover:text-emerald-400 cursor-pointer truncate"
                      >
                        {product.name}
                      </h3>

                      <p className="text-xs text-gray-400 line-clamp-1 font-mono mt-0.5">
                        ```{product.subtitle || product.description}
                      </p>

                      <div className="mt-1.5 flex items-center gap-2">
                        <span className="text-sm font-bold text-white">
                          ₹{product.priceInr.toFixed(2)}
                        </span>
                        <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded font-mono">
                          {product.material}
                        </span>
                      </div>
                    </div>

                    {/* Right: + Button (Matching WhatsApp Catalog UI) */}
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => onAddToCart(product)}
                        className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all ${
                          inCart
                            ? 'bg-emerald-600 border-emerald-500 text-white shadow-lg'
                            : 'bg-[#0F141C] hover:bg-emerald-600/20 border-gray-700 hover:border-emerald-500 text-gray-300 hover:text-emerald-400'
                        }`}
                        title={inCart ? "In Order List" : "Add to Order List"}
                      >
                        {inCart ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                      </button>

                      <a
                        href={getWhatsAppLink(product.name, product.id, product.priceInr)}
                        target="_blank"
                        rel="noreferrer"
                        className="hidden sm:flex p-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-800 hover:border-emerald-500 text-xs font-semibold items-center gap-1 transition-all"
                        title="Buy Directly on WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>
                    </div>

                  </div>
                );
              })}
            </div>
          ) : (
            /* --- GRID VIEW --- */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProducts.map((product) => {
                const inCart = cartItemIds.includes(product.id);
                return (
                  <div
                    key={product.id}
                    className="bg-[#181E29] border border-gray-800 hover:border-emerald-600/50 rounded-2xl p-4 flex flex-col justify-between shadow-xl transition-all"
                  >
                    <div>
                      <div className="h-44 rounded-xl bg-[#0F141C] border border-gray-800 p-2 flex items-center justify-center mb-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <h3 className="font-bold text-sm text-white line-clamp-1">{product.name}</h3>
                      <p className="text-xs text-gray-400 line-clamp-2 mt-1">{product.subtitle}</p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-gray-800 flex items-center justify-between">
                      <span className="text-base font-bold text-emerald-400">
                        ₹{product.priceInr.toLocaleString()}
                      </span>
                      <button
                        onClick={() => onAddToCart(product)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 transition-all ${
                          inCart
                            ? 'bg-emerald-600 text-white'
                            : 'bg-[#0F141C] text-gray-300 hover:text-white border border-gray-700'
                        }`}
                      >
                        {inCart ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        <span>{inCart ? 'Added' : 'Add'}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )
        ) : (
          <div className="text-center py-16 bg-[#181E29] border border-gray-800 rounded-2xl">
            <p className="text-gray-400 text-sm">No items found matching your search.</p>
            <button
              onClick={() => { setSelectedCategory("All Products"); setSearchFilter(""); }}
              className="mt-3 text-xs text-emerald-400 underline font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* WhatsApp Catalog Link Footer Banner */}
        <div className="mt-8 bg-gradient-to-r from-emerald-950 via-[#181E29] to-emerald-950 border border-emerald-800/40 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-white text-base">Direct WhatsApp Business Store</h4>
            <p className="text-xs text-gray-300 mt-0.5">Catalog ID: 246784693674089 • Instant wholesale response</p>
          </div>
          <a
            href={WHATSAPP_CATALOG_URL}
            target="_blank"
            rel="noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-5 py-3 rounded-xl flex items-center gap-2 shadow-lg shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            Open Official WhatsApp Catalog
          </a>
        </div>

      </div>
    </section>
  );
}
