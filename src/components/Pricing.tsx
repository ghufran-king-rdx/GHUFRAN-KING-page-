import React from 'react';
import { PRICING_PLANS } from '../data/agencyData';
import { Sparkles, CheckCircle2, XCircle, ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-slate-900/60 border-y border-white/5">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Investment Plans</span>
          </div>

          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
            Simple, Transparent Pricing with{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-300">
              Zero Hidden Fees
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Choose the perfect agency package to accelerate your business, or contact us for custom enterprise solutions tailored to your unique requirements.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const whatsappMsg = encodeURIComponent(
              `Hello GHUFRAN KING DIGITAL! I would like to book the "${plan.name}" plan (${plan.price}). Please share the next steps.`
            );
            const whatsappUrl = `https://wa.me/923000000000?text=${whatsappMsg}`;

            return (
              <div
                key={plan.id}
                className={`glass-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between relative border ${
                  plan.popular
                    ? 'border-amber-500/60 bg-slate-900/90 shadow-2xl shadow-amber-500/15 scale-105 z-20'
                    : 'border-white/10'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-extrabold text-[10px] uppercase tracking-widest shadow-lg shadow-amber-500/30">
                    🔥 Most Popular Choice
                  </div>
                )}

                <div>
                  {/* Plan Name */}
                  <h3 className="font-syne font-bold text-2xl text-white mb-2">
                    {plan.name}
                  </h3>
                  
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    {plan.tagline}
                  </p>

                  {/* Price Display */}
                  <div className="mb-6 pb-6 border-b border-white/10 flex items-baseline gap-2">
                    <span className="font-syne font-extrabold text-4xl sm:text-5xl text-white">
                      {plan.price}
                    </span>
                    <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                      / {plan.period}
                    </span>
                  </div>

                  {/* Included Features */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      Included Deliverables:
                    </p>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}

                    {plan.notIncluded && plan.notIncluded.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-500">
                        <XCircle className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                        <span className="line-through">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Order via WhatsApp</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 glass-panel rounded-2xl p-6 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">100% Satisfaction & On-Time Delivery Guarantee</p>
              <p className="text-xs text-slate-400">All packages include dedicated support, free revisions, and source files.</p>
            </div>
          </div>

          <a
            href="https://whatsapp.com/channel/0029VbBwO480bIdr9QEH6k1a"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 font-semibold text-xs border border-emerald-500/40 shrink-0"
          >
            Join VIP Channel For Promo Deals
          </a>
        </div>

      </div>
    </section>
  );
};
