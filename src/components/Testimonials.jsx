import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Tariq Al-Mansoor",
      role: "Interior Designer, Dubai UAE",
      comment: "We ordered 40 custom brass urlis and Jali lanterns for a luxury resort project in Palm Jumeirah. The quality, weight, and gold lacquer finish from Al Hasan Handicrafts were flawless!",
      rating: 5,
      date: "Verified Buyer • July 2026"
    },
    {
      name: "Meera Kapoor",
      role: "Luxury Homeowner, Mumbai",
      comment: "The Royal Peacock Urli bowl is the centerpiece of our Diwali & festive celebrations. Water and marigolds look mesmerizing in it. Direct ordering on WhatsApp was super smooth!",
      rating: 5,
      date: "Verified Buyer • June 2026"
    },
    {
      name: "Rajesh Singhania",
      role: "Corporate Gifting Director, Delhi",
      comment: "Sourced 250 pairs of engraved brass cutlery sets for our annual client gifting. Al Hasan Handicrafts delivered custom velvet box packaging right on schedule. Exceptional Moradabad craft!",
      rating: 5,
      date: "Verified Buyer • May 2026"
    }
  ];

  return (
    <section className="py-20 bg-royalDark relative border-t border-royalBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-950/80 border border-gold-600/30 text-gold-300 text-xs font-semibold uppercase tracking-wider">
            Trusted Globally
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Client Appreciation & Testimonials
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm font-light">
            Read what luxury architects, resort planners, and home decor connoisseurs say about our brassware.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="bg-royalCard border border-royalBorder hover:border-gold-600/40 p-6 rounded-2xl flex flex-col justify-between shadow-lg space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-gold- royal/30" />
                </div>

                <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-royalBorder/50 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-white text-sm">{rev.name}</h4>
                  <span className="text-[11px] text-gold-400 block">{rev.role}</span>
                </div>
                <span className="text-[10px] text-gray-500 font-mono">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
