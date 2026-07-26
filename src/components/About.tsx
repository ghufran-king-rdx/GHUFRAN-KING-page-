import React from 'react';
import { Crown, ShieldCheck, Zap, Award, CheckCircle2, Users, ArrowRight } from 'lucide-react';

interface AboutProps {
  onGetStarted: () => void;
}

export const About: React.FC<AboutProps> = ({ onGetStarted }) => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-900/60 border-y border-white/5">
      
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Brand Card */}
          <div className="lg:col-span-5 relative">
            <div className="glass-panel rounded-3xl p-8 border border-white/15 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500" />
              
              {/* Crown Emblem */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center text-slate-950 font-bold shadow-xl mb-6">
                <Crown className="w-10 h-10 text-slate-950 stroke-[2.5]" />
              </div>

              <h3 className="font-syne font-extrabold text-2xl text-white mb-3">
                GHUFRAN KING DIGITAL
              </h3>
              
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                Founded with a mission to empower brands, freelancers, creators, and businesses worldwide with international-grade digital infrastructure, artificial intelligence tools, and explosive growth marketing.
              </p>

              {/* Core Pillars */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3 text-xs text-slate-200">
                  <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span>Lightning Speed Execution & On-Time Delivery</span>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-200">
                  <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span>100% Quality Guarantee & Post-Launch Support</span>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-200">
                  <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400">
                    <Award className="w-4 h-4" />
                  </div>
                  <span>Cutting-Edge AI Tools & Custom Automation</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase">
              <Users className="w-3.5 h-3.5" />
              <span>Who We Are</span>
            </div>

            <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-white leading-tight">
              Empowering Businesses & Creators to Lead in the{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-300">
                Digital Era
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              At GHUFRAN KING DIGITAL, we bridge the gap between creative artistry and advanced technical engineering. Whether you need an AI-powered automated website, a high-converting digital marketing funnel, YouTube channel optimization, or bespoke branding, our team provides tailored solutions that yield measurable results.
            </p>

            {/* Why Choose Us Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10">
                <p className="font-bold text-amber-400 text-sm mb-1">Expert Web Developers</p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Engineered with React, Tailwind CSS, TypeScript, and fast cloud hosting for peak performance.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10">
                <p className="font-bold text-amber-400 text-sm mb-1">AI-Driven Workflows</p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Harnessing modern machine learning and automation to cut operational costs by up to 60%.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10">
                <p className="font-bold text-amber-400 text-sm mb-1">Affordable Packages</p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Transparent, competitive pricing designed for startups, small businesses, and global clients.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10">
                <p className="font-bold text-amber-400 text-sm mb-1">24/7 Dedicated Support</p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Direct communication via WhatsApp Channel, Telegram, and Email for instant assistance.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={onGetStarted}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-bold text-xs flex items-center gap-2 hover:from-amber-400 hover:to-yellow-300 transition-all cursor-pointer shadow-lg shadow-amber-500/20"
              >
                <span>Partner With Us Today</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
