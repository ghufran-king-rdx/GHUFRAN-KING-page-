import React from 'react';
import { CLIENT_TESTIMONIALS } from '../data/agencyData';
import { Star, Sparkles, Quote, ShieldCheck } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative bg-slate-950 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Client Reviews</span>
          </div>

          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
            Trusted by Creators, Startups &{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-300">
              Global Brands
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            See what our clients have to say about working with GHUFRAN KING DIGITAL on web development, AI platforms, digital marketing, and YouTube growth.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CLIENT_TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="glass-card rounded-3xl p-7 relative border border-white/10 hover:border-amber-500/30 transition-all flex flex-col justify-between"
            >
              {/* Top Quote Icon & Rating */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-amber-500/20" />
                </div>

                {/* Review Text */}
                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed italic mb-6">
                  "{t.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-amber-500/40"
                  />
                  <div>
                    <h4 className="font-bold text-sm text-white flex items-center gap-1">
                      <span>{t.name}</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      {t.role}, <span className="text-amber-300">{t.company}</span>
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-slate-800 text-slate-300 border border-white/5">
                  {t.serviceUsed}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
