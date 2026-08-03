import React from 'react';
import { Sparkles, Hammer, ShieldCheck, Flame, Layers, Award } from 'lucide-react';

export default function Craftsmanship() {
  const steps = [
    {
      icon: Flame,
      title: "1. Lost-Wax Metal Casting",
      desc: "Raw high-purity brass alloys are melted at 1,000°C and poured into handmade clay and sand moulds forged by master sculptors."
    },
    {
      icon: Hammer,
      title: "2. Hand Chiselling & Engraving",
      desc: "Generational craftsmen hand-carve Mughal, Ottoman, and floral motifs using specialized chisels and hammers."
    },
    {
      icon: Layers,
      title: "3. Multi-Stage Buffing & Buffing",
      desc: "Surfaces undergo 4 stages of hand polishing to achieve rich golden sheens, antique patinas, or Meenakari enamelling."
    },
    {
      icon: ShieldCheck,
      title: "4. Protective Lacquer & Export QC",
      desc: "Every artifact receives an invisible anti-tarnish protective lacquer coat and undergoes strict export grade quality inspection."
    }
  ];

  return (
    <section id="craftsmanship" className="py-20 bg-royalDark relative border-t border-royalBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-950/80 border border-gold-600/30 text-gold-300 text-xs font-semibold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-gold-royal" />
              Moradabad 'Pital Nagri' Heritage
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
              Centuries of Metalwork <br />
              <span className="text-gold-gradient italic font-normal">Passed Down Generations</span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed">
              At <strong>Al Hasan Handicrafts Official</strong>, we preserve the world-famous metalware heritage of Moradabad, India. Every item—from delicate brass lanterns to heavy urlis—is brought to life by skilled artisans whose families have practiced this craft for over three centuries.
            </p>

            <div className="p-4 rounded-2xl bg-royalCard border border-gold-600/30 space-y-2">
              <div className="flex items-center gap-2 text-gold-royal font-semibold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Zero Compromise on Quality</span>
              </div>
              <p className="text-xs text-gray-400 font-light">
                We use 100% solid virgin brass and copper alloys with anti-tarnish protective sealant, ensuring your decor pieces retain their royal luster for decades.
              </p>
            </div>
          </div>

          {/* Right Process Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="bg-royalCard border border-royalBorder hover:border-gold-600/40 p-6 rounded-2xl space-y-3 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-950/80 border border-gold-600/40 flex items-center justify-center text-gold-royal">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    {step.desc}
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
