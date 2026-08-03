import React from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../data/products';

export default function InstagramSection() {
  const posts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      likes: "1,420",
      comments: "84",
      caption: "Floating floral marigolds in our Royal Peacock Solid Brass Urli ✨ Hand-carved perfection from Moradabad."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
      likes: "2,150",
      comments: "112",
      caption: "Casting magical ambient shadows 🕯️ Moroccan architectural Jali cut brass lantern."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
      likes: "3,890",
      comments: "205",
      caption: "Ayat al-Kursi hand-embossed brass wall frame mounted on dark walnut wood. Bespoke order ready for Dubai export ✈️"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1615865417236-d67f57c8bf6f?auto=format&fit=crop&w=800&q=80",
      likes: "1,740",
      comments: "96",
      caption: "Imperial 24-piece solid brass cutlery set housed in plush maroon velvet chest. The ultimate royal dining experience 🍽️"
    }
  ];

  return (
    <section id="instagram" className="py-20 bg-royalDark/90 border-t border-royalBorder relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="text-center md:text-left space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-950/60 border border-pink-900/40 text-pink-400 text-xs font-semibold uppercase tracking-widest">
              <Instagram className="w-3.5 h-3.5" />
              Follow Our Social Feed
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              @{INSTAGRAM_HANDLE}
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm font-light">
              Tag us in your home decor reels & photos to get featured on our official page!
            </p>
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-2 text-sm shadow-lg shadow-pink-950/50 transition-all transform hover:-translate-y-0.5"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Instagram Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <a
              key={post.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative bg-royalCard border border-royalBorder hover:border-pink-500/50 rounded-2xl overflow-hidden shadow-lg transition-all duration-300"
            >
              <div className="relative h-72 overflow-hidden bg-royalDark">
                <img
                  src={post.image}
                  alt="Instagram Post"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                  <div className="flex items-center justify-end gap-3 text-xs">
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4 fill-pink-500 text-pink-500" /> {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4 fill-white" /> {post.comments}
                    </span>
                  </div>

                  <p className="text-xs text-gray-200 line-clamp-3 font-light">
                    {post.caption}
                  </p>

                  <div className="text-[11px] text-pink-300 font-semibold flex items-center gap-1">
                    View on Instagram →
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
