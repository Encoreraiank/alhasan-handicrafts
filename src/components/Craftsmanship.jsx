import React from 'react';
import { TreePine, ShieldCheck, Award, Layers, Hammer } from 'lucide-react';

export default function Craftsmanship() {
  const points = [
    {
      icon: TreePine,
      title: "100% Seasoned Hardwood",
      desc: "We source authentic high-density Indian Sheesham (Rosewood) and medicinal Neem wood, properly seasoned to prevent warping or cracking."
    },
    {
      icon: Hammer,
      title: "Hand-Carved Moradabad Craft",
      desc: "Every masala box, bangles chest, and spatula is individually carved, lathe-turned, and hand-finished by generational wood artisans."
    },
    {
      icon: Layers,
      title: "Food-Safe Natural Wax Polish",
      desc: "All kitchenware, spatulas, belans, and spice containers are coated with non-toxic, food-grade natural oil and beeswax."
    },
    {
      icon: ShieldCheck,
      title: "Direct Wholesale Pricing",
      desc: "By manufacturing directly at our Moradabad facility, we eliminate middleman margins and pass factory savings straight to you."
    }
  ];

  return (
    <section id="craftsmanship" className="py-20 bg-cream-100 border-t border-wood-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-5">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3.5 py-1 rounded-full border border-amber-200">
              Artisan Heritage
            </span>

            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-wood-950 leading-tight">
              The Art of Handcrafted <br />
              <span className="text-amber-800 italic font-normal">Indian Woodenware</span>
            </h2>

            <p className="text-wood-700 text-sm font-medium leading-relaxed">
              At <strong>Al Hasan Handicrafts Official</strong>, we take pride in manufacturing timeless woodenware and metalcraft. From daily non-stick safe Neem spatulas to elaborate 12-container Sheesham masala dabbas, every item carries the warmth of natural wood.
            </p>

            <div className="p-4 rounded-2xl bg-white border border-wood-200 shadow-sm space-y-2">
              <h4 className="font-bold text-wood-950 text-sm">Why Choose Neem & Sheesham Wood?</h4>
              <p className="text-xs text-wood-600 font-medium leading-relaxed">
                Neem wood possesses natural antibacterial properties making it ideal for daily cooking spatulas, while Sheesham wood offers unmatched dark grain durability for heirloom masala boxes and furniture.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((pt, i) => {
              const Icon = pt.icon;
              return (
                <div
                  key={i}
                  className="bg-white border border-wood-200 p-6 rounded-2xl space-y-3 shadow-soft-card"
                >
                  <div className="w-11 h-11 rounded-xl bg-amber-100 border border-amber-300 text-amber-900 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-wood-950">
                    {pt.title}
                  </h3>
                  <p className="text-xs text-wood-600 font-medium leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
