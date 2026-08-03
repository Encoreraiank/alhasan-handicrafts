import React, { useState, useMemo } from 'react';
import { 
  CATEGORIES, 
  PRODUCTS, 
  getWhatsAppLink, 
  WHATSAPP_CATALOG_URL 
} from '../data/products';
import { 
  Search, 
  Filter, 
  Star, 
  Eye, 
  MessageCircle, 
  Sparkles, 
  ExternalLink,
  SlidersHorizontal,
  ChevronDown
} from 'lucide-react';

export default function Catalog({ onSelectProduct, onOpenCustomQuote, searchFilter, setSearchFilter }) {
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
      return 0; // recommended / default
    });
  }, [selectedCategory, searchFilter, sortBy]);

  return (
    <section id="catalog" className="py-16 bg-royalDark/95 relative border-t border-royalBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-950/60 border border-gold-600/30 text-gold-300 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-gold-royal" />
            Curated Artisanal Collection
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Handcrafted Moradabad Metalware
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light">
            Every piece is individually handcrafted, polished, and inspected for royal elegance. Order directly via WhatsApp catalog or request custom sizes.
          </p>
        </div>

        {/* Filters & Search Header */}
        <div className="bg-royalCard border border-royalBorder rounded-2xl p-4 sm:p-6 mb-10 shadow-xl space-y-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-gold-600 to-gold-700 text-white shadow-gold-glow font-semibold'
                    : 'bg-royalDark/80 text-gray-300 hover:bg-royalBorder hover:text-white border border-royalBorder'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar & Sorting */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-royalBorder">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-gold-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Search by keyword, brass, urli..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="w-full bg-royalDark border border-royalBorder focus:border-gold-royal rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none transition-colors"
              />
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
              <span className="text-xs text-gray-400 font-medium">
                Showing <strong className="text-gold-royal">{filteredProducts.length}</strong> items
              </span>

              {/* Sort dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-royalDark border border-royalBorder text-xs text-gray-300 rounded-xl px-3 py-2 pr-8 focus:outline-none focus:border-gold-royal appearance-none cursor-pointer"
                >
                  <option value="recommended">Featured Selection</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-3 pointer-events-none" />
              </div>
            </div>

          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-royalCard border border-royalBorder hover:border-gold-600/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-gold-glow transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-royalDark">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-royalCard via-transparent to-transparent opacity-80" />

                    {/* Tag Badge */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                      <span className="bg-gold-royal/90 text-royalDark text-[11px] font-bold px-2.5 py-1 rounded-md shadow-md uppercase tracking-wider">
                        {product.tag}
                      </span>
                    </div>

                    {/* Quick View Button on Hover */}
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="absolute bottom-3 right-3 bg-royalDark/90 text-white hover:text-gold-royal p-2.5 rounded-xl border border-gold-600/40 backdrop-blur-md opacity-90 sm:opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 shadow-xl"
                      title="Quick View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{product.category}</span>
                      <div className="flex items-center gap-1 text-amber-400 font-semibold">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span>{product.rating}</span>
                        <span className="text-gray-500 text-[10px]">({product.reviewsCount})</span>
                      </div>
                    </div>

                    <h3 
                      onClick={() => onSelectProduct(product)}
                      className="font-serif font-bold text-lg text-white group-hover:text-gold-royal transition-colors cursor-pointer line-clamp-1"
                    >
                      {product.name}
                    </h3>

                    <p className="text-xs text-gray-400 line-clamp-2 font-light">
                      {product.description}
                    </p>

                    <div className="text-[11px] text-gray-300 font-mono bg-royalDark/60 px-2.5 py-1 rounded border border-royalBorder inline-block">
                      ✨ {product.material}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Price & WhatsApp Action */}
                <div className="p-5 pt-0 mt-auto border-t border-royalBorder/50 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-xs text-gray-400 block font-light">Direct Price</span>
                    <span className="text-gold-gradient font-bold text-lg">
                      ₹{product.priceInr.toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-400 ml-1 font-mono">(${product.priceUsd})</span>
                  </div>

                  {/* 1-Click WhatsApp Direct Buy */}
                  <a
                    href={getWhatsAppLink(product.name, product.id)}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-emerald-600/90 hover:bg-emerald-500 text-white text-xs font-semibold px-3.5 py-2.5 rounded-xl flex items-center gap-1.5 transition-all shadow-md hover:shadow-emerald-600/40"
                    title="Order via WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Inquire</span>
                  </a>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-royalCard border border-royalBorder rounded-2xl">
            <p className="text-gray-400 text-base">No handicraft items match your current search.</p>
            <button
              onClick={() => { setSelectedCategory("All Products"); setSearchFilter(""); }}
              className="mt-4 text-xs text-gold-royal underline font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* WhatsApp Full Catalog Banner */}
        <div className="mt-16 bg-gradient-to-r from-gold-950 via-royalCard to-gold-950 border border-gold-600/40 rounded-3xl p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2">
            <h3 className="text-2xl font-serif font-bold text-white">
              Looking for More Designs & Custom Bulk Orders?
            </h3>
            <p className="text-sm text-gray-300 max-w-xl font-light">
              We have over 500+ unlisted designs in our official WhatsApp business catalog. Contact us for customized dimensions, corporate gifting, and wholesale pricing.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={onOpenCustomQuote}
              className="bg-royalDark hover:bg-royalBorder text-gold-royal border border-gold-600/50 px-5 py-3 rounded-xl text-xs font-semibold transition-colors"
            >
              Custom Order Quote
            </button>
            <a
              href={WHATSAPP_CATALOG_URL}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Open WhatsApp Catalog
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
