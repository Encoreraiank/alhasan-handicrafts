import React from 'react';
import { Instagram, ExternalLink, Heart, MessageCircle } from 'lucide-react';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../data/products';

export default function InstagramSection() {
  const posts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
      likes: "1,420",
      comments: "84",
      caption: "Hexa Masala Box in pure Sheesham wood ✨ Removable cups & glass lid for your kitchen spices."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1615865417236-d67f57c8bf6f?auto=format&fit=crop&w=800&q=80",
      likes: "2,150",
      comments: "112",
      caption: "Antibacterial Neem wood cooking spatula set 🌿 Non-stick cookware safe & heat resistant."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=800&q=80",
      likes: "3,890",
      comments: "205",
      caption: "Hand-carved bangles & jewellery chest in solid Sheesham wood with brass latch details 🎁"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80",
      likes: "1,740",
      comments: "96",
      caption: "Hand-crafted Sheesham wooden chess set with velvet interior storage case ♟️"
    }
  ];

  return (
    <section id="instagram" className="py-20 bg-cream-50 border-t border-wood-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="text-center md:text-left space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 border border-pink-200 text-pink-700 text-xs font-bold uppercase tracking-wider">
              <Instagram className="w-3.5 h-3.5" /> Follow Our Social Feed
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-wood-950">
              @{INSTAGRAM_HANDLE}
            </h2>
            <p className="text-wood-600 text-xs sm:text-sm font-medium">
              Tag us in your woodenware kitchen setups & decor reels on Instagram!
            </p>
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold px-6 py-3.5 rounded-xl flex items-center gap-2 text-xs shadow-md transition-all"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <a
              key={post.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="group bg-white border border-wood-200 hover:border-pink-300 rounded-2xl overflow-hidden shadow-soft-card transition-all"
            >
              <div className="relative h-72 overflow-hidden bg-cream-100">
                <img
                  src={post.image}
                  alt="Instagram"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-between text-white text-xs">
                  <div className="flex justify-end gap-3 font-bold">
                    <span className="flex items-center gap-1"><Heart className="w-4 h-4 fill-pink-500 text-pink-500" /> {post.likes}</span>
                    <span className="flex items-center gap-1"><MessageCircle className="w-4 h-4 fill-white" /> {post.comments}</span>
                  </div>
                  <p className="line-clamp-3 font-medium">{post.caption}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
