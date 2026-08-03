import React, { useState, useMemo } from 'react';
import { 
  CATEGORIES, 
  PRODUCTS, 
  getWhatsAppLink, 
  WHATSAPP_CATALOG_URL 
} from '../data/products';
import { 
  Search, 
  Star, 
  Eye, 
  MessageCircle, 
  Plus, 
  Check, 
  ShoppingBag,
  SlidersHorizontal,
  ChevronDown
} from 'lucide-react';

export default function Catalog({ onSelectProduct, onAddToCart, cartItemIds, searchFilter, setSearchFilter }) {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [sortBy, setSortBy] = useState("recommended");

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory = selectedCategory === "All Products" || p.category === selectedCategory;
      const matchesSearch = searchFilter === "" || 
        p.name.toLowerCase().includes(searchFilter.toLowerCase()) || 
        p.description.toLowerCase().includes(searchFilter.toLowerCase()) ||
        p.material.toLowerCase().includes(searchFilter.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.priceInr - b.priceInr;
      if (sortBy === "price-high") return b.priceInr - a.priceInr;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });
  }, [selectedCategory, searchFilter, sortBy]);

  return (
    <section id="catalog" className="py-16 bg-cream-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="inline-block text-xs font-bold text-amber-800 tracking-widest uppercase bg-amber-100 px-4 py-1.5 rounded-full border border-amber-300 shadow-sm">
            Curated Artisanal Collection
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-wood-950">
            Handcrafted Sheesham & Neem Woodenware
          </h2>
          <p className="text-wood-600 text-sm sm:text-base font-medium">
            Browse our complete WhatsApp store collection. Order individual items or build a custom order list to send directly on WhatsApp.
          </p>
        </div>

        {/* Filters & Search Header */}
        <div className="bg-white border border-amber-900/10 rounded-2xl p-4 sm:p-6 mb-10 shadow-soft-card space-y-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-wood-950 text-white shadow-md'
                    : 'bg-cream-100 text-wood-800 hover:bg-cream-200 border border-amber-900/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar & Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-amber-900/10">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-wood-500 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Search masala box, belan, chess..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="w-full bg-cream-100 border border-amber-900/15 focus:border-wood-900 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-wood-950 placeholder-wood-500 focus:outline-none transition-colors font-medium"
              />
            </div>

            {/* Item Count & Sort */}
            <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
              <span className="text-xs text-wood-600 font-bold">
                Showing <strong className="text-wood-950">{filteredProducts.length}</strong> items
              </span>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-cream-100 border border-amber-900/15 text-xs text-wood-800 font-bold rounded-xl px-3 py-2 pr-8 focus:outline-none focus:border-wood-900 appearance-none cursor-pointer"
                >
                  <option value="recommended">Featured Collection</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-wood-600 absolute right-2.5 top-3 pointer-events-none" />
              </div>
            </div>

          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const inCart = cartItemIds.includes(product.id);
              return (
                <div
                  key={product.id}
                  className="group bg-white border border-amber-900/10 hover:border-amber-700/40 rounded-2xl overflow-hidden shadow-soft-card hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Image Container */}
                    <div className="relative h-60 overflow-hidden bg-cream-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Tag Badge */}
                      <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                        <span className="bg-wood-950 text-amber-300 text-[10px] font-extrabold px-2.5 py-1 rounded-md shadow uppercase tracking-wider border border-amber-500/30">
                          {product.tag}
                        </span>
                      </div>

                      {/* Quick View Button */}
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="absolute bottom-3 right-3 bg-white/90 text-wood-950 hover:text-amber-800 p-2.5 rounded-xl border border-amber-900/15 backdrop-blur-md opacity-90 sm:opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-md"
                        title="Quick View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Product Info */}
                    <div className="p-5 space-y-2.5">
                      <div className="flex items-center justify-between text-xs text-wood-600 font-bold">
                        <span>{product.category}</span>
                        <div className="flex items-center gap-1 text-amber-600 font-extrabold">
                          <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                          <span>{product.rating}</span>
                          <span className="text-wood-400 text-[10px]">({product.reviewsCount})</span>
                        </div>
                      </div>

                      <h3 
                        onClick={() => onSelectProduct(product)}
                        className="font-serif font-extrabold text-base text-wood-950 group-hover:text-amber-800 transition-colors cursor-pointer line-clamp-1"
                      >
                        {product.name}
                      </h3>

                      <p className="text-xs text-wood-600 line-clamp-2 font-medium">
                        {product.description}
                      </p>

                      <div className="text-[11px] text-wood-900 font-bold bg-cream-200 px-2.5 py-1 rounded-md inline-block border border-amber-900/10">
                        🪵 {product.material}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-5 pt-3 border-t border-amber-900/10 bg-cream-100/50 flex flex-col gap-2.5">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-wood-500 block uppercase font-bold">Direct Rate</span>
                        <span className="text-2xl font-serif font-extrabold text-wood-950">
                          ₹{product.priceInr.toLocaleString()}
                        </span>
                      </div>

                      {/* Add to Order Button */}
                      <button
                        onClick={() => onAddToCart(product)}
                        className={`text-xs font-bold px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition-all shadow-sm ${
                          inCart
                            ? 'bg-wood-200 text-wood-950 border border-amber-900/20'
                            : 'bg-white hover:bg-cream-200 text-wood-950 border border-amber-900/20'
                        }`}
                      >
                        {inCart ? (
                          <>
                            <Check className="w-4 h-4 text-waGreen-600" /> Added
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4" /> Add to Order
                          </>
                        )}
                      </button>
                    </div>

                    {/* Direct 1-Click WhatsApp Order */}
                    <a
                      href={getWhatsAppLink(product.name, product.id, product.priceInr)}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full bg-waGreen-600 hover:bg-waGreen-700 text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Order Single Item on WhatsApp</span>
                    </a>
                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-white border border-amber-900/10 rounded-2xl shadow-sm">
            <p className="text-wood-700 text-sm font-semibold">No catalog items match your search.</p>
            <button
              onClick={() => { setSelectedCategory("All Products"); setSearchFilter(""); }}
              className="mt-3 text-xs text-amber-800 underline font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
